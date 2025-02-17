const express = require('express')
const cors= require('cors')
const session=require("express-session")
const app = express()
app.use(express.json())
app.use(cors({origin:"http://localhost:3004",credentials:true}))
const port = 6969
app.use(session({
    secret: 'yYE)0P@|UUGeHZ6j.,Soz`Uo#{v@YQ',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set `secure: true` if using HTTPS
}));
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "skillhubprojects"
});

con.connect(function (err) {
    if(err){
        throw err
    }
    app.post('/register', function (req, res) {
        const { ime, prezime, email, lozinka } = req.body;
        const sql = "INSERT INTO korisnik (ime, prezime, email, lozinka) VALUES (?, ?, ?, ?)";
        const values = [ime, prezime, email, lozinka];
        con.query(sql, values, function (err, result) {
            if (err) return res.status(500).send('Error!' + err);
            res.status(201).send('User registered!');
        });
    });
    app.post('/login', function (req, res) {
        const { email, password } = req.body;
        const sql = "SELECT * FROM korisnik WHERE email = ?";
        con.query(sql, [email], function (err, results) {
            if (err) return res.status(500).send('Server Error');
            if (results.length === 0) return res.status(401).send('Invalid credentials');

            const user = results[0];
            if (user.lozinka !== password) return res.status(401).send('Invalid credentials');

            req.session.user = user; // Store user info in session
            res.json({ message: 'Login successful' });
        });
    });
    app.post('/logout', function (req, res) {
        req.session.destroy((err) => {
            if (err) return res.status(500).send('Error logging out');
            res.json({ message: 'Logout successful' });
        });
    });
    const authenticateSession = (req, res, next) => {
        if (!req.session.user) return res.status(401).send('Access denied');
        next();
    };
    app.post('/add-to-project', (req, res) => {
        const { projectId } = req.body;
        const userId = req.session.user.ID_korisnika; // Adjust based on your session user model
        console.log(projectId);
        if (!userId) return res.status(401).send('User not logged in');

        const sql = "INSERT INTO prijava (ID_korisnika, ID_projekta) VALUES (?, ?)";
        const values = [userId, projectId];

        con.query(sql, values, (err, result) => {
            if (err) return res.status(500).send('Error adding user to project: ' + err);
            res.status(200).send('User added to project successfully');
        });
    });
    app.delete('/remove-from-project', authenticateSession, (req, res) => {
        const { projectId } = req.body;
        const userId = req.session.user.ID_korisnika;

        const sql = "DELETE FROM prijava WHERE ID_korisnika = ? AND ID_projekta = ?";
        const values = [userId, projectId];

        con.query(sql, values, (err, result) => {
            if (err) return res.status(500).send('Error removing user from project: ' + err);
            res.status(200).send('User removed from project successfully');
        });
    });
    app.get("/projekti",function (req,res){
        const sql="SELECT \n" +
            "    p.ID_projekta AS ID_projekta,\n" +
            "    p.slika_url AS slika_url,\n" +
            "    p.naziv AS naziv,\n" +
            "    GROUP_CONCAT(t.naziv ORDER BY t.naziv ASC SEPARATOR ', ') AS tehnologije\n" +
            "FROM \n" +
            "    projekt p\n" +
            "JOIN \n" +
            "    projekt_tehnologija pt ON p.ID_projekta = pt.ID_projekta\n" +
            "JOIN \n" +
            "    tehnologija t ON pt.ID_tehnologije = t.ID_tehnologije\n" +
            "GROUP BY \n" +
            "    p.ID_projekta, p.slika_url, p.naziv;\n"
        con.query(sql, function (err, result) {
            if (err) {
                return res.status(500).send('Greška!' + err);
            }
            res.status(201).json(result);
        });
    });
    app.get("/projekti_korisnik", authenticateSession, function (req, res) {
        const userId = req.session.user.ID_korisnika;
        const sql = "SELECT \n" +
            "            p.ID_projekta AS ID_projekta,\n" +
            "            p.slika_url AS slika_url,\n" +
            "            p.naziv AS naziv,\n" +
            "            GROUP_CONCAT(t.naziv ORDER BY t.naziv ASC SEPARATOR ', ') AS tehnologije,\n" +
            "            (SELECT COUNT(*) FROM prijava WHERE prijava.ID_projekta = p.ID_projekta AND prijava.ID_korisnika = ?) AS isRegistered\n" +
            "        FROM \n" +
            "            projekt p\n" +
            "        JOIN \n" +
            "            projekt_tehnologija pt ON p.ID_projekta = pt.ID_projekta\n" +
            "        JOIN \n" +
            "            tehnologija t ON pt.ID_tehnologije = t.ID_tehnologije\n" +
            "        GROUP BY \n" +
            "            p.ID_projekta, p.slika_url, p.naziv;"
        con.query(sql, [userId], function (err, result) {
            if (err) {
                return res.status(500).send('Greška!' + err);
            }
            res.status(201).json(result);
        });
    });
    app.patch('/change-password', authenticateSession, (req, res) => {
        const { currentPassword, newPassword } = req.body;
        const userId = req.session.user.ID_korisnika;
        console.log(userId, currentPassword, newPassword);
        const sqlSelect = "SELECT lozinka FROM korisnik WHERE ID_korisnika = ?";
        con.query(sqlSelect, [userId], (err, results) => {
            if (err) return res.status(500).send('Server Error');
            if (results.length === 0 || results[0].lozinka !== currentPassword) {
                return res.status(401).send('Current password is incorrect');
            }

            const sqlUpdate = "UPDATE korisnik SET lozinka = ? WHERE ID_korisnika = ?";
            con.query(sqlUpdate, [newPassword, userId], (err, result) => {
                if (err) return res.status(500).send('Error updating password');
                res.status(200).send('Password changed successfully');
            });
        });
    });
    app.get("/users", function (req, res) {
        const sql = "SELECT ID_korisnika, ime, prezime, email FROM korisnik";
        con.query(sql, function (err, result) {
            if (err) {
                return res.status(500).send('Greška kod dohvaćanja korisnika: ' + err);
            }
            res.json(result);
        });
    });

    app.delete("/users/:id", function (req, res) {
        const userId = req.params.id;
        const sql = "DELETE FROM korisnik WHERE ID_korisnika = ?";
        con.query(sql, [userId], function (err, result) {
            if (err) {
                return res.status(500).send('Greška kod brisanja korisnika: ' + err);
            }
            res.status(200).send('Korisnik uspješno obrisan');
        });
    });

    app.put("/users/:id", (req, res) => {
        const { id } = req.params;
        const { ime, prezime, email } = req.body;

        // Koristi tablicu "korisnik" (kao u ostalim rutama)
        const query = "UPDATE korisnik SET ime = ?, prezime = ?, email = ? WHERE ID_korisnika = ?";

        con.query(query, [ime, prezime, email, id], (err, result) => {
            if (err) {
                console.error("Greška kod ažuriranja korisnika:", err);
                return res.status(500).json({ message: "Greška kod ažuriranja korisnika" });
            }
            res.status(200).json({ message: "Korisnik uspješno ažuriran" });
        });
    });
    const updateProject = async (req, res) => {
        const { id, naziv, tehnologije } = req.body;

        try {
            // 1. Ažuriranje naziva projekta
            await db.query("UPDATE projekti SET naziv = ? WHERE id = ?", [naziv, id]);

            // 2. Brišemo stare tehnologije iz međutabele
            await db.query("DELETE FROM projekt_tehnologija WHERE id_projekta = ?", [id]);

            // 3. Dodajemo nove tehnologije u međutabelu
            for (let tehnologijaId of tehnologije) {
                await db.query("INSERT INTO projekt_tehnologija (id_projekta, id_tehnologije) VALUES (?, ?)", [id, tehnologijaId]);
            }

            res.json({ message: "Projekt uspješno ažuriran" });
        } catch (error) {
            console.error("Greška pri ažuriranju projekta:", error);
            res.status(500).json({ error: "Greška pri ažuriranju projekta" });
        }
    };
    app.put("/projekti", (req, res) => {
        const { id, naziv, tehnologije } = req.body;
        // Ažuriraj samo naziv, budući da tehnologije se obično obrađuju kroz međutablicu
        const sqlUpdate = "UPDATE projekt SET naziv = ? WHERE ID_projekta = ?";
        con.query(sqlUpdate, [naziv, id], (err, result) => {
            if (err) {
                console.error("Greška kod ažuriranja projekta:", err);
                return res.status(500).send('Greška kod ažuriranja projekta: ' + err);
            }
            res.status(200).send("Projekt uspješno ažuriran");
        });
    });

    app.delete("/projekti/:id", function (req, res) {
        const projectId = req.params.id;

        // Prvo izbriši povezane redove iz projekt_tehnologija
        const sqlDeleteJoin = "DELETE FROM projekt_tehnologija WHERE ID_projekta = ?";
        con.query(sqlDeleteJoin, [projectId], (err, result) => {
            if (err) {
                console.error("Greška kod brisanja povezanih tehnologija:", err);
                return res.status(500).send('Greška kod brisanja povezanih tehnologija: ' + err);
            }
            // Nakon što su povezani redovi obrisani, izbriši projekt
            const sqlDeleteProject = "DELETE FROM projekt WHERE ID_projekta = ?";
            con.query(sqlDeleteProject, [projectId], (err, result) => {
                if (err) {
                    console.error("Greška kod brisanja projekta:", err);
                    return res.status(500).send('Greška kod brisanja projekta: ' + err);
                }
                res.status(200).send('Projekt uspješno obrisan');
            });
        });
    });



    app.post("/projects", (req, res) => {
        const { naziv, tehnologije, slika_url } = req.body;
        // Prvo umetni projekt u tablicu "projekt"
        const sqlInsertProject = "INSERT INTO projekt (naziv, slika_url) VALUES (?, ?)";
        con.query(sqlInsertProject, [naziv, slika_url], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Greška kod dodavanja projekta" });
            }
            const projectId = result.insertId;
            // Ako su unesene tehnologije, obradi ih
            if (tehnologije) {
                // Pretpostavljamo da su unesene kao zarezom odvojeni string
                const techArray = tehnologije.split(',').map(tech => tech.trim());
                if (techArray.length === 0) {
                    return res.status(201).send({ message: "Projekt dodan!" });
                }
                let queriesCompleted = 0;
                techArray.forEach((techName) => {
                    // Pronađi ID tehnologije prema nazivu u tablici "tehnologija"
                    const sqlFindTech = "SELECT id_tehnologije FROM tehnologija WHERE naziv = ?";
                    con.query(sqlFindTech, [techName], (err, techResult) => {
                        if (err) {
                            console.error(err);
                            queriesCompleted++; // Preskoči ako dođe do greške
                            if (queriesCompleted === techArray.length) {
                                res.status(201).send({ message: "Projekt dodan, ali s greškama u unosu tehnologija" });
                            }
                        } else {
                            if (techResult.length > 0) {
                                const techId = techResult[0].id_tehnologije;
                                const sqlInsertJoin = "INSERT INTO projekt_tehnologija (ID_projekta, ID_tehnologije) VALUES (?, ?)";
                                con.query(sqlInsertJoin, [projectId, techId], (err, joinResult) => {
                                    if (err) {
                                        console.error(err);
                                    }
                                    queriesCompleted++;
                                    if (queriesCompleted === techArray.length) {
                                        res.status(201).send({ message: "Projekt dodan!" });
                                    }
                                });
                            } else {
                                // Ako tehnologija ne postoji, možeš odlučiti je li potrebno umetnuti je ili preskočiti
                                queriesCompleted++;
                                if (queriesCompleted === techArray.length) {
                                    res.status(201).send({ message: "Projekt dodan, ali neka tehnologija nije pronađena" });
                                }
                            }
                        }
                    });
                });
            } else {
                res.status(201).send({ message: "Projekt dodan!" });
            }
        });
    });
    app.post('/admin-add-to-project', (req, res) => {
        const { email, projectId } = req.body;

        // 1. Pronađi korisnika prema emailu
        const findUserSql = "SELECT ID_korisnika FROM korisnik WHERE email = ?";
        con.query(findUserSql, [email], (err, userRows) => {
            if (err) {
                console.error("Greška kod dohvaćanja korisnika:", err);
                return res.status(500).send("Error finding user: " + err);
            }
            if (userRows.length === 0) {
                return res.status(404).send("User not found");
            }
            const userId = userRows[0].ID_korisnika;

            // 2. Dodaj red u prijava (ID_korisnika, ID_projekta)
            const insertSql = "INSERT INTO prijava (ID_korisnika, ID_projekta) VALUES (?, ?)";
            con.query(insertSql, [userId, projectId], (err, result) => {
                if (err) {
                    console.error("Greška kod dodavanja korisnika na projekt:", err);
                    return res.status(500).send("Error adding user to project: " + err);
                }
                return res.status(200).send("User added to project successfully");
            });
        });
    });
    app.get("/projekti", function (req, res) {
        const sql = `
    SELECT 
      p.ID_projekta AS ID_projekta,
      p.slika_url AS slika_url,
      p.naziv AS naziv,
      GROUP_CONCAT(t.naziv ORDER BY t.naziv ASC SEPARATOR ', ') AS tehnologije
    FROM projekt p
    LEFT JOIN projekt_tehnologija pt ON p.ID_projekta = pt.ID_projekta
    LEFT JOIN tehnologija t ON pt.ID_tehnologije = t.ID_tehnologije
    GROUP BY p.ID_projekta, p.slika_url, p.naziv;
  `;
        con.query(sql, function (err, result) {
            if (err) {
                return res.status(500).send('Greška!' + err);
            }
            res.status(201).json(result);
        });
    });



    app.post('/add-project', async (req, res) => {
        try {
            console.log('Primljeni podaci:', req.body);
            // Ovdje ide SQL upit
        } catch (error) {
            console.error('Greška prilikom dodavanja projekta:', error);
            res.status(500).json({ error: 'Interna greška servera' });
        }
    });
    app.delete('/registrirani_korisnici/:userId', (req, res) => {
        const userId = req.params.userId;
        const sql = "DELETE FROM prijava WHERE ID_korisnika = ?";
        con.query(sql, [userId], (err, result) => {
            if (err) return res.status(500).send('Greška kod brisanja registracije: ' + err);
            res.status(200).send('Registracija uspješno obrisana');
        });
    });
    app.put('/registrirani_korisnici/:userId', (req, res) => {
        const { projectId } = req.body;
        const userId = req.params.userId;
        const sql = "UPDATE prijava SET ID_projekta = ? WHERE ID_korisnika = ?";
        con.query(sql, [projectId, userId], (err, result) => {
            if (err) return res.status(500).send('Greška kod ažuriranja registracije: ' + err);
            res.status(200).send("Registracija uspješno ažurirana");
        });
    });



    app.get("/registrirani_korisnici", (req, res) => {
        const sql = `
    SELECT 
      prijava.ID_projekta, 
      projekt.naziv AS naziv_projekta, 
      korisnik.ID_korisnika,
      korisnik.ime, 
      korisnik.prezime, 
      korisnik.email
    FROM prijava
    JOIN projekt ON prijava.ID_projekta = projekt.ID_projekta
    JOIN korisnik ON prijava.ID_korisnika = korisnik.ID_korisnika
    ORDER BY prijava.ID_projekta;
  `;
        console.log("Izvršavam upit na bazi...");
        con.query(sql, (err, rows) => {
            if (err) {
                console.error("Greška kod dohvaćanja registriranih korisnika:", err);
                return res.status(500).send({ error: "Greška na serveru", details: err.message });
            }
            console.log("Podaci dohvaćeni:", rows);
            res.send(rows);
        });
    });














});
app.listen(port, () => {
    console.log(`Web aplikacija pokrenuta na portu ${port}`)
})
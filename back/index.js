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
            if (err) return res.status(500).json({ message: 'Server Error' });
            if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

            const user = results[0];
            if (user.lozinka !== password) return res.status(401).json({ message: 'Invalid credentials' });

            // Dodavanje role - ako je email admina, onda je 'admin', inače 'user'
            const role = (email === 'admin@gmail.com') ? 'admin' : 'user';

            req.session.user = { id: user.id, email: user.email, role }; // Spremanje uloge u sesiju
            res.json({ message: 'Login successful', role }); // Slanje uloge frontendu
        });
    });

    app.post('/logout', function (req, res) {
        req.session.destroy((err) => {
            if (err) return res.status(500).json({ message: 'Error logging out' });
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
    app.get("/projekti", function (req, res) {
        const sql = `
    SELECT 
      p.ID_projekta AS ID_projekta,
      p.slika_url AS slika_url,
      p.naziv AS naziv,
      IFNULL(GROUP_CONCAT(t.naziv ORDER BY t.naziv ASC SEPARATOR ', '), '') AS tehnologije
    FROM 
      projekt p
    LEFT JOIN 
      projekt_tehnologija pt ON p.ID_projekta = pt.ID_projekta
    LEFT JOIN 
      tehnologija t ON pt.ID_tehnologije = t.ID_tehnologije
    GROUP BY 
      p.ID_projekta, p.slika_url, p.naziv;
  `;
        con.query(sql, function (err, result) {
            if (err) {
                return res.status(500).send('Greška!' + err);
            }
            res.status(200).json(result);
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
    //Ruta za spremanje zahtjeva za novi projekt
    app.post('/api/projects/register', (req, res) => {

        const { name, description } = req.body;
        console.log('Received data:', req.body);

        // Za nove projekte, opis neće biti valjani URL
        const query = "INSERT INTO projekt (naziv, slika_url) VALUES (?, ?)";
        con.query(query, [name, description], (err, result) => {
            if (err) {
                console.error('Greška pri dodavanju projekta:', err);
                return res.status(500).send('Greška pri dodavanju projekta');
            }
            res.status(201).send('Projekt poslan na odobrenje');
        });
    });

    app.get('/api/projects/pending', (req, res) => {
        // Dohvati sve projekte gdje stupac slika_url NE počinje s "http"
        const query = "SELECT * FROM projekt WHERE slika_url NOT LIKE 'http%'";
        con.query(query, (err, results) => {
            if (err) {
                console.error('Greška pri dohvaćanju projekata:', err);
                return res.status(500).send('Greška pri dohvaćanju projekata');
            }
            res.status(200).json(results);
        });
    });

    app.put('/api/projects/update-status', (req, res) => {
        const { projectId, newStatus } = req.body;
        const query = `UPDATE projekt SET status = ? WHERE ID_projekta = ?`;
        con.query(query, [newStatus, projectId], (err, result) => {
            if (err) {
                console.error('Greška pri ažuriranju statusa:', err);
                return res.status(500).send('Greška pri ažuriranju statusa');
            }
            res.status(200).send('Status projekta ažuriran');
        });
    });
    app.get('/api/projects/last-submitter', (req, res) => {
        const query = "SELECT email FROM korisnik ORDER BY ID_korisnika DESC LIMIT 1";

        con.query(query, (err, results) => {
            if (err) {
                console.error('Greška pri dohvaćanju posljednjeg korisnika:', err);
                return res.status(500).send('Greška pri dohvaćanju korisnika');
            }

            if (results.length > 0) {
                res.status(200).json({ lastSubmitterEmail: results[0].email });
            } else {
                res.status(404).send('Nema korisnika');
            }
        });
    });
    //Ruta za odbijanje projekata na cekanju
    app.post('/api/projects/reject/:id', (req, res) => {
        const projectId = req.params.id;
        const query = "DELETE FROM projekt WHERE ID_projekta = ?";
        con.query(query, [projectId], (err, result) => {
            if (err) {
                console.error('Greška pri brisanju projekta:', err);
                return res.status(500).send('Greška pri brisanju projekta');
            }
            if (result.affectedRows > 0) {
                console.log(`Projekt s ID ${projectId} je obrisan.`);
                res.status(200).send('Projekt uspješno obrisan');
            } else {
                res.status(404).send('Projekt nije pronađen');
            }
        });
    });
    //ruta za odobravanje projekta na cekanju
    app.post('/api/projects/approve/:id', (req, res) => {
        const projectId = req.params.id;
        // Ovdje postavljamo default URL – on može biti placeholder koji kasnije admin mijenja.
        const approvedUrl = "http://example.com/approved-placeholder.jpg";

        const query = "UPDATE projekt SET slika_url = ? WHERE ID_projekta = ? AND slika_url NOT LIKE 'http%'";
        con.query(query, [approvedUrl, projectId], (err, result) => {
            if (err) {
                console.error("Greška pri odobravanju projekta:", err);
                return res.status(500).send("Greška pri odobravanju projekta");
            }
            if(result.affectedRows > 0) {
                res.status(200).send("Projekt odobren");
            } else {
                res.status(404).send("Projekt nije pronađen ili je već odobren");
            }
        });
    });




    //Kraj rute
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
        const sqlInsertProject = "INSERT INTO projekt (naziv, slika_url) VALUES (?, ?)";
        con.query(sqlInsertProject, [naziv, slika_url], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Greška kod dodavanja projekta" });
            }
            const projectId = result.insertId;
            if (tehnologije) {

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
                            queriesCompleted++;
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

    // Ruta za dohvaćanje svih tehnologija
    app.get('/technologies', (req, res) => {
        const sql = "SELECT ID_tehnologije, naziv FROM tehnologija";
        con.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send('Greška kod dohvaćanja tehnologija: ' + err);
            }
            res.json(results);
        });
    });

// Ruta za brisanje tehnologije prema ID-ju
    app.delete('/technologies/:id', (req, res) => {
        const techId = req.params.id;
        const sql = "DELETE FROM tehnologija WHERE ID_tehnologije = ?";
        con.query(sql, [techId], (err, result) => {
            if (err) {
                return res.status(500).send('Greška kod brisanja tehnologije: ' + err);
            }
            res.status(200).send('Tehnologija uspješno obrisana');
        });
    });

    // Ruta za dodavanje nove tehnologije
    app.post('/technologies', (req, res) => {
        const { naziv } = req.body;
        if (!naziv) {
            return res.status(400).send("Naziv tehnologije je obavezan");
        }
        const sql = "INSERT INTO tehnologija (naziv) VALUES (?)";
        con.query(sql, [naziv], (err, result) => {
            if (err) {
                return res.status(500).send("Greška kod dodavanja tehnologije: " + err);
            }
            res.status(201).send("Tehnologija uspješno dodana");
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
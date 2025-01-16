const express = require('express')
const cors= require('cors')
const session=require("express-session")
const app = express()
app.use(express.json())
app.use(cors({origin:"http://localhost:3000",credentials:true}))
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
});
app.listen(port, () => {
    console.log(`Web aplikacija pokrenuta na portu ${port}`)
})
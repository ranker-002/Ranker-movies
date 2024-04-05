const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Définition du moteur de vue et du répertoire des vues
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Définition du chemin pour les fichiers statiques
app.use('/public', express.static(__dirname + '/public'));
app.use("/script", express.static(path.join(__dirname, "public/script")));
app.use("/style", express.static(path.join(__dirname, "public/style")));

// Connexion à la base de données
db.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
});

// Routes
app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));

// Redirection après connexion réussie
app.post("/api/login", (req, res) => {
    // Vérification des informations de connexion
    // Redirection vers la page d'accueil après une connexion réussie
    res.redirect("/");
});

// Écoute du port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware pour traiter les requêtes JSON
app.use(bodyParser.json());

// Routes de votre API
app.post("/receive-temperature", (req, res) => {
	const data = req.body;
	console.log("Données reçues :", data);
	// Logique de traitement des données ici
	res.send("Données reçues avec succès!");
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Serveur écoutant sur le port ${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./database");
const appartementController = require("./controller/appartementController");
// const mesureController = require("./mesureController");
// const consommationDataCenterController = require("./consommationDataCenterController");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// Connexion à la base de données
connectToDatabase();

// Routes pour les opérations CRUD sur les appartements
app.post("/appartements", async (req, res) => {
	const nouvelAppartement = await appartementController.createAppartement(
		req.body
	);
	res.json(nouvelAppartement);
});

app.get("/appartements", async (req, res) => {
	const tousLesAppartements = await appartementController.getAppartements();
	res.json(tousLesAppartements);
});

// ... (routes pour d'autres opérations CRUD sur les appartements)

// Routes pour les opérations CRUD sur les mesures
app.post("/mesures", async (req, res) => {
	const nouvelleMesure = await mesureController.createMesure(req.body);
	res.json(nouvelleMesure);
});

// ... (routes pour d'autres opérations CRUD sur les mesures)

// Routes pour les opérations CRUD sur la consommation du data center
app.post("/consommation-data-center", async (req, res) => {
	const nouvelleConsommation =
		await consommationDataCenterController.createConsommation(req.body);
	res.json(nouvelleConsommation);
});

// ... (routes pour d'autres opérations CRUD sur la consommation du data center)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Serveur écoutant sur le port ${PORT}`);
});

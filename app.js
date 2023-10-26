const express = require("express");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./database");
const {
	createAppartement,
	getAppartements,
	getAppartementById,
	updateAppartement,
	deleteAppartement,
	deleteAllAppartements
} = require("./controller/appartementController");
const {
	createMesure,
	getMesures,
	getMesureById,
	updateMesure,
	deleteMesure,
	deleteAllMessures,
	calculateDistribution
} = require("./controller/mesureController");
const {
	createConsommationDataCenter,
	getConsommationsDataCenter,
	getConsommationDataCenterById,
	updateConsommationDataCenter,
	deleteConsommationDataCenter,
	deleteAllConsommationsDataCenter
} = require("./controller/consommationDataCenterController");
const cors = require("cors"); // Ajout du middleware CORS
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Utilisation du middleware CORS

// Connexion à la base de données
connectToDatabase();

// ROUTES

// Appartements
app.post("/appartements", createAppartement);
app.get("/appartements", getAppartements);
app.get("/appartements/:id", getAppartementById);
app.put("/appartements/:id", updateAppartement);
app.delete("/appartements/:id", deleteAppartement);
app.delete("/appartements", deleteAllAppartements);

// Mesures
app.post("/mesures", createMesure);
app.get("/mesures", getMesures);
app.get("/mesures/:id", getMesureById);
app.put("/mesures/:id", updateMesure);
app.delete("/mesures/:id", deleteMesure);
app.delete("/mesures", deleteAllMessures);

// Consommations Data Center
app.post("/consommations-data-center", createConsommationDataCenter);
app.get("/consommations-data-center", getConsommationsDataCenter);
app.get("/consommations-data-center/:id", getConsommationDataCenterById);
app.put("/consommations-data-center/:id", updateConsommationDataCenter);
app.delete("/consommations-data-center/:id", deleteConsommationDataCenter);
app.delete("/consommations-data-center", deleteAllConsommationsDataCenter);

// Calculer et distribuer l'énergie
app.post("/calculer-distribuer-energie", calculateDistribution);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Serveur écoutant sur le port ${PORT}`);
});

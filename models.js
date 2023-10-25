const mongoose = require("mongoose");
const { Schema } = mongoose;

const appartementSchema = new Schema({
	nombre_habitants: Number,
	surface: Number,
	temperature_choisie: Number
	// ... (autres champs)
});

const Appartement = mongoose.model("Appartement", appartementSchema);

const mesureSchema = new Schema({
	appartement_id: { type: Schema.Types.ObjectId, ref: "Appartement" },
	temperature_actuelle: Number,
	consommation_actuelle: Number,
	energie_a_envoyer: Number,
	date_mesure: { type: Date, default: Date.now }
	// ... (autres champs)
});

const Mesure = mongoose.model("Mesure", mesureSchema);

const consommationDataCenterSchema = new Schema({
	appartement_id: { type: Schema.Types.ObjectId, ref: "Appartement" },
	consommation_energie_data_center: Number,
	date_mesure: { type: Date, default: Date.now }
	// ... (autres champs)
});

const ConsommationDataCenter = mongoose.model(
	"ConsommationDataCenter",
	consommationDataCenterSchema
);

module.exports = {
	Appartement,
	Mesure,
	ConsommationDataCenter
};

const mongoose = require("mongoose");
const { Schema } = mongoose;

const appartementSchema = new Schema({
	num_appartement: { type: Number, required: true, unique: true },
	nombre_habitants: Number,
	surface: Number,
	temperature_choisie: Number,
	etat: { type: Number, default: 1, enum: [0, 1] }
});

const Appartement = mongoose.model("Appartement", appartementSchema);

const mesureSchema = new Schema({
	appartement_id: { type: Schema.Types.ObjectId, ref: "Appartement" },
	temperature_actuelle: Number,
	consommation_actuelle: Number,
	energie_a_envoyer: Number,
	date_mesure: { type: Date, default: Date.now }
});

const Mesure = mongoose.model("Mesure", mesureSchema);

const consommationDataCenterSchema = new Schema({
	appartement_id: { type: Schema.Types.ObjectId, ref: "Appartement" },
	consommation_energie_data_center_tot: Number,
	consommation_energie_data_center_surplus: Number,
	date_mesure: { type: Date, default: Date.now }
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

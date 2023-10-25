const { Appartement } = require("../models");

async function createAppartement(data) {
	const appartement = new Appartement(data);
	return await appartement.save();
}

async function getAppartements() {
	return await Appartement.find();
}

async function getAppartementById(id) {
	return await Appartement.findById(id);
}

async function updateAppartement(id, newData) {
	return await Appartement.findByIdAndUpdate(id, newData, { new: true });
}

async function deleteAppartement(id) {
	return await Appartement.findByIdAndRemove(id);
}

module.exports = {
	createAppartement,
	getAppartements,
	getAppartementById,
	updateAppartement,
	deleteAppartement
};

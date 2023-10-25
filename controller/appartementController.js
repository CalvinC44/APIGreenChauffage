const { Appartement } = require("../models");

async function createAppartement(req, res) {
	try {
		const {
			num_appartement,
			nombre_habitants,
			surface,
			temperature_choisie,
			etat
		} = req.body;
		const nouvelAppartement = new Appartement({
			num_appartement,
			nombre_habitants,
			surface,
			temperature_choisie,
			etat
		});

		const appartementCree = await nouvelAppartement.save();
		res.status(201).json(appartementCree);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la création de l'appartement" });
	}
}

async function getAppartements(req, res) {
	try {
		const appartements = await Appartement.find();
		res.status(200).json(appartements);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la récupération des appartements" });
	}
}

async function getAppartementById(req, res) {
	try {
		const appartement = await Appartement.findById(req.params.id);
		if (!appartement) {
			return res.status(404).json({ error: "Appartement non trouvé" });
		}
		res.status(200).json(appartement);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la récupération de l'appartement" });
	}
}

async function updateAppartement(req, res) {
	try {
		const {
			num_appartement,
			nombre_habitants,
			surface,
			temperature_choisie,
			etat
		} = req.body;
		const appartementModifie = await Appartement.findByIdAndUpdate(
			req.params.id,
			{ num_appartement, nombre_habitants, surface, temperature_choisie, etat },
			{ new: true }
		);

		if (!appartementModifie) {
			return res.status(404).json({ error: "Appartement non trouvé" });
		}

		res.status(200).json(appartementModifie);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la modification de l'appartement" });
	}
}

async function deleteAppartement(req, res) {
	try {
		const appartementSupprime = await Appartement.findByIdAndRemove(
			req.params.id
		);
		if (!appartementSupprime) {
			return res.status(404).json({ error: "Appartement non trouvé" });
		}
		res.status(204).end();
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la suppression de l'appartement" });
	}
}

async function deleteAllAppartements(req, res) {
	try {
		const appartementsSupprimes = await Appartement.deleteMany();
		res.status(204).end();
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la suppression des appartements" });
	}
}

module.exports = {
	createAppartement,
	getAppartements,
	getAppartementById,
	updateAppartement,
	deleteAppartement,
	deleteAllAppartements
};

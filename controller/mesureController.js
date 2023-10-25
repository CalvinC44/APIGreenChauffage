const { Mesure } = require("../models");

async function createMesure(req, res) {
	try {
		const { appartement_id, temperature_actuelle, consommation_actuelle } =
			req.body;
		const nouvelleMesure = new Mesure({
			appartement_id,
			temperature_actuelle,
			consommation_actuelle
		});

		const mesureCreee = await nouvelleMesure.save();
		res.status(201).json(mesureCreee);
	} catch (error) {
		res.status(500).json({ error: "Erreur lors de la création de la mesure" });
	}
}

async function getMesures(req, res) {
	try {
		const mesures = await Mesure.find();
		res.status(200).json(mesures);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la récupération des mesures" });
	}
}

async function getMesureById(req, res) {
	try {
		const mesure = await Mesure.findById(req.params.id);
		if (!mesure) {
			return res.status(404).json({ error: "Mesure non trouvée" });
		}
		res.status(200).json(mesure);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la récupération de la mesure" });
	}
}

async function updateMesure(req, res) {
	try {
		const { temperature_actuelle, consommation_actuelle } = req.body;
		const mesureModifiee = await Mesure.findByIdAndUpdate(
			req.params.id,
			{ temperature_actuelle, consommation_actuelle },
			{ new: true }
		);

		if (!mesureModifiee) {
			return res.status(404).json({ error: "Mesure non trouvée" });
		}

		res.status(200).json(mesureModifiee);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la modification de la mesure" });
	}
}

async function deleteMesure(req, res) {
	try {
		const mesureSupprimee = await Mesure.findByIdAndRemove(req.params.id);
		if (!mesureSupprimee) {
			return res.status(404).json({ error: "Mesure non trouvée" });
		}
		res.status(204).end();
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la suppression de la mesure" });
	}
}

async function deleteAllMessures(req, res) {
	try {
		await Mesure.deleteMany();
		res.status(204).end();
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la suppression des mesures" });
	}
}

async function calculateDistribution(req, res) {
	// récupère la température actuelle de tous les appartements ainsi que leur température choisie, récupère l'énergie surplus du data center, puis avec toutes ces données on appelle la fonction de calcul de distribution et on affiche toutes les données liées à chaque appartements et celles de consommation du data center
	try {
		const mesures = await Mesure.find();
		const consommationDataCenter = await ConsommationDataCenter.find();
		const appartements = await Appartement.find();
		// const distribution = calculateDistribution(
		// 	mesures,
		// 	consommationDataCenter,
		// 	appartements
		// );
		res.status(200).json(distribution);
	} catch (error) {
		res.status(500).json({ error: "Erreur lors du calcul de la distribution" });
	}
}

module.exports = {
	createMesure,
	getMesures,
	getMesureById,
	updateMesure,
	deleteMesure,
	deleteAllMessures,
	calculateDistribution
};

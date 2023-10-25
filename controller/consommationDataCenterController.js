const { ConsommationDataCenter } = require("../models");

async function createConsommationDataCenter(req, res) {
	try {
		const {
			appartement_id,
			consommation_energie_data_center_tot,
			consommation_energie_data_center_surplus
		} = req.body;
		const nouvelleConsommationDataCenter = new ConsommationDataCenter({
			appartement_id,
			consommation_energie_data_center_tot,
			consommation_energie_data_center_surplus
		});

		const consommationCreee = await nouvelleConsommationDataCenter.save();
		res.status(201).json(consommationCreee);
	} catch (error) {
		res.status(500).json({
			error: "Erreur lors de la création de la consommation Data Center"
		});
	}
}

async function getConsommationsDataCenter(req, res) {
	try {
		const consommationsDataCenter = await ConsommationDataCenter.find();
		res.status(200).json(consommationsDataCenter);
	} catch (error) {
		res.status(500).json({
			error: "Erreur lors de la récupération des consommations Data Center"
		});
	}
}

async function getConsommationDataCenterById(req, res) {
	try {
		const consommationDataCenter = await ConsommationDataCenter.findById(
			req.params.id
		);
		if (!consommationDataCenter) {
			return res
				.status(404)
				.json({ error: "Consommation Data Center non trouvée" });
		}
		res.status(200).json(consommationDataCenter);
	} catch (error) {
		res.status(500).json({
			error: "Erreur lors de la récupération de la consommation Data Center"
		});
	}
}

async function updateConsommationDataCenter(req, res) {
	try {
		const {
			consommation_energie_data_center_tot,
			consommation_energie_data_center_surplus
		} = req.body;
		const consommationDataCenterModifiee =
			await ConsommationDataCenter.findByIdAndUpdate(
				req.params.id,
				{
					consommation_energie_data_center_tot,
					consommation_energie_data_center_surplus
				},
				{ new: true }
			);

		if (!consommationDataCenterModifiee) {
			return res
				.status(404)
				.json({ error: "Consommation Data Center non trouvée" });
		}

		res.status(200).json(consommationDataCenterModifiee);
	} catch (error) {
		res.status(500).json({
			error: "Erreur lors de la modification de la consommation Data Center"
		});
	}
}

async function deleteConsommationDataCenter(req, res) {
	try {
		const consommationDataCenterSupprimee =
			await ConsommationDataCenter.findByIdAndRemove(req.params.id);
		if (!consommationDataCenterSupprimee) {
			return res
				.status(404)
				.json({ error: "Consommation Data Center non trouvée" });
		}
		res.status(204).end();
	} catch (error) {
		res.status(500).json({
			error: "Erreur lors de la suppression de la consommation Data Center"
		});
	}
}

async function deleteAllConsommationsDataCenter(req, res) {
	try {
		const consommationsDataCenterSupprimees =
			await ConsommationDataCenter.deleteMany();
		if (!consommationsDataCenterSupprimees) {
			return res
				.status(404)
				.json({ error: "Consommations Data Center non trouvées" });
		}
		res.status(204).end();
	} catch (error) {
		res.status(500).json({
			error: "Erreur lors de la suppression des consommations Data Center"
		});
	}
}

module.exports = {
	createConsommationDataCenter,
	getConsommationsDataCenter,
	getConsommationDataCenterById,
	updateConsommationDataCenter,
	deleteConsommationDataCenter,
	deleteAllConsommationsDataCenter
};

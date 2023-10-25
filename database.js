const mongoose = require("mongoose");

async function connectToDatabase() {
	const uri = `mongodb+srv://adminGreenChauffage:${process.env.DB_PASSWORD}@cluster0.6vi2d5h.mongodb.net/?retryWrites=true&w=majority`;

	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("Connecté à la base de données");
	} catch (error) {
		console.error("Erreur de connexion à la base de données:", error);
		process.exit(1);
	}
}

module.exports = { connectToDatabase };

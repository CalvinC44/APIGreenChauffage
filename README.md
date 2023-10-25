# ROUTES

- create/read/update/delete appartement
- create/read/update/delete mesure
- create/read/update/delete consommationDataCenter
- post: calculer comment distribuer --> modifie les mesures en ajoutant energie_a_envoyer dans mesure appartement (qui sert aussi a voir energie economisée), est appelée par le Arduino quand il a envoyé toutes les données de tous les appartements

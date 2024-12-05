const express = require('express');
const router = express.Router();

// Importer des données ou des fonctions spécifiques
const generateCalendrier = require('../data/jourCouleur/calendrillier.js');

//toute api
router.get("/time", (req, res) => {

    const date1 = new Date();
    //affiche
    res.json(date1);
});

router.get("/calendrier", (req, res) => {
    //affiche
    res.json(generateCalendrier());
});

module.exports = router;

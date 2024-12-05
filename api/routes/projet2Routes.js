const express = require('express');
const router = express.Router();

// Importer des données ou des fonctions spécifiques
const data = require('../data/projet2/projet2Data.json');

//toute api
router.get("/data", (req, res) => {
    res.json(data);
});

module.exports = router;

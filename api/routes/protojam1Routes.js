const express = require('express');
const router = express.Router();

// Importer des données ou des fonctions spécifiques
const ingredients = require('../data/protojam/ingredients.json');
const pains = require('../data/protojam/pains.json');
const remedies = require('../data/protojam/remedies.json');

//toute api
router.get("/ingredients", (req, res) => {
    res.json(ingredients);
});

router.get("/pains", (req, res) => {
    res.json(pains);
});

router.get("/remedies", (req, res) => {
    res.json(remedies);
});

module.exports = router;

const express = require('express');
const router = express.Router();

//hub projet2
router.get('/projet2', (req, res) => {
    const baseDomain = `${req.protocol}://${req.get('host')}`;

    const texte = `
        <p><a href="${baseDomain}/projet2/data">${baseDomain}/projet2/data</a></p>

    `;

    res.send(texte);
});

//hub protojam1
router.get('/protojam1', (req, res) => {
    const baseDomain = `${req.protocol}://${req.get('host')}`;

    const texte = `
        <p><a href="${baseDomain}/protojam1/ingredients">${baseDomain}/protojam1/ingredients</a></p>
        <p><a href="${baseDomain}/protojam1/pains">${baseDomain}/protojam1/pains</a></p>
        <p><a href="${baseDomain}/protojam1/remedies">${baseDomain}/protojam1/remedies</a></p>

    `;

    res.send(texte);
});

//hub jourCouleur
router.get('/jourCouleur', (req, res) => {
    const baseDomain = `${req.protocol}://${req.get('host')}`;

    const texte = `
        <p><a href="${baseDomain}/jourCouleur/time">${baseDomain}/jourCouleur/time</a></p>
        <p><a href="${baseDomain}/jourCouleur/calendrier">${baseDomain}/jourCouleur/calendrier</a></p>
    `;

    res.send(texte);
});

module.exports = router;

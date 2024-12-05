const express = require('express');
const cors = require('cors');
const setupAPI = require("./api/setup");

const app = express();

// Ajouter le middleware CORS
app.use(cors());

// Installer les routes
setupAPI(app);

app.get('/', (req, res) => {
    const baseDomain = `${req.protocol}://${req.get('host')}`;

    const texte = `
        <p><a href="${baseDomain}/projet2">${baseDomain}/projet2</a></p>
        <p><a href="${baseDomain}/protojam1">${baseDomain}/protojam1</a></p>
        <p><a href="${baseDomain}/jourCouleur">${baseDomain}/jourCouleur</a></p>

    `;

    res.send(texte);
});

export default (req, res) => {
    app(req, res);  // Utilisation de Express pour traiter les requêtes
};

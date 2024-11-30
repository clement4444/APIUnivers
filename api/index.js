import express from 'express';
import cors from 'cors';
import generateCalendrier from './calendrillier.js';

const app = express();

// Ajouter le middleware CORS
app.use(cors());

//toute api
app.get("/api/time", (req, res) => {

    const date1 = new Date();
    //affiche
    res.json(date1);
});


app.get("/api/calendrier", (req, res) => {
    //affiche
    res.json(generateCalendrier());
});

app.get("/api/test", (req, res) => {
    res.json({ message: "API is working!" });
});


//-------------------defaut-------------------------------------------

app.get('/api', (req, res) => {
    res.send('Hello World !');
});

export default (req, res) => {
    app(req, res);  // Utilisation de Express pour traiter les requêtes
};
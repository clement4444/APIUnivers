import express from 'express';
import cors from 'cors';
import generateCalendrier from './calendrillier.js';

const app = express();
const serveurPort = 3310;

// Ajouter le middleware CORS
app.use(cors());

//toute api
app.get("/time", (req, res) => {

    const date1 = new Date();
    //affiche
    res.json(date1);
});


app.get("/calendrier", (req, res) => {
    //affiche
    res.json(generateCalendrier());
});


//-------------------defaut-------------------------------------------

app.get('/', (req, res) => {
    res.send('Hello World');
});

//---------------------------------------------------------------------
app.listen(serveurPort, () => {
    console.info(`Server is running on port ${serveurPort}`);
});
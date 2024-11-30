// Fonction pour vérifier si une année est bissextile
function isBisextile(annee) {
    return (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0));
}

// Mois et jours dans chaque mois
const listeMois = {
    janvier: 31,
    fevrier: 28,  // Ce sera ajusté selon l'année
    mars: 31,
    avril: 30,
    mai: 31,
    juin: 30,
    juillet: 31,
    aout: 31,
    septembre: 30,
    octobre: 31,
    novembre: 30,
    décembre: 31
};

function attribuerValeurJour(nbJour) {
    if (nbJour === 1) {
        return { nbJour: 2, couleur: 'vert' };
    } else if (nbJour === 2) {
        return { nbJour: 3, couleur: 'rouge' };
    } else {
        return { nbJour: 1, couleur: 'bleu' };
    }
}

function generateAns(ans, startNbJour) {
    let nbJour = startNbJour; // Initialise à partir du jour précédent
    const calendrilierAns = {};

    // Vérifier si l'année est bissextile
    if (isBisextile(ans)) {
        listeMois.fevrier = 29;
    } else {
        listeMois.fevrier = 28;
    }

    for (const mois in listeMois) {
        calendrilierAns[mois] = {};
        for (let jour = 1; jour <= listeMois[mois]; jour++) {
            const result = attribuerValeurJour(nbJour);
            nbJour = result.nbJour;
            calendrilierAns[mois][jour] = result.couleur;
        }
    }

    return { calendrilierAns, nextNbJour: nbJour };
}

export default function generateCalendrier() {
    //calendrier final
    const calendrilier = {};
    //année de départ et fin
    const anneeDepart = 2024;
    const anneeFin = 2026;
    let nbJour = 1;

    for (let ans = anneeDepart; ans <= anneeFin; ans++) {
        const { calendrilierAns, nextNbJour } = generateAns(ans, nbJour);
        calendrilier[ans] = calendrilierAns;
        nbJour = nextNbJour;
    }

    return calendrilier;
}

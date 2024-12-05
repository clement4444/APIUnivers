const jourCouleurRoutes = require("./routes/jourCouleurRoutes");
const projet2Routes = require("./routes/projet2Routes");
const protojam1Routes = require("./routes/protojam1Routes");
const communRoutes = require("./routes/communRoutes");

module.exports = (app) => {
    app.use('/jourCouleur', jourCouleurRoutes);
    app.use('/projet2', projet2Routes);
    app.use('/protojam1', protojam1Routes);
    app.use('/', communRoutes);
};

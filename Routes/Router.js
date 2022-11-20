const indexController = require('../Views/Controllers/indexController');
const esportsGame = require('../Views/Controllers/esportsGames');
const esportsPlayers = require('../Views/Controllers/esportsPlayers');

module.exports = (app) => {
    app.get('/', indexController);
    app.get('/esports-games/', esportsGame);
    app.get('/esports-players/', esportsPlayers);
};

const { getGames } = require('../../../../DB/Scripts/SelectGames');
const selectPlayers = require('../../../../DB/Scripts/SelectPlayers');
const navbarUtil = require('../../../../Utils/NavbarUtilFiller');

module.exports = {
    url: '/esports-games/add/getAvailableGames/:id',
    method: 'GET',

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        getGames().then((game) => {
            selectPlayers().then((players) => {
                res.render('esport-player-views/esportsSelectGames', {
                    title: 'Select Games',
                    nav: navbarUtil('Select Games').page,
                    getAvailableGames: game,
                    getPlayers: players,
                    id: req.params.id,
                });
            });
        });
    },
};

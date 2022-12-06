const navbarUtil = require('../../../../Utils/NavbarUtilFiller');
const FooterUtilFiller = require('../../../../Utils/FooterUtilFiller');
const { selectAllPlayers } = require('../../../../DB/Scripts/SelectPlayers');

module.exports = {
    url: '/esports-players',
    method: 'GET',

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        selectAllPlayers().then((result) => {
            res.render('esport-player-views/esportsPlayers', {
                title: 'Esports Players',
                nav: navbarUtil('Esports Player').page,
                footer: FooterUtilFiller(`esports-players/add/`, this.method, 'Add Player').page,
                player: result,
                DBResult: result,
                hidden: false,
            });
        });
    },
};

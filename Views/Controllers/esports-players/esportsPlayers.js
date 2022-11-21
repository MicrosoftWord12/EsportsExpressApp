const NavbarUtilityFiller = require('../../../Utils/NavbarUtilFiller');
const selectPlayers = require('../../../DB/Scripts/SelectPlayers');
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
module.exports = {
    url: '/esports-players',
    method: 'GET',

    async execute(req, res) {
        selectPlayers().then((result) => {
            res.render('esportsPlayers', {
                title: 'Esports Players',
                nav: NavbarUtilityFiller().page,
                player: result,
                DBResult: result,
            });
        });
    },
};

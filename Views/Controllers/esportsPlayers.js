const NavbarUtilityFiller = require('../../Utils/NavbarUtilFiller');
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
module.exports = (req, res) => {
    res.render('esportsPlayers', {
        title: 'Esports Players',
        nav: NavbarUtilityFiller().page,
    });
};

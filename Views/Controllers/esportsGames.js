const NavbarUtilFiller = require('../../Utils/NavbarUtilFiller');
const SelectGames = require('../../DB/Scripts/SelectGames');

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
module.exports = (req, res) => {
    SelectGames().then((result) => {
        // for (let i = 0; i < result.length; i++) {

        res.render('esportsGames', {
            title: 'Esports Games',
            nav: NavbarUtilFiller().page,
            game: result,
            DBResult: result,
        });
        // }
    });
};

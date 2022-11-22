const NavbarUtilFiller = require("../../../Utils/NavbarUtilFiller");
const SelectGames = require("../../../DB/Scripts/SelectGames");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
module.exports = {
    url: "/esports-games",
    method: "GET",

    async execute(req, res) {
        SelectGames().then((result) => {
            res.render("esport-game-views/esportsGames", {
                title: "Esports Games",
                nav: NavbarUtilFiller().page,
                game: result,
                DBResult: result,
            });
        });
    },
};

const navbarUtil = require("../../../../Utils/NavbarUtilFiller");
const footerUtil = require("../../../../Utils/FooterUtilFiller");
const SelectGames = require("../../../../DB/Scripts/SelectGames");

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
            console.log(result);
            res.render("esport-game-views/esportsGames", {
                title: "Esports Games",
                nav: navbarUtil("Esports Games").page,
                footer: footerUtil("/esports-games/add", "GET", "Add Game").page,
                game: result,
                DBResult: result,
            });
        });
    },
};

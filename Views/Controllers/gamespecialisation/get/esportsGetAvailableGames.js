const { getGames } = require("../../../../DB/Scripts/SelectGames");
const navbarUtil = require("../../../../Utils/NavbarUtilFiller");

module.exports = {
    url: "/esports-players/add/getAvailableGames",
    method: "GET",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        getGames().then((result) => {
            // console.log(result);
            res.render("esport-player-views/esportsSelectGames", {
                title: "Select Games",
                nav: navbarUtil("Select Games").page,
                getAvailableGames: result,
            });
        });
    },
};

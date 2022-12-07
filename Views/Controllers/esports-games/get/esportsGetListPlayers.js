const navbarUtil = require("../../../../Utils/NavbarUtilFiller");
const footerUtil = require("../../../../Utils/FooterUtilFiller");
const { selectPlayersByGameID } = require("../../../../DB/Scripts/SelectPlayers");

module.exports = {
    url: "/esports-games/view/:id",
    method: "GET",

    async execute(req, res) {
        const { id } = req.params;

        selectPlayersByGameID(id).then((result) => {
            // console.log(result);

            res.render("esports-view-players/esportsListPlayersInGame", {
                nav: navbarUtil("View Esports Games").page,
                player: result,
            });
        });
    },
};

const navbarUtil = require("../../../../Utils/NavbarUtilFiller");

module.exports = {
    url: "/esports-games/add",
    method: "GET",

    async execute(req, res) {
        res.render("esport-game-views/esportsAddGame", {
            title: "Add Game",
            nav: navbarUtil("Add Game").page,
        });
    },
};

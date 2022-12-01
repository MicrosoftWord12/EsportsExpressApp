const navbarUtil = require("../../../../Utils/NavbarUtilFiller");
const footerUtil = require("../../../../Utils/FooterUtilFiller");
module.exports = {
    url: "/esports-games/add",
    method: "GET",

    async execute(req, res) {
        res.render("esport-game-views/esportsAddGame", {
            title: "Add Game",
            nav: navbarUtil("Add Game").page,
            footer: footerUtil(`/esports-games/add`, this.method, "Add Game").page,
            hidden: false,
        });
    },
};

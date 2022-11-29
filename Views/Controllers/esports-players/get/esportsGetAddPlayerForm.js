const navbarUtil = require("../../../../Utils/NavbarUtilFiller");
const footerUtil = require("../../../../Utils/FooterUtilFiller");

module.exports = {
    url: "/esports-players/add/",
    method: "GET",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        res.render("esport-player-views/esportsAddPlayer", {
            title: "Add Player",
            nav: navbarUtil("Esports Add Player").page,
            footer: footerUtil(`esports-players/add/`, this.method, "Add Player").page,
            urlType: "add",
            id: req.params.id,
        });
    },
};

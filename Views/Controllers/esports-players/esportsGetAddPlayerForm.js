const navUtil = require("../../../Utils/NavbarUtilFiller");
const footerUtil = require("../../../Utils/FooterUtilFiller");

module.exports = {
    url: "/esports-players/add",
    method: "POST",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        res.render("esports-player-views/esportsEditPlayer", {
            nav: navUtil().page,
            page: footerUtil(`esports-players/add/`, this.method, "Add Player").page,
            id: req.params.id,
        });
    },
};

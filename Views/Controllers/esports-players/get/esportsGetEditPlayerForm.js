const navbarUtil = require("../../../../Utils/NavbarUtilFiller");

module.exports = {
    url: "/esports-players/edit/:id",
    method: "GET",

    async execute(req, res) {
        // console.log("GET EDIT FORM");
        res.render("esport-player-views/esportsEditPlayer", {
            title: "Edit Player",
            nav: navbarUtil("Esports Add Player").page,
            id: req.params.id,
            urlType: "edit",
        });
    },
};

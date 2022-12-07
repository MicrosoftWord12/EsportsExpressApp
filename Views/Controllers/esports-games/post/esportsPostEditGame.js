const alterGame = require("../../../../DB/Scripts/AlterGame");

module.exports = {
    url: "/esports-games/edit/:id",
    method: "POST",

    /**
     *
     */
    async execute(req, res) {
        const { id } = req.params;

        alterGame(req.body, id).then((result) => {
            res.redirect(301, "/esports-games");
        });
    },
};

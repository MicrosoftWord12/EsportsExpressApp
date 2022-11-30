const deleteGame = require("../../../../DB/Scripts/DeleteGame");

module.exports = {
    url: "/esports-games/remove/:id",
    method: "POST",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     *
     **/
    async execute(req, res) {
        const { id } = req.params;
        deleteGame(id).then((result) => {
            res.redirect("/esports-games");
        });
    },
};

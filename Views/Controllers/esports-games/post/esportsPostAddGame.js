const insertGame = require("../../../../DB/Scripts/InsertGame");

module.exports = {
    url: "/esports-games/add",
    method: "POST",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        insertGame(req.body).then((result) => {
            res.redirect(301, "/esports-games");
        });
    },
};

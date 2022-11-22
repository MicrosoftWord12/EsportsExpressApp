const DeletePlayer = require("../../../DB/Scripts/DeletePlayer");

module.exports = {
    url: "/esports-players/remove/:id",
    method: "POST",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        console.log(req.body);

        DeletePlayer(req.params.id).then((result) => {
            console.log(result);
            res.redirect(301, "/esports-players");
        });
    },
};

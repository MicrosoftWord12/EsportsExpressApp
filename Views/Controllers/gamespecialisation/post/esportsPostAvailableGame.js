const insertGameSpec = require("../../../../DB/Scripts/InsertGameSpec");
const conn = require("../../../../DB/Connection/Connection");

module.exports = {
    url: "/esports-games/add/getAvailableGames/:id",
    method: "POST",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        const { id } = req.params;

        insertGameSpec(req.body, id).then((result) => {
            res.redirect(302, `/esports-players`);
        });
    },
};

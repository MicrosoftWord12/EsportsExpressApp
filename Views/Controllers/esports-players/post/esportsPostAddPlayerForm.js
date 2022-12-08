const insertPlayer = require("../../../../DB/Scripts/InsertPlayers");
const { selectPlayerByEmail } = require("../../../../DB/Scripts/SelectPlayers");
const conn = require("../../../../DB/Connection/Connection");
module.exports = {
    url: "/esports-players/add",
    method: "POST",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        const data = req.body;
        // const { email } = req.body;
        insertPlayer(data).then((result) => {
            selectPlayerByEmail(data.email).then((newResult) => {
                setInterval(() => {
                    res.redirect(302, `/esports-games/add/getAvailableGames/${newResult[0].player_id}`);
                }, 2000);
            });
        });
    },
};

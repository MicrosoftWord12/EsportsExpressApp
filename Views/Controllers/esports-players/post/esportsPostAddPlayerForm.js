const insertPlayer = require('../../../../DB/Scripts/InsertPlayers');
module.exports = {
    url: '/esports-players/add',
    method: 'POST',

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        insertPlayer(req.body).then((result) => {
            res.redirect(301, '/esports-players');
        });
    },
};

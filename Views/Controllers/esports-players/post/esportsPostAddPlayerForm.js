const insertPlayer = require('../../../../DB/Scripts/InsertPlayers');
const { selectPlayerByEmail } = require('../../../../DB/Scripts/SelectPlayers');
module.exports = {
    url: '/esports-players/add',
    method: 'POST',

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        const data = req.body;
        // const { email } = req.body;
        console.log(`Data LOL`);
        insertPlayer(data).then((result) => {
            selectPlayerByEmail(data.email, (err, result) => {
                console.log(result);
                res.redirect(302, `/esports-games/add/getAvailableGames/${result[0].player_id}`);
            });
        });
    },
};

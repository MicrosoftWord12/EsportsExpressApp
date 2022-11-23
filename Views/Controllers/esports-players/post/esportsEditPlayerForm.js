const AlterPlayer = require('../../../../DB/Scripts/AlterPlayer');

module.exports = {
    url: '/esports-players/edit/:id',
    method: 'POST',

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        console.log(req.body);

        AlterPlayer(req.body, req.params.id).then((result) => {
            console.log(result);
            res.redirect(301, '/esports-players');
        });
    },
};

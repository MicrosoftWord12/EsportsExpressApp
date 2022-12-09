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
        const { id } = req.params;
        // console.log(req.body);

        AlterPlayer(req.body, id).then((result) => {
            // console.log(result);
            res.redirect('/esports-players');
        });
    },
};

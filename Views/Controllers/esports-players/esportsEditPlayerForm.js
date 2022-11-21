module.exports = {
    url: '/esports-players/edit/',
    method: 'POST',

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        console.log(req.body);

        res.redirect(301, '/esports-players');
    },
};

module.exports = {
    url: '/esports-games/add/getAvailableGames/:id',
    method: 'POST',

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        console.log(req.body);

        const data = req.body;
    },
};

module.exports = {
    url: "/esports-players/add/getAvailableGames",
    method: "POST",

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

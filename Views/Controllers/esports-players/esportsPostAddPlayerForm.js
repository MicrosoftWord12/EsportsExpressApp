module.exports = {
    url: "/esports-players/add",
    method: "POST",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        console.log(req.body);
    },
};

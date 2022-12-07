const insertGame = require("../../../../DB/Scripts/InsertGame");
const serverErrorMessage = require("../../../../Utils/ServerErrorMessage");
const serverMessage = require("../../../../Utils/ServerMessage");

module.exports = {
    url: "/esports-games/add",
    method: "POST",

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async validate(req, res, next) {
        // const data = req.body;
        // console.log(data);
        // if (data.name === null || data.name === "") {
        //     serverErrorMessage("Name is required");
        // } else if (data.duration === null || data.duration === "") {
        //     serverErrorMessage("Duration is required");
        // } else if (data.team_size === null || data.team_size === "") {
        //     serverErrorMessage("Team Size is required");
        // } else {
        //     next();
        // }
    },

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        insertGame(req.body).then((result) => {
            // serverMessage(`Game Added: ${result}`);
            res.redirect(301, "/esports-games");
        });
    },
};

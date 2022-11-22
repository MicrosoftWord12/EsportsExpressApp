module.exports = {
    url: "/esports-games/edit/:id",
    method: "GET",

    async execute(req, res) {
        console.log(req.params.id);
    },
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
module.exports = (req, res) => {
    res.render("index", {
        title: "Home",
        homePageTitle: "Home Page",
        navLinkTitleOne: "Esports Games",
        navLinkTitleTwo: "Esports Players",
        navLinkOneHref: "/esports-games",
        navLinkTwoHref: "/esports-players",
    });
};

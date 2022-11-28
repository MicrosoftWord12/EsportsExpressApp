const navbarUtil = require('../../../../Utils/NavbarUtilFiller');

module.exports = {
    url: '/esports-games/edit/:id',
    method: 'GET',

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    async execute(req, res) {
        res.render('esport-game-views/esportsEditGame', {
            title: 'Edit Game',
            nav: navbarUtil().page,
            id: req.params.id,
        });
    },
};

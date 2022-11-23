const navbarUtil = require('../../../../Utils/NavbarUtilFiller');
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
module.exports = {
    url: '/test',
    method: 'GET',

    async execute(req, res) {
        res.render('test/test', {
            title: 'Home',
            nav: navbarUtil().page,
        });
    },
};

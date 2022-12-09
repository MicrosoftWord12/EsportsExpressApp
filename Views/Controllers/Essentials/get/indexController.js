const navbarUtil = require('../../../../Utils/NavbarUtilFiller');
const footerUtil = require('../../../../Utils/FooterUtilFiller');
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
module.exports = {
    url: '/',
    method: 'GET',

    async execute(req, res) {
        res.render('index', {
            title: 'Home',
            nav: navbarUtil('Home').page,
        });
    },
};

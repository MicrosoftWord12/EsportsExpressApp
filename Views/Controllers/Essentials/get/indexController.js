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
            // footer: footerUtil(``, this.method, "Null").page,
            // hidden: false,
        });

        let test = 5;
        var test2 = 5;

        console.log(test);
        console.log(test2);

        test = 6;
        test2 = 6;

        console.log(test);
        console.log(test2);
    },
};

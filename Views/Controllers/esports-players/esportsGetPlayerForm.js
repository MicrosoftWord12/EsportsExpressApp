const NavbarUtilFiller = require('../../../Utils/NavbarUtilFiller');

module.exports = {
    url: '/esports-players/edit/:id',
    method: 'GET',

    async execute(req, res) {
        res.render('esportsEditPlayer', {
            nav: NavbarUtilFiller().page,
            id: req.params.id,
        });
    },
};

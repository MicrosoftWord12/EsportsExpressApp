const navbarUtil = require('../../../../Utils/NavbarUtilFiller');
const { selectPlayerById } = require('../../../../DB/Scripts/SelectPlayers');

module.exports = {
	url: '/esports-players/edit/:id',
	method: 'GET',

	async execute(req, res) {
		// console.log("GET EDIT FORM");

		selectPlayerById(req.params.id).then((result) => {
			res.render('esport-player-views/esportsEditPlayer', {
				title: 'Edit Player',
				nav: navbarUtil('Esports Add Player').page,
				id: req.params.id,
				urlType: 'edit',
				emailPlaceholder: result[0].email,
				playerPlaceholder: result[0].name,
			});
		});
	},
};

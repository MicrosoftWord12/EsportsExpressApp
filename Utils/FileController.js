const fs = require('fs');
const path = require('path');
const ServerMessage = require('../Utils/ServerMessage');

module.exports = (app) => {
	// Gets folders in controller folder
	const controllersNotInFolder = fs.readdirSync(path.join(__dirname, '../Views/Controllers'));

	for (const controllerfolder of controllersNotInFolder) {
		const controllerMethodFolder = fs.readdirSync(path.join(__dirname, `../Views/Controllers/${controllerfolder}`));

		for (const folder of controllerMethodFolder) {
			const controllerFile = fs.readdirSync(path.join(__dirname, `../Views/Controllers/${controllerfolder}/${folder}`)).filter((file) => file.endsWith('.js'));
			ServerMessage(`Loading [${controllerfolder}]/[${folder}]: ${controllerFile}`);

			for (const file of controllerFile) {
				const controller = require(`../Views/Controllers/${controllerfolder}/${folder}/${file}`);
				// TODO: Add support for multiple controllers in one file - DONE
				if (controller.execute && controller.url && controller.method) {
					if (controller.validate) {
						runControllers(app, controller, true);
					} else {
						runControllers(app, controller, false);
					}
				}
			}
		}
	}
};

function runControllers(app, controller, hasValidation) {
	if (typeof controller === 'undefined') return;
	if (hasValidation) {
		switch (controller.method) {
			case 'GET':
				app.get(controller.url, [controller.validate, controller.execute]);
				break;
			case 'POST':
				app.post(controller.url, [controller.validate, controller.execute]);
				break;

			case 'PUT':
				app.put(controller.url, [controller.validate, controller.execute]);
				break;

			default:
				app.all(controller.url, [controller.validate, controller.execute]);
				break;
		}
	} else {
		switch (controller.method) {
			case 'GET':
				app.get(controller.url, controller.execute);
				break;
			case 'POST':
				app.post(controller.url, controller.execute);
				break;

			case 'PUT':
				app.put(controller.url, controller.execute);
				break;

			default:
				app.all(controller.url, controller.execute);
				break;
		}
	}
}

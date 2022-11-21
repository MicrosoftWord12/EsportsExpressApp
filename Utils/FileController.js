const fs = require('fs');
const path = require('path');
const ServerMessage = require('../Utils/ServerMessage');

module.exports = (app) => {
    // Gets folders in controller folder
    const controllerPath = fs.readdirSync(path.join(__dirname, '../Views/Controllers'));
    for (const folder of controllerPath) {
        // gets files in those folders
        const controllerFile = fs.readdirSync(path.join(__dirname, `../Views/Controllers/${folder}`)).filter((file) => file.endsWith('.js'));

        console.log(ServerMessage(`Loading ${controllerFile}`));

        for (const file of controllerFile) {
            const controller = require(`../Views/Controllers/${folder}/${file}`);

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
};

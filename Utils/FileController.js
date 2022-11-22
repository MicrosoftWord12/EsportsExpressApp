const fs = require("fs");
const path = require("path");
const ServerMessage = require("../Utils/ServerMessage");

module.exports = (app) => {
    // Gets folders in controller folder
    const controllersNotInFolder = fs.readdirSync(path.join(__dirname, "../Views/Controllers"));

    for (const folder of controllersNotInFolder) {
        const controllerFile = fs.readdirSync(path.join(__dirname, `../Views/Controllers/${folder}`)).filter((file) => file.endsWith(".js"));

        console.log(ServerMessage(`Loading [${folder}]: ${controllerFile} `));

        for (const file of controllerFile) {
            const controller = require(`../Views/Controllers/${folder}/${file}`);
            runControllers(app, controller);
        }
    }
};

function runControllers(app, controller) {
    if (typeof controller === "undefined") return;
    switch (controller.method) {
        case "GET":
            app.get(controller.url, controller.execute);
            break;
        case "POST":
            app.post(controller.url, controller.execute);
            break;

        case "PUT":
            app.put(controller.url, controller.execute);
            break;

        default:
            app.all(controller.url, controller.execute);
            break;
    }
}

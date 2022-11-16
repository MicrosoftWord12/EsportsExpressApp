const indexController = require("../Views/Controllers/indexController");

module.exports = (app) => {
    app.use("/", indexController);
};

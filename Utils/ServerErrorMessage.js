const { redBright } = require("chalk");

module.exports = (message) => {
    return console.log(`${redBright("[ERROR]")} ${message}`);
};

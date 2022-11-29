const { redBright } = require("chalk");

module.exports = (message) => {
    return `${redBright("[ERROR]")} ${message}`;
};

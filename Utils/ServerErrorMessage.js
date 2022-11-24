const chalk = require("chalk");

module.exports = (message) => {
    return `${chalk.redBright("[ERROR]")} ${message}`;
};

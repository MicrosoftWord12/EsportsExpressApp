const chalk = require('chalk');

module.exports = (message) => {
    return `${chalk.greenBright('[SERVER]')} ${message}`;
};

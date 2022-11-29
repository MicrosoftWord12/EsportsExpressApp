const { greenBright } = require("chalk");

module.exports = (message) => {
    return `${greenBright("[SERVER]")} ${message}`;
};

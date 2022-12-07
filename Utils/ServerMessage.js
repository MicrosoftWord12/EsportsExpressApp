const { greenBright } = require("chalk");

module.exports = (message) => {
    return console.log(`${greenBright("[SERVER]")} ${message}`);
};

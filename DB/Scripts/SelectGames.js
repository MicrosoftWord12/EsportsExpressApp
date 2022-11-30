const conn = require("../Connection/Connection");

module.exports = {
    async getGames() {
        return new Promise((resolve, reject) => {
            conn().query("select * from game", (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    },

    async getGamesNames() {
        return new Promise((resolve, reject) => {
            conn().query("select name from game", (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    },
};

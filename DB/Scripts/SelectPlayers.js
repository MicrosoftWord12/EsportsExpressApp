const conn = require('../Connection/Connection');

module.exports = {
    async selectAllPlayers() {
        return new Promise((resolve, reject) => {
            conn().query('select * from player', (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    },

    async selectPlayerByEmail(email) {
        return new Promise((resolve, reject) => {
            conn().query('select player_id from player where email = ?', [email], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    },
};

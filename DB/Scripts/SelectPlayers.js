const conn = require("../Connection/Connection");

module.exports = {
    async selectAllPlayers() {
        return new Promise((resolve, reject) => {
            conn().query("select * from player", (err, result) => {
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
            conn().query("select player_id from player where email = ?", [email], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    },

    async selectPlayerById(id) {
        return new Promise((resolve, reject) => {
            conn().query("select * from player where player_id = ?", [id], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    },

    async selectPlayersByGameID(gameId) {
        return new Promise((resolve, reject) => {
            const sql = `select player.name as "playerName", player.player_id  as "playerId", player.email as "playerEmail" from player
                        inner join gamespecialisation using(player_id)
                        inner join game using(game_id)
                        where game_id = ?
                        `;
            conn().query(sql, [gameId], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    },
};

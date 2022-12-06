const conn = require('../Connection/Connection');

module.exports = {
    async selectGameSpecFromGameID(gameID) {
        return new Promise((resolve, reject) => {
            const sql = `select game.name as "Game Name", player.name as "Player Name"
                        from player 
                        inner join gamespecialisation using(player_id)
                        inner join game using (game_id)
                        order by game.name asc 
                        where game_id = ${gameID}`;

            conn().query(sql, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
    async selectGameSpecFromPlayerID(playerID) {
        return new Promise((resolve, reject) => {
            const sql = `select game.name as "Game Name", player.name as "Player Name"
                        from player 
                        inner join gamespecialisation using(player_id)
                        inner join game using (game_id)
                        order by game.name asc
                        where player_id = ?`;

            conn().query(sql, [playerID], (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    },
};

const conn = require("../Connection/Connection");
const ServerErrorMessage = require("../../Utils/ServerErrorMessage");

module.exports = (data, id) => {
    return new Promise((resolve, reject) => {
        let gameId = 0;

        for (const [key, value] of Object.entries(data)) {
            // console.log(`${key}: ${value}`);
            conn().query("select game_id from game where name = ?", [key], (err, result) => {
                if (err) {
                    ServerErrorMessage(err);
                } else {
                    gameId = result[0].game_id;
                    conn().query("insert into gamespecialisation (player_id, game_id) values (?, ?)", [id, gameId], (err, result) => {
                        if (err) {
                            reject(err);
                            return;
                        }

                        resolve(result);
                    });
                }
            });
        }
    });
};

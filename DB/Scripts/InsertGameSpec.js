const conn = require('../Connection/Connection');

module.exports = (data) => {
    return new Promise((resolve, result) => {
        console.log(data);
        conn().query('insert into esports2.gamespecialisation(player_id, game_id) value(?,?)', []);
    });
};

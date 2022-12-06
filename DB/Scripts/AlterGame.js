const conn = require('../Connection/Connection');

module.exports = async (data, id) => {
    return new Promise((resolve, reject) => {
        conn().query('update game set name = ?, duration = ?, team_size = ? where game_id = ?', [data.title, data.duration, data.team_size, id], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

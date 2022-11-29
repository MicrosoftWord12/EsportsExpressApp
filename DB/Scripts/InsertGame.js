const conn = require("../Connection/Connection");

module.exports = async (data) => {
    return new Promise((resolve, reject) => {
        conn().query("insert into game(name, duration, team_size) values(?, ?, ?)", [data.name, data.duration, data.team_size], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

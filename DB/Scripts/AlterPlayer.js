const conn = require("../Connection/Connection");

module.exports = async (data, id) => {
    return new Promise((resolve, reject) => {
        // alter player sql
        conn().query("update player set name = ?, email = ? where player_id = ?", [data.name, data.email, id], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

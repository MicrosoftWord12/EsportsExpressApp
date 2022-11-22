const conn = require("../Connection/Connection");
module.exports = (id) => {
    return new Promise((resolve, reject) => {
        conn().query("delete from player where player_id = ?", [id], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

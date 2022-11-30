const conn = require("../Connection/Connection");
module.exports = (id) => {
    return new Promise((resolve, reject) => {
        conn().query("delete from game where game_id = ?", [id], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

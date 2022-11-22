const conn = require("../Connection/Connection");

module.exports = async (data) => {
    return new Promise((resolve, reject) => {
        conn().query("insert into player (name, email) values", [data], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

const conn = require('../Connection/Connection');

module.exports = async () => {
    return new Promise((resolve, reject) => {
        conn().query('select * from player', (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

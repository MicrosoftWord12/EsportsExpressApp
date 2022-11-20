const mysql = require('mysql');
const { DBConnection } = require('../../config');

module.exports = () => {
    return mysql.createPool(DBConnection);
};

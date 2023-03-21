const pool = require('../config/db');

exports.list = () => {
    return new Promise(function(resolve, reject) {
        var sql = 'select * from users';
        pool.query(sql, (err, result)=> {
            if (err) reject(err);

            resolve(result);
        })
    });
};

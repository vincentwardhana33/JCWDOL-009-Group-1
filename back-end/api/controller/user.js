const usersModel = require('../model/users');

exports.list = async (req, res) => {
    usersModel.list()
    .then((result) => {
        res.json({
            status: 'ok',
            data: result
        });
    })
    .catch((err) => {
        console.error(err);

        res.status(500).json({
            status: "error",
            message: "Something went wrong."
        })
    })
}

// exports.insertUser = async (req, res) => {
//     let email = req.body.email;
//     let password = req.body.password;
//     let age = req.body.age;

//     var sql = `insert into users (email, password, age) values (${email}, ${password}, ${age})`;
//     pool.query(sql, (err, result)=> {
//         if (err) {
//             res.status(500).json()
//         };

//         res.json({
//             status: 'ok',
//             message: "data successfully inserted"
//         })
//     })
// }
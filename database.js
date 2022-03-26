const {
    createPool
} = require('mysql2');
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "MySQLServer@1",
    database: "interview_creation_portal",
    connectionlimit: 10
})

pool.query(`select* from candidates`, (err, result) => {

        if (err) {
            return console.log(err);
        }
        return console.log(result);

    })
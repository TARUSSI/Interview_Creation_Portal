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

function newFunction() {
    pool.query("select* from interviewer", (err, interviewer, fields) => {

        if (err) {
            return console.log(err);
        }
        return console.log(interviewer);

    });
}

module.exports = {
    interviewerFunction : function() {
        pool.query("select* from interviewer", (err, interviewer, fields) => {

            if (err) {
                return console.log(err);
            }
            return interviewer;
    
        });

    }
}
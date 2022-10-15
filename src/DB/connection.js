const mysql = require('mysql');

// MySQL Cridentials
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "8299", //password
    database: 'demo', //database
    multipleStatements: true
});
// Connection:
con.connect((err) => {
    if(err){
        throw err;
    }else{
        console.log("DB connected successfully");
    }
})
module.exports = con;
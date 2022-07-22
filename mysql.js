var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodeDB'
});

connection.connect();

connection.query("create table mainTBL (firstName varchar(10), lastName varchar(10), userName varchar(10), password varchar(10), grade varchar(10), classNum varchar(10), number varchar(10));",
    function(error, results, fields) {
        if (error) console.error(error);
        console.log(results);
    })

connection.end();
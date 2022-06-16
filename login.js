const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('express');
const { response } = require('express');

const page = require('./page');

var mysql = require('mysql');
const { NULL } = require('mysql/lib/protocol/constants/types');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodeDB'
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(`${__dirname}`));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use((request, response) => {
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const userName = request.body.userName;
    const password = request.body.password;
    const grade = request.body.grade;
    const classNum = request.body.classNum;
    const number = request.body.number;

    const loginUserName = request.body.loginUserName;
    const loginPassword = request.body.loginPassword;

    if (request.body.formStyle == "sign") {
        db.query(`
        insert into mainTBL(firstName, lastName, userName, password, grade, classNum, number) values(?,?,?,?,?,?,?)`, [firstName, lastName, userName, password, grade, classNum, number],
            function(error, result) {
                if (error) {
                    return response.write(error.sqlMessage);
                }
                response.writeHead(302, { Location: `/` });
                return response.end();
            }
        )
    } else if (request.body.formStyle == "login") {
        db.query(`
        select userName, password from mainTBL where userName like '${loginUserName}' and password like '${loginPassword}'`,
            function(error, result) {
                if (error) {
                    response.write(error.sqlMessage);
                }
                console.log("login");
                response.writeHead(302, { Location: `/` });
                response.end();
            }
        )
    }


})

app.listen(3000, () => {
    console.log('3000');
});
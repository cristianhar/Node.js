import mysql from 'mysql2';

const connectInfo = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
}

const connection = mysql.createConnection(connectInfo);

connection.connect(function(err) {
    if(err) throw err;
    console.log('Connected to MySQL database');
});

export default connection;
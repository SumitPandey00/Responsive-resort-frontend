const mysql = require('mysql2')

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'Sumit',
    password: '1285072003',
    database:'resort-backend'
})
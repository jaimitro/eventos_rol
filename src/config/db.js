//CONFIGURACION MYSQL
const mysql = require("mysql2");
require('dotenv').config(); //libreria para traer variables de entorno

const conexionSQL = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTSQL,
    database: process.env.DATABASE
};

const poolSQL = mysql.createConnection(conexionSQL);
module.exports = poolSQL.promise();
const dotenv = require('dotenv')
dotenv.config();
const tokenator = require("jsonwebtoken");

//crea token, es llamado desde loginUsuario() en user.controller.js
const nuevoToken = (usuario, fecha) => {
    const datosACodificar = {
        userId: usuario.userId,
        username: usuario.username,
        role: usuario.role,
        logDate: fecha
    }
    const firmaToken = process.env.FIRMATOKEN; //string llave para codificar el objeto guardada en variable de entorno
    token = tokenator.sign(datosACodificar, firmaToken);
    return token;
}

module.exports = {
    nuevoToken,
}
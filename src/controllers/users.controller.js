const modelUsuarios = require("../models/users.model.js");
const encriptador = require("bcrypt");
const helpers = require("../utils/helpers.js");

const verUnUsuario = async (req, res, next) => {
    try {
        const userFound = await modelUsuarios.getUsuarioPorId(req.params.userId);
        if (!userFound) {
            return res.status(404).json({ message: "El usuario no existe." });
        }
        res.json(userFound);
    } catch (error) {
        next(error);
    }
}

const registrarNuevoUsuario = async (req, res, next) => {
    try {

        req.body.password = encriptador.hashSync(req.body.password, 8);//machaco la clave password del objeto body con la encriptacion del password escrito por el usuario
        const nuevoUsuario = await modelUsuarios.postNuevoUsuario(req.body);
        if (nuevoUsuario === -1) {
            return res.status(400).json({ message: "El usuario no se ha insertado correctamente." });
        }
        res.json(await modelUsuarios.getUsuarioPorId(nuevoUsuario));//envio el nuevo usuario buscado con getUsuarioId

    } catch (error) {
        next(error);
    }
}

const loginUsuario = async (req, res, next) => {
    try {
        const userFound = await modelUsuarios.getUsuarioPorNombre(req.body.username);
        if (!userFound) {
            return res.status(404).json({ message: "El usuario no existe o la contraseña no es correcta." });
        }
        const comparacion = await encriptador.compare(req.body.password, userFound.password);
        if (!comparacion) {
            return res.status(401).json({ message: "El usuario no existe o la contraseña no es correcta." });
        }
        const nuevoToken = helpers.nuevoToken(userFound, new Date()); //CREAMOS TOKEN, le he pasado la fecha de creacion tambien
        res.status(200).json({
            message: "El usuario y la contraseña son correctos.",
            token: nuevoToken
        });

    } catch (error) {
        next(error);
    }
}
module.exports = {
    registrarNuevoUsuario,
    loginUsuario,
    verUnUsuario
}
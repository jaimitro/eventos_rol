const tokenator = require("jsonwebtoken");
const { getUsuarioPorNombre } = require("../models/users.model");
const { getCantidadRegistros } = require("../models/events.model.js");

const dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const fs = require("node:fs/promises");//la version promises usa promesas
require('dotenv').config(); //libreria para traer variables de entorno

const crearLog = (req, res, next) => {
    const fecha = dayjs().format("DD-MM-YYYY HH:mm:ss");
    const url = req.url;
    const metodo = req.method;
    const datos = fecha + " METHOD: " + metodo + " URL: " + url + "\n";
    fs.appendFile("./main.log", datos);//agregar datos a fichero o crear fichero si no existe
    next();
}

const validarFormLogin = (req, res, next) => {
    const cuerpo = req.body;
    if (!cuerpo.username || !cuerpo.password) return res.status(400).json({ message: "Rellena los campos usuario y contraseña" });
    next();
}

const validarFormNuevoUsuario = async (req, res, next) => {
    const cuerpo = req.body;
    //si algún campo no está relleno
    if (!cuerpo.username || !cuerpo.password || !cuerpo.role) return res.status(400).json({ message: "Rellena los campos usuario, contraseña y role" });
    //si el campo role es diferente de admin o regular
    if (cuerpo.role !== 'admin' && cuerpo.role !== 'regular') return res.status(400).json({ message: "El role ha de ser admin o regular" });
    //si ya existe el nombre de usuario
    const usuario = await getUsuarioPorNombre(cuerpo.username);
    if (usuario) return res.status(400).json({ message: "El nombre de usuario ya existe en la base de datos. Escriba otro nombre de usuario." });
    next();
}

const validarToken = (req, res, next) => {
    const token = req.headers['authorization'];
    //si no hay authorization en la cabecera
    if (!token) return res.status(403).json({ mensaje: "Es necesario el token de autenticación." });
    //si el token no coincide con el del usuario
    try {
        const firmaToken = process.env.FIRMATOKEN;//cogemos la llave de la variable de entorno
        const tokenDesencriptado = tokenator.verify(token, firmaToken);
        if (tokenDesencriptado.role == "admin") {
            req.body.esAdmin = true;//añado clave esAdmin booleana al body para comprobar si el usuario es administrador
            req.body.adminId = tokenDesencriptado.userId; //guardo el userId para cuando haya logeado un admin pueda usar su id para añadir/modificar
        }
    } catch (error) {
        return res.status(403).json({ mensaje: "El token es incorrecto." });
    }
    next();
}

const validarAdmin = (req, res, next) => {
    if (!req.body.esAdmin) return res.status(403).json({ mensaje: "Es necesario ser usuario administrador para hacer esto." });
    next();
}

const validarFormEvento = async (req, res, next) => {
    const cuerpo = req.body;
    console.log(cuerpo);

    //si algún campo no está relleno / OJO el campo description no es obligatorio
    if (!cuerpo.book || !cuerpo.campaign || !cuerpo.date || !cuerpo.location || !cuerpo.duration || !cuerpo.dungeonMaster) {
        return res.status(400).json({ message: "Los campos book, campaign, date, location, duration y dungeonMaster son obligatorios." });
    }

    //si el campo date tenga el formato correcto
    const fechaValida = dayjs(cuerpo.date, 'YYYY-MM-DD', true).isValid();
    if (!fechaValida) {
        return res.status(400).json({ message: "El campo fecha tiene un formato incorrecto. Ha de ser YYYY-MM-DD" });
    }

    //si duration contiene valores distintos a los tres posibles
    if (cuerpo.duration !== "One Shot(1d)" && cuerpo.duration !== "Aventura Corta(2d-5d)" && cuerpo.duration !== "Campaña(6d)") {
        return res.status(400).json({ message: "El campo duration solo puede contener los uno de los tres valores determinados (One Shot(1d) / Aventura Corta(2d-5d) / Campaña(6d))." });
    }

    next();
}

const validarPaginacion = async (req, res, next) => {
    if (req.query.page == 0 || req.query.page == "" || isNaN(req.query.page)) return res.status(400).json({ message: "La página solicitada ha de comenzar por 1" });
    const paginaSolicitada = Number(req.query.page);
    if (req.query.quant == 0 || req.query.page == "" || isNaN(req.query.page)) return res.status(400).json({ message: "La cantidad de registros por página ha de ser mayor de 0" });
    const cantidadPorPagina = Number(req.query.quant);

    const registros = await getCantidadRegistros();
    const PaginasTotales = Math.ceil(registros / cantidadPorPagina);
    if (paginaSolicitada > PaginasTotales) return res.status(400).json({ message: "La página solicitada no existe. Cantidad de páginas totales: " + PaginasTotales });
    next();
}

module.exports = {
    crearLog,
    validarToken,
    validarFormLogin,
    validarFormNuevoUsuario,
    validarAdmin,
    validarFormEvento,
    validarPaginacion
}
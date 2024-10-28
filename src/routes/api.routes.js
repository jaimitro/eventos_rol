// URL BASE: /api
const express = require("express");
const enrutador = express.Router();
const validadores = require("../utils/middlewares.js");

enrutador.use("/users", require("./api/users.routes.js"));
enrutador.use("/events", validadores.validarToken, require("./api/events.routes.js"));

module.exports = enrutador;
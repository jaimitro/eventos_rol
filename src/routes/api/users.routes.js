//URL BASE: /api/users
const express = require("express");
const enrutador = express.Router();
//const router = require('express').Router(); SI QUIERO ESCRIBIR LAS MISMAS DOS LINEAS DE ARRIBA EN UNA SOLA

const controllerUsers = require("../../controllers/users.controller.js");
const validadores = require("../../utils/middlewares.js");

enrutador.post("/register", validadores.validarFormNuevoUsuario, controllerUsers.registrarNuevoUsuario);
enrutador.post("/login", validadores.validarFormLogin, controllerUsers.loginUsuario);
enrutador.get("/profile/:userId", validadores.validarToken, controllerUsers.verUnUsuario);

module.exports = enrutador;
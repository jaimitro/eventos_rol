//URL BASE: /api/events
const express = require("express");
const enrutador = express.Router();
//const router = require('express').Router(); SI QUIERO ESCRIBIR LAS MISMAS DOS LINEAS DE ARRIBA EN UNA SOLA

const controllerEvents = require("../../controllers/events.controller.js");
const validaciones = require("../../utils/middlewares.js");

enrutador.get("/", controllerEvents.verTodosEventos);

enrutador.get("/libro", controllerEvents.verEventosPorLibro);
enrutador.get("/upcoming", controllerEvents.verTodosEventosProximos);
enrutador.get("/date", controllerEvents.verEventosPorFechas);
enrutador.get("/page", validaciones.validarPaginacion, controllerEvents.verTodosEventosPaginados);

enrutador.get("/:eventId", controllerEvents.verUnEventoPorId);
enrutador.post("/", validaciones.validarAdmin, validaciones.validarFormEvento, controllerEvents.nuevoEvento);
enrutador.put("/:eventId", validaciones.validarAdmin, validaciones.validarFormEvento, controllerEvents.actualizarEvento);
enrutador.delete("/:eventId", validaciones.validarAdmin, controllerEvents.eliminarEvento);

module.exports = enrutador;
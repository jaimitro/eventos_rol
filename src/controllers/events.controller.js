const dayjs = require("dayjs");
const modelEvents = require("../models/events.model.JS");

const verTodosEventos = async function (req, res, next) {
    try {
        const todosEventos = await modelEvents.getTodosEventos();
        res.json(todosEventos);

    } catch (error) {
        next(error);
    }
};

const verTodosEventosPaginados = async function (req, res, next) {
    try {
        const todosEventos = await modelEvents.getTodosEventosPaginados(req.query.page, req.query.quant);
        res.json(todosEventos);

    } catch (error) {
        next(error);
    }
};

const verUnEventoPorId = async (req, res, next) => {
    try {
        const evento = await modelEvents.getEventoPorId(req.params.eventId);
        if (!evento) {
            return res.status(404).json({ message: "El evento no existe." });
        }
        res.json(evento);

    } catch (error) {
        next(error);
    }
};

const nuevoEvento = async (req, res, next) => {
    try {
        const cuerpo = req.body
        const nuevoEvento = await modelEvents.postNuevoEvento(cuerpo);
        if (nuevoEvento === -1) {
            return res.status(400).json({ message: "La inserción no se ha realizado correctamente." });
        }
        const eventFound = await modelEvents.getEventoPorId(nuevoEvento);
        res.json(eventFound);

    } catch (error) {
        next(error);
    }
};

const actualizarEvento = async (req, res, next) => {
    try {
        const eventId = req.params.eventId;
        const cuerpo = req.body
        const EventoActualizado = await modelEvents.putActualizarEvento(cuerpo, eventId);
        if (EventoActualizado === -1) {
            return res.status(400).json({ message: "La actualización no se ha realizado correctamente." });
        }
        const eventFound = await modelEvents.getEventoPorId(EventoActualizado);
        res.json(eventFound);

    } catch (error) {
        next(error);
    }
};

const eliminarEvento = async function (req, res, next) {
    try {
        const eventId = req.params.eventId;

        const eventoABorrar = await modelEvents.getEventoPorId(eventId);//recupero antes de borrar
        if (!eventoABorrar) {
            return res.status(404).json({ message: "El evento que tratas de eliminar no existe." });
        }

        const eventoEliminado = await modelEvents.deleteEvento(eventId);
        if (eventoEliminado === -1) {
            return res.status(400).json({ message: "La eliminación no se ha realizado correctamente." });
        }
        res.json(eventoABorrar);

    } catch (error) {
        next(error);
    }
};

//Retorna los eventos desde la fecha actual a un mes vista por orden de fecha ascendente
const verTodosEventosProximos = async (req, res, next) => {
    try {
        const from = dayjs();
        const to = dayjs().add(1, 'M');
        const proximosEventos = await modelEvents.getEventosPorFecha(from.format("YYYY-MM-DD"), to.format("YYYY-MM-DD"));
        res.json(proximosEventos);

    } catch (error) {
        next(error);
    }
};

const verEventosPorLibro = async (req, res, next) => {
    try {
        libro = req.query.book
        const eventos = await modelEvents.getEventosPorLibro(libro);
        if (!eventos) {
            return res.status(404).json({ message: "El libro " + libro + " no existe en la base de datos." });
        }
        res.json(eventos);

    } catch (error) {
        next(error);
    }
};

const verEventosPorFechas = async (req, res, next) => {
    try {
        const proximosEventos = await modelEvents.getEventosPorFecha(req.query.from, req.query.to);
        res.json(proximosEventos);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    verTodosEventos,
    verTodosEventosPaginados,
    verUnEventoPorId,
    nuevoEvento,
    actualizarEvento,
    eliminarEvento,
    verTodosEventosProximos,
    verEventosPorLibro,
    verEventosPorFechas
}


const poolSQL = require("../config/db.js");

const getTodosEventos = async () => {
    const [eventos] = await poolSQL.query("SELECT * FROM events;")
    return eventos;
}

const getEventoPorId = async (eventId) => {
    const [evento] = await poolSQL.query("SELECT * FROM events WHERE eventId=?", [eventId]);
    return (evento.length === 0) ? null : evento[0];
}

const getCantidadRegistros = async () => {
    const [rows] = await poolSQL.query("SELECT COUNT(*) AS suma FROM events");
    return Number(rows[0].suma);
}

const getTodosEventosPaginados = async (page = 1, quant = 10) => {
    //Si las variables llegasen hasta aquí sin valores o sin definir se aginaría por defecto 1/10
    start = Number(page - 1) * Number(quant);
    const [eventos] = await poolSQL.query("SELECT eventId,campaign FROM events LIMIT ?,?;", [start, Number(quant)])
    return eventos;
}

const postNuevoEvento = async ({ book, campaign, description, date, location, duration, dungeonMaster, adminId }) => {
    const consulta = "INSERT INTO events (book, campaign, description, date, location, duration, dungeonMaster, userIdCreator) VALUES (?,?,?,?,?,?,?,?);";
    const valores = [book, campaign, description, date, location, duration, dungeonMaster, adminId];
    const [nuevoEvento] = await poolSQL.query(consulta, valores);
    return (nuevoEvento.affectedRows === 0) ? -1 : nuevoEvento.insertId;
}

const putActualizarEvento = async ({ book, campaign, description, date, location, duration, dungeonMaster, adminId }, eventId) => {
    const consulta = "UPDATE events SET book=?, campaign=?, description=?, date=?, location=?, duration=?, dungeonMaster=?, userIdCreator=? WHERE eventId=?;";
    const valores = [book, campaign, description, date, location, duration, dungeonMaster, adminId, eventId];
    const [EventoActualizado] = await poolSQL.query(consulta, valores);
    return (EventoActualizado.affectedRows === 0) ? -1 : eventId;//en UPDATE no me devuelve el insertId porque no es un INSERT, devuelvo 0 o 1
}

const eliminarEvento = async (eventId) => {
    const eventoEliminado = await poolSQL.query("DELETE FROM events WHERE eventId=?", [eventId]);
    return (eventoEliminado.affectedRows === 0) ? -1 : eventId;
}

const getEventosPorFecha = async (from, to) => {
    const [eventos] = await poolSQL.query("SELECT * FROM events WHERE date between ? and ? ORDER BY date ASC;", [from, to]);
    return eventos;

}

const getEventosPorLibro = async (libro) => {
    const [eventos] = await poolSQL.query("SELECT * FROM events WHERE book=?", [libro]);
    return (eventos.length === 0) ? null : eventos;
}

module.exports = {
    getTodosEventos,
    getEventoPorId,
    getCantidadRegistros,
    getTodosEventosPaginados,
    postNuevoEvento,
    putActualizarEvento,
    deleteEvento: eliminarEvento,//solo por recordar que se puede cambiar el nombre retornado de la funcion
    getEventosPorFecha,
    getEventosPorLibro,
}
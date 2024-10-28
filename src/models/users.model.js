const poolSQL = require("../config/db.js");

const getUsuarioPorId = async (userId) => {
    const [usuario] = await poolSQL.query("SELECT * FROM users WHERE userId=?;", [userId]);
    return (usuario.length === 0) ? null : usuario[0];
}

const getUsuarioPorNombre = async (username) => {
    const [usuario] = await poolSQL.query("SELECT * FROM users WHERE username=?;", [username]);
    return (usuario.length === 0) ? null : usuario[0];
}

const postNuevoUsuario = async ({ username, password, role }) => {
    // OJO arriba ({ username, password, role }) lo que está haciendo es directamente el destructuring
    //del objeto cuerpo pasado por parametro desde users.controllers.js se podria haber traido cuerpo y hacer:
    //const { username, password, role } = cuerpo; PERO se supone que asi se ve mejor lo que traemos aqui
    const [nuevoUsuario] = await poolSQL.query("INSERT INTO users (username, password, role) VALUES (?,?,?);", [username, password, role]);
    if (nuevoUsuario.affectedRows === 0) {
        return -1;
    }
    return nuevoUsuario.insertId;
}

module.exports = {
    getUsuarioPorId,
    getUsuarioPorNombre,
    postNuevoUsuario,
}
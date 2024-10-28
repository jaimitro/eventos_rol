// Creation and configuration of the Express APP
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const { crearLog } = require('./utils/middlewares.js');

//escribir en un fichero la info de la peticion
app.use(crearLog);

// Route configuration
// Ex.
app.use('/api', require('./routes/api.routes.js'));

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json(err);
})

module.exports = app;
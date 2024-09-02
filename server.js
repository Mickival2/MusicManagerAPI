const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const musicRoutes = require('./routes/musicRoutes.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/music', musicRoutes);

// Conexion a Base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a la base de datos');
}).catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

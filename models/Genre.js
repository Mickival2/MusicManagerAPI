const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: String
});

module.exports = mongoose.model('Genre', genreSchema);

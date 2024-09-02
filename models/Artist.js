const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, enum: ['Artista', 'Grupo'], required: true },
    descripcion: String
});

module.exports = mongoose.model('Artist', artistSchema);

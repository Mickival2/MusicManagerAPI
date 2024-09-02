const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    artista: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    genero: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true },
    fechaLanzamiento: Date,
    duracion: Number, // en minutos
    rating: { type: Number, min: 0, max: 5 }
});

module.exports = mongoose.model('Album', albumSchema);

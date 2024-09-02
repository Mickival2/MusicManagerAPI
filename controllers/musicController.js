const Artist = require('../models/Artist');
const Genre = require('../models/Genre');
const Album = require('../models/Album');

// CRUD para Artistas
exports.createArtist = async (req, res) => {
    try {
        const artist = new Artist(req.body);
        await artist.save();
        res.status(201).json(artist);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(artist);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteArtist = async (req, res) => {
    try {
        await Artist.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Artista eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CRUD para Géneros
exports.createGenre = async (req, res) => {
    try {
        const genre = new Genre(req.body);
        await genre.save();
        res.status(201).json(genre);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(genre);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteGenre = async (req, res) => {
    try {
        await Genre.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Género eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CRUD para Álbumes
exports.createAlbum = async (req, res) => {
    try {
        const album = new Album(req.body);
        await album.save();
        res.status(201).json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate('artista').populate('genero');
        res.json(albums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteAlbum = async (req, res) => {
    try {
        await Album.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Álbum eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

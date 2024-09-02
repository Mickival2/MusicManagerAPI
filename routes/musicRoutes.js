const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

// Rutas para Artistas
router.post('/artists', musicController.createArtist);
router.get('/artists', musicController.getArtists);
router.put('/artists/:id', musicController.updateArtist);
router.delete('/artists/:id', musicController.deleteArtist);

// Rutas para Géneros
router.post('/genres', musicController.createGenre);
router.get('/genres', musicController.getGenres);
router.put('/genres/:id', musicController.updateGenre);
router.delete('/genres/:id', musicController.deleteGenre);

// Rutas para Álbumes
router.post('/albums', musicController.createAlbum);
router.get('/albums', musicController.getAlbums);
router.put('/albums/:id', musicController.updateAlbum);
router.delete('/albums/:id', musicController.deleteAlbum);

module.exports = router;
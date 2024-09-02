$(document).ready(function() {
    const apiUrl = 'http://localhost:3000/api';

    // Cargar Artistas
    function loadArtists() {
        $.get(`${apiUrl}/artists`, function(data) {
            $('#artistList').empty();
            data.forEach(artist => {
                $('#artistList').append(`
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${artist.nombre}</h5>
                            <p class="card-text">${artist.descripcion}</p>
                            <button class="btn btn-warning btn-edit-artist" data-id="${artist._id}">Editar</button>
                            <button class="btn btn-danger btn-delete-artist" data-id="${artist._id}">Eliminar</button>
                        </div>
                    </div>
                `);
            });
        });
    }

    // Agregar Artista
    $('#addArtistForm').on('submit', function(e) {
        e.preventDefault();
        const artist = {
            nombre: $('#artistName').val(),
            tipo: $('#artistType').val(),
            descripcion: $('#artistDescription').val(),
        };

        $.post(`${apiUrl}/artists`, artist, function() {
            loadArtists();
            $('#addArtistForm')[0].reset();
        });
    });

    // Editar Artista
    $('#artistList').on('click', '.btn-edit-artist', function() {
        const artistId = $(this).data('id');
        $.get(`${apiUrl}/artists/${artistId}`, function(data) {
            $('#artistName').val(data.nombre);
            $('#artistType').val(data.tipo);
            $('#artistDescription').val(data.descripcion);
            $('#addArtistForm').off('submit').on('submit', function(e) {
                e.preventDefault();
                const updatedArtist = {
                    nombre: $('#artistName').val(),
                    tipo: $('#artistType').val(),
                    descripcion: $('#artistDescription').val(),
                };

                $.ajax({
                    url: `${apiUrl}/artists/${artistId}`,
                    method: 'PUT',
                    data: updatedArtist,
                    success: function() {
                        loadArtists();
                        $('#addArtistForm')[0].reset();
                        $('#addArtistForm').off('submit').on('submit', function(e) {
                            e.preventDefault();
                            const newArtist = {
                                nombre: $('#artistName').val(),
                                tipo: $('#artistType').val(),
                                descripcion: $('#artistDescription').val(),
                            };
                            $.post(`${apiUrl}/artists`, newArtist, function() {
                                loadArtists();
                                $('#addArtistForm')[0].reset();
                            });
                        });
                    }
                });
            });
        });
    });

    // Eliminar Artista
    $('#artistList').on('click', '.btn-delete-artist', function() {
        const artistId = $(this).data('id');
        $.ajax({
            url: `${apiUrl}/artists/${artistId}`,
            method: 'DELETE',
            success: function() {
                loadArtists();
            }
        });
    });

    // Cargar Géneros
    function loadGenres() {
        $.get(`${apiUrl}/genres`, function(data) {
            $('#genreList').empty();
            data.forEach(genre => {
                $('#genreList').append(`
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${genre.nombre}</h5>
                            <p class="card-text">${genre.descripcion}</p>
                            <button class="btn btn-warning btn-edit-genre" data-id="${genre._id}">Editar</button>
                            <button class="btn btn-danger btn-delete-genre" data-id="${genre._id}">Eliminar</button>
                        </div>
                    </div>
                `);
            });
        });
    }

    // Agregar Género
    $('#addGenreForm').on('submit', function(e) {
        e.preventDefault();
        const genre = {
            nombre: $('#genreName').val(),
            descripcion: $('#genreDescription').val(),
        };

        $.post(`${apiUrl}/genres`, genre, function() {
            loadGenres();
            $('#addGenreForm')[0].reset();
        });
    });

    // Editar Género
    $('#genreList').on('click', '.btn-edit-genre', function() {
        const genreId = $(this).data('id');
        $.get(`${apiUrl}/genres/${genreId}`, function(data) {
            $('#genreName').val(data.nombre);
            $('#genreDescription').val(data.descripcion);
            $('#addGenreForm').off('submit').on('submit', function(e) {
                e.preventDefault();
                const updatedGenre = {
                    nombre: $('#genreName').val(),
                    descripcion: $('#genreDescription').val(),
                };

                $.ajax({
                    url: `${apiUrl}/genres/${genreId}`,
                    method: 'PUT',
                    data: updatedGenre,
                    success: function() {
                        loadGenres();
                        $('#addGenreForm')[0].reset();
                        $('#addGenreForm').off('submit').on('submit', function(e) {
                            e.preventDefault();
                            const newGenre = {
                                nombre: $('#genreName').val(),
                                descripcion: $('#genreDescription').val(),
                            };
                            $.post(`${apiUrl}/genres`, newGenre, function() {
                                loadGenres();
                                $('#addGenreForm')[0].reset();
                            });
                        });
                    }
                });
            });
        });
    });

    // Eliminar Género
    $('#genreList').on('click', '.btn-delete-genre', function() {
        const genreId = $(this).data('id');
        $.ajax({
            url: `${apiUrl}/genres/${genreId}`,
            method: 'DELETE',
            success: function() {
                loadGenres();
            }
        });
    });

    // Cargar Álbumes
    function loadAlbums() {
        $.get(`${apiUrl}/albums`, function(data) {
            $('#albumList').empty();
            data.forEach(album => {
                $('#albumList').append(`
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${album.titulo}</h5>
                            <p class="card-text">Artista: ${album.artista}</p>
                            <p class="card-text">Género: ${album.genero}</p>
                            <p class="card-text">Fecha de Lanzamiento: ${album.fecha_lanzamiento}</p>
                            <p class="card-text">Duración: ${album.duracion} minutos</p>
                            <p class="card-text">Rating: ${album.rating}</p>
                            <button class="btn btn-warning btn-edit-album" data-id="${album._id}">Editar</button>
                            <button class="btn btn-danger btn-delete-album" data-id="${album._id}">Eliminar</button>
                        </div>
                    </div>
                `);
            });
        });
    }

    // Agregar Álbum
    $('#addAlbumForm').on('submit', function(e) {
        e.preventDefault();
        const album = {
            titulo: $('#albumTitle').val(),
            artista: $('#albumArtist').val(),
            genero: $('#albumGenre').val(),
            fecha_lanzamiento: $('#albumReleaseDate').val(),
            duracion: $('#albumDuration').val(),
            rating: $('#albumRating').val(),
        };

        $.post(`${apiUrl}/albums`, album, function() {
            loadAlbums();
            $('#addAlbumForm')[0].reset();
        });
    });

    // Editar Álbum
    $('#albumList').on('click', '.btn-edit-album', function() {
        const albumId = $(this).data('id');
        $.get(`${apiUrl}/albums/${albumId}`, function(data) {
            $('#albumTitle').val(data.titulo);
            $('#albumArtist').val(data.artista);
            $('#albumGenre').val(data.genero);
            $('#albumReleaseDate').val(data.fecha_lanzamiento);
            $('#albumDuration').val(data.duracion);
            $('#albumRating').val(data.rating);
            $('#addAlbumForm').off('submit').on('submit', function(e) {
                e.preventDefault();
                const updatedAlbum = {
                    titulo: $('#albumTitle').val(),
                    artista: $('#albumArtist').val(),
                    genero: $('#albumGenre').val(),
                    fecha_lanzamiento: $('#albumReleaseDate').val(),
                    duracion: $('#albumDuration').val(),
                    rating: $('#albumRating').val(),
                };

                $.ajax({
                    url: `${apiUrl}/albums/${albumId}`,
                    method: 'PUT',
                    data: updatedAlbum,
                    success: function() {
                        loadAlbums();
                        $('#addAlbumForm')[0].reset();
                        $('#addAlbumForm').off('submit').on('submit', function(e) {
                            e.preventDefault();
                            const newAlbum = {
                                titulo: $('#albumTitle').val(),
                                artista: $('#albumArtist').val(),
                                genero: $('#albumGenre').val(),
                                fecha_lanzamiento: $('#albumReleaseDate').val(),
                                duracion: $('#albumDuration').val(),
                                rating: $('#albumRating').val(),
                            };
                            $.post(`${apiUrl}/albums`, newAlbum, function() {
                                loadAlbums();
                                $('#addAlbumForm')[0].reset();
                            });
                        });
                    }
                });
            });
        });
    });

    // Eliminar Álbum
    $('#albumList').on('click', '.btn-delete-album', function() {
        const albumId = $(this).data('id');
        $.ajax({
            url: `${apiUrl}/albums/${albumId}`,
            method: 'DELETE',
            success: function() {
                loadAlbums();
            }
        });
    });

    // Inicializar cargas
    loadArtists();
    loadGenres();
    loadAlbums();
});

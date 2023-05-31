
let buffer = [
    'detailFilm',
    'trailer'
];

const detailFilm = document.querySelector('#'+buffer[0]);
const trailerFilm = document.querySelector('#'+buffer[1]);
const penyimpanan = localStorage.id_movie;

fetch('https://api.themoviedb.org/3/movie/' + penyimpanan + '?api_key=66525b29b85ce6d6c0c9d93c71edb64b')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        console.log(data.genres);

        const elemenFilm = document.createElement('div');
        elemenFilm.className = 'detail';

        const posterFilm = document.createElement('div');
        posterFilm.className = 'poster';

        const judulFilm = document.createElement('div');
        judulFilm.className = 'judul';

        const keteranganFilm = document.createElement('div');
        keteranganFilm.className = 'deskripsi';

        const genresFilm = document.createElement('div');
        genresFilm.className = 'genre';

        const elemenPoster = document.createElement('img');
        elemenPoster.src = ('https://image.tmdb.org/t/p/w300') + data.poster_path;
        posterFilm.appendChild(elemenPoster);

        const elemenJudul = document.createElement('h2');
        elemenJudul.textContent = data.original_title;
        judulFilm.appendChild(elemenJudul);
        elemenFilm.appendChild(judulFilm);

        // Array
        for (let i = 0; i < data.genres.length; i++) {
            const elemenGenres = document.createElement('p');
            elemenGenres.textContent = data.genres[i].name + ',';
            genresFilm.appendChild(elemenGenres);
        }
        elemenFilm.appendChild(genresFilm);

        const elemenGambaran = document.createElement('p');
        elemenGambaran.textContent = data.overview;
        keteranganFilm.appendChild(elemenGambaran)
        elemenFilm.appendChild(keteranganFilm);

        //dilempar balik ke tag html
        detailFilm.appendChild(posterFilm);
        detailFilm.appendChild(elemenFilm);

    });

fetch('https://api.themoviedb.org/3/movie/' + penyimpanan + '/videos?api_key=66525b29b85ce6d6c0c9d93c71edb64b')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        console.log(data.results[0].key);

        const trailer = document.querySelector('div');
        trailer.className = 'trailer-film';

        const elemenTrailer = document.createElement('iframe');
        elemenTrailer.src = 'https://www.youtube.com/embed/' + data.results[0].key;
        trailer.appendChild(elemenTrailer);

        trailerFilm.appendChild(trailer);
    });



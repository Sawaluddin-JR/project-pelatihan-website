let buffer = [
    'sedang-main',
    'populer',
    'teratas',
    'akan-datang'
]

const playing = document.querySelector('.'+buffer[0]);
const populer = document.querySelector('.'+buffer[1]);
const toprating = document.querySelector('.'+buffer[2]);
const comingsoon = document.querySelector('.'+buffer[3]);

fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=66525b29b85ce6d6c0c9d93c71edb64b')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const pengambilan = data.results;
        pengambilan.forEach(d => {
            const elemenFilm = document.createElement('a');
            elemenFilm.className = 'sekarang';
            elemenFilm.href = 'detail.html';

            const elemenPoster = document.createElement('img');
            elemenPoster.src = ('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenFilm.appendChild(elemenPoster);
            elemenPoster.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenJudul = document.createElement('h5');
            elemenJudul.textContent = d.original_title;
            elemenFilm.appendChild(elemenJudul);
            elemenJudul.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenRilis = document.createElement('p');
            elemenRilis.textContent = d.release_date;
            elemenFilm.appendChild(elemenRilis);
            elemenRilis.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            playing.appendChild(elemenFilm);
        });
    });

fetch('https://api.themoviedb.org/3/movie/popular?api_key=66525b29b85ce6d6c0c9d93c71edb64b')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const pengambilan = data.results;
        pengambilan.forEach(d => {
            const elemenFilm = document.createElement('a');
            elemenFilm.className = 'popular';
            elemenFilm.href = 'detail.html';

            const elemenPoster = document.createElement('img');
            elemenPoster.src = ('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenFilm.appendChild(elemenPoster);
            elemenPoster.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenJudul = document.createElement('h5');
            elemenJudul.textContent = d.original_title;
            elemenFilm.appendChild(elemenJudul);
            elemenJudul.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenRilis = document.createElement('p');
            elemenRilis.textContent = d.release_date;
            elemenFilm.appendChild(elemenRilis);
            elemenRilis.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            populer.appendChild(elemenFilm);
        });
    });

fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=66525b29b85ce6d6c0c9d93c71edb64b')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const pengambilan = data.results;
        pengambilan.forEach(d => {
            const elemenFilm = document.createElement('a');
            elemenFilm.className = 'segera';
            elemenFilm.href = 'detail.html';

            const elemenPoster = document.createElement('img');
            elemenPoster.src = ('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenFilm.appendChild(elemenPoster);
            elemenPoster.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenJudul = document.createElement('h5');
            elemenJudul.textContent = d.original_title;
            elemenFilm.appendChild(elemenJudul);
            elemenJudul.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenRilis = document.createElement('p');
            elemenRilis.textContent = d.release_date;
            elemenFilm.appendChild(elemenRilis);
            elemenRilis.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            comingsoon.appendChild(elemenFilm);
        });
    });

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=66525b29b85ce6d6c0c9d93c71edb64b')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        const pengambilan = data.results;
        pengambilan.forEach(d => {
            const elemenFilm = document.createElement('a');
            elemenFilm.className = 'rating-atas';
            elemenFilm.href = 'detail.html';

            const elemenPoster = document.createElement('img');
            elemenPoster.src = ('https://image.tmdb.org/t/p/w154') + d.poster_path;
            elemenFilm.appendChild(elemenPoster);
            elemenPoster.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenJudul = document.createElement('h5');
            elemenJudul.textContent = d.original_title;
            elemenFilm.appendChild(elemenJudul);
            elemenJudul.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })

            const elemenRilis = document.createElement('p');
            elemenRilis.textContent = d.release_date;
            elemenFilm.appendChild(elemenRilis);
            elemenRilis.addEventListener('click', function () {
                localStorage.setItem('id_movie', d.id)
            })
            toprating.appendChild(elemenFilm);
        });
    });

const header = document.querySelector('header');
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
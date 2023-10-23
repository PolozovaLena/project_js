'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let nameMovies, 
    ratingMovies;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for(let i = 0; i < 2; i++) {
    nameMovies = prompt('Один из последних просмотренных фильмов?', ''),
    ratingMovies = prompt('Насколько оцените его?', '');

    if (nameMovies.length != 0 && nameMovies.length != '' && nameMovies.length < 50 && ratingMovies.length !=0 && ratingMovies.length != '') {
        personalMovieDB.movies[nameMovies] = ratingMovies;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);
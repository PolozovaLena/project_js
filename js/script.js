'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const nameMovies = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  ratingMovies = prompt('Насколько оцените его?', '');
        
            if (nameMovies.length != 0 && nameMovies.length != '' && nameMovies.length < 50 && ratingMovies.length !=0 && ratingMovies.length != '') {
                personalMovieDB.movies[nameMovies] = ratingMovies;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
            if (genre == null || genre === '') {
                console.log("Вы ввели некорректные данные или не ввели их вовсе")
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((value, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${value}`);
        });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB = true;
        }
    }
};
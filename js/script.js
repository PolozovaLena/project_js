"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const nameMovies1 = prompt("Один из последних просмотренных фильмов?", ""),
      ratingMovies1 = prompt("Насколько оцените его?", ""),
      nameMovies2 = prompt("Один из последних просмотренных фильмов?", ""),
      ratingMovies2 = prompt("Насколько оцените его?", "");

personalMovieDB.movies[nameMovies1] = ratingMovies1;
personalMovieDB.movies[nameMovies2] = ratingMovies2;

console.log(personalMovieDB);
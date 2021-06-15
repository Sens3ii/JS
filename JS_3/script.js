/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство private. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных

genres

P.S. Функции вызывать не обязательно*/

'use strict';

function start() {
    let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    return numberOfFilms;
}


function rememberMyFilms() {
    for (let int = 0; int < 2; int++) {
        let movieName = prompt('Один из последних просмотренных фильмов?', ''),
            movieRating = prompt('На сколько оцените его?', '');

        if (movieName != '' && movieRating != '' && movieName != null &&
            movieRating != null && movieName.length < 50) {
            personalMovieDB.movies[movieName] = movieRating;
            continue;
        }
        int--;
    }
}

function createDB() {
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };
    return personalMovieDB;
}

function checkNumberOfFilms() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else if (personalMovieDB.count <= 30) {
        console.log("Вы классический зритель")
    } else {
        console.log("Произошла ошибка")
    }
}

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let int = 1; int < 4; int++) {
        let genre = prompt(`Ваш любимый жанр под номером ${int}`, '');
        if (genre != '' && genre != null && genre.length < 50) {
            personalMovieDB.genres.push(genre);
            continue;
        }
        int--;
    }
}


let numberOfFilms = start();

const personalMovieDB = createDB();

rememberMyFilms();

checkNumberOfFilms();

writeYourGenres();

showMyDB();
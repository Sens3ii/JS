/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



'use strict';
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        this.count = numberOfFilms;
    },

    rememberMyFilms: function () {
        for (let int = 0; int < 2; int++) {
            let movieName = prompt('Один из последних просмотренных фильмов?', ''),
                movieRating = prompt('На сколько оцените его?', '');
            if (movieName != '' && movieRating != '' && movieName != null &&
                movieRating != null && movieName.length < 50) {
                this.movies[movieName] = movieRating;
                continue;
            }
            int--;
        }
    },

    checkNumberOfFilms: function () {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count > 30) {
            console.log("Вы киноман");
        } else if (this.count <= 30) {
            console.log("Вы классический зритель");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (this.private === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenre: function () {
        for (let int = 1; int < 4; int++) {
            let genre = prompt(`Ваш любимый жанр под номером ${int}`, '');
            if (genre != '' && genre != null && genre.length < 50) {
                this.genres.push(genre);
                continue;
            }
            int--;
        }
        this.showGenres();
    },
    toggleVisibleMyDB: function () {
        console.log(`Приватность: ${this.private}`);
        this.private = !this.private;
        console.log(`New Приватность: ${this.private}`);
    },
    showGenres: function () {
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
personalMovieDB.start();
personalMovieDB.checkNumberOfFilms();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenre();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';


document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const advertisings = document.querySelectorAll('.promo__adv img'),
        promoList = document.querySelector('.promo__interactive-list'),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = document.querySelector('.promo__genre'),
        input = document.querySelector('.adding__input'),
        addBtn = document.querySelector('.add button'),
        checkbox = document.querySelector('[type="checkbox"]');


    const removeAdds = () => {
        advertisings.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        promoGenre.textContent = 'Драма';
        promoBg.style.background = 'url("img/bg.jpg")';
    };

    const addMovies = () => {
        promoList.innerHTML = '';
        movieDB.movies.sort().forEach((film, i) => {
            promoList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>`;
        });
        let deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach((btn, i) => {
            btn.addEventListener('click', (event) => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addMovies();
            });
        });
    };

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let movieName = input.value;
        if (movieName.length > 21) {
            movieName = movieName.slice(0, 21) + '...';
        }
        movieDB.movies.push(movieName + '');
        if (checkbox.checked) {
            console.log("Добавляем любимый фильм");
            checkbox.checked = false;
        }
        input.value = '';
        addMovies();
    });





    removeAdds();
    makeChanges();
    addMovies();
});
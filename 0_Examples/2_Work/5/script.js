'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function () {
        console.log('My name is ' + name);
    };

}

User.prototype.exit = function (name) {
    console.log(`Пользователь под именем ${name} вышел.`);
};

const ivan = new User('Ivan', 33);
"use strict";

let firstname = prompt("Назовите Ваше имя", "");
while (firstname == null || !firstname) {
  firstname = prompt("Имя введено некорректно, попробуйте еще раз");
}

let surname = prompt("Назовите Вашу фамилию", "");
while (surname == null || !surname) {
  surname = prompt("Некорректный ввод, попробуйте еще раз");
}

let lastname = prompt("Назовите Ваше отчество", "");
while (lastname == null || !lastname) {
  lastname = prompt("Некорректный ввод, попробуйте еще раз");
}

let age = prompt("Укажите Ваш возраст", "");
while (isNaN(parseInt(age))) {
  age = prompt("Нужно написать число");
}

age = parseInt(age);

const ageInDays = age * 365;
const ageInFiveYears = +age + 5;

let gender = confirm("Ваш пол - мужской?");
let maleFemale = gender === true ? "мужчина" : "женщина";

let rest = "Пенсия";
let onRest =
  (age >= 63 && maleFemale === "мужчина") ||
  (age >= 58 && maleFemale === "женщина")
    ? "да"
    : "нет";

alert(`Ваше ФИО: ${surname} ${firstname} ${lastname}
      Ваш возраст в годах: ${age}
      Ваш возраст в днях: ${ageInDays}
      Ваш возраст через 5 лет: ${ageInFiveYears}
      Ваш пол: ${maleFemale}
      Вы на пенсии: ${onRest}`);

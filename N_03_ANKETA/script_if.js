"use strict";

let firstname = prompt('Назовите Ваше имя', '');
while (firstname == null || !firstname) {
  firstname = prompt('Имя введено некорректно, попробуйте еще раз');
}

let surname = prompt("Назовите Вашу фамилию", "");
while (surname == null || !surname) {
  surname = prompt('Некорректный ввод, попробуйте еще раз');
}

let lastname = prompt("Назовите Ваше отчество", "");
while (lastname == null || !lastname) {
  lastname = prompt('Некорректный ввод, попробуйте еще раз');
}

let age = prompt("Укажите Ваш возраст", "");
while(isNaN(parseInt(age))) {
   age = prompt('Нужно написать число');
}

age = ( parseInt(age));

const ageInDays = (age * 365);
const ageInFiveYears = (+age + 5);

let gender = confirm("Ваш пол - мужской?");
if (gender) {
    gender = 'мужчина';
} else {
    gender = 'женщина';
}
let rest = "Пенсия";
if (age >= 63 && (gender = "мужчина")) {
  rest = "да";
} else {
  rest = "нет";
}

if ((age >= 58)  && (gender = "женщина")) {
  rest = "да";
} else {
  rest = "нет";
}

alert(`Ваше ФИО: ${surname} ${firstname} ${lastname}
      Ваш возраст в годах: ${age}
      Ваш возраст в днях: ${ageInDays}
      Ваш возраст через 5 лет: ${ageInFiveYears}
      Ваш пол: ${gender}
      Вы на пенсии: ${rest}`)




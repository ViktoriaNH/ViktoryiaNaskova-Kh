"use strict";

class ObjStorageFunc {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  emptyObject = {};
  
  addValue(key, value) {
    this.emptyObject[key] = value;
  }
  getValue(key) {
    return this.emptyObject[key];
  }
  deleteValue(key) {
    if (key in this.emptyObject) {
      delete this.emptyObject[key];
      return true;
    } else {
      return false;
    }
  }
  getKeys() {
    let arrayKeys = [];
    for (let key in this.emptyObject) {
      arrayKeys.push(key);
    }
    return arrayKeys;
  }
}
const drinkStorage = new ObjStorageFunc();

document.getElementById("add").onclick = function addInformation() {
  let nameDrink = prompt("Введите название напитка", "");
  nameDrink = nameDrink.toLowerCase();
  let alcohol = confirm(
    'Напиток алкогольный? Если да, нажмите "ОК", если нет, нажмите "Отмена"'
  );
  let alcoholDrink = alcohol === true ? "Да" : "Нет";
  let formulaDrink = prompt("Введите ингридиенты для приготовления коктейля");
  const informationOfDrinks = {};
  informationOfDrinks.nameDrink = nameDrink;
  informationOfDrinks.alcohol = alcoholDrink;
  informationOfDrinks.formulaDrink = formulaDrink;
  drinkStorage.addValue(nameDrink, informationOfDrinks);
};

document.getElementById("get").onclick = function getInformation() {
  let nameDrink = prompt("Введите название напитка");
  nameDrink = nameDrink.toLowerCase();
  let current = drinkStorage.getValue(nameDrink);
  if (current === undefined) {
    alert("Такого напитка нет в базе");
  } else {
    alert(
      `
            Напиток: ${current.nameDrink}
            Алкогольный или нет: ${current.alcohol}
            Состав напитка: ${current.formulaDrink}
            `
    );
  }
};
document.getElementById("delete").onclick = function deleteInformation() {
  let nameDrink = prompt("Введите название напитка");
  nameDrink = nameDrink.toLowerCase();
  if (drinkStorage.deleteValue(nameDrink)) {
    alert("Напиток удален");
  } else {
    alert("такого напитка нет в базе");
  }
};

document.getElementById("list").onclick = function listDrinks() {
  let drinkList = drinkStorage.getKeys();
  if (drinkList.length === 0) {
    alert(
      'Список напитков пуст, нажмите "ВВОД ИНФОРМАЦИИ О НАПИТКЕ", чтобы добавить напиток в список'
    );
  } else {
    alert(`Напитки в списке: ${drinkList}`);
  }
};

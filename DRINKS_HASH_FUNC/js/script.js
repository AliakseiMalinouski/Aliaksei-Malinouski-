"use strict"

document.querySelector(".info_item").addEventListener('click', function () {
    let nameDrinkS = prompt('Введите название напитка:');
    let nameDrink = nameDrinkS.trim().toLocaleLowerCase();
    let objTypeAndWay = {};
    objTypeAndWay.name = nameDrink;
    objTypeAndWay.type = confirm(nameDrink + ' - это алкольный напиток?');
    if (objTypeAndWay[1] === false) {
        objTypeAndWay.type = 'Неалкогольный';
    }
    else {
        objTypeAndWay.type = 'Алкогольный';
    }
    let wayS = prompt('Введите, пожалуйста, рецепт вашего напитка:');
    let way = wayS.trim().toLocaleLowerCase();
    objTypeAndWay.way = way;
    console.log(objTypeAndWay);
});

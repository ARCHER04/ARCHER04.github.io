/*let calcul ={
    price:
    [
        [100,200,300],
        [1000,2000,3000],
        [10000,20000,30000],
    ],
    days:
    [
        [1,2,3],
        [10,20,30],
        [100,200,300],
    ],
    activeCalcul(saytType,disType,adaptType){
        let sum = parseInt(calcul.price[0][saytType-1]) + parseInt(calcul.price[1][disType-1]) + parseInt(calcul.price[2][adaptType-1]);
        let days = parseInt(calcul.days[0][saytType-1]) + parseInt(calcul.days[1][disType-1]) + parseInt(calcul.days[2][adaptType-1]);
        alert("Стоимость: "+ sum +" руб "+"\t Сроки: "+ days+" дней ");
    }
}
let sayt,dis,adapt;
function qunAns(){
    sayt=prompt("Тип сайта: 1-Сайт-визитка , 2-Корпоративный сайт , 3-Интернет-магазин");
    if(sayt !=1 && sayt!=2 && sayt!=3){
        alert("Нет варианта ответа");
        qunAns();
        return;
    }
    dis=prompt("Дизайн: 1-Шаблонный , 2-Уникальный , 3-WOW-Дизайн");
    if(dis !=1 && dis!=2 && dis !=3){
        alert("Нет варианта ответа");
        qunAns();
        return;
    }
    adapt=prompt("Адаптивность: 1-Только ПК , 2-Только мобильный сайт , 3-ПК + Мобильный");
    if(adapt !=1 && adapt!=2 && adapt!=3){
        alert("Нет варианта ответа");
        qunAns();
        return;
    }
    calcul.activeCalcul(sayt, dis, adapt);
}

qunAns();*/
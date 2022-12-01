/*
Створіть програму секундомір.
* Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
* При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий
* Виведення лічильників у форматі ЧЧ:ММ:СС
* Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції
*/

//створюємо перемінні для рахування секунд хвилин та годин
let countChas = 1;
let countMin = 1;
let count = 1;
let interval;
//створюємо змінну запобіжник щоб не зламати "наш" лічильник яка не дасть запустити лічильник коли вже його запущено
let flag = false;

//знаходимо кнопку старт та задаємо їй дію по кліку по кнопці починати рахувати
const start = document.querySelector(".start");
start.onclick = () => {
    //перевіряємо наш "запобіжник". Якщо він вімкнений - запускаємо лічильник і передаємо нашу функцію та інтервал 1сек
    if(!flag){
    interval = setInterval(counter, 1000);
    document.body.querySelector("div > div").className = "green";
    //після запуску перемикаємо запобіжник
    flag = true;
    };
};

//знаходимо кнопку стоп та задаємо їй дію зупинки інтервалу по кліку
const stop = document.querySelector(".stop");
stop.onclick = () => {
    clearInterval(interval);
    //міняємо фон на червоний
    document.body.querySelector("div > div").className = "red";
    //перемикаєм наш "запобіжник"
    flag = false;
};

//знаходимо кнопку ресет та скидаємо всі лічильники на нулі по кліку
const reset = document.querySelector(".reset");
reset.onclick = () => {
    //змінюємо текст в лічильниках на нулі
    document.body.querySelector(".sec").innerHTML = "00"
    document.body.querySelector(".min").innerHTML = "00";
    document.body.querySelector(".chas").innerHTML = "00";
    //скидаємо наші лічильники
    count = 0;
    countMin = 0;
    countChas = 0;
    //задаємо сірий фон секундоміру
    document.body.querySelector("div > div").className = "silver";
    //перемикаємо "запобіжник"
    flag = false;
};

//створюємо функцію яка буде рахувати
const counter = () => {
    //додаємо нуль до лічильника поки число не дійде до 9 - щоб мати двузначне число
    document.body.querySelector(".sec").innerHTML = "0" + count;
    if(count > 9){
        document.body.querySelector(".sec").innerHTML = count;
    };
    count++;
    //говоримо що лічильник буде рахувати до 59 а потім скинеться на нуль
    if (count > 59) {
        count = 0;
        //коли перший лічильник пройде 1 цикл запускаем наступний лічильник який рахуватиме хвилини
        document.body.querySelector(".min").innerHTML = "0" + countMin;
        if (countMin > 9) {
            document.body.querySelector(".min").innerHTML = countMin;
        };
        countMin++;
        //говоримо что коли хвилини дійдуть до 59 то далі запускаємо лічильник годин
        if (countMin > 59){
            countMin = 0;
            document.body.querySelector(".chas").innerHTML = "0" + countChas;
            if (countChas > 9){
                document.body.querySelector(".chas").innerHTML = countChas;
            };
            countChas++;
        };
    };
    
};


/* 
Реалізуйте програму перевірки телефону
* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 000-000-00-00
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, 
якщо номер правильний зробіть зелене тло і використовуючи document.location переведіть користувача на сторінку
https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blte0b1841d1c4c4f69/622130b6c56d222d0cb0cb8c/ukraine-sunflower-blog-1680x980.png
 якщо буде помилка, відобразіть її в діві до input.
*/

//створюю змінну для створення дів в якому буде інпут
const div2 = document.createElement("div");
//створюю дів - дадою до нього клас та текст в середину
div2.className = "valid";
div2.innerHTML = "Введіть номер телефону у форматі 000-000-00-00";
//додаю дів до сторінки
document.body.append(div2);
//точно за таким же принципом створюю інпут та кнопку і додаю в середину дів
const txt = document.createElement("input");
txt.type = "text";
const btn = document.createElement("button");
btn.className = "btnSaveNumb"
btn.innerHTML = "Зберегти";
div2.append(txt, btn);

//створюю змінну в якій буде шаблон для перевірки номеру
const textValid = /\d\d\d-\d\d\d-\d\d-\d{2}$/;

let rez;
//задаю дію кнопці "зберегти" яка буде перевіряти валідність введеного номеру
document.body.querySelector(".btnSaveNumb").onclick = function () {
    rez = document.body.querySelector("input").value;
    //якщо номер введено вірно переходимо за лінком, якщо ні - відображаю помилку
    if(textValid.test(rez)){
        location.href = "https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blte0b1841d1c4c4f69/622130b6c56d222d0cb0cb8c/ukraine-sunflower-blog-1680x980.png";
    }else{
        let div3 = document.createElement("div");
        div3.style.color = "red";
        div3.innerHTML = "Телефон введено не вірно!!!";
        div2.prepend(div3);
    };
};

/*
Створіть слайдер кожні 3 сек змінюватиме зображення
Зображення для відображення
https://hi-news.ru/wp-content/uploads/2020/10/best_planets_image_one-750x456.jpg
https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg
https://hi-news.ru/wp-content/uploads/2020/10/best_planets_image_four-750x430.jpg
https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg
https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg
*/

//створюю обєкт з картинками
const img = {
    1: "https://hi-news.ru/wp-content/uploads/2020/10/best_planets_image_one-750x456.jpg",
    2: "https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg",
    3: "https://hi-news.ru/wp-content/uploads/2020/10/best_planets_image_four-750x430.jpg",
    4: "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg",
    5: "https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg"
};

//створюю дів в яку додаю тег з картинками та додаю все на сторінку
let imgForSlider;
const div4 = document.createElement("div");
const img1 = document.createElement("img");
img1.src = img[1];
div4.className = "slider"
document.body.append(div4);
div4.append(img1);

//створюю змінну яка буде містити кожен раз нову картинку
let i = 2;
let sliderImg = function (){
    img1.src = img[i];
    i++;
    //не розібрався як виявити кількість елементів в обєкті, тому задав в ручну
    if(i >= 5){
        i = 1;
    }
}   
setInterval(sliderImg, 3000);
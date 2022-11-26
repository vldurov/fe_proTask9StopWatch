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


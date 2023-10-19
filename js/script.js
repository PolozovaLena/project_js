"use strict";

const obj = {
	name: 'Leni',
	age: '27',
	isMarried: false
};
console.log(obj.name);
console.log(obj['name']);

let arr = ['orange.jpg', 6, [], {}];
console.log(arr[0]);

let und;
console.log(und);

let number = 4,
    number = 4.5;

const bool = false;

const userName = "John";
let userNumber = 25;
userNumber = 24;

const storeName = "Cat";
const storeDescription = {
    budget: 10000,
    employees: ["Anna", "Vika", "Ivan"],
    products: {dress: 8000, shoes: 7000},
    open: true
};

const result = confirm("Are you here?");

const answer = prompt("Сколько вам лет?", "возраст");

const answers = [];

answers[0] = prompt("Ваше имя?");
answers[1] = prompt("Ваша фамилия?");
answers[2] = prompt("Ваш возраст?");

document.write(answers);

const category = "toys";

console.log(`https://test.com/${category}/5`);

const user = "Ivan";

alert(`Привет, ${user}`)

console.log('text' + ' - text'); //text - text
console.log(4 + '- text'); //4 - text
console.log(4 + '5'); //45
console.log(4 + +'5'); //унарный плюс  - ответ будет 9


 let incr = 10, // присваивание = 
     decr = 10;
incr++; //постфиксный инкримент
decr--; //постфиксный дикримент

++incr; //префиксный инкримент
--decr; //префиксный дикримент

console.log(incr);
console.log(decr);

console.log(5%2); //%  остаток от деления - 1
console.log(2 * 3  == '6');// сравнение == 
console.log(2 * 3  === 6);// строгое сравнение по типу данных ===

const isChecked = true,
      isClose = false;

console.log(isChecked && isClose); //&& и - false
console.log(isChecked || isClose); // || или - true
console.log(isChecked && !isClose); // отрицание ! - true

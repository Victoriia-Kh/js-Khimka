/*
3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
Функция должна вернуть "Even" или "Odd";

function isEven(num) {
    // your code here
}
*/

some = +prompt("Введіть число")

function isEven(num) {
    return num % 2 == 1 ? "Odd" : "Even"
}

alert(isEven(some))
/*
4.	Напишите функцию, которая возвращает n-е число Фибоначчи.
Число, которое должна вернуть функция вводит пользователь.
Для решения используйте цикл.

Пользователь ввел: 6
Ряд Фибоначчи: 1, 1, 2, 3, 5, 8, 13, ...
Функция должна вернуть: 8
*/

some = +prompt("введіть число");

function Fibo (num) {
    ryad = [1, 1]
    for (var i = 2; i < num; i++){
        ryad[i] = ryad[i - 1] + ryad[i - 2];
    }
    return ryad[num - 1]
}

alert(Fibo(some))
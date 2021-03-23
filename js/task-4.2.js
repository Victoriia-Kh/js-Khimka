/*
2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
Проверить числа на корректность.
*/

a = +prompt('Введіть число', '');
b = +prompt('Введіть степінь', '');


function stepin(a, b) {
    if (a == NaN || b == NaN){
        return "Проблема з введиними числами";
    } else if (b == 0){
        console.log('b = 0')
        res = 1
        return res
    } else {
        res = a ** b;
        return res
    }
}

alert(stepin(a, b))
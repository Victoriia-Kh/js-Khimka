/*
    2. Обменять значения двух переменных, используя третью (буферную) переменную. 
    Вывести значение переменных до и после обмена.
*/

[a,b]=prompt('Введіть 2 цілих числа через пробіл','Вводити тут').split(' ');
console.log(a, b);// - вывод данных в консоль браузера
document.write("a = " + a + '; ' + 'b = ' + b + '<br/>');
document.write("Міняємо значення змінних <br/>");
let k
k = a
a = b
b = k
document.write("a = " + a + '; ' + 'b = ' + b + '<br/>');
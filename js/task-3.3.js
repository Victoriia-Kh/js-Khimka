/*

3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный 
подмассив заполнить значением 'odd', а чётный - 'even'. 
Размер каждого вложенного массива - 3.

4. Создать два произвольных массива: 
    один массив - любимая спортивная команда / модели автомобилей / города, 
    во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
Из двух массивов сделайте ассоциативный массив.
Массив, который будет выступать в качестве ключа - должен содержать уникальные значения

// Сложно? Попробуй погуглить :)
*/

var oddAr = ['odd', 'odd', 'odd'];
var evenAr = ['even', 'even', 'even'];

var size = prompt('Введіть розмір масива:', '');
var arr = []

for (var i = 0; i < +size; i++) {
    if(i % 2 == 0) {
        arr[i] = evenAr;
    } else {
        arr[i] = oddAr
    }
}

console.log(arr)
document.write(arr)
/*

4. Создать два произвольных массива: 
    один массив - любимая спортивная команда / модели автомобилей / города, 
    во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
Из двух массивов сделайте ассоциативный массив.
Массив, который будет выступать в качестве ключа - должен содержать уникальные значения

// Сложно? Попробуй погуглить :)
*/

var cities = ['Київ', 'Львів', 'Харків', 'Чернівці'];
var populations = [567, 234, 99, 67];

var arrMap = new Map();

for (var i = 0; i < cities.length; i++) {
    arrMap.set(cities[i], populations[i]);
}

console.log(arrMap)
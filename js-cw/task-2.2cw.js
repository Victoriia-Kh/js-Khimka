/*
1. Напишите цепочку операторов if / else if, чтобы выполнить следующие условия (num вводит пользователь), результат вывести в консоль:
    num < 5 - "Tiny"
    num < 10 - "Small"
    num < 15 - "Medium"
    num < 20 - "Large"
    num >= 20 - "Huge"

2. Повторить с swith, при условии 
    num = 5 - "Tiny"
    num = 10 - "Small"
    num = 15 - "Medium"
    num = 20 - "Large"
    num = 25 - "Huge"

3. Перепишите с тернарным оператором
    // if (a > b) {
    //     max = a;
    // } else {
    //     max = b;
    // }
    
    //console.log(max);

4. Выведите значения от 10 до 0 в консоль циклом for

5. Остановите цикл, когда i = 7 и выведите в консоль все числа до 7 пропустив 3.
    for (var i = 0; i < 10; i++) {}

6. Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
    1, если значение больше нуля,
    -1, если значение меньше нуля,
    0, если значение равно нулю.
    Предполагается, что пользователь вводит только числа. 

7. Напишите код, который будет спрашивать логин с помощью prompt.

    Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

    Пароль проверять так:
    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
    Иначе – «Неверный пароль»,
    При отмене – «Отменено».
    
    Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращаетnull.

8. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
    «Включительно» означает, что значение переменной age может быть равно 14 или 90. 
    Значение вводит пользователь

9. При помощи цикла for выведите чётные числа от 2 до 10.

10. Перепишите код, заменив цикл for на while, без изменения поведения цикла.
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }

11. Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
    Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
    Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
    
12. Напишите if..else, соответствующий следующему switch:
    
    switch (browser) {
        case 'Edge':
        alert( "You've got the Edge!" );
        break;

        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
        alert('Okay we support these browsers too');
        break;

        default:
        alert('We hope that this page looks ok!');
    }
    
13. Перепишите код с использованием одной конструкции switch:
    
    const number = +prompt('Введите число между 0 и 3', '');

    if (number === 0) {
        alert('Вы ввели число 0');
    }

    if (number === 1) {
        alert('Вы ввели число 1');
    }

    if (number === 2 || number === 3) {
        alert('Вы ввели число 2, а может и 3');
    }
*/

let num = prompt("Ведіть число");
switch (Number(num)) {
    case 5:
        console.log("Tiny");
        break;
    case 10:
        console.log("Small");
        break;
    case 15:
        console.log("Medium")
        break;
    case 20:
        console.log("Large");
        break;
    case 25:
        console.log("Huge");
        break;
}

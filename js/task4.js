/*
    4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. 
    Обработать их и вывести на экран.
*/

[a,b,c]=prompt('Введіть свої ІМЯ ПРІЗВИЩЕ ВІК через пробіл.','Вводити тут').split(' ');
document.write("Ваше прізвище та імя: " + b + ' ' + a + '</br>' + 'Ваш вік: ' + c);
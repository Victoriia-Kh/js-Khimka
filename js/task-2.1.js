/*
    1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, 
    вывести сообщение "Ошибка". Числа принять от пользователя.

    2. Построить прямоугольный треугольник состоящий из символа "*".

    3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

    4. Дано два числа A и B где (A < B). 
    Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
    Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   
*/

[a,b,c] = prompt('Введіть 3 цілих числа через пробіл.','Вводити тут').split(' ');
if (a == b || b == c || c == a) {
    alert('Помилка');
} else{
    let r = Number(a) + Number(b) + Number(c)
    let k = r / 3;
    alert("Середнє арефметичне = "+ k);
}
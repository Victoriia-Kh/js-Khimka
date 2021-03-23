/*
1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
		Функция должна проверять корректность введенных чисел и знака операции.
		Все аргументы для функции принять от пользователя.
*/

var a = +prompt("Введіть перше число:", '123');
var b = +prompt("Введіть друге число:", '123');
var sign = prompt('Введіть знак:', '+/*-');

function calculate(a,b,sign) {
    if (a == NaN || b == NaN){
        return "Введіть числа"
    } else {
        switch(sign){
            case '*':
                return a*b;
            case '/':
                if (b == 0){
                    alert("Це ділення на 0");
                    break;
                } else {
                    return a/b;
                }
            case '-':
                return a-b;
            case '+':
                return a+b;
            default:
                return "Ви маєте ввести один знак з даних чотирьох + - * /.";
        }
    }
}
alert(calculate(a,b,sign))
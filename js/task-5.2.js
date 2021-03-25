/*
    2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, 
    произведения и частного двух чисел.
    Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
    В зависимости от принятого знака операции, вызвать соответствующий метод.
*/

var Calculator = {
    num1 : 1,
    num2 : 1,
    sign : '+',
    count() {
        switch(this.sign){
            case '+':
                alert(this.num1 + this.num2)
                break
            case '-':
                alert(this.num1 - this.num2)
                break
            case '*':
                alert(this.num1 * this.num2)
                break
            case '/':
                alert(this.num1 / this.num2)
                break
        }
    }
}

var Calculator[num1] = +prompt('Введіть перше число', '123');
var Calculator.num2 = +prompt('Введіть друге число', '123');
var Calculator.sign = +prompt('Введіть знак операції', '+-*/');

Calculator.count()

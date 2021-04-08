/*
    2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, 
    произведения и частного двух чисел.
    Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
    В зависимости от принятого знака операции, вызвать соответствующий метод.
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
*/

var Calculator = {
    num1 : 1,
    num2 : 1,
    sign : '+',
    plus : function() {
        return this.num1 + this.num2;
    },
    minus : function() {
        return this.num1 - this.num2;
    },
    mnoz : function() {
        return this.num1 * this.num2;
    },
    dil : function() {
        return this.num1 / this.num2;
    }
}

Calculator.num1 = +prompt('Введіть перше число', '123');
Calculator.num2 = +prompt('Введіть друге число', '123');
Calculator.sign = prompt('Введіть знак операції', '+-*/');

var a = 'Щось пішло не так'

switch(Calculator.sign){
    case '+':
        a = Calculator.plus();
        break
    case '-':
        a = Calculator.minus();
        break
    case '*':
        a = Calculator.mnoz();
        break
    case '/':
        a = Calculator.dil();
        break
    }


alert(a)

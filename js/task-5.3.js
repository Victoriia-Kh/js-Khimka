/*
3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. 
    Каждый элемент масива — объект,
    содержащий свойства: name, sName, age, occupation, и метод show, который выводит 
    всю информацию о пользователе.
    Реализовать заполнение массива пользователем. По окончанию заполнения — 
    вывести информацию о сотрудниках.
4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
    будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
    Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
        • "director" — 3000;
        • "manager" — 1500;
        • "programmer" — 2000;
        • для остальных значений — 1000.
    После выполнения функции — вывести информацию о сотрудниках.
*/

var mainArr = [
    ]

function createPerson(){
    var onePerson = {
        show() {
            document.write('Імя працівника ' + this.name + ', прізвище ' + this.sName + ', вік ' + this.age + ', професія ' + this.occupation)
            if ('salary' in this){
                document.write(', зарплата ' + this.salary)
            }
            document.write('</br>')
        }
    }
    onePerson.name = prompt('Введіть імя', '')
    onePerson.sName = prompt('Введіть прізвище', '')
    onePerson.age = prompt('введіть вік', '')
    onePerson.occupation = prompt('Введіть професію', '')
    mainArr.push(onePerson)
}

var k = true;
while (k == true){
    createPerson();
    k = confirm('Будете ввдодити ще одного працівнка?')
}

for (var i = 0; i < mainArr.length; i++){
    mainArr[i].show()
}

// task 4

function addSalary(){
    for (var i = 0; i<mainArr.length; i++){
        switch (mainArr[i].occupation){
            case 'director':
                mainArr[i].salary = 3000
                break;
            case 'manager':
                mainArr[i].salary = 1500
                break;
            case 'programmer':
                mainArr[i].salary = 2000
                break;
            default:
                mainArr[i].salary = 1000
        }
    }
}

addSalary()

for (var i = 0; i < mainArr.length; i++){
    mainArr[i].show()
}

/* 
    5. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: 
        name, sName, age, occupation, salary.
        Параметр для сортировки принимается от пользователя.
        После выполнения функции — вывести информацию о сотрудниках.
*/


var param = prompt('введіть параметр для сорторування', 'name, sName, age, occupation, salary')

function arrSort(arr, prop){
    res = arr.sort(function(a, b) {
        if (prop == 'salary' || prop == 'age'){
            return a[prop] - b[prop]
        } else {
            if (a[prop] > b[prop]){
              return 1
            } else {
              return -1
            }
        }
        
    })
    return res
}

console.log(param)
console.log(arrSort(mainArr, param))

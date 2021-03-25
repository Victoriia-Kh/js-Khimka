/*
3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. 
    Каждый элемент масива — объект,
    содержащий свойства: name, sName, age, occupation, и метод show, который выводит 
    всю информацию о пользователе.
    Реализовать заполнение массива пользователем. По окончанию заполнения — 
    вывести информацию о сотрудниках.
*/

var mainArr = [
    ]

function createPerson(){
    var onePerson = {
        show() {
            document.write('Імя працівника ' + this.name + ', с-імя ' + this.sName + ', вік ' + this.age + ', професія ' + this.occupation + '/br')
        }
    }
    onePerson.name = prompt('Введіть імя', '')
    onePerson.sName = prompt('Введіть с-імя', '')
    onePerson.age = prompt('введіть вік', '')
    onePerson.occupation = prompt('Введіть професію', '')
    mainArr.push(onePerson)
}

while (k == true){
    createPerson();
    k = confirm('Будете ввдодити ще одного працівнка?')
}

for (var i = 0; i < mainArr.length; i++){
    mainArr[i].show()
}

// task 4

function addSalary(){
    
}
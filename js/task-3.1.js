/*

1. Сделать собственные примеры методов применяемых для массивов.

*/

document.write("1. push(yakyys_element) - добавляє елемент вкінець масиву" + '</br>');
document.write("2. unshift(yakyys_element) - добавляє елемент на початок масиву" + '</br>');
document.write("3. pop() - видаляє елемент з кінця масиву" + '</br>');
document.write("4. shift() - видаляє елемент з початку масиву" + '</br>');

document.write('<input value="Змінити масив" onclick=mainFunc() type="button"></input>' + '</br>')
var arr = ['elem0', 'elem1', 'elem2', 'elem3'];
var pustyy = false

var myCounter = 0

function showPush() {
    myCounter ++;
    arr.push(+myCounter);
}
function showUnshift(){
    myCounter ++;
    arr.unshift(+myCounter);
}
function showPop(){
    myCounter ++;
    arr.pop();
}
function showShift(){
    myCounter ++;
    arr.shift();
}

function mainShow() {
    dano = +prompt('Введіть число 1/2/3/4 і виконається відповідна дія з масивом. ' + '[ ' + arr + ' ]', '1/2/3/4');
    return dano;
}

function mainFunc() {
    dano = +mainShow();
    switch(dano) {
        case 1:
            showPush();
            break;
        case 2:
            showUnshift();
            break;
        case 3:
            showPop();
            break;
        case 4:
            showShift();
            break;
        default:
            alert('Щось пішло не так (. Спробуйте ще раз ввести число.')
    }
}


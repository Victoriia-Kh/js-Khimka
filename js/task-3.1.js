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
    console.log("К-ть зроблених дій = ", myCounter)
    arr.push(+myCounter);
    console.log("Довжина масиву = ", arr.length)
}
function showUnshift(){
    myCounter ++;
    console.log("К-ть зроблених дій = ", myCounter)
    arr.unshift(+myCounter);
    console.log("Довжина масиву = ", arr.length)
}
function showPop(){
    myCounter ++;
    console.log("К-ть зроблених дій = ", myCounter)
    arr.pop();
    console.log("Довжина масиву = ", arr.length)
}
function showShift(){
    myCounter ++;
    console.log("К-ть зроблених дій = ", myCounter)
    arr.shift();
    console.log("Довжина масиву = ", arr.length)
}

function mainShow() {
    dano = +prompt('Введіть число 1/2/3/4 і виконається відповідна дія з масивом. ' + "[ " + arr + " ]", '1/2/3/4');
    return dano;
}

function secondShow() {
    dano = +prompt('Введіть число 1/2 і виконається відповідна дія з масивом. ' + "Масив зараз пустий.", '1/2');
    return dano;
}

function mainFunc() {
    if (arr.length == 0) {
        dano = +secondShow();
        switch(dano) {
            case 1:
                showPush();
                break;
            case 2:
                showUnshift();
                break;
            default:
                alert('Щось пішло не так (. Спробуйте ще раз ввести число.')
        }
    } else {
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
}


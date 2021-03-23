/*
5.  Создать игру "Камень-Ножницы-Бумага".
    Выбор компьютера определяется строкой:  
    
    var computerChoice = Math.random();
    alert(computerChoice);
    
    Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно 
    построить принцип выбора решения компьютера.
    Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
    Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
    Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново.
*/

function Igra() {
    human = prompt("Введіть одне слово (обовязково з великої букви)", "Камень-Ножницы-Бумага");

    var computerChoice = Math.random() * 10;
    console.log(computerChoice)

    mainNum = Math.trunc(computerChoice)
    switch (mainNum % 3){
        case 0:
            res = "Камень";
            console.log("comp = ", res)
            break
        case 1:
            res = "Ножницы"
            console.log("comp = ", res)
            break
        case 2:
            res = "Бумага"
            console.log("comp = ", res)
            break
    }

    if (human == res){
        alert("Нічия")
    } else {
        switch (human) {
            case "Камень":
                if (res == "Ножницы"){
                    alert("Перемога");
                } else {
                    alert("Програш")
                }
                break
            case "Ножницы":
                if (res == "Бумага"){
                    alert("Перемога");
                } else {
                    alert("Програш")
                }
                break
            case "Бумага":
                if (res == "Камень"){
                    alert("Перемога");
                } else {
                    alert("Програш")
                }
                break
        }
    }
}

var play = true;

while (play == true) {

    Igra()

    play = confirm("Продовжувати?")
    console.log("Play = ", play)
}





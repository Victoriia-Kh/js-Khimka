//Get the button:
let btnGoTop = document.getElementsByClassName("btn-modalbox")[0];
btnGoTop.addEventListener('click', () => {
    document.getElementsByClassName('btn-modalbox')[0].style.display = 'none';
    showModalBox();
});

function showModalBox() {
    let modalBox = createModalBox();

    document.body.appendChild(modalBox);
}

function createModalBox() {
    let modalBox = document.createElement('div');
    modalBox.classList.add('my-modal-box');

    let inputName = document.createElement('input');
    inputName.classList.add('my-modal-box__input-name');
    inputName.type = "text";
    inputName.name = "name";
    inputName.id = "name";
    inputName.placeholder = "Name";

    let inputMail = document.createElement('input');
    inputMail.classList.add('my-modal-box__input-mail');
    inputMail.type = "text";
    inputMail.name = "name1";
    inputMail.id = "name1";
    inputMail.placeholder = "Mail";

    let btnSend = document.createElement('button');
    btnSend.classList.add('my-modal-box__btn-send');
    btnSend.innerText = 'Go';
    btnSend.addEventListener('click', () => {
        console.log(inputName.value)
        console.log(inputMail.value.indexOf('@'))
        if (inputMail.value.indexOf('@') != -1){
            alert(`Thank you, ${inputName.value}!`);
        } else {
            alert('Ви ввели не правильний емейл!');
        }
        document.body.removeChild(modalBox);
        document.getElementsByClassName('btn-modalbox')[0].style.display = 'block';
    });

    let btnCancel = document.createElement('button');
    btnCancel.classList.add('my-modal-box__btn-cancel');
    btnCancel.innerText = 'Cancel';
    btnCancel.addEventListener('click', () => {
        document.body.removeChild(modalBox);
        document.getElementsByClassName('btn-modalbox')[0].style.display = 'block';
    });

    modalBox.appendChild(inputName);
    modalBox.appendChild(inputMail);
    modalBox.appendChild(btnSend);
    modalBox.appendChild(btnCancel);

    return modalBox;
}
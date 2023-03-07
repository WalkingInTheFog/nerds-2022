/*----------------------------------function-------------------------------------------------------- */

let fillValueField = function (form, name, email) {

    let fName = localStorage.getItem(name);
    let mail = localStorage.getItem(email);

    if (fName) {

        form.elements.name.value = fName;

    }

    if (mail) {

        form.elements.mail.value = mail;

    }

    form.elements.msg.focus();

};


let modalHandler = function (openBtn, modalBlock, closeBtn, toogleClass, animateClass) {

    openBtn.addEventListener('click', function (evt) {

        evt.preventDefault();

        modalBlock.classList.toggle(toogleClass);

        modalBlock.classList.add(animateClass);

        fillValueField(form, 'userName', 'userMail');


    });

    closeBtn.addEventListener('click', function (evt) {

        evt.preventDefault();

        modalBlock.classList.toggle(toogleClass);

        modalBlock.classList.add(animateClass);

    });

    window.addEventListener('keydown', function (evt) {

        if (evt.key === 'Escape' || evt.key === 'Esc') {

            if (modalBlock.classList.contains(toogleClass)) {

                modalBlock.classList.remove(toogleClass);
                modalBlock.classList.remove(animateClass);
            }
        }

    });

};

/*---------------------------variables------------------------------------------------------------ */

let openLink = document.querySelector('.contacts__btn');
let modalWindow = document.querySelector('.pop-up');
let closeBtn = modalWindow.querySelector('.pop-up__btn-close');
let openClass = 'pop-up--show';
let AnimateClass = 'animate__fadeInDownBig';
let form = modalWindow.querySelector('.pop-up__form');

/*------------------------------------Code-------------------------------------------------------- */

/*----если переменные нашлись, то на кнопки функцией вешаются события клика, функция добавляет класс открытия и анимации---- */

if (openLink || modalWindow || closeBtn) {

    modalHandler(openLink, modalWindow, closeBtn, openClass, AnimateClass);
}

form.addEventListener('submit', function (evt) {

    if (form.elements.name.value && form.elements.mail.value) {

        localStorage.setItem('userName', form.elements.name.value);

        localStorage.setItem('userMail', form.elements.mail.value);

    }

});




/*----------------------------------function-------------------------------------------------------- */

let fillValueField = function (form, name, email) {

    let fName = localStorage.getItem(name);
    let mail = localStorage.getItem(email);

    if (fName) {

        form.elements.name.value = fName;
        form.elements.msg.focus();
    }

    if (mail) {

        form.elements.mail.value = mail;
        form.elements.msg.focus();
    }



};

let modalHandler = function (openBtn, modalBlock, closeBtn, toogleClass, animateClass, animateClose) {

    openBtn.addEventListener('click', function (evt) {

        evt.preventDefault();

        modalBlock.classList.toggle(toogleClass);

        modalBlock.classList.remove(animateClose);

        modalBlock.classList.add(animateClass);

        fillValueField(form, 'userName', 'userMail');


    });

    closeBtn.addEventListener('click', function (evt) {

        evt.preventDefault();

        modalBlock.classList.toggle(toogleClass);

        modalBlock.classList.remove(animateClass);

        modalBlock.classList.add(animateClose);

    });

    window.addEventListener('keydown', function (evt) {

        if (evt.key === 'Escape' || evt.key === 'Esc') {

            if (modalBlock.classList.contains(toogleClass)) {

                modalBlock.classList.remove(toogleClass);
                modalBlock.classList.remove(animateClass);
                modalBlock.classList.add(animateClose);
            }
        }

    });

};

/*---------------------------variables------------------------------------------------------------ */

let openLink = document.querySelector('.contacts__btn');


let modalWindow = document.querySelector('.pop-up');

if (modalWindow) {
    var closeBtn = modalWindow.querySelector('.pop-up__btn-close');
    var form = modalWindow.querySelector('.pop-up__form');
}

let openClass = 'pop-up--show';
let AnimateClass = 'animate__backInUp';
let animateClosePopup = 'animate__backOutDown';


let slider = document.querySelector('.slider-wrapper');

if (slider) {

    var controlBtnsSlider = slider.querySelectorAll('.main-slider__controls-btn');
    var slides = slider.querySelectorAll('.slider-list__item');

}

let slideShowClass = 'slider-list__item--current';
let btnCurrentClass = 'main-slider__controls-btn--current';
/*------------------------------------Code-------------------------------------------------------- */

/*----если переменные нашлись, то на кнопки функцией вешаются события клика, функция добавляет класс открытия и анимации---- */

if (openLink && modalWindow && closeBtn) {

    modalHandler(openLink, modalWindow, closeBtn, openClass, AnimateClass, animateClosePopup);
}

form.addEventListener('submit', function (evt) {

    if (form.elements.name.value && form.elements.mail.value) {

        localStorage.setItem('userName', form.elements.name.value);

        localStorage.setItem('userMail', form.elements.mail.value);

    }

});

/*------------------------------slider---------------------------------------------*/

if (controlBtnsSlider && slides) {

    for (let btn = 0; btn < controlBtnsSlider.length; btn++) {

        controlBtnsSlider[btn].addEventListener('click', function (evt) {

            if (!evt.target.classList.contains(btnCurrentClass)) {

                for (let slide = 0; slide < slides.length; slide++) {

                    slides[slide].classList.remove(slideShowClass);

                }

                slides[btn].classList.add(slideShowClass);

                for (let i = 0; i < controlBtnsSlider.length; i++) {

                    controlBtnsSlider[i].classList.remove(btnCurrentClass);

                }

                controlBtnsSlider[btn].classList.add(btnCurrentClass);
            }

        });

    };

}


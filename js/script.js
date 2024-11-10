const notificationEL = document.querySelector(".notification");
const stepperELs = document.querySelectorAll(".stepper");
const burgerEl = document.querySelector('.burger');
const headerListEl = document.querySelector('.header__list');
const filtersBtnEl = document.querySelector('.catalog__mobile-btn');

if (filtersBtnEl) {
    const filtersEl = document.querySelector('.filters');
    filtersBtnEl.addEventListener('click', () => {
        filtersBtnEl.classList.toggle('catalog__mobile-btn--active');
        filtersEl.classList.toggle('filters--active');
    });
}

if (headerListEl) {
    new TransferElements(
        {
          sourceElement: headerListEl,
          breakpoints: {
            767.98: {
              targetElement: document.querySelector('.header__bottom'),
              targetPosition: 1
            }
          }
        }
      );
}

if (burgerEl) {
    const body = document.body;
    const menuEl = document.querySelector('.header__bottom')
    burgerEl.addEventListener('click', () => {
        burgerEl.classList.toggle('burger--active');
        menuEl.classList.toggle('header__bottom--active');
        body.classList.toggle('stop-scroll');
    });
}

if (notificationEL) {
    const notificationCloseEl = notificationEL.querySelector('.notification__close');
    notificationCloseEl.addEventListener('click', () => {
        notificationEL.classList.add('notification--hidden');
    });
}

if (stepperELs) {
    stepperELs.forEach(stepperEL => {

        const stepperInputEL = stepperEL.querySelector('.stepper__input');
        const stepperBtnMinusEL = stepperEL.querySelector('.stepper__btn--minus');
        const stepperBtnPlusEL = stepperEL.querySelector('.stepper__btn--plus');

        const stepperMin = Number(stepperInputEL.getAttribute('min'));
        const stepperMax = Number(stepperInputEL.getAttribute('max'));

        let count = Number(stepperInputEL.value);

        stepperInputEL.addEventListener('change', () => {
            stepperBtnMinusEL.classList.remove('stepper__btn--disabled');
            stepperBtnPlusEL.classList.remove('stepper__btn--disabled');
            
            if (stepperInputEL.value < stepperMin) {
                stepperInputEL.value = stepperMin;
                stepperBtnMinusEL.classList.add('stepper__btn--disabled');
            }

            if (stepperInputEL.value > stepperMax) {
                stepperInputEL.value = stepperMax;
                stepperBtnPlusEL.classList.add('stepper__btn--disabled');
            }
        })

        stepperBtnPlusEL.addEventListener('click', () => {
            count = Number(stepperInputEL.value);
            if (count < stepperMax) {
                stepperBtnMinusEL.classList.remove('stepper__btn--disabled');
                stepperBtnPlusEL.classList.remove('stepper__btn--disabled');
                count ++;
                stepperInputEL.value = count;
            }

            if (count == stepperMax) {
                stepperBtnPlusEL.classList.add('stepper__btn--disabled');
            }
        });

        stepperBtnMinusEL.addEventListener('click', () => {
            count = Number(stepperInputEL.value);
            if (count > stepperMin) {
                stepperBtnMinusEL.classList.remove('stepper__btn--disabled');
                stepperBtnPlusEL.classList.remove('stepper__btn--disabled');
                count --;
                stepperInputEL.value = count;
            }

            if (count == stepperMin) {
                stepperBtnMinusEL.classList.add('stepper__btn--disabled');
            }
        });

    });

}
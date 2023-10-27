'use strict';
import { showModal } from './modal.js';
import { getAnswer, getHelp, removeHints,showAttempt, hideAttempt, changeAttempt, attempts, resetAttempt } from './hints.js';
import { hideErrors, showErrorsRange, showErrorsType } from './errors.js';
import { pickedNum, resetRangeTitle, to, from, changePickedNum } from './range.js';
import { getRandomNum } from './random.js';
import { setButtonsDisable } from './buttons.js'

const userOption = document.getElementById('userNumber');

export function checkUserNumber(e) {
    e.preventDefault();
    hideErrors();
    let userNumber = +userOption.value;
    userOption.value = '';
    console.log(pickedNum);
    if (Number.isNaN(userNumber)) {
        showErrorsType();
    }
    if (to > 0 || from > 0) {
        if (userNumber > to || userNumber < from) {
            showErrorsRange();
        }
    }
    else if (userNumber > 100 || userNumber < 1) {
        showErrorsRange();
    }
    if (pickedNum > userNumber) {
        getAnswer('Загадонное число больше');
        changeAttempt();
        showAttempt();
    }
    else if (pickedNum < userNumber) {
        getAnswer('Загадонное число меньше');
        changeAttempt();
        showAttempt();
    }

    else if (pickedNum === userNumber) {
        const message = `Вы угадали. Кол-во попыток: ${attempts}`;
        showModal(message);
        changePickedNum(getRandomNum());
        setButtonsDisable(false);
        removeHints();
        hideAttempt();
        resetRangeTitle();
        resetAttempt();
    }

    if (attempts === 3) {
        if (pickedNum % 2 === 0) {
            getHelp('Число четное');
        }
        else {
            getHelp('Число нечетное');
        }
    }

}
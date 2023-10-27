'use strict';
let divHelp = document.createElement('div');
let divCheck = document.createElement('div');

export function getAnswer(text) {
    divCheck.innerHTML = text;
    document.body.append(divCheck);
}
export function getHelp(text) {
    divHelp.innerHTML = text;
    document.body.append(divHelp);
}

export function removeHints() {
    divCheck.remove();
    divHelp.remove();
}




const attempt = document.querySelector('.attempt');
export let attempts = 0;

export function showAttempt() {
    attempt.style.display = 'block';
    attempt.innerHTML = `Попытка №${attempts}`;
};

export function hideAttempt() {
    attempt.style.display = 'none';
}

export function resetAttempt() {
    attempts = 0;
}

export function changeAttempt() {
    attempts++;
}

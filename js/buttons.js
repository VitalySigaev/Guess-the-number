'use strict';
export const buttonCheck = document.getElementById('checkNumber');
export const buttonPick = document.getElementById('pickNumber');
export const buttonRange = document.getElementById('setRange');
export const buttonRestart = document.getElementById('restart');


export function setButtonsDisable(state) {
    buttonPick.disabled = state;
    buttonRange.disabled = state;
}
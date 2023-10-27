'use strict';
import { getRandomNum } from "./random.js";
const userRangeFrom = document.getElementById('from');
const userRangeTo = document.getElementById('to');
const rangeInputs = document.querySelectorAll('.range-input');
const rangeTitle = document.querySelector('.range-title');

export let pickedNum = 0;
export let from = 0;
export let to = 0;
let rangeFlag = false;


export function changeRangeFlag(state) {
    rangeFlag = state;
}
export function hideRange() {
    rangeInputs.forEach(item => {
        item.style.display = 'none';
    })
}

export function setRange() {
    from = +userRangeFrom.value;
    to = +userRangeTo.value;

    if (rangeFlag) {
        pickedNum = getRandomNum(from, to);
        rangeTitle.textContent = `Диапазон: От ${from} До ${to}`;
    }
    else {
        pickedNum = getRandomNum();
        rangeTitle.textContent = `Диапазон: От 1 До 100`
    }

    changeRangeFlag(false);
}

export function resetRangeTitle() {
    rangeTitle.textContent = ``;
}

export function showRange() {
    rangeInputs.forEach(item => {
        item.style.display = 'inline-block';
    })
}

export function changePickedNum(value) {
    pickedNum = value;
}

export function clickButtonRange(e){
    e.preventDefault();
    showRange();
    changeRangeFlag(true);
}
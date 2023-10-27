import { hideRange, setRange } from './range.js';
import { hideErrors } from './errors.js';
import { setButtonsDisable } from './buttons.js'

export function getRandomNum(min = 1, max = 100) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

export function pickNumber(e) {
    e.preventDefault();
    hideRange();
    hideErrors();
    setRange();
    setButtonsDisable(true);
}
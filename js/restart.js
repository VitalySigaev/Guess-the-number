import { setButtonsDisable } from './buttons.js';
import { removeHints,resetAttempt, hideAttempt } from './hints.js';
import { resetRangeTitle, changePickedNum } from './range.js';
import { hideErrors } from './errors.js';

export function restartGame(e) {
    e.preventDefault();
    resetAttempt();
    hideAttempt();
    setButtonsDisable(false);
    removeHints();
    resetRangeTitle();
    hideErrors();
    changePickedNum(0);
}
'use strict';
import { clickButtonRange } from './range.js'
import { checkUserNumber } from './check.js'
import { buttonCheck, buttonPick, buttonRange, buttonRestart } from './buttons.js';
import { restartGame } from './restart.js'
import { pickNumber } from './random.js'





buttonRange.addEventListener('click', clickButtonRange);

buttonPick.addEventListener('click', pickNumber);

buttonCheck.addEventListener('click', checkUserNumber);

buttonRestart.addEventListener('click', restartGame);

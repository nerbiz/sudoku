import Controls from './Controls';
import InputMode from './InputMode';
import Grid from './Grid/Grid';
import Timer from './Timer';
import DocumentEventHandler from './EventHandlers/DocumentEventHandler';
import CommandHistory from './Commands/CommandHistory';

// 'Namespace' of the project
window.Sudoku = {
    history: new CommandHistory(),
    controls: new Controls(),
    inputMode: new InputMode(),
    grid: new Grid(),
    timer: new Timer(),
    documentEventHandler: new DocumentEventHandler(),
};

Sudoku.timer.start();
Sudoku.timer.showTime();
Sudoku.inputMode.init();
Sudoku.controls.init();
Sudoku.grid.init();
Sudoku.documentEventHandler.register();

/*
const LZString = require('lz-string');
const state = JSON.stringify(Sudoku.grid.getState());
// Pairs of 2-digits (cell number) and value (1 number)
// const state = '038149156382416811295104457093378472567629123781806';
// 81 numbers, representing every cell value (0 = empty)
// const state = '000300004000000056780000001230000045000098700012000045000005600300002300001320004';
const c1 = LZString.compress(state);
const c2 = LZString.compressToEncodedURIComponent(state);

console.log(
    state.length,
    state,
    c1.length,
    c1,
    c2.length,
    c2
);
//*/

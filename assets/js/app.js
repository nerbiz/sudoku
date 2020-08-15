import Controls from './Controls';
import InputMode from './InputMode';
import Grid from './Grid/Grid';
import Clock from './Clock';
import DocumentEventHandler from './EventHandlers/DocumentEventHandler';
import CommandHistory from './Commands/CommandHistory';
import Meta from './Meta';
import Modal from './Modal';
import Settings from './Settings';
import SettingsEventHandler from './EventHandlers/SettingsEventHandler';
import ActionsEventHandler from './EventHandlers/ActionsEventHandler';
import GridCellHighlighter from './Grid/GridCellHighlighter';
import Game from './Game';

// 'Namespace' of the project
window.Sudoku = {
    game: new Game(),
    settings: new Settings(),
    history: new CommandHistory(),
    meta: new Meta(),
    controls: new Controls(),
    inputMode: new InputMode(),
    gridCellHighlighter: new GridCellHighlighter(),
    grid: new Grid(),
    clock: new Clock(),
    modal: new Modal(),
    documentEventHandler: new DocumentEventHandler(),
    settingsEventHandler: new SettingsEventHandler(),
    actionsEventHandler: new ActionsEventHandler(),
};

Sudoku.settings.init();
Sudoku.settingsEventHandler.init();
Sudoku.clock.init();
Sudoku.modal.init();
Sudoku.meta.init();
Sudoku.inputMode.init();
Sudoku.controls.init();
Sudoku.grid.init();
Sudoku.documentEventHandler.init();
Sudoku.actionsEventHandler.init();

/*
const LZString = require('lz-string');

function logResults(state, label = null) {
    const result1 = LZString.compress(state);
    const result2 = LZString.compressToEncodedURIComponent(state);

    console.group(label || 'Compression result');
    console.log('Original state', state.length, state);
    console.log('Compressed state', result1.length, result1);
    console.log('URL-encoded compressed state', result2.length, result2);
    console.groupEnd();
}

// The state from the application
// logResults(JSON.stringify(Sudoku.grid.getState()), 'App');

// 3 digits per cell: 2 digits for cell number, 1 for value
const threeDigits = '038149156382416811295104457093378472567629123781806';
logResults(threeDigits, '3 digits per cell');

// 81 numbers, representing every cell value (0 = empty)
const eightyOneNumbers = '000300004000000056780000001230000045000098700012000045000005600300002300001320004';
logResults(eightyOneNumbers, '81 numbers');

// A 1 as a counter, so the the digit 2 is '11', and 7 is '1111111' (delimited by a comma)
const csvOnes = eightyOneNumbers.split('')
    .map(number => {
        number = parseInt(number, 10);
        return '1'.repeat(number);
    })
    .join(',');
logResults(csvOnes, 'CSV, counting with ones');

// Grid cells state
const cellsState = ('n' + '1'.repeat(23) // Cell number
    + 'p' // Is prefilled, empty string when not prefilled
    + 'v' + '1'.repeat(7) // Cell value
    + 'c' + '1'.repeat(4) // Color number 4
    + 'cr' + [3, 4, 6, 8].map(digit => {
        digit = parseInt(digit, 10);
        return '1'.repeat(digit);
    }).join(',') // Corner pencil marks
    + 'cn' + [1, 2, 7, 9].map(digit => {
        digit = parseInt(digit, 10);
        return '1'.repeat(digit);
    }).join(',') // Center pencil marks
).repeat(81) // For 81 cells
// 366 length compressed, 975 length URL-encoded compressed
logResults(cellsState, 'Cells state v1');

// Grid cells state, normal way
const cellsState2 = ('n23' // Cell number
    + 'p' // Is prefilled, empty string when not prefilled
    + 'v7' // Cell value
    + 'c4' // Color number 4
    + 'cr' + [3, 4, 6, 8].join('') // Corner pencil marks
    + 'cn' + [1, 2, 7, 9].join('') // Center pencil marks
).repeat(81) // For 81 cells
// 118 length compressed, 315 length URL-encoded compressed
logResults(cellsState2, 'Cells state v2');
//*/

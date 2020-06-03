import Grid from './Grid';
import Controls from './Controls';

// 'Namespace' of the project
window.Sudoku = {};

Sudoku.controls = new Controls();
Sudoku.controls.init();

Sudoku.grid = new Grid();
Sudoku.grid.collectCells();

/*
const LZString = require('lz-string');
const state = JSON.stringify(Sudoku.grid.getState());
const c1 = LZString.compress(state);
const c2 = LZString.compressToEncodedURIComponent(state);
const c3 = LZString.compressToUint8Array(state);

console.log(
    state.length,
    state,
    c1.length,
    c1,
    c2.length,
    c2,
    c3.length,
    c3
);
*/

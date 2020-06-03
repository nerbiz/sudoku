import Grid from './Grid';
import Controls from './Controls';

// 'Namespace' of the project
window.Sudoku = {};

Sudoku.controls = new Controls();
Sudoku.controls.init();

Sudoku.grid = new Grid();
Sudoku.grid.collectCells();

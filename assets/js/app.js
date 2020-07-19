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

// 'Namespace' of the project
window.Sudoku = {
    settings: new Settings(),
    history: new CommandHistory(),
    meta: new Meta(),
    controls: new Controls(),
    inputMode: new InputMode(),
    grid: new Grid(),
    clock: new Clock(),
    modal: new Modal(),
    documentEventHandler: new DocumentEventHandler(),
    settingsEventHandler: new SettingsEventHandler(),
};

Sudoku.settings.init();
Sudoku.settingsEventHandler.init();
Sudoku.clock.init();
Sudoku.modal.init();
Sudoku.meta.init();
Sudoku.inputMode.init();
Sudoku.controls.init();
Sudoku.grid.init();
Sudoku.documentEventHandler.register();

/*
const LZString = require('lz-string');
const state = JSON.stringify(Sudoku.grid.getState());
// 3 digits per cell: 2 digits for cell number, 1 for value
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

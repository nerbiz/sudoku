/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/Clock.js":
/*!****************************!*\
  !*** ./assets/js/Clock.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clock; });
function Clock() {
  var self = this;
  /**
   * The initial amount of elapsed milliseconds
   * Useful to keep track of previously elapsed time, when unpausing
   * @type {number}
   * @private
   */

  var _initialMs = 0;
  /**
   * The start moment of the timer
   * @type {Date|null}
   * @private
   */

  var _startMoment = null;
  /**
   * The element that shows the elapsed time
   * @type {HTMLSpanElement}
   * @private
   */

  var _timeElement = document.getElementById('elapsed-time');
  /**
   * The interval for showing the time on screen
   * @type {number|null}
   * @private
   */


  var _timeInterval = null;
  /**
   * Indicates whether the clock is paused
   * @type {boolean}
   * @private
   */

  var _paused = false;
  /**
   * Initialize the object
   * @return {void}
   */

  self.init = function () {
    self.start();
    self.showTime();
  };
  /**
   * Set the start/unpause moment for calculating elapsed time
   * @return {void}
   */


  self.start = self.unpause = function () {
    _startMoment = new Date();
    _paused = false;
  };
  /**
   * Pause the timer
   * @return {void}
   */


  self.pause = function () {
    // Keep the elapsed milliseconds, for use with unpausing
    _initialMs += self.getElapsedMsSinceStart();
    _startMoment = null;
    _paused = true;
  };
  /**
   * @return {boolean}
   */


  self.isPaused = function () {
    return _paused;
  };
  /**
   * Get the elapsed milliseconds, since the start moment
   * @return {number}
   */


  self.getElapsedMsSinceStart = function () {
    return _startMoment !== null ? new Date().getTime() - _startMoment.getTime() : 0;
  };
  /**
   * Get the amount of elapsed milliseconds, since the timer started
   * @return {number}
   */


  self.getTotalElapsedMs = function () {
    return _initialMs + self.getElapsedMsSinceStart();
  };
  /**
   * Get a string representation ('0:00') of elapsed time
   * Uses '0:00:00' format if there is at least 1 hour
   * @return {string}
   */


  self.getElapsedTimeString = function () {
    var totalSeconds = Math.floor(self.getTotalElapsedMs() / 1000); // Calculate hours, minutes and seconds

    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor(totalSeconds % 3600 / 60); // Seconds need a leading zero

    var seconds = (totalSeconds % 60).toString(10).padStart(2, '0'); // Minutes only need a leading zero if there is at least 1 hour

    if (hours > 0) {
      minutes = minutes.toString().padStart(2, '0');
      return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    }

    return "".concat(minutes, ":").concat(seconds);
  };
  /**
   * Decide whether to show the elapsed time on screen
   * @param {boolean} show
   * @return {void}
   */


  self.showTime = function () {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (show) {
      _timeInterval = setInterval(function () {
        _timeElement.innerText = self.getElapsedTimeString();
      }, 1000);
    } else {
      clearInterval(_timeInterval);
    }
  };
}

/***/ }),

/***/ "./assets/js/Commands/AutoCandidateModeCommand.js":
/*!********************************************************!*\
  !*** ./assets/js/Commands/AutoCandidateModeCommand.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoCandidateModeCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/js/functions.js");
/* harmony import */ var _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TogglableCommand */ "./assets/js/Commands/TogglableCommand.js");
/* harmony import */ var _InputMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InputMode */ "./assets/js/InputMode.js");



Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(AutoCandidateModeCommand, _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
function AutoCandidateModeCommand() {
  var self = this;
  _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @inheritDoc
   */

  self.state = false;
  /**
   * @inheritDoc
   */

  self.execute = function (state) {
    Sudoku.settings.autoCandidateState(state);
    Sudoku.inputMode.triggerAutoCandidateActions(state);
    state === true ? Sudoku.grid.determineCandidates() : Sudoku.grid.removeCandidates();
    self.state = state;
  };
}

/***/ }),

/***/ "./assets/js/Commands/Command.js":
/*!***************************************!*\
  !*** ./assets/js/Commands/Command.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Command; });
function Command() {
  var self = this;
  /**
   * Execute the command
   * @return {void}
   */

  self.execute = function () {
    throw new Error("'execute' method is not implemented in the command");
  };
}

/***/ }),

/***/ "./assets/js/Commands/CommandHistory.js":
/*!**********************************************!*\
  !*** ./assets/js/Commands/CommandHistory.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommandHistory; });
/* harmony import */ var _UndoableCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UndoableCommand */ "./assets/js/Commands/UndoableCommand.js");

function CommandHistory() {
  var self = this;
  /**
   * The list of commands that have been executed
   * @type {UndoableCommand[]}
   * @private
   */

  var _past = [];
  /**
   * The list of commands to redo
   * @type {UndoableCommand[]}
   * @private
   */

  var _future = [];
  /**
   * Add a command to be executed
   * @param {UndoableCommand} command
   * @param {boolean} clearFuture Whether to clear the future (redo) stack
   * @return {number}
   */

  self.execute = function (command) {
    var clearFuture = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (!(command instanceof _UndoableCommand__WEBPACK_IMPORTED_MODULE_0__["default"])) {
      throw new Error('Command needs to have UndoableCommand in its prototype chain');
    }

    command.execute();

    _past.push(command); // Clear the future (redo) list if needed


    if (clearFuture) {
      _future = [];
    }
  };
  /**
   * Undo the most recent command
   * @return {void}
   */


  self.undo = function () {
    // A command needs to exist
    if (_past.length < 1) {
      return;
    } // Undo the command


    var command = _past.pop();

    command.undo(); // Put the command in the future stack, for redoing

    _future.push(command);
  };
  /**
   * Execute the most recent command from the future stack
   * @return {void}
   */


  self.redo = function () {
    // A command needs to exist
    if (_future.length < 1) {
      return;
    } // Redo the command


    var command = _future.pop();

    self.execute(command, false);
  };
}

/***/ }),

/***/ "./assets/js/Commands/Grid/ChangeDigitCommand.js":
/*!*******************************************************!*\
  !*** ./assets/js/Commands/Grid/ChangeDigitCommand.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeDigitCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _UndoableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UndoableCommand */ "./assets/js/Commands/UndoableCommand.js");
/* harmony import */ var _InputMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../InputMode */ "./assets/js/InputMode.js");



Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(ChangeDigitCommand, _UndoableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * @param {number|null} digit
 * @constructor
 */

function ChangeDigitCommand(digit) {
  var self = this;
  _UndoableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * The digit to apply to cell(s)
   * @type {number|null}
   * @private
   */

  var _digit = digit;
  /**
   * The cells to apply the digit to
   * @type {GridCell[]}
   * @private
   */

  var _cells = Sudoku.grid.getSelectedCells();
  /**
   * The input mode for the digit
   * @type {number}
   * @private
   */


  var _inputMode = function () {
    var currentMode = Sudoku.inputMode.getMode(); // When more than 1 cell is selected,
    // switch to pencil mark notation if the input mode is 'value'

    return _cells.length > 1 && currentMode === _InputMode__WEBPACK_IMPORTED_MODULE_2__["default"].MODE_VALUE ? _InputMode__WEBPACK_IMPORTED_MODULE_2__["default"].MODE_CORNER : currentMode;
  }();
  /**
   * Contains the state of cells, before changing the digit
   * @type {object}
   * @private
   */


  var _cellsState = function () {
    // Pairs of cellNumber:{value, cornerMarks, centerMarks}
    var state = {}; // Collect the state of all cells

    _cells.forEach(function (cell) {
      state[cell.getCellNumber()] = {
        value: cell.getValue(),
        // Copy the array, because they go by reference
        cornerMarks: cell.getCornerMarks().map(function (item) {
          return item;
        }),
        centerMarks: cell.getCenterMarks().map(function (item) {
          return item;
        })
      };
    });

    return state;
  }();
  /**
   * @inheritDoc
   */


  self.execute = function () {
    _cells.forEach(function (cell) {
      return cell.setDigit(_digit, _inputMode);
    });

    if (Sudoku.settings.autoErrorCheckingState()) {
      Sudoku.grid.checkForErrors();
    }
  };
  /**
   * @inheritDoc
   */


  self.undo = function () {
    // Apply the previous values to the cell(s)
    _cells.forEach(function (cell) {
      var state = _cellsState[cell.getCellNumber()];

      cell.setValue(state.value); // Copy the array, because they go by reference

      cell.setCornerMarks(state.cornerMarks.map(function (item) {
        return item;
      }));
      cell.setCenterMarks(state.centerMarks.map(function (item) {
        return item;
      }));
    });

    if (Sudoku.settings.autoErrorCheckingState()) {
      Sudoku.grid.checkForErrors();
    }
  };
}

/***/ }),

/***/ "./assets/js/Commands/Modal/CloseAllModalsCommand.js":
/*!***********************************************************!*\
  !*** ./assets/js/Commands/Modal/CloseAllModalsCommand.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CloseAllModalsCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Command */ "./assets/js/Commands/Command.js");
/* harmony import */ var _PauseGameCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PauseGameCommand */ "./assets/js/Commands/PauseGameCommand.js");



Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(CloseAllModalsCommand, _Command__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * @constructor
 */

function CloseAllModalsCommand() {
  var self = this;
  _Command__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @type {PauseGameCommand}
   * @private
   */

  var _pauseGameCommand = new _PauseGameCommand__WEBPACK_IMPORTED_MODULE_2__["default"]();
  /**
   * @inheritDoc
   */


  self.execute = function () {
    _pauseGameCommand.execute(false);

    Sudoku.modal.showBackdrop(false); // Close all the modals

    var modals = document.getElementsByClassName('modal');

    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.remove('show');
    }

    Sudoku.modal.openState(false);
  };
}

/***/ }),

/***/ "./assets/js/Commands/Modal/OpenModalCommand.js":
/*!******************************************************!*\
  !*** ./assets/js/Commands/Modal/OpenModalCommand.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenModalCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Command */ "./assets/js/Commands/Command.js");
/* harmony import */ var _PauseGameCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PauseGameCommand */ "./assets/js/Commands/PauseGameCommand.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modal */ "./assets/js/Modal.js");




Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(OpenModalCommand, _Command__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * @param {string} modalId ID of the modal dialog to open
 * @constructor
 */

function OpenModalCommand(modalId) {
  var self = this;
  _Command__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @type {string}
   * @private
   */

  var _modalId = modalId;
  /**
   * The modal dialog to show
   * @type {HTMLElement}
   * @private
   */

  var _modalElement = document.getElementById(_modalId);
  /**
   * @inheritDoc
   */


  self.execute = function () {
    Sudoku.modal.currentModalId(_modalId); // Prevent recursive calls

    if (_modalId !== _Modal__WEBPACK_IMPORTED_MODULE_3__["default"].PAUSE_MODAL_ID) {
      var pauseGameCommand = new _PauseGameCommand__WEBPACK_IMPORTED_MODULE_2__["default"]();
      pauseGameCommand.execute(true);
    }

    Sudoku.modal.openState(true);
    Sudoku.modal.showBackdrop(true);

    _modalElement.classList.add('show');
  };
}

/***/ }),

/***/ "./assets/js/Commands/PauseGameCommand.js":
/*!************************************************!*\
  !*** ./assets/js/Commands/PauseGameCommand.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PauseGameCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/js/functions.js");
/* harmony import */ var _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TogglableCommand */ "./assets/js/Commands/TogglableCommand.js");
/* harmony import */ var _Modal_OpenModalCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal/OpenModalCommand */ "./assets/js/Commands/Modal/OpenModalCommand.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal */ "./assets/js/Modal.js");




Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(PauseGameCommand, _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
function PauseGameCommand() {
  var self = this;
  _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @inheritDoc
   */

  self.state = false;
  /**
   * @type {HTMLElement}
   * @private
   */

  var _bodyElement = document.getElementById('page-body');
  /**
   * @inheritDoc
   */


  self.execute = function (state) {
    if (state === true) {
      Sudoku.clock.pause();

      _bodyElement.classList.add('is-paused');

      var openModalCommand = new _Modal_OpenModalCommand__WEBPACK_IMPORTED_MODULE_2__["default"](_Modal__WEBPACK_IMPORTED_MODULE_3__["default"].PAUSE_MODAL_ID);
      openModalCommand.execute();
    } else {
      // Prevent recursive calls
      if (Sudoku.modal.currentModalId() !== _Modal__WEBPACK_IMPORTED_MODULE_3__["default"].PAUSE_MODAL_ID) {
        Sudoku.modal.close();
      }

      Sudoku.clock.unpause();

      _bodyElement.classList.remove('is-paused');
    }

    self.state = state;
  };
}

/***/ }),

/***/ "./assets/js/Commands/Settings/AutoErrorCheckingCommand.js":
/*!*****************************************************************!*\
  !*** ./assets/js/Commands/Settings/AutoErrorCheckingCommand.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoErrorCheckingCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TogglableCommand */ "./assets/js/Commands/TogglableCommand.js");


Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(AutoErrorCheckingCommand, _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
function AutoErrorCheckingCommand() {
  var self = this;
  _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @inheritDoc
   */

  self.state = function () {
    return Sudoku.settings.autoErrorCheckingState;
  };
  /**
   * The manual error checking button
   * @type {HTMLElement}
   * @private
   */


  var _errorCheckingButton = document.getElementById('check-errors');
  /**
   * The checkbox that toggles the setting
   * @type {HTMLElement}
   * @private
   */


  var _toggleCheckbox = document.getElementById('setting-auto-error-checking');
  /**
   * @inheritDoc
   */


  self.execute = function (state) {
    var toggleMethod = state ? 'add' : 'remove';

    _errorCheckingButton.classList[toggleMethod]('hide');

    _toggleCheckbox.checked = state;
    Sudoku.settings.autoErrorCheckingState(state); // Check or remove errors

    state === true ? Sudoku.grid.checkForErrors() : Sudoku.grid.removeAllErrors();
    self.state = state;
  };
}

/***/ }),

/***/ "./assets/js/Commands/Settings/HighlightBoxCommand.js":
/*!************************************************************!*\
  !*** ./assets/js/Commands/Settings/HighlightBoxCommand.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightBoxCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TogglableCommand */ "./assets/js/Commands/TogglableCommand.js");


Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(HighlightBoxCommand, _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
function HighlightBoxCommand() {
  var self = this;
  _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @inheritDoc
   */

  self.state = function () {
    return Sudoku.settings.highlightBoxState;
  };
  /**
   * The checkbox that toggles the setting
   * @type {HTMLElement}
   * @private
   */


  var _toggleCheckbox = document.getElementById('setting-highlight-box');
  /**
   * @inheritDoc
   */


  self.execute = function (state) {
    _toggleCheckbox.checked = state;
    Sudoku.settings.highlightBoxState(state);
    self.state = state;
  };
}
;

/***/ }),

/***/ "./assets/js/Commands/Settings/HighlightColumnCommand.js":
/*!***************************************************************!*\
  !*** ./assets/js/Commands/Settings/HighlightColumnCommand.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightColumnCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TogglableCommand */ "./assets/js/Commands/TogglableCommand.js");


Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(HighlightColumnCommand, _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
function HighlightColumnCommand() {
  var self = this;
  _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @inheritDoc
   */

  self.state = function () {
    return Sudoku.settings.highlightColumnState;
  };
  /**
   * The checkbox that toggles the setting
   * @type {HTMLElement}
   * @private
   */


  var _toggleCheckbox = document.getElementById('setting-highlight-column');
  /**
   * @inheritDoc
   */


  self.execute = function (state) {
    _toggleCheckbox.checked = state;
    Sudoku.settings.highlightColumnState(state);
    self.state = state;
  };
}
;

/***/ }),

/***/ "./assets/js/Commands/Settings/HighlightPencilMarksCommand.js":
/*!********************************************************************!*\
  !*** ./assets/js/Commands/Settings/HighlightPencilMarksCommand.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightPencilMarksCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TogglableCommand */ "./assets/js/Commands/TogglableCommand.js");


Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(HighlightPencilMarksCommand, _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
function HighlightPencilMarksCommand() {
  var self = this;
  _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @inheritDoc
   */

  self.state = function () {
    return Sudoku.settings.highlightPencilMarksState;
  };
  /**
   * The checkbox that toggles the setting
   * @type {HTMLElement}
   * @private
   */


  var _toggleCheckbox = document.getElementById('setting-highlight-pencil-marks');
  /**
   * @inheritDoc
   */


  self.execute = function (state) {
    _toggleCheckbox.checked = state;
    Sudoku.settings.highlightPencilMarksState(state);
    self.state = state;
  };
}
;

/***/ }),

/***/ "./assets/js/Commands/Settings/HighlightRowCommand.js":
/*!************************************************************!*\
  !*** ./assets/js/Commands/Settings/HighlightRowCommand.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightRowCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TogglableCommand */ "./assets/js/Commands/TogglableCommand.js");


Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(HighlightRowCommand, _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
function HighlightRowCommand() {
  var self = this;
  _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @inheritDoc
   */

  self.state = function () {
    return Sudoku.settings.highlightRowState;
  };
  /**
   * The checkbox that toggles the setting
   * @type {HTMLElement}
   * @private
   */


  var _toggleCheckbox = document.getElementById('setting-highlight-row');
  /**
   * @inheritDoc
   */


  self.execute = function (state) {
    _toggleCheckbox.checked = state;
    Sudoku.settings.highlightRowState(state);
    self.state = state;
  };
}
;

/***/ }),

/***/ "./assets/js/Commands/Settings/HighlightValueCommand.js":
/*!**************************************************************!*\
  !*** ./assets/js/Commands/Settings/HighlightValueCommand.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightValueCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TogglableCommand */ "./assets/js/Commands/TogglableCommand.js");


Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(HighlightValueCommand, _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
function HighlightValueCommand() {
  var self = this;
  _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @inheritDoc
   */

  self.state = function () {
    return Sudoku.settings.highlightValueState;
  };
  /**
   * The checkbox that toggles the setting
   * @type {HTMLElement}
   * @private
   */


  var _toggleCheckbox = document.getElementById('setting-highlight-value');
  /**
   * @inheritDoc
   */


  self.execute = function (state) {
    _toggleCheckbox.checked = state;
    Sudoku.settings.highlightValueState(state);
    self.state = state;
  };
}
;

/***/ }),

/***/ "./assets/js/Commands/Settings/ShowClockCommand.js":
/*!*********************************************************!*\
  !*** ./assets/js/Commands/Settings/ShowClockCommand.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowClockCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./assets/js/functions.js");
/* harmony import */ var _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TogglableCommand */ "./assets/js/Commands/TogglableCommand.js");


Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(ShowClockCommand, _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"]);
function ShowClockCommand() {
  var self = this;
  _TogglableCommand__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * @inheritDoc
   */

  self.state = function () {
    return Sudoku.settings.clockState();
  };
  /**
   * @type {HTMLElement}
   * @private
   */


  var _clockElement = document.getElementById('clock-wrapper');
  /**
   * The checkbox that toggles the setting
   * @type {HTMLElement}
   * @private
   */


  var _toggleCheckbox = document.getElementById('setting-show-clock');
  /**
   * @inheritDoc
   */


  self.execute = function (state) {
    var toggleMethod = state ? 'remove' : 'add';

    _clockElement.classList[toggleMethod]('hide');

    _toggleCheckbox.checked = state;
    Sudoku.settings.clockState(state);
    self.state = state;
  };
}

/***/ }),

/***/ "./assets/js/Commands/TogglableCommand.js":
/*!************************************************!*\
  !*** ./assets/js/Commands/TogglableCommand.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TogglableCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/js/functions.js");
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Command */ "./assets/js/Commands/Command.js");


Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(TogglableCommand, _Command__WEBPACK_IMPORTED_MODULE_1__["default"]);
function TogglableCommand() {
  var self = this;
  _Command__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * The current state of the command
   * @type {boolean|function|null}
   * @private
   */

  self.state = null;
  /**
   * @inheritDoc
   * @param {boolean} state
   */

  self.execute = function (state) {
    throw new Error("'execute' method is not implemented in the command");
  };
  /**
   * Toggle between states of the command
   * @return {void}
   */


  self.toggle = function () {
    var state = typeof self.state === 'function' ? self.state() : self.state;

    if (state === null) {
      throw new Error('The command needs an (initial) true/false state');
    }

    self.execute(!state);
  };
}

/***/ }),

/***/ "./assets/js/Commands/UndoableCommand.js":
/*!***********************************************!*\
  !*** ./assets/js/Commands/UndoableCommand.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UndoableCommand; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/js/functions.js");
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Command */ "./assets/js/Commands/Command.js");


Object(_functions__WEBPACK_IMPORTED_MODULE_0__["extend"])(UndoableCommand, _Command__WEBPACK_IMPORTED_MODULE_1__["default"]);
function UndoableCommand() {
  var self = this;
  _Command__WEBPACK_IMPORTED_MODULE_1__["default"].call(self);
  /**
   * Undo the command
   * @return {void}
   */

  self.undo = function () {
    throw new Error("'undo' method is not implemented in the command");
  };
}

/***/ }),

/***/ "./assets/js/Controls.js":
/*!*******************************!*\
  !*** ./assets/js/Controls.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controls; });
/* harmony import */ var _Utilities_Visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities/Visitor */ "./assets/js/Utilities/Visitor.js");

function Controls() {
  var self = this;
  /**
   * Indicates whether a mouse button is currently pressed
   * @type {boolean}
   * @private
   */

  var _mousePressed = false;
  /**
   * Indicates whether a ctrl button is currently pressed
   * @type {boolean}
   * @private
   */

  var _ctrlKeyPressed = false;
  /**
   * Indicates whether a shift button is currently pressed
   * @type {boolean}
   * @private
   */

  var _shiftKeyPressed = false;
  /**
   * Arrow key codes
   * @type {object}
   * @private
   */

  var _arrowKeys = {
    up: ['ArrowUp', 'KeyW'],
    down: ['ArrowDown', 'KeyS'],
    left: ['ArrowLeft', 'KeyA'],
    right: ['ArrowRight', 'KeyD']
  };
  /**
   * Arrow key codes, as 1 array
   * @type {string[]}
   * @private
   */

  var _arrowKeysConcatenated = _arrowKeys.up.concat(_arrowKeys.down).concat(_arrowKeys.left).concat(_arrowKeys.right);
  /**
   * Number key codes
   * @type {string[]}
   * @private
   */


  var _numberKeys = ['Digit1', 'Numpad1', 'Digit2', 'Numpad2', 'Digit3', 'Numpad3', 'Digit4', 'Numpad4', 'Digit5', 'Numpad5', 'Digit6', 'Numpad6', 'Digit7', 'Numpad7', 'Digit8', 'Numpad8', 'Digit9', 'Numpad9'];
  /**
   * Delete key codes
   * @type {string[]}
   * @private
   */

  var _deleteKeys = ['Delete', 'Backspace'];
  /**
   * Initialize the object
   * @return {void}
   */

  self.init = function () {
    document.addEventListener('mousedown', function () {
      return _mousePressed = true;
    });
    document.addEventListener('mouseup', function () {
      return _mousePressed = false;
    });
    document.addEventListener('keyup', _keyUpDownCallback);
    document.addEventListener('keydown', _keyUpDownCallback);
    document.addEventListener('keydown', _keyDownCallback);

    _registerClickDisabling();
  };
  /**
   * Disable click events for certain elements
   * @return {void}
   * @private
   */


  var _registerClickDisabling = function _registerClickDisabling() {
    document.addEventListener('click', function (event) {
      if (event.target.closest('.click-prevent') !== null) {
        event.preventDefault();
      }
    });
  };
  /**
   * Decide whether to cancel a keyboard listener
   * @param {Event} event
   * @return {boolean}
   */


  self.cancelKeyboardEvent = function (event) {
    var nodeName = event.target.nodeName.toLowerCase(); // Don't use custom listener on input elements

    return ['input', 'textarea'].indexOf(nodeName) > -1;
  };
  /**
   * Callback for keydown and keyup
   * @param {Event} event
   * @return {void}
   * @private
   */


  var _keyUpDownCallback = function _keyUpDownCallback(event) {
    _ctrlKeyPressed = _Utilities_Visitor__WEBPACK_IMPORTED_MODULE_0__["default"].usesMacOs ? event.metaKey : event.ctrlKey;
    _shiftKeyPressed = event.shiftKey;
  };
  /**
   * @param {Event} event
   * @return {void}
   * @private
   */


  var _keyDownCallback = function _keyDownCallback(event) {
    // Prevent browser keyboard actions
    if (!self.cancelKeyboardEvent(event)) {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].indexOf(event.code) > -1) {
        event.preventDefault();
      }

      if (_ctrlKeyPressed) {
        if (event.code === 'KeyY') {
          event.preventDefault();
        }
      }
    }
  };
  /**
   * @return {boolean}
   */


  self.mouseIsPressed = function () {
    return _mousePressed;
  };
  /**
   * @return {boolean}
   */


  self.ctrlKeyIsPressed = function () {
    return _ctrlKeyPressed;
  };
  /**
   * @return {boolean}
   */


  self.shiftKeyIsPressed = function () {
    return _shiftKeyPressed;
  };
  /**
   * Checks whether a keycode is a number key
   * @param {string} keyCode
   * @return {boolean}
   */


  self.isNumberKey = function (keyCode) {
    return _numberKeys.indexOf(keyCode) > -1;
  };
  /**
   * Checks whether a keycode is a delete key
   * @param {string} keyCode
   * @return {boolean}
   */


  self.isDeleteKey = function (keyCode) {
    return _deleteKeys.indexOf(keyCode) > -1;
  };
  /**
   * Checks whether a keycode is an arrow key
   * @param {string} keyCode
   * @param {string} direction (any or up/down/left/right)
   * @return {boolean}
   */


  self.isArrowKey = function (keyCode) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'any';

    // Check for any arrow key
    if (direction === 'any') {
      return _arrowKeysConcatenated.indexOf(keyCode) > -1;
    } // Check for a specific arrow key


    return _arrowKeys[direction] && _arrowKeys[direction].indexOf(keyCode) > -1;
  };
}

/***/ }),

/***/ "./assets/js/EventHandlers/ActionsEventHandler.js":
/*!********************************************************!*\
  !*** ./assets/js/EventHandlers/ActionsEventHandler.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionsEventHandler; });
/* harmony import */ var _Commands_AutoCandidateModeCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Commands/AutoCandidateModeCommand */ "./assets/js/Commands/AutoCandidateModeCommand.js");

function ActionsEventHandler() {
  var self = this;
  /**
   * Initialize the object
   */

  self.init = function () {
    _registerCheckErrorsEvent();

    _registerAutoCandidateModeEvent();
  };
  /**
   * @private
   */


  var _registerCheckErrorsEvent = function _registerCheckErrorsEvent() {
    document.getElementById('check-errors').addEventListener('click', Sudoku.grid.checkForErrors);
  };
  /**
   * @private
   */


  var _registerAutoCandidateModeEvent = function _registerAutoCandidateModeEvent() {
    document.getElementById('setting-auto-candidate').addEventListener('change', function (event) {
      var command = new _Commands_AutoCandidateModeCommand__WEBPACK_IMPORTED_MODULE_0__["default"]();
      command.execute(event.target.checked);
    });
  };
}

/***/ }),

/***/ "./assets/js/EventHandlers/DocumentEventHandler.js":
/*!*********************************************************!*\
  !*** ./assets/js/EventHandlers/DocumentEventHandler.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocumentEventHandler; });
/* harmony import */ var _Commands_Grid_ChangeDigitCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Commands/Grid/ChangeDigitCommand */ "./assets/js/Commands/Grid/ChangeDigitCommand.js");
/* harmony import */ var _Commands_PauseGameCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Commands/PauseGameCommand */ "./assets/js/Commands/PauseGameCommand.js");


function DocumentEventHandler() {
  var self = this;
  /**
   * Initialize the object
   */

  self.init = function () {
    _registerKeyboardEvents();

    _registerMouseEvents();
  };
  /**
   * @return {void}
   * @private
   */


  var _registerKeyboardEvents = function _registerKeyboardEvents() {
    var pauseGameCommand = new _Commands_PauseGameCommand__WEBPACK_IMPORTED_MODULE_1__["default"]();
    document.addEventListener('keydown', function (event) {
      if (Sudoku.controls.cancelKeyboardEvent(event)) {
        return;
      }

      if (Sudoku.controls.isArrowKey(event.code)) {
        // Deselect all cells, if the ctrl key is not pressed
        if (!Sudoku.controls.ctrlKeyIsPressed()) {
          Sudoku.grid.deselectAllCells();
        }

        var newCellIndex = Sudoku.grid.getLastNavigatedCell().getCellNumber() - 1;
        var newCell = null; // Then navigate to the intended cell
        // Wrap around if needed

        if (Sudoku.controls.isArrowKey(event.code, 'up')) {
          if ((newCellIndex -= 9) < 0) {
            newCellIndex = 81 + newCellIndex;
          }
        } else if (Sudoku.controls.isArrowKey(event.code, 'down')) {
          if ((newCellIndex += 9) > 80) {
            newCellIndex = newCellIndex - 81;
          }
        } else if (Sudoku.controls.isArrowKey(event.code, 'left')) {
          if ((--newCellIndex + 1) % 9 === 0) {
            newCellIndex += 9;
          }
        } else if (Sudoku.controls.isArrowKey(event.code, 'right')) {
          if (++newCellIndex % 9 === 0) {
            newCellIndex -= 9;
          }
        } // Make the new cell the active one


        newCell = Sudoku.grid.getCell(newCellIndex + 1);
        newCell.setSelectedState(true);
        Sudoku.grid.setLastNavigatedCell(newCell);
      }

      if (Sudoku.controls.isNumberKey(event.code)) {
        // Set a number value
        var digit = parseInt(event.key, 10);
        Sudoku.history.execute(new _Commands_Grid_ChangeDigitCommand__WEBPACK_IMPORTED_MODULE_0__["default"](digit));
      } else if (Sudoku.controls.isDeleteKey(event.code)) {
        // Remove a value
        Sudoku.history.execute(new _Commands_Grid_ChangeDigitCommand__WEBPACK_IMPORTED_MODULE_0__["default"](null));
      } else if (event.code === 'KeyZ') {
        if (Sudoku.controls.ctrlKeyIsPressed()) {
          // Redo or undo an action
          if (Sudoku.controls.shiftKeyIsPressed()) {
            Sudoku.history.redo();
          } else {
            Sudoku.history.undo();
          }
        }
      } else if (event.code === 'KeyY') {
        // Redo an action
        if (Sudoku.controls.ctrlKeyIsPressed()) {
          Sudoku.history.redo();
        }
      } else if (event.code === 'Escape') {
        Sudoku.modal.openState() === true ? // Close a modal dialog
        Sudoku.modal.close() // Pause / unpause the game
        : pauseGameCommand.toggle();
      }
    });
  };
  /**
   * @return {void}
   * @private
   */


  var _registerMouseEvents = function _registerMouseEvents() {
    document.addEventListener('mousedown', function (event) {
      // Deselect all cells, when clicking outside the grid
      if (event.target.closest('.grid-cell') === null) {
        Sudoku.grid.deselectAllCells();
        Sudoku.gridCellHighlighter.dehighlightAllCells();
      }
    });
  };
}

/***/ }),

/***/ "./assets/js/EventHandlers/GridCellEventHandler.js":
/*!*********************************************************!*\
  !*** ./assets/js/EventHandlers/GridCellEventHandler.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridCellEventHandler; });
/* harmony import */ var _Grid_GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Grid/GridCell */ "./assets/js/Grid/GridCell.js");

/**
 * @param {GridCell} gridCell
 * @constructor
 */

function GridCellEventHandler(gridCell) {
  var self = this;
  /**
   * The cell to register event handlers for
   * @type {GridCell}
   * @private
   */

  var _gridCell = gridCell;
  /**
   * Register event handlers for a grid cell
   * @return {void}
   */

  self.register = function () {
    _registerMouseDownEvent();

    _registerMouseEnterEvent();

    _registerMouseUpEvent();
  };
  /**
   * @return {void}
   * @private
   */


  var _registerMouseDownEvent = function _registerMouseDownEvent() {
    _gridCell.getElement().addEventListener('mousedown', function () {
      if (Sudoku.controls.ctrlKeyIsPressed()) {
        // Toggle the selected status when clicked, if the ctrl key is pressed
        _gridCell.setSelectedState(!_gridCell.isSelected());
      } else {
        // Select only this cell, if the ctrl key is not pressed
        Sudoku.grid.deselectAllCells();

        _gridCell.setSelectedState(true);
      }
    });
  };
  /**
   * @return {void}
   * @private
   */


  var _registerMouseEnterEvent = function _registerMouseEnterEvent() {
    _gridCell.getElement().addEventListener('mouseenter', function () {
      // Allow multiple cells to be selected
      if (Sudoku.controls.mouseIsPressed()) {
        _gridCell.setSelectedState(true);
      }
    });
  };
  /**
   * @return {void}
   * @private
   */


  var _registerMouseUpEvent = function _registerMouseUpEvent() {
    // On mouse up, this is the last selected cell
    _gridCell.getElement().addEventListener('mouseup', function () {
      return Sudoku.grid.setLastNavigatedCell(_gridCell);
    });
  };
}

/***/ }),

/***/ "./assets/js/EventHandlers/SettingsEventHandler.js":
/*!*********************************************************!*\
  !*** ./assets/js/EventHandlers/SettingsEventHandler.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsEventHandler; });
/* harmony import */ var _Commands_Settings_ShowClockCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Commands/Settings/ShowClockCommand */ "./assets/js/Commands/Settings/ShowClockCommand.js");
/* harmony import */ var _Commands_Settings_AutoErrorCheckingCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Commands/Settings/AutoErrorCheckingCommand */ "./assets/js/Commands/Settings/AutoErrorCheckingCommand.js");
/* harmony import */ var _Commands_Settings_HighlightRowCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Commands/Settings/HighlightRowCommand */ "./assets/js/Commands/Settings/HighlightRowCommand.js");
/* harmony import */ var _Commands_Settings_HighlightColumnCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Commands/Settings/HighlightColumnCommand */ "./assets/js/Commands/Settings/HighlightColumnCommand.js");
/* harmony import */ var _Commands_Settings_HighlightBoxCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Commands/Settings/HighlightBoxCommand */ "./assets/js/Commands/Settings/HighlightBoxCommand.js");
/* harmony import */ var _Commands_Settings_HighlightValueCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Commands/Settings/HighlightValueCommand */ "./assets/js/Commands/Settings/HighlightValueCommand.js");
/* harmony import */ var _Commands_Settings_HighlightPencilMarksCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Commands/Settings/HighlightPencilMarksCommand */ "./assets/js/Commands/Settings/HighlightPencilMarksCommand.js");







function SettingsEventHandler() {
  var self = this;
  /**
   * Initialize the object
   */

  self.init = function () {
    _enableClockToggling();

    _enableAutoErrorCheckingToggling();

    _enableHighlightingToggling();
  };
  /**
   * @return {void}
   * @private
   */


  var _enableClockToggling = function _enableClockToggling() {
    var showClockCommand = new _Commands_Settings_ShowClockCommand__WEBPACK_IMPORTED_MODULE_0__["default"]();
    document.getElementById('setting-show-clock').addEventListener('change', function (event) {
      showClockCommand.execute(event.target.checked);
    });
  };
  /**
   * @return {void}
   * @private
   */


  var _enableAutoErrorCheckingToggling = function _enableAutoErrorCheckingToggling() {
    var autoErrorCheckingCommand = new _Commands_Settings_AutoErrorCheckingCommand__WEBPACK_IMPORTED_MODULE_1__["default"]();
    document.getElementById('setting-auto-error-checking').addEventListener('change', function (event) {
      autoErrorCheckingCommand.execute(event.target.checked);
    });
  };
  /**
   * @return {void}
   * @private
   */


  var _enableHighlightingToggling = function _enableHighlightingToggling() {
    var highlightRowCommand = new _Commands_Settings_HighlightRowCommand__WEBPACK_IMPORTED_MODULE_2__["default"]();
    var highlightColumnCommand = new _Commands_Settings_HighlightColumnCommand__WEBPACK_IMPORTED_MODULE_3__["default"]();
    var highlightBoxCommand = new _Commands_Settings_HighlightBoxCommand__WEBPACK_IMPORTED_MODULE_4__["default"]();
    var highlightValueCommand = new _Commands_Settings_HighlightValueCommand__WEBPACK_IMPORTED_MODULE_5__["default"]();
    var highlightPencilMarksCommand = new _Commands_Settings_HighlightPencilMarksCommand__WEBPACK_IMPORTED_MODULE_6__["default"](); // Row highlighting

    document.getElementById('setting-highlight-row').addEventListener('change', function (event) {
      highlightRowCommand.execute(event.target.checked);
    }); // Column highlighting

    document.getElementById('setting-highlight-column').addEventListener('change', function (event) {
      highlightColumnCommand.execute(event.target.checked);
    }); // 3x3 box highlighting

    document.getElementById('setting-highlight-box').addEventListener('change', function (event) {
      highlightBoxCommand.execute(event.target.checked);
    }); // Same value highlighting

    document.getElementById('setting-highlight-value').addEventListener('change', function (event) {
      highlightValueCommand.execute(event.target.checked);
    }); // Same value highlighting

    document.getElementById('setting-highlight-pencil-marks').addEventListener('change', function (event) {
      highlightPencilMarksCommand.execute(event.target.checked);
    });
  };
}

/***/ }),

/***/ "./assets/js/Grid/Grid.js":
/*!********************************!*\
  !*** ./assets/js/Grid/Grid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/js/functions.js");
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridCell */ "./assets/js/Grid/GridCell.js");
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridRow */ "./assets/js/Grid/GridRow.js");
/* harmony import */ var _GridColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridColumn */ "./assets/js/Grid/GridColumn.js");
/* harmony import */ var _GridBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GridBox */ "./assets/js/Grid/GridBox.js");
/* harmony import */ var _Traits_HasGridCells__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Traits/HasGridCells */ "./assets/js/Traits/HasGridCells.js");






function Grid() {
  var self = this;
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["trait"])(self, _Traits_HasGridCells__WEBPACK_IMPORTED_MODULE_5__["default"]);
  /**
   * All the rows in the grid
   * @type {GridRow[]}
   * @private
   */

  var _gridRows = [];
  /**
   * All the columns in the grid
   * @type {GridColumn[]}
   * @private
   */

  var _gridColumns = [];
  /**
   * All the 3x3 boxes in the grid
   * @type {GridBox[]}
   * @private
   */

  var _gridBoxes = [];
  /**
   * A list of currently selected cells
   * @type {GridCell[]}
   * @private
   */

  var _selectedCells = [];
  /**
   * The cell that is last navigated to
   * @type {GridCell|null}
   * @private
   */

  var _lastNavigatedCell = null;
  /**
   * Initialize the object
   * @return {void}
   */

  self.init = function () {
    _collectCells();
  };
  /**
   * Collect all the cell elements
   * @return {void}
   * @private
   */


  var _collectCells = function _collectCells() {
    // Create 9 rows, columns and 3x3 boxes
    for (var i = 1; i < 10; i++) {
      _gridRows.push(new _GridRow__WEBPACK_IMPORTED_MODULE_2__["default"](i));

      _gridColumns.push(new _GridColumn__WEBPACK_IMPORTED_MODULE_3__["default"](i));

      _gridBoxes.push(new _GridBox__WEBPACK_IMPORTED_MODULE_4__["default"](i));
    } // Add all 81 cells


    var gridCell;

    for (var _i = 1; _i < 82; _i++) {
      gridCell = new _GridCell__WEBPACK_IMPORTED_MODULE_1__["default"](_i);
      gridCell.init();
      self.addCell(gridCell); // Add the cell to the applicable row/column/box
      // And vice versa

      for (var j = 0; j < 9; j++) {
        if (_gridRows[j].getCellNumbers().indexOf(_i) !== -1) {
          _gridRows[j].addCell(gridCell);

          gridCell.setRow(_gridRows[j]);
        }

        if (_gridColumns[j].getCellNumbers().indexOf(_i) !== -1) {
          _gridColumns[j].addCell(gridCell);

          gridCell.setColumn(_gridColumns[j]);
        }

        if (_gridBoxes[j].getCellNumbers().indexOf(_i) !== -1) {
          _gridBoxes[j].addCell(gridCell);

          gridCell.setBox(_gridBoxes[j]);
        }
      }
    }

    self.setLastNavigatedCell(null);
  };
  /**
   * @return {GridCell[]}
   */


  self.getSelectedCells = function () {
    return _selectedCells;
  };
  /**
   * Add a cell to the list of selected cells
   * @param {GridCell} cell
   * @return {void}
   */


  self.addSelectedCell = function (cell) {
    _selectedCells.push(cell); // Highlight related cells after selecting


    Sudoku.gridCellHighlighter.highlightRelatedCells();
  };
  /**
   * Deselect all the selected cells
   * @return {void}
   */


  self.deselectAllCells = function () {
    self.getSelectedCells().forEach(function (cell) {
      return cell.setSelectedState(false);
    });
    _selectedCells = [];
  };
  /**
   * @return {GridCell|null}
   */


  self.getLastNavigatedCell = function () {
    return _lastNavigatedCell;
  };
  /**
   * @param {GridCell|null} cell
   * @return {null}
   */


  self.setLastNavigatedCell = function (cell) {
    // The default last navigated cell is the center one
    if (cell === null) {
      _lastNavigatedCell = self.getCell(41);
    } else {
      _lastNavigatedCell = cell;
    }
  };
  /**
   * Check for errors in the grid
   * @return {void}
   */


  self.checkForErrors = function () {
    self.removeAllErrors();

    _gridRows.forEach(function (row) {
      return row.checkDuplicateCellValues();
    });

    _gridColumns.forEach(function (column) {
      return column.checkDuplicateCellValues();
    });

    _gridBoxes.forEach(function (box) {
      return box.checkDuplicateCellValues();
    });
  };
  /**
   * Remove the error status of all cells
   * @return {void}
   */


  self.removeAllErrors = function () {
    self.getCells().forEach(function (cell) {
      return cell.setErrorState(false);
    });
  };
  /**
   * Show all possible candidates
   * @return {void}
   */


  self.determineCandidates = function () {
    self.getCells() // Only cells that don't have a value
    .filter(function (cell) {
      return cell.getValue() === null;
    }).forEach(function (cell) {
      // Get pencil marks to show
      var centerMarks = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (number) {
        // If the value exists, filter out the number
        if (cell.getRow().containsValue(number)) {
          return false;
        } else if (cell.getColumn().containsValue(number)) {
          return false;
        } else if (cell.getBox().containsValue(number)) {
          return false;
        }

        return true;
      }); // Apply the pencil marks

      cell.setCenterMarks(centerMarks, true);
    });
  };
  /**
   * Remove all automatically shown candidates
   * @return {void}
   */


  self.removeCandidates = function () {
    self.getCells().forEach(function (cell) {
      // Remove the auto-candidates
      cell.setCenterMarks([], true); // Show the user-filled center marks

      cell.fillCenterMarks();
    });
  };
  /**
   * Get the state of the entire grid
   * @return {string}
   */


  self.getState = function () {
    return (// Application version
      'a1' // Elapsed milliseconds
      + 't' + Sudoku.clock.getTotalElapsedMs() // Cells state
      + self.getCells().map(function (cell) {
        return cell.getState();
      }).join('')
    );
  };
}

/***/ }),

/***/ "./assets/js/Grid/GridBox.js":
/*!***********************************!*\
  !*** ./assets/js/Grid/GridBox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridBox; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/js/functions.js");
/* harmony import */ var _Traits_HasGridCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Traits/HasGridCells */ "./assets/js/Traits/HasGridCells.js");


/**
 * @param {number} boxNumber
 * @constructor
 */

function GridBox(boxNumber) {
  var self = this;
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["trait"])(self, _Traits_HasGridCells__WEBPACK_IMPORTED_MODULE_1__["default"]);
  /**
   * The 1-based box number in the grid
   * @type {number}
   * @private
   */

  var _boxNumber = boxNumber;
  /**
   * Get the cell numbers that self box has
   * @return {Array}
   */

  self.getCellNumbers = function () {
    var boxIndex = _boxNumber - 1; // The row index of the box (0, 1 or 2)

    var boxRowIndex = Math.floor(boxIndex / 3); // Determine the top-left number of the 3x3 box

    var topLeftNumber = boxIndex * 3;
    topLeftNumber += boxRowIndex * 18; // Make the number 1-based

    topLeftNumber++; // Get cell numbers,
    // based on the top-left number in the box

    var numbers = [];

    for (var i = 0; i < 3; i++) {
      numbers.push(topLeftNumber);
      numbers.push(++topLeftNumber);
      numbers.push(++topLeftNumber);
      topLeftNumber += 7;
    }

    return numbers;
  };
}

/***/ }),

/***/ "./assets/js/Grid/GridCell.js":
/*!************************************!*\
  !*** ./assets/js/Grid/GridCell.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridCell; });
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridRow */ "./assets/js/Grid/GridRow.js");
/* harmony import */ var _GridColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridColumn */ "./assets/js/Grid/GridColumn.js");
/* harmony import */ var _GridBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridBox */ "./assets/js/Grid/GridBox.js");
/* harmony import */ var _EventHandlers_GridCellEventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EventHandlers/GridCellEventHandler */ "./assets/js/EventHandlers/GridCellEventHandler.js");
/* harmony import */ var _InputMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputMode */ "./assets/js/InputMode.js");





/**
 * The maximum amount of pencil marks
 * @type {number}
 * @static
 */

GridCell.MAX_CORNER_MARKS = 8;
GridCell.MAX_CENTER_MARKS = 5;
/**
 * @param {number} cellNumber
 * @constructor
 */

function GridCell(cellNumber) {
  var self = this;
  /**
   * The 1-based cell number in the grid
   * @type {number}
   * @private
   */

  var _cellNumber = cellNumber;
  /**
   * The HTML element that is the cell
   * @type {HTMLLIElement|null}
   * @private
   */

  var _element = null;
  /**
   * The row the cell belongs to
   * @type {GridRow|null}
   * @private
   */

  var _gridRow = null;
  /**
   * The column the cell belongs to
   * @type {GridColumn|null}
   * @private
   */

  var _gridColumn = null;
  /**
   * The 3x3 box the cell belongs to
   * @type {GridBox|null}
   * @private
   */

  var _gridBox = null;
  /**
   * Whether the cell value is set at the start
   * @type {boolean}
   * @private
   */

  var _isPrefilled = false;
  /**
   * The background color number of the cell
   * @type {number}
   * @private
   */

  var _colorNumber = 1;
  /**
   * The value of the cell
   * @type {number|null}
   * @private
   */

  var _value = null;
  /**
   * The pencil mark values (corner mode)
   * @type {number[]}
   * @private
   */

  var _cornerMarks = [];
  /**
   * The pencil mark values (center mode)
   * @type {number[]}
   * @private
   */

  var _centerMarks = [];
  /**
   * Automatically filled in candidates
   * @type {number[]}
   * @private
   */

  var _autoCandidates = [];
  /**
   * Whether the cell is currently selected
   * @type {boolean}
   * @private
   */

  var _isSelected = false;
  /**
   * Whether the cell is currently highlighted
   * @type {boolean}
   * @private
   */

  var _isHighlighted = false;
  /**
   * Initialize the object
   * @return {void}
   */

  self.init = function () {
    // Get the HTML cell element
    _element = document.getElementById("grid-cell-".concat(self.getCellNumber()));

    if (_element === null) {
      throw new Error("Cell element with ID 'grid-cell-".concat(self.getCellNumber(), "' not found"));
    } // Register event handlers


    var eventHandler = new _EventHandlers_GridCellEventHandler__WEBPACK_IMPORTED_MODULE_3__["default"](self);
    eventHandler.register();
  };
  /**
   * @return {number}
   */


  self.getCellNumber = function () {
    return _cellNumber;
  };
  /**
   * @return {HTMLLIElement|null}
   */


  self.getElement = function () {
    return _element;
  };
  /**
   * @return {boolean}
   */


  self.isPrefilled = function () {
    return _isPrefilled;
  };
  /**
   * @return {number}
   */


  self.getColorNumber = function () {
    return _colorNumber;
  };
  /**
   * Wrapper for value, corner-marks and center-marks setting
   * @param {number|null} digit
   * @param {number|null} mode The input mode, uses current mode by default
   * @return {void}
   * @see InputMode for the mode constants
   */


  self.setDigit = function (digit) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // Use the current input mode, if null
    if (mode === null) {
      mode = Sudoku.inputMode.getMode();
    } // Null means deleting


    if (digit === null) {
      // Remove the marks only if no value is filled in
      if (self.getValue() === null) {
        self.setCornerMarks([]);

        if (!Sudoku.settings.autoCandidateState()) {
          self.setCenterMarks([]);
        }
      } else {
        self.setValue(null);
      }

      return;
    }

    switch (mode) {
      case _InputMode__WEBPACK_IMPORTED_MODULE_4__["default"].MODE_VALUE:
        self.setValue(digit);
        break;

      case _InputMode__WEBPACK_IMPORTED_MODULE_4__["default"].MODE_CORNER:
        self.setCornerMark(digit);
        break;

      case _InputMode__WEBPACK_IMPORTED_MODULE_4__["default"].MODE_CENTER:
        self.setCenterMark(digit);
        break;
    }
  };
  /**
   * @return {number|null}
   */


  self.getValue = function () {
    return _value;
  };
  /**
   * @param {number|null} digit
   * @return {void}
   */


  self.setValue = function (digit) {
    // Remove the value, if the same digit is entered
    if (digit === self.getValue()) {
      digit = null;
    } // Show or hide the pencil marks


    _showMarks(digit === null); // Show the value on screen


    self.getElement().getElementsByClassName('cell-value')[0].innerText = digit;
    _value = digit; // Highlight other cells

    Sudoku.gridCellHighlighter.highlightRelatedCells(); // Show possible candidates if needed

    if (Sudoku.settings.autoCandidateState() === true) {
      Sudoku.grid.determineCandidates();
    }
  };
  /**
   * Check if the cell has a value
   * @param {number|null} digit
   * @return {boolean}
   */


  self.hasValue = function () {
    var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    // Check if the cell has any value
    if (digit === null) {
      return self.getValue() !== null;
    } // Or check for a specific value


    return self.getValue() === digit;
  };
  /**
   * @return {number[]}
   */


  self.getCornerMarks = function () {
    return _cornerMarks;
  };
  /**
   * Add or remove a digit from the corner marks
   * @param {number|null} digit
   * @return {void}
   */


  self.setCornerMark = function (digit) {
    // Don't set a corner mark, if a value is filled in
    if (self.getValue() !== null) {
      return;
    }

    var cornerMarks = self.getCornerMarks(); // Remove if the digit exists, otherwise add it

    var existingIndex = cornerMarks.indexOf(digit);

    if (existingIndex > -1) {
      cornerMarks.splice(existingIndex, 1);
    } else {
      // Don't add if the maximum amount is reached
      if (digit !== null && cornerMarks.length < GridCell.MAX_CORNER_MARKS) {
        cornerMarks.push(digit);
      }
    }

    self.setCornerMarks(cornerMarks);
  };
  /**
   * @param {number[]} cornerMarks
   * @return {void}
   */


  self.setCornerMarks = function (cornerMarks) {
    // Don't set pencil marks, if there are too many
    if (cornerMarks.length > GridCell.MAX_CORNER_MARKS) {
      return;
    }

    _cornerMarks = cornerMarks;
    self.fillCornerMarks();
  };
  /**
   * Fill corner marks in the cell
   * @return {void}
   */


  self.fillCornerMarks = function () {
    // Clear all corner marks first
    var allElements = self.getElement().getElementsByClassName('corner-mark');

    for (var i = 0; i < allElements.length; i++) {
      allElements[i].innerText = null;
    } // Show the corner marks


    self.getCornerMarks().sort(function (a, b) {
      return a - b;
    }).forEach(function (item, index) {
      document.getElementById("corner-mark-".concat(self.getCellNumber(), "-").concat(index + 1)).innerText = item.toString(10);
    });
  };
  /**
   * Check if the cell has a corner mark
   * @param {number|null} digit
   * @return {boolean}
   */


  self.hasCornerMark = function () {
    var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    // Check if the cell has any corner mark
    if (digit === null) {
      return self.getCornerMarks().length > 0;
    } // Or check for a specific value


    return self.getCornerMarks().indexOf(digit) > -1;
  };
  /**
   * @return {number[]}
   */


  self.getCenterMarks = function () {
    return _centerMarks;
  };
  /**
   * @return {number[]}
   */


  self.getAutoCandidates = function () {
    return _autoCandidates;
  };
  /**
   * Add or remove a digit from the center marks
   * @param {number|null} digit
   * @return {void}
   */


  self.setCenterMark = function (digit) {
    // Setting center marks is disabled in auto-candidate mode
    if (Sudoku.settings.autoCandidateState() === true) {
      return;
    } // Don't set a center mark, if a value is filled in


    if (self.getValue() !== null) {
      return;
    }

    var centerMarks = self.getCenterMarks(); // Remove if the digit exists, otherwise add it

    var existingIndex = centerMarks.indexOf(digit);

    if (existingIndex > -1) {
      centerMarks.splice(existingIndex, 1);
    } else {
      // Don't add if the maximum amount is reached
      if (digit !== null && centerMarks.length < GridCell.MAX_CENTER_MARKS) {
        centerMarks.push(digit);
      }
    }

    self.setCenterMarks(centerMarks);
  };
  /**
   * @param {number[]} centerMarks
   * @param {boolean} asAutoCandidate
   * @return {void}
   */


  self.setCenterMarks = function (centerMarks) {
    var asAutoCandidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // Empty the candidates, if there are too many
    if (asAutoCandidate === true && centerMarks.length > GridCell.MAX_CENTER_MARKS) {
      centerMarks = [];
    } // Don't set pencil marks, if there are too many


    if (centerMarks.length > GridCell.MAX_CENTER_MARKS) {
      return;
    }

    asAutoCandidate === true ? _autoCandidates = centerMarks : _centerMarks = centerMarks;
    self.fillCenterMarks(asAutoCandidate);
  };
  /**
   * Fill corner marks in the cell
   * @param {boolean} asAutoCandidate
   * @return {void}
   */


  self.fillCenterMarks = function () {
    var asAutoCandidate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var centerMarks = asAutoCandidate === true ? self.getAutoCandidates() : self.getCenterMarks();
    centerMarks = centerMarks // Sort ascending
    .sort(function (a, b) {
      return a - b;
    }) // Concatenate the numbers
    .join(''); // Show the pencil marks

    self.getElement().getElementsByClassName('center-marks')[0].innerText = centerMarks;
  };
  /**
   * Check if the cell has a center mark
   * @param {number|null} digit
   * @return {boolean}
   */


  self.hasCenterMark = function () {
    var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var centerMarks = Sudoku.settings.autoCandidateState() === true ? self.getAutoCandidates() : self.getCenterMarks(); // Check if the cell has any center mark

    if (digit === null) {
      return centerMarks.length > 0;
    } // Or check for a specific value


    return centerMarks.indexOf(digit) > -1;
  };
  /**
   * Toggle the visibility of the pencil marks
   * @param {boolean} show
   * @private
   */


  var _showMarks = function _showMarks(show) {
    var toggleMethod = show ? 'remove' : 'add'; // Toggle the corner marks

    for (var i = 1; i < 9; i++) {
      document.getElementById("corner-mark-".concat(self.getCellNumber(), "-").concat(i)).classList[toggleMethod]('hide');
    } // Toggle the center marks


    self.getElement().getElementsByClassName('center-marks')[0].classList[toggleMethod]('hide');
  };
  /**
   * @return {boolean}
   */


  self.isSelected = function () {
    return _isSelected;
  };
  /**
   * @param {boolean} selected
   * @return {void}
   */


  self.setSelectedState = function (selected) {
    var toggleMethod = selected ? 'add' : 'remove';
    self.getElement().classList[toggleMethod]('is-selected'); // Don't add duplicates to the list

    if (selected && !self.isSelected()) {
      Sudoku.grid.addSelectedCell(self);
    }

    _isSelected = selected;
  };
  /**
   * @return {boolean}
   */


  self.isHighlighted = function () {
    return _isHighlighted;
  };
  /**
   * @param {boolean} highlighted
   * @return {void}
   */


  self.setHighlightedState = function (highlighted) {
    var toggleMethod = highlighted ? 'add' : 'remove';
    self.getElement().classList[toggleMethod]('is-highlighted'); // Don't add duplicates to the list

    if (highlighted && !self.isHighlighted()) {
      Sudoku.gridCellHighlighter.addHighlightedCell(self);
    }

    _isHighlighted = highlighted;
  };
  /**
   * @return {GridRow|null}
   */


  self.getRow = function () {
    return _gridRow;
  };
  /**
   * @param {GridRow} row
   * @return {GridRow}
   */


  self.setRow = function (row) {
    return _gridRow = row;
  };
  /**
   * @return {GridColumn|null}
   */


  self.getColumn = function () {
    return _gridColumn;
  };
  /**
   * @param {GridColumn} column
   * @return {GridColumn}
   */


  self.setColumn = function (column) {
    return _gridColumn = column;
  };
  /**
   * @return {GridBox|null}
   */


  self.getBox = function () {
    return _gridBox;
  };
  /**
   * @param {GridBox} box
   * @return {GridBox}
   */


  self.setBox = function (box) {
    return _gridBox = box;
  };
  /**
   * Set the error status of the element
   * @param {boolean} on
   * @return {void}
   */


  self.setErrorState = function (on) {
    var toggleMethod = on ? 'add' : 'remove';
    self.getElement().classList[toggleMethod]('has-error');
  };
  /**
   * Get the state of the cell
   * @return {string}
   */


  self.getState = function () {
    return 'n' + self.getCellNumber() + (self.isPrefilled() ? 'p' : '') + 'v' + self.getValue() + 'c' + self.getColorNumber() + 'cr' + self.getCornerMarks().join('') + 'cn' + self.getCenterMarks().join('');
  };
}

/***/ }),

/***/ "./assets/js/Grid/GridCellHighlighter.js":
/*!***********************************************!*\
  !*** ./assets/js/Grid/GridCellHighlighter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridCellHighlighter; });
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridCell */ "./assets/js/Grid/GridCell.js");

function GridCellHighlighter() {
  var self = this;
  /**
   * A list of currently highlighted cells
   * @type {GridCell[]}
   * @private
   */

  var _highlightedCells = [];
  /**
   * Add a cell to the list of highlighted cells
   * @param {GridCell} cell
   * @return {number}
   */

  self.addHighlightedCell = function (cell) {
    return _highlightedCells.push(cell);
  };
  /**
   * @return {GridCell[]}
   */


  self.getHighlightedCells = function () {
    return _highlightedCells;
  };
  /**
   * Highlight all cells that are related to selected cell(s)
   * @return {void}
   */


  self.highlightRelatedCells = function () {
    self.dehighlightAllCells();
    var cellNumbers = []; // Add the cell numbers of the row, column and box that the cell is in

    Sudoku.grid.getSelectedCells().forEach(function (cell) {
      if (Sudoku.settings.highlightRowState()) {
        cellNumbers = cellNumbers.concat(cell.getRow().getCellNumbers());
      }

      if (Sudoku.settings.highlightColumnState()) {
        cellNumbers = cellNumbers.concat(cell.getColumn().getCellNumbers());
      }

      if (Sudoku.settings.highlightBoxState()) {
        cellNumbers = cellNumbers.concat(cell.getBox().getCellNumbers());
      } // See if value highlighting is needed or possible


      var cellValue = cell.getValue();

      if (cellValue === null || !Sudoku.settings.highlightValueState() && !Sudoku.settings.highlightPencilMarksState()) {
        return;
      } // Add the cell numbers of cells that contain the same digit


      var sameDigitCellNumbers = Sudoku.grid.getCells().filter(function (cell) {
        // Filter by cell value
        if (Sudoku.settings.highlightValueState() && cell.hasValue(cellValue)) {
          return true;
        } // Filter by pencil marks
        else if (Sudoku.settings.highlightPencilMarksState() // Skip filled in cells, because then pencil marks are invisible
          && !cell.hasValue() && (cell.hasCornerMark(cellValue) || cell.hasCenterMark(cellValue))) {
            return true;
          }

        return false;
      }).map(function (cell) {
        return cell.getCellNumber();
      });
      cellNumbers = cellNumbers.concat(sameDigitCellNumbers);
    });
    cellNumbers // Remove duplicates
    .filter(function (value, index, numbers) {
      return numbers.indexOf(value) === index;
    }) // Highlight the cells
    .forEach(function (cellNumber) {
      Sudoku.grid.getCell(cellNumber).setHighlightedState(true);
    });
  };
  /**
   * De-highlight all the highlighted cells
   * @return {void}
   */


  self.dehighlightAllCells = function () {
    self.getHighlightedCells().forEach(function (cell) {
      return cell.setHighlightedState(false);
    });
    _highlightedCells = [];
  };
}

/***/ }),

/***/ "./assets/js/Grid/GridColumn.js":
/*!**************************************!*\
  !*** ./assets/js/Grid/GridColumn.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridColumn; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/js/functions.js");
/* harmony import */ var _Traits_HasGridCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Traits/HasGridCells */ "./assets/js/Traits/HasGridCells.js");


/**
 * @param {number} columnNumber
 * @constructor
 */

function GridColumn(columnNumber) {
  var self = this;
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["trait"])(self, _Traits_HasGridCells__WEBPACK_IMPORTED_MODULE_1__["default"]);
  /**
   * The 1-based row number in the grid
   * @type {number}
   * @private
   */

  var _columnNumber = columnNumber;
  /**
   * Get the cell numbers that self column has
   * @return {Array}
   */

  self.getCellNumbers = function () {
    var numbers = [];
    var number = _columnNumber; // Add the first cell number

    numbers.push(number); // Add 8 numbers, each incremented by 9

    for (var j = 0; j < 8; j++) {
      number += 9;
      numbers.push(number);
    }

    return numbers;
  };
}

/***/ }),

/***/ "./assets/js/Grid/GridRow.js":
/*!***********************************!*\
  !*** ./assets/js/Grid/GridRow.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridRow; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/js/functions.js");
/* harmony import */ var _Traits_HasGridCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Traits/HasGridCells */ "./assets/js/Traits/HasGridCells.js");


/**
 * @param {number} rowNumber
 * @constructor
 */

function GridRow(rowNumber) {
  var self = this;
  Object(_functions__WEBPACK_IMPORTED_MODULE_0__["trait"])(self, _Traits_HasGridCells__WEBPACK_IMPORTED_MODULE_1__["default"]);
  /**
   * The 1-based row number in the grid
   * @type {number}
   * @private
   */

  var _rowNumber = rowNumber;
  /**
   * Get the cell numbers that self row has
   * @return {Array}
   */

  self.getCellNumbers = function () {
    var numbers = [];
    var rowIndex = _rowNumber - 1;

    for (var i = 1; i < 10; i++) {
      numbers.push(i + rowIndex * 9);
    }

    return numbers;
  };
}

/***/ }),

/***/ "./assets/js/InputMode.js":
/*!********************************!*\
  !*** ./assets/js/InputMode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputMode; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Several input modes, to be used as constants
 * @type {number}
 * @static
 */
InputMode.MODE_VALUE = 1;
InputMode.MODE_CORNER = 2;
InputMode.MODE_CENTER = 3;
function InputMode() {
  var self = this;
  /**
   * The current mode
   * @type {number}
   * @private
   */

  var _mode = InputMode.MODE_VALUE;
  /**
   * The radio buttons that can change the mode
   * @type {NodeListOf<HTMLElement>}
   * @private
   */

  var _radioButtons = document.getElementsByName('input_mode');
  /**
   * The label containing the checkbox for the 'center marks' input mode
   * @type {HTMLElement}
   * @private
   */


  var _inputModeCenterLabel = document.getElementById('input-mode-center-label');
  /**
   * Initialize the object
   * @return {void}
   */


  self.init = function () {
    _selectCurrentRadioButton();

    _registerEventListeners();
  };
  /**
   * Make the radio button of the current input mode checked
   * @return {void}
   * @private
   */


  var _selectCurrentRadioButton = function _selectCurrentRadioButton() {
    _radioButtons.forEach(function (radioButton) {
      if (parseInt(radioButton.value, 10) === self.getMode()) {
        radioButton.checked = true;
      }
    });
  };
  /**
   * Enable toggling the mode with radio buttons
   * @return {void}
   * @private
   */


  var _registerEventListeners = function _registerEventListeners() {
    _radioButtons.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        self.setMode(parseInt(radioButton.value, 10));
      });
    });

    document.addEventListener('keydown', function (event) {
      switch (event.code) {
        case 'Space':
          self.changeMode();
          break;

        case 'KeyI':
          self.setMode(InputMode.MODE_VALUE);
          break;

        case 'KeyO':
          self.setMode(InputMode.MODE_CORNER);
          break;

        case 'KeyP':
          if (!Sudoku.settings.autoCandidateState()) {
            self.setMode(InputMode.MODE_CENTER);
          }

          break;
      }
    });
  };
  /**
   * @param {number} mode
   * @return {void}
   */


  self.setMode = function (mode) {
    if (_typeof(mode).toLowerCase() !== 'number') {
      throw new Error("Expected a number, got ".concat(_typeof(mode)));
    }

    var maxModeNumber = Sudoku.settings.autoCandidateState() === true ? // Center-marks are disabled in auto-candidate mode
    InputMode.MODE_CORNER : InputMode.MODE_CENTER; // Wrap around, when max number is reached

    if (mode > maxModeNumber) {
      mode = InputMode.MODE_VALUE;
    }

    _mode = mode;

    _selectCurrentRadioButton();
  };
  /**
   * Change the mode number incrementally
   * @return {void}
   */


  self.changeMode = function () {
    // Increase the mode number
    self.setMode(_mode + 1);
  };
  /**
   * @return {number}
   */


  self.getMode = function () {
    return _mode;
  };
  /**
   * Perform actions based on whether auto-candidate mode is on
   * @param {boolean} state
   * @return {void}
   */


  self.triggerAutoCandidateActions = function (state) {
    if (state === true) {
      // Disable the input mode checkbox
      _inputModeCenterLabel.classList.add('strike-through');

      _inputModeCenterLabel.getElementsByTagName('input')[0].disabled = true; // Trigger any restrictions on the current input mode

      self.setMode(self.getMode());
    } else {
      // Enable the input mode checkbox
      _inputModeCenterLabel.classList.remove('strike-through');

      _inputModeCenterLabel.getElementsByTagName('input')[0].disabled = false;
    }
  };
}

/***/ }),

/***/ "./assets/js/Meta.js":
/*!***************************!*\
  !*** ./assets/js/Meta.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Meta; });
function Meta() {
  var self = this;
  /**
   * The name of the application
   * @type {string}
   */

  var appName = document.getElementById('meta-app-name').getAttribute('content');
  /**
   * The page title element
   * @type {HTMLCollectionOf<HTMLElement>}
   */

  var titleElements = document.getElementsByClassName('page-title');
  /**
   * The title input field
   * @type {HTMLInputElement}
   */

  var titleField = document.getElementById('puzzle-title');
  /**
   * The description input field
   * @type {HTMLTextAreaElement}
   */

  var descriptionField = document.getElementById('puzzle-description');
  /**
   * An optional title for the sudoku
   * @type {string|null}
   */

  var title = null;
  /**
   * An optional description for the sudoku
   * @type {string|null}
   */

  var description = null;
  /**
   * Initialize the object
   */

  self.init = function () {
    _enableTextFields();
  };
  /**
   * @return {void}
   * @private
   */


  var _enableTextFields = function _enableTextFields() {
    var titleCallback = function titleCallback() {
      title = titleField.value.trim(); // Update the page title

      var pageTitle = title !== '' ? "".concat(title, " - ").concat(appName) : appName;

      for (var i = 0; i < titleElements.length; i++) {
        titleElements[i].innerText = pageTitle;
      }
    };

    titleField.addEventListener('change', titleCallback);
    titleField.addEventListener('keyup', titleCallback);
    titleField.addEventListener('paste', titleCallback);

    var descriptionCallback = function descriptionCallback() {
      return description = descriptionField.value;
    };

    descriptionField.addEventListener('change', descriptionCallback);
    descriptionField.addEventListener('keyup', descriptionCallback);
    descriptionField.addEventListener('paste', descriptionCallback);
  };
}

/***/ }),

/***/ "./assets/js/Modal.js":
/*!****************************!*\
  !*** ./assets/js/Modal.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var _Commands_Modal_CloseAllModalsCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Commands/Modal/CloseAllModalsCommand */ "./assets/js/Commands/Modal/CloseAllModalsCommand.js");
/* harmony import */ var _Commands_Modal_OpenModalCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Commands/Modal/OpenModalCommand */ "./assets/js/Commands/Modal/OpenModalCommand.js");


/**
 * The ID of the modal dialog for pausing the game
 * @type {string}
 * @static
 */

Modal.PAUSE_MODAL_ID = 'pause-modal';
function Modal() {
  var self = this;
  /**
   * The modal dialog backdrop
   * @type {HTMLElement}
   * @private
   */

  var _backdropElement = document.getElementById('modal-backdrop');
  /**
   * Indicates whether a modal is currently open
   * @type {boolean}
   * @private
   */


  var _openState = false;
  /**
   * The ID of the currently opened modal
   * @type {string|null}
   * @private
   */

  var _currentModalId = null;
  /**
   * Reusable close command, for all modals
   * @type {CloseAllModalsCommand}
   * @private
   */

  var _closeCommand = new _Commands_Modal_CloseAllModalsCommand__WEBPACK_IMPORTED_MODULE_0__["default"]();
  /**
   * Initialize the object
   */


  self.init = function () {
    _enableOpening();

    _enableClosing();
  };
  /**
   * Show or hide the modal backdrop
   * @param {boolean} show
   */


  self.showBackdrop = function (show) {
    var toggleMethod = show ? 'add' : 'remove';

    _backdropElement.classList[toggleMethod]('show');
  };
  /**
   * @param {boolean|null} state
   * @return {boolean}
   */


  self.openState = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (state !== null) {
      _openState = state;
    }

    return _openState;
  };
  /**
   * @param {string|null} modalId
   * @return {string|null}
   */


  self.currentModalId = function () {
    var modalId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (modalId !== null) {
      _currentModalId = modalId;
    }

    return _currentModalId;
  };
  /**
   * Close an open modal dialog, if there is any
   * @return {void}
   */


  self.close = function () {
    return _closeCommand.execute();
  };
  /**
   * Enable opening of modal dialogs
   * @return {void}
   * @private
   */


  var _enableOpening = function _enableOpening() {
    var openButtons = document.getElementsByClassName('open-modal');

    for (var i = 0; i < openButtons.length; i++) {
      openButtons[i].addEventListener('click', function (event) {
        // Open the modal dialog
        var modalId = event.target.dataset.modalId;
        var command = new _Commands_Modal_OpenModalCommand__WEBPACK_IMPORTED_MODULE_1__["default"](modalId);
        command.execute();
      });
    }
  };
  /**
   * Enable closing of modal dialogs
   * @return {void}
   * @private
   */


  var _enableClosing = function _enableClosing() {
    // Enable close buttons of the modal dialogs
    var closeButtons = document.getElementsByClassName('close-modal');

    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', self.close);
    } // Clicking the backdrop also closes modal dialogs


    _backdropElement.addEventListener('click', self.close);
  };
}

/***/ }),

/***/ "./assets/js/Settings.js":
/*!*******************************!*\
  !*** ./assets/js/Settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var _Commands_Settings_ShowClockCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Commands/Settings/ShowClockCommand */ "./assets/js/Commands/Settings/ShowClockCommand.js");
/* harmony import */ var _Commands_Settings_AutoErrorCheckingCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Commands/Settings/AutoErrorCheckingCommand */ "./assets/js/Commands/Settings/AutoErrorCheckingCommand.js");
/* harmony import */ var _Commands_Settings_HighlightRowCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Commands/Settings/HighlightRowCommand */ "./assets/js/Commands/Settings/HighlightRowCommand.js");
/* harmony import */ var _Commands_Settings_HighlightColumnCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Commands/Settings/HighlightColumnCommand */ "./assets/js/Commands/Settings/HighlightColumnCommand.js");
/* harmony import */ var _Commands_Settings_HighlightBoxCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Commands/Settings/HighlightBoxCommand */ "./assets/js/Commands/Settings/HighlightBoxCommand.js");
/* harmony import */ var _Commands_Settings_HighlightValueCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Commands/Settings/HighlightValueCommand */ "./assets/js/Commands/Settings/HighlightValueCommand.js");
/* harmony import */ var _Commands_Settings_HighlightPencilMarksCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Commands/Settings/HighlightPencilMarksCommand */ "./assets/js/Commands/Settings/HighlightPencilMarksCommand.js");







function Settings() {
  var self = this;
  /**
   * Indicates whether the clock is shown
   * @type {boolean}
   * @private
   */

  var _clockState;
  /**
   * Indicates whether automatic error checking is enabled
   * @type {boolean}
   * @private
   */


  var _autoErrorCheckingState;
  /**
   * Indicates whether highlighting rows is enabled
   * @type {boolean}
   * @private
   */


  var _highlightRowState;
  /**
   * Indicates whether highlighting columns is enabled
   * @type {boolean}
   * @private
   */


  var _highlightColumnState;
  /**
   * Indicates whether highlighting 3x3 boxes is enabled
   * @type {boolean}
   * @private
   */


  var _highlightBoxState;
  /**
   * Indicates whether highlighting cells with the same value is enabled
   * @type {boolean}
   * @private
   */


  var _highlightValueState;
  /**
   * Indicates whether highlighting cells with the same value (pencil marks) is enabled
   * @type {boolean}
   * @private
   */


  var _highlightPencilMarksState;
  /**
   * Indicates whether auto-candidate mode is on
   * @type {boolean}
   * @private
   */


  var _autoCandidateState = false;
  /**
   * Initialize the object
   */

  self.init = function () {
    // Initialize the settings in local storage if needed
    if (localStorage.getItem('settings') === null) {
      localStorage.setItem('settings', JSON.stringify({}));
    }

    _fromLocalStorage();

    _applySettings();
  };
  /**
   * Get settings stored in local storage
   * @return {void}
   * @private
   */


  var _fromLocalStorage = function _fromLocalStorage() {
    var settings = JSON.parse(localStorage.getItem('settings'));
    _clockState = settings.clock !== undefined ? settings.clock : true;
    _autoErrorCheckingState = settings.autoErrorChecking !== undefined ? settings.autoErrorChecking : true;
    _highlightRowState = settings.highlightRow !== undefined ? settings.highlightRow : true;
    _highlightColumnState = settings.highlightColumn !== undefined ? settings.highlightColumn : true;
    _highlightBoxState = settings.highlightBox !== undefined ? settings.highlightBox : true;
    _highlightValueState = settings.highlightValue !== undefined ? settings.highlightValue : true;
    _highlightPencilMarksState = settings.highlightPencilMarks !== undefined ? settings.highlightPencilMarks : true;
  };
  /**
   * Export settings to local storage
   * @return {void}
   * @private
   */


  var _toLocalStorage = function _toLocalStorage() {
    localStorage.setItem('settings', JSON.stringify({
      clock: self.clockState(),
      autoErrorChecking: self.autoErrorCheckingState(),
      highlightRow: self.highlightRowState(),
      highlightColumn: self.highlightColumnState(),
      highlightBox: self.highlightBoxState(),
      highlightValue: self.highlightValueState(),
      highlightPencilMarks: self.highlightPencilMarksState()
    }));
  };
  /**
   * Apply the stored settings
   * @return {void}
   * @private
   */


  var _applySettings = function _applySettings() {
    new _Commands_Settings_ShowClockCommand__WEBPACK_IMPORTED_MODULE_0__["default"]().execute(self.clockState());
    new _Commands_Settings_AutoErrorCheckingCommand__WEBPACK_IMPORTED_MODULE_1__["default"]().execute(self.autoErrorCheckingState());
    new _Commands_Settings_HighlightRowCommand__WEBPACK_IMPORTED_MODULE_2__["default"]().execute(self.highlightRowState());
    new _Commands_Settings_HighlightColumnCommand__WEBPACK_IMPORTED_MODULE_3__["default"]().execute(self.highlightColumnState());
    new _Commands_Settings_HighlightBoxCommand__WEBPACK_IMPORTED_MODULE_4__["default"]().execute(self.highlightBoxState());
    new _Commands_Settings_HighlightValueCommand__WEBPACK_IMPORTED_MODULE_5__["default"]().execute(self.highlightValueState());
    new _Commands_Settings_HighlightPencilMarksCommand__WEBPACK_IMPORTED_MODULE_6__["default"]().execute(self.highlightPencilMarksState());
  };
  /**
   * @param {boolean|null} state Setter if given, getter otherwise
   * @return {boolean}
   */


  self.clockState = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (state !== null) {
      _clockState = state;

      _toLocalStorage();
    }

    return _clockState;
  };
  /**
   * @param {boolean|null} state Setter if given, getter otherwise
   * @return {boolean}
   */


  self.autoErrorCheckingState = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (state !== null) {
      _autoErrorCheckingState = state;

      _toLocalStorage();
    }

    return _autoErrorCheckingState;
  };
  /**
   * @param {boolean|null} state Setter if given, getter otherwise
   * @return {boolean}
   */


  self.highlightRowState = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (state !== null) {
      _highlightRowState = state;

      _toLocalStorage();
    }

    return _highlightRowState;
  };
  /**
   * @param {boolean|null} state Setter if given, getter otherwise
   * @return {boolean}
   */


  self.highlightColumnState = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (state !== null) {
      _highlightColumnState = state;

      _toLocalStorage();
    }

    return _highlightColumnState;
  };
  /**
   * @param {boolean|null} state Setter if given, getter otherwise
   * @return {boolean}
   */


  self.highlightBoxState = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (state !== null) {
      _highlightBoxState = state;

      _toLocalStorage();
    }

    return _highlightBoxState;
  };
  /**
   * @param {boolean|null} state Setter if given, getter otherwise
   * @return {boolean}
   */


  self.highlightValueState = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (state !== null) {
      _highlightValueState = state;

      _toLocalStorage();
    }

    return _highlightValueState;
  };
  /**
   * @param {boolean|null} state Setter if given, getter otherwise
   * @return {boolean}
   */


  self.highlightPencilMarksState = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (state !== null) {
      _highlightPencilMarksState = state;

      _toLocalStorage();
    }

    return _highlightPencilMarksState;
  };
  /**
   * @param {boolean|null} state Setter if given, getter otherwise
   * @return {boolean}
   */


  self.autoCandidateState = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (state !== null) {
      _autoCandidateState = state;
    }

    return _autoCandidateState;
  };
}

/***/ }),

/***/ "./assets/js/Traits/HasGridCells.js":
/*!******************************************!*\
  !*** ./assets/js/Traits/HasGridCells.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HasGridCells; });
/* harmony import */ var _Grid_GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Grid/GridCell */ "./assets/js/Grid/GridCell.js");

function HasGridCells() {
  var self = this;
  /**
   * Cells in the row
   * @type {GridCell[]}
   */

  self.gridCells = [];
  /**
   * Add a cell to the row
   * @param {GridCell} cell
   * @return {number}
   */

  self.addCell = function (cell) {
    return self.gridCells.push(cell);
  };
  /**
   * @return {GridCell[]}
   */


  self.getCells = function () {
    return self.gridCells;
  };
  /**
   * Get a cell by its cell number
   * @param {number} number A 1-based cell number
   * @return {GridCell|null}
   */


  self.getCell = function (number) {
    var cell = self.gridCells.find(function (cell) {
      return cell.getCellNumber() === number;
    });
    return cell === undefined ? null : cell;
  };
  /**
   * Get a list of cell values
   * @return {Array}
   */


  self.getCellValues = function () {
    return self.gridCells.map(function (cell) {
      return cell.getValue();
    }).filter(function (value) {
      return value !== null;
    });
  };
  /**
   * See if the list of cell values contains duplicates
   * @return {boolean}
   */


  self.checkDuplicateCellValues = function () {
    // Pairs of value:gridCell[]
    // Arrays of cells that have a certain value
    var cellValues = {};
    self.gridCells.forEach(function (cell) {
      // Get the filled in value of the cell
      var cellValue = cell.getValue(); // A value is needed for checking

      if (cellValue === null) {
        return;
      } // Get the cells that have that value and add the cell


      var cells = cellValues[cellValue] || [];
      cells.push(cell);
      cellValues[cellValue] = cells; // Set an error status on all duplicate cells, if there are any

      if (cells.length > 1) {
        cells.forEach(function (cell) {
          return cell.setErrorState(true);
        });
      }
    });
  };
  /**
   * See if any of the cells contain a value
   * @param {Number} value
   * @return {boolean}
   */


  self.containsValue = function (value) {
    value = parseInt(value, 10);
    var cells = self.getCells();

    for (var i = 0; i < cells.length; i++) {
      if (cells[i].hasValue(value)) {
        return true;
      }
    }

    return false;
  };
}

/***/ }),

/***/ "./assets/js/Utilities/Visitor.js":
/*!****************************************!*\
  !*** ./assets/js/Utilities/Visitor.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visitor; });
/**
 * Indicates whether the visitor's OS is macOS
 * @type {boolean}
 * @static
 */
Visitor.usesMacOs = navigator.userAgent.toLowerCase().match(/macintosh/) !== null;
function Visitor() {
  var self = this;
}

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controls */ "./assets/js/Controls.js");
/* harmony import */ var _InputMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputMode */ "./assets/js/InputMode.js");
/* harmony import */ var _Grid_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid/Grid */ "./assets/js/Grid/Grid.js");
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Clock */ "./assets/js/Clock.js");
/* harmony import */ var _EventHandlers_DocumentEventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventHandlers/DocumentEventHandler */ "./assets/js/EventHandlers/DocumentEventHandler.js");
/* harmony import */ var _Commands_CommandHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Commands/CommandHistory */ "./assets/js/Commands/CommandHistory.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Meta */ "./assets/js/Meta.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal */ "./assets/js/Modal.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Settings */ "./assets/js/Settings.js");
/* harmony import */ var _EventHandlers_SettingsEventHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventHandlers/SettingsEventHandler */ "./assets/js/EventHandlers/SettingsEventHandler.js");
/* harmony import */ var _EventHandlers_ActionsEventHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EventHandlers/ActionsEventHandler */ "./assets/js/EventHandlers/ActionsEventHandler.js");
/* harmony import */ var _Grid_GridCellHighlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Grid/GridCellHighlighter */ "./assets/js/Grid/GridCellHighlighter.js");











 // 'Namespace' of the project

window.Sudoku = {
  settings: new _Settings__WEBPACK_IMPORTED_MODULE_8__["default"](),
  history: new _Commands_CommandHistory__WEBPACK_IMPORTED_MODULE_5__["default"](),
  meta: new _Meta__WEBPACK_IMPORTED_MODULE_6__["default"](),
  controls: new _Controls__WEBPACK_IMPORTED_MODULE_0__["default"](),
  inputMode: new _InputMode__WEBPACK_IMPORTED_MODULE_1__["default"](),
  gridCellHighlighter: new _Grid_GridCellHighlighter__WEBPACK_IMPORTED_MODULE_11__["default"](),
  grid: new _Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["default"](),
  clock: new _Clock__WEBPACK_IMPORTED_MODULE_3__["default"](),
  modal: new _Modal__WEBPACK_IMPORTED_MODULE_7__["default"](),
  documentEventHandler: new _EventHandlers_DocumentEventHandler__WEBPACK_IMPORTED_MODULE_4__["default"](),
  settingsEventHandler: new _EventHandlers_SettingsEventHandler__WEBPACK_IMPORTED_MODULE_9__["default"](),
  actionsEventHandler: new _EventHandlers_ActionsEventHandler__WEBPACK_IMPORTED_MODULE_10__["default"]()
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

/***/ }),

/***/ "./assets/js/functions.js":
/*!********************************!*\
  !*** ./assets/js/functions.js ***!
  \********************************/
/*! exports provided: extend, trait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trait", function() { return trait; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Extend a base constructor
 * @param {function} constructor
 * @param {function} baseConstructor
 * @return {void}
 */
function extend(constructor, baseConstructor) {
  // Check the constructor types
  if (_typeof(constructor).toLowerCase() !== 'function') {
    throw new Error("Constructor needs to be a function, got ".concat(_typeof(constructor), " instead"));
  }

  if (_typeof(baseConstructor).toLowerCase() !== 'function') {
    throw new Error("Base constructor needs to be a function, got ".concat(_typeof(baseConstructor), " instead"));
  }

  constructor.prototype = new baseConstructor();
  constructor.prototype.constructor = constructor;
}
;
/**
 * Add code from a trait to an object
 * @param {object} instance
 * @param {function} traitConstructor
 * @return {void}
 */

function trait(instance, traitConstructor) {
  // Check the instance type
  if (_typeof(instance).toLowerCase() !== 'object') {
    throw new Error("Instance needs to be an object, got ".concat(_typeof(instance), " instead"));
  } // Check the constructor type


  if (_typeof(traitConstructor).toLowerCase() !== 'function') {
    throw new Error("Trait constructor needs to be a function, got ".concat(_typeof(traitConstructor), " instead"));
  } // Create a new instance of the trait


  var traitInstance = new traitConstructor(); // A property or method of the trait

  var thing; // Set the properties/methods in the calling object

  for (thing in traitInstance) {
    instance[thing] = traitInstance[thing];
  }
}
;

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/private/sudoku/assets/js/app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/private/sudoku/assets/scss/app.scss */"./assets/scss/app.scss");


/***/ })

/******/ });
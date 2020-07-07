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
   * Arrow key codes
   * @type {Object}
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
    }); // Callback for keydown and keyup

    var ctrlKeyCheck = function ctrlKeyCheck(event) {
      _ctrlKeyPressed = _Utilities_Visitor__WEBPACK_IMPORTED_MODULE_0__["default"].usesMacOs ? event.metaKey : event.ctrlKey; // Prevent browser navigation (key combination is used for selecting cells)

      if (_ctrlKeyPressed && ['ArrowLeft', 'ArrowRight'].indexOf(event.code) > -1) {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', ctrlKeyCheck);
    document.addEventListener('keyup', ctrlKeyCheck);
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

/***/ "./assets/js/EventHandlers/DocumentEventHandler.js":
/*!*********************************************************!*\
  !*** ./assets/js/EventHandlers/DocumentEventHandler.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocumentEventHandler; });
function DocumentEventHandler() {
  var self = this;
  /**
   * Register event handlers for the document
   * @return {void}
   */

  self.register = function () {
    registerKeyboardNavigation();
    registerErrorEvent();
  };
  /**
   * Register keyboard navigation events
   * @return {void}
   */


  var registerKeyboardNavigation = function registerKeyboardNavigation() {
    document.addEventListener('keydown', function (event) {
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


        newCell = Sudoku.grid.getCellByIndex(newCellIndex);
        newCell.setIsSelected(true);
        Sudoku.grid.setLastNavigatedCell(newCell);
      }
    });
  };
  /**
   * Register error events
   * @return {void}
   */


  var registerErrorEvent = function registerErrorEvent() {
    document.addEventListener('keydown', function (event) {
      // Remove all errors status when the cell changes
      Sudoku.grid.removeAllErrors();
      Sudoku.grid.getSelectedCells().forEach(function (cell) {
        // Change the cell value
        if (Sudoku.controls.isNumberKey(event.code)) {
          // Set a number value
          cell.setDigit(parseInt(event.key, 10));
        } else if (Sudoku.controls.isDeleteKey(event.code)) {
          // Remove the value
          cell.setDigit(null);
        }
      }); // See if there are any errors

      Sudoku.grid.checkForErrors();
    });
  };
}

/***/ }),

/***/ "./assets/js/Grid/Grid.js":
/*!********************************!*\
  !*** ./assets/js/Grid/Grid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Applications/MAMP/htdocs/private/sudoku/assets/js/Grid/Grid.js: Unexpected token, expected \";\" (130:50)\n\n\u001b[0m \u001b[90m 128 | \u001b[39m        \u001b[90m// The default last navigated cell is the center one\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 129 | \u001b[39m        \u001b[36mif\u001b[39m (cell \u001b[33m===\u001b[39m \u001b[36mnull\u001b[39m) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 130 | \u001b[39m            _lastNavigatedCell \u001b[33m=\u001b[39m self\u001b[33m.\u001b[39mgetCell(\u001b[35m41\u001b[39m) self\u001b[33m.\u001b[39mgetCellByIndex(\u001b[35m40\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 131 | \u001b[39m        } \u001b[36melse\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 132 | \u001b[39m            _lastNavigatedCell \u001b[33m=\u001b[39m cell\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 133 | \u001b[39m        }\u001b[0m\n    at Parser._raise (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:746:17)\n    at Parser.raiseWithData (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:739:17)\n    at Parser.raise (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:733:17)\n    at Parser.unexpected (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:8807:16)\n    at Parser.semicolon (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:8789:40)\n    at Parser.parseExpressionStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11689:10)\n    at Parser.parseStatementContent (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11290:19)\n    at Parser.parseStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Parser.parseBlockOrModuleBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Parser.parseBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Parser.parseBlock (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11701:10)\n    at Parser.parseStatementContent (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11232:21)\n    at Parser.parseStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Parser.parseIfStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11508:28)\n    at Parser.parseStatementContent (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11201:21)\n    at Parser.parseStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Parser.parseBlockOrModuleBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Parser.parseBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Parser.parseBlock (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11701:10)\n    at Parser.parseFunctionBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:10708:24)\n    at Parser.parseArrowExpression (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:10677:10)\n    at Parser.parseExprAtom (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9960:18)\n    at Parser.parseExprSubscripts (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9656:23)\n    at Parser.parseMaybeUnary (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Parser.parseExprOps (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Parser.parseMaybeConditional (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Parser.parseMaybeAssign (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9434:21)\n    at Parser.parseMaybeAssign (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9466:25)\n    at Parser.parseExpression (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9386:23)\n    at Parser.parseStatementContent (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11285:23)");

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
   * Initialize the object
   * @return {void}
   */


  self.init = function () {
    selectCurrentRadioButton();
    registerEventListeners();
  };
  /**
   * Make the radio button of the current input mode checked
   * @return {void}
   */


  var selectCurrentRadioButton = function selectCurrentRadioButton() {
    _radioButtons.forEach(function (radioButton) {
      if (parseInt(radioButton.value, 10) === self.getMode()) {
        radioButton.checked = true;
      }
    });
  };
  /**
   * Enable toggling the mode with radio buttons
   * @return {void}
   */


  var registerEventListeners = function registerEventListeners() {
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
          self.setMode(InputMode.MODE_CENTER);
          break;
      }

      selectCurrentRadioButton();
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

    if (mode < InputMode.MODE_VALUE || mode > InputMode.MODE_CENTER) {
      throw new Error('Invalid input mode number given, please use InputMode constants');
    }

    _mode = mode;
  };
  /**
   * Change the mode number incrementally
   * @return {void}
   */


  self.changeMode = function () {
    // Increase the mode number
    // Wrap around, when max number is reached
    if (++_mode > InputMode.MODE_CENTER) {
      _mode = InputMode.MODE_VALUE;
    }
  };
  /**
   * @return {number}
   */


  self.getMode = function () {
    return _mode;
  };
}

/***/ }),

/***/ "./assets/js/Timer.js":
/*!****************************!*\
  !*** ./assets/js/Timer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
function Timer() {
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
   * @type {HTMLElement}
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
   * Set the start/unpause moment for calculating elapsed time
   * @return {Date}
   */

  self.start = self.unpause = function () {
    return _startMoment = new Date();
  };
  /**
   * Pause the timer
   * @return {void}
   */


  self.pause = function () {
    // Keep the elapsed milliseconds, for use with unpausing
    _initialMs += self.getElapsedMsSinceStart();
    _startMoment = null;
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
Visitor.usesMacOs = navigator.userAgent.match(/Macintosh/) !== null;
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
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timer */ "./assets/js/Timer.js");
/* harmony import */ var _EventHandlers_DocumentEventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventHandlers/DocumentEventHandler */ "./assets/js/EventHandlers/DocumentEventHandler.js");




 // 'Namespace' of the project

window.Sudoku = {
  controls: new _Controls__WEBPACK_IMPORTED_MODULE_0__["default"](),
  inputMode: new _InputMode__WEBPACK_IMPORTED_MODULE_1__["default"](),
  grid: new _Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["default"](),
  timer: new _Timer__WEBPACK_IMPORTED_MODULE_3__["default"](),
  documentEventHandler: new _EventHandlers_DocumentEventHandler__WEBPACK_IMPORTED_MODULE_4__["default"]()
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
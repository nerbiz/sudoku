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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Applications/MAMP/htdocs/private/sudoku/assets/js/Controls.js: Unexpected token (58:22)\n\n\u001b[0m \u001b[90m 56 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 57 | \u001b[39m        document\u001b[33m.\u001b[39maddEventListener(\u001b[32m'keydown'\u001b[39m\u001b[33m,\u001b[39m event \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 58 | \u001b[39m            \u001b[36mif\u001b[39m (event\u001b[33m.\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 59 | \u001b[39m            self\u001b[33m.\u001b[39mctrlKeys\u001b[33m.\u001b[39mforEach(ctrlKey \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 60 | \u001b[39m                \u001b[90m//\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 61 | \u001b[39m            })\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:746:17)\n    at Parser.raiseWithData (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:739:17)\n    at Parser.raise (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:733:17)\n    at Parser.unexpected (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:8807:16)\n    at Parser.parseIdentifierName (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:10823:18)\n    at Parser.parseIdentifier (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:10800:23)\n    at Parser.parseMaybePrivateName (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:10157:19)\n    at Parser.parseSubscript (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9714:64)\n    at Parser.parseSubscripts (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9679:19)\n    at Parser.parseExprSubscripts (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9662:17)\n    at Parser.parseMaybeUnary (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Parser.parseExprOps (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Parser.parseMaybeConditional (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Parser.parseMaybeAssign (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9434:21)\n    at Parser.parseExpression (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9386:23)\n    at Parser.parseHeaderExpression (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11425:22)\n    at Parser.parseIfStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11507:22)\n    at Parser.parseStatementContent (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11201:21)\n    at Parser.parseStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Parser.parseBlockOrModuleBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Parser.parseBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Parser.parseBlock (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11701:10)\n    at Parser.parseFunctionBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:10708:24)\n    at Parser.parseArrowExpression (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:10677:10)\n    at Parser.parseExprAtom (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9960:18)\n    at Parser.parseExprSubscripts (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9656:23)\n    at Parser.parseMaybeUnary (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Parser.parseExprOps (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Parser.parseMaybeConditional (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Parser.parseMaybeAssign (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:9434:21)");

/***/ }),

/***/ "./assets/js/EntryMode.js":
/*!********************************!*\
  !*** ./assets/js/EntryMode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EntryMode; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Several entry mode types, to be used as constants
 * @type {number}
 */
EntryMode.MODE_VALUE = 1;
EntryMode.MODE_CORNER = 2;
EntryMode.MODE_CENTER = 3;
function EntryMode() {
  var self = this;
  /**
   * The current mode
   * @type {number}
   * @private
   */

  var _mode = self.MODE_VALUE;
  /**
   * @param {number} mode
   * @return {void}
   */

  self.setMode = function (mode) {
    if (_typeof(mode).toLowerCase() !== 'number') {
      throw new Error("Expected a number, got ".concat(_typeof(mode)));
    }

    if (mode < self.MODE_VALUE || mode > self.MODE_CENTER) {
      throw new Error('Invalid entry mode number given, please use EntryMode constants');
    }

    _mode = mode;
  };
  /**
   * Change the mode number incrementally
   * @return {void}
   */


  self.changeMode = function () {
    // Increase the mode number
    _mode++; // Wrap around, when max number is reached

    if (_mode > self.MODE_CENTER) {
      _mode = self.MODE_VALUE;
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

/***/ "./assets/js/Grid/Grid.js":
/*!********************************!*\
  !*** ./assets/js/Grid/Grid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridCell */ "./assets/js/Grid/GridCell.js");
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridRow */ "./assets/js/Grid/GridRow.js");
/* harmony import */ var _GridColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridColumn */ "./assets/js/Grid/GridColumn.js");
/* harmony import */ var _GridBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridBox */ "./assets/js/Grid/GridBox.js");




function Grid() {
  var self = this;
  /**
   * All the cells in the grid
   * @type {GridCell[]}
   */

  self.gridCells = [];
  /**
   * All the rows in the grid
   * @type {GridRow[]}
   */

  self.gridRows = [];
  /**
   * All the columns in the grid
   * @type {GridColumn[]}
   */

  self.gridColumns = [];
  /**
   * All the 3x3 boxes in the grid
   * @type {GridBox[]}
   */

  self.gridBoxes = [];
  /**
   * A list of currently selected (highlighted) cells
   * @type {GridCell[]}
   */

  self.selectedCells = [];
  /**
   * Collect all the cell elements
   * @return {void}
   */

  self.collectCells = function () {
    // Create 9 rows, columns and 3x3 boxes
    for (var i = 1; i < 10; i++) {
      self.gridRows.push(new _GridRow__WEBPACK_IMPORTED_MODULE_1__["default"](i));
      self.gridColumns.push(new _GridColumn__WEBPACK_IMPORTED_MODULE_2__["default"](i));
      self.gridBoxes.push(new _GridBox__WEBPACK_IMPORTED_MODULE_3__["default"](i));
    } // Add all 81 cells


    var gridCell;

    for (var _i = 1; _i < 82; _i++) {
      gridCell = new _GridCell__WEBPACK_IMPORTED_MODULE_0__["default"](_i);
      gridCell.init(); // Add the cell

      self.gridCells.push(gridCell); // Add the cell to the applicable row/column/box
      // And vice versa

      for (var j = 0; j < 9; j++) {
        if (self.gridRows[j].getCellNumbers().indexOf(_i) !== -1) {
          self.gridRows[j].addCell(gridCell);
          gridCell.setRow(self.gridRows[j]);
        }

        if (self.gridColumns[j].getCellNumbers().indexOf(_i) !== -1) {
          self.gridColumns[j].addCell(gridCell);
          gridCell.setColumn(self.gridColumns[j]);
        }

        if (self.gridBoxes[j].getCellNumbers().indexOf(_i) !== -1) {
          self.gridBoxes[j].addCell(gridCell);
          gridCell.setBox(self.gridBoxes[j]);
        }
      }
    }
  };
  /**
   * Add a cell to the list of selected cells
   * @param {GridCell} cell
   * @return {number}
   */


  self.addSelectedCell = function (cell) {
    return self.selectedCells.push(cell);
  };
  /**
   * Get the state of the entire grid
   * @return {string}
   */


  self.getState = function () {
    return 'ver1' + self.gridCells.map(function (cell) {
      return cell.getState();
    }).join('');
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
   */

  self.boxNumber = boxNumber;
  /**
   * Get the cell numbers that self box has
   * @return {Array}
   */

  self.getCellNumbers = function () {
    var boxIndex = self.boxNumber - 1; // The row index of the box (0, 1 or 2)

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



/**
 * @param {number} cellNumber
 * @constructor
 */

function GridCell(cellNumber) {
  var self = this;
  /**
   * The 1-based cell number in the grid
   * @type {number}
   */

  self.cellNumber = cellNumber;
  /**
   * The row the cell belongs to
   * @type {GridRow|null}
   */

  self.gridRow = null;
  /**
   * The column the cell belongs to
   * @type {GridColumn|null}
   */

  self.gridColumn = null;
  /**
   * The 3x3 box the cell belongs to
   * @type {GridBox|null}
   */

  self.gridBox = null;
  /**
   * The HTML element that is the cell
   * @type {HTMLElement|null}
   */

  self.element = null;
  /**
   * Whether the cell value is set at the start
   * @type {boolean}
   */

  self.isPrefilled = false;
  /**
   * The background color number of the cell
   * @type {number}
   */

  self.colorNumber = 1;
  /**
   * The pencil mark values (corner mode)
   * @type {number[]}
   */

  self.cornerMarks = [];
  /**
   * The pencil mark values (center mode)
   * @type {number[]}
   */

  self.centerMarks = [];
  /**
   * The value of the cell
   * @type {number|null}
   * @private
   */

  var _value = null;
  /**
   * Whether the cell is currently selected
   * @type {boolean}
   * @private
   */

  var _isSelected = false;

  (function () {
    // The HTML cell element
    self.element = document.getElementById("grid-cell-".concat(self.cellNumber));

    if (self.element === null) {
      throw new Error("Cell element with ID 'grid-cell-".concat(self.cellNumber, "' not found"));
    }
  })();
  /**
   * Initialize the object
   * @return {void}
   */


  self.init = function () {
    self.registerEventHandlers();
  };
  /**
   * @return {number|null}
   */


  self.getValue = function () {
    return _value;
  };
  /**
   * @param {number} value
   * @return {void}
   */


  self.setValue = function (value) {
    _value = value; // Show the value on screen

    self.element.getElementsByClassName('cell-value')[0].innerText = value;
  };
  /**
   * @return {boolean}
   */


  self.getIsSelected = function () {
    return _isSelected;
  };
  /**
   * @param {boolean} selected
   * @return {void}
   */


  self.setIsSelected = function (selected) {
    if (selected) {
      self.element.classList.add('selected'); // Don't add duplicates to the list of selected cells

      if (!self.getIsSelected()) {
        Sudoku.grid.addSelectedCell(self);
      }
    } else {
      self.element.classList.remove('selected');
    }

    _isSelected = selected;
  };
  /**
   * @param {GridRow} row
   * @return {GridRow}
   */


  self.setRow = function (row) {
    return self.gridRow = row;
  };
  /**
   * @param {GridColumn} column
   * @return {GridColumn}
   */


  self.setColumn = function (column) {
    return self.gridColumn = column;
  };
  /**
   * @param {GridBox} box
   * @return {GridBox}
   */


  self.setBox = function (box) {
    return self.gridBox = box;
  };
  /**
   * Handle events that happen on/for the cell
   * @return {void}
   */


  self.registerEventHandlers = function () {
    self.element.addEventListener('mousedown', function () {
      self.setIsSelected(true);
    });
    self.element.addEventListener('mouseenter', function () {
      if (Sudoku.controls.mousePressed) {
        self.setIsSelected(true);
      }
    });
  };
  /**
   * Get the state of the cell
   * @return {string}
   */


  self.getState = function () {
    return 'n' + self.cellNumber + (self.isPrefilled ? 'p' : '') + 'v' + self.getValue() + 'c' + self.colorNumber + 'cr' + self.cornerMarks.join('') + 'cn' + self.centerMarks.join('');
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
   */

  self.columnNumber = columnNumber;
  /**
   * Get the cell numbers that self column has
   * @return {Array}
   */

  self.getCellNumbers = function () {
    var numbers = [];
    var number = self.columnNumber; // Add the first cell number

    numbers.push(number); // Add 9 to the number 8 times

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
   */

  self.rowNumber = rowNumber;
  /**
   * Get the cell numbers that self row has
   * @return {Array}
   */

  self.getCellNumbers = function () {
    var numbers = [];

    for (var i = 1; i < 10; i++) {
      numbers.push(i + (self.rowNumber - 1) * 9);
    }

    return numbers;
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
   */

  self.initialMs = 0;
  /**
   * The start moment of the timer
   * @type {Date|null}
   */

  self.startMoment = null;
  /**
   * Set the start/unpause moment for calculating elapsed time
   * @return {Date}
   */

  self.start = self.unpause = function () {
    return self.startMoment = new Date();
  };
  /**
   * Pause the timer
   * @return {void}
   */


  self.pause = function () {
    // Keep the elapsed milliseconds, for use with unpausing
    self.initialMs += self.getElapsedMsSinceStart();
    self.startMoment = null;
  };
  /**
   * Get the elapsed milliseconds, since the start moment
   * @return {number}
   */


  self.getElapsedMsSinceStart = function () {
    return self.startMoment !== null ? new Date().getTime() - self.startMoment.getTime() : 0;
  };
  /**
   * Get the amount of elapsed milliseconds, since the timer started
   * @return {number}
   */


  self.getTotalElapsedMs = function () {
    return self.initialMs + self.getElapsedMsSinceStart();
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


  self.hasDuplicateCellValues = function () {
    var cellValues = self.getCellValues();
    return new Set(cellValues).size !== cellValues.length;
  };
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
/* harmony import */ var _EntryMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntryMode */ "./assets/js/EntryMode.js");
/* harmony import */ var _Grid_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid/Grid */ "./assets/js/Grid/Grid.js");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timer */ "./assets/js/Timer.js");



 // 'Namespace' of the project

window.Sudoku = {
  controls: new _Controls__WEBPACK_IMPORTED_MODULE_0__["default"](),
  entryMode: new _EntryMode__WEBPACK_IMPORTED_MODULE_1__["default"](),
  grid: new _Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["default"](),
  timer: new _Timer__WEBPACK_IMPORTED_MODULE_3__["default"]()
};
Sudoku.timer.start();
Sudoku.controls.init();
Sudoku.grid.collectCells();
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

/***/ "./assets/js/functions.js":
/*!********************************!*\
  !*** ./assets/js/functions.js ***!
  \********************************/
/*! exports provided: trait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trait", function() { return trait; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Add code from a trait to an object
 * @param {Object} instance
 * @param {function} traitConstructor
 * @return {void}
 */
function trait(instance, traitConstructor) {
  // Check the instance type
  if (_typeof(instance).toLowerCase() !== 'object') {
    throw new Error("Instance needs to be an object, got ".concat(_typeof(instance), " instead"));
  } // Check the constructor type


  if (_typeof(traitConstructor).toLowerCase() !== 'function') {
    throw new Error("Trait constructor needs to be a function/class, got ".concat(_typeof(traitConstructor), " instead"));
  } // Create a new instance of the trait


  var traitInstance = new traitConstructor(); // A property or method of the trait

  var thing; // Set the properties/methods in the calling object

  for (thing in traitInstance) {
    instance[thing] = traitInstance[thing];
  }
}

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
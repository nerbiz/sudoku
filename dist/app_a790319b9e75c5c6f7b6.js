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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _Grid_GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid/GridCell */ "./assets/js/Grid/GridCell.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "gridCells", []);

    _defineProperty(this, "mouseDown", false);

    _defineProperty(this, "ctrlKeys", ['Control', 'Meta']);

    _defineProperty(this, "shiftKey", 'Shift');

    _defineProperty(this, "arrowKeys", {
      up: 'ArrowUp',
      down: 'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight'
    });
  }

  _createClass(_default, [{
    key: "init",

    /**
     * Initialize the object
     * @return {void}
     */
    value: function init() {
      var _this = this;

      document.addEventListener('mousedown', function () {
        _this.mouseDown = true;
      });
      document.addEventListener('mouseup', function () {
        _this.mouseDown = false;
      });
    }
    /**
     * Add a grid cell to the collection
     * @param {GridCell} cell
     * @return {void}
     */

  }, {
    key: "registerCell",
    value: function registerCell(cell) {
      this.gridCells.push(cell);
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./assets/js/EntryMode.js":
/*!********************************!*\
  !*** ./assets/js/EntryMode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "MODE_VALUE", 'value');

    _defineProperty(this, "MODE_CORNER", 'corner');

    _defineProperty(this, "MODE_CENTER", 'center');

    _defineProperty(this, "mode", this.MODE_VALUE);
  }

  _createClass(_default, [{
    key: "setMode",

    /**
     * Change the mode
     * @param {string} mode
     * @return {void}
     */
    value: function setMode(mode) {
      this.mode = mode;
    }
  }]);

  return _default;
}();



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
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridCell */ "./assets/js/Grid/GridCell.js");

/**
 * @param {number} boxNumber
 * @constructor
 */

function GridBox(boxNumber) {
  var self = this;
  /**
   * The 1-based box number in the grid
   * @type {number}
   */

  self.boxNumber = boxNumber;
  /**
   * Cells in the box
   * @type {GridCell[]}
   */

  self.gridCells = [];
  /**
   * Add a cell to the box
   * @param {GridCell} cell
   * @return {number}
   */

  self.addCell = function (cell) {
    return self.gridCells.push(cell);
  };
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
   * The value of the cell
   * @type {number|null}
   * @private
   */

  self._value = null;
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
   * Whether the cell is currently selected
   * @type {boolean}
   * @private
   */

  self._isSelected = false;

  (function () {
    // The HTML cell element
    self.element = document.getElementById("grid-cell-".concat(self.cellNumber));

    if (self.element === null) {
      throw new Error("Cell element with ID 'grid-cell-".concat(self.cellNumber, "' not found"));
    } // Register self cell to the controls object


    Sudoku.controls.registerCell(self);
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
    return self._value;
  };
  /**
   * @param {number} value
   * @return {void}
   */


  self.setValue = function (value) {
    self._value = value;
  };
  /**
   * @return {boolean}
   */


  self.getIsSelected = function () {
    return self._isSelected;
  };
  /**
   * @param {boolean} selected
   * @return {void}
   */


  self.setIsSelected = function (selected) {
    if (selected) {
      self.element.classList.add('selected'); // Don't add duplicates to the list of selected cells

      if (!self.selected) {
        Sudoku.grid.addSelectedCell(self);
      }
    } else {
      self.element.classList.remove('selected');
    }

    self._isSelected = selected;
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
      self.selected = true;
    });
    self.element.addEventListener('mouseenter', function () {
      if (Sudoku.controls.mouseDown) {
        self.selected = true;
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Applications/MAMP/htdocs/private/sudoku/assets/js/Grid/GridColumn.js: Unexpected token, expected \";\" (25:30)\n\n\u001b[0m \u001b[90m 23 | \u001b[39m\u001b[90m     * @param {number} columnNumber\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 | \u001b[39m\u001b[90m     */\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 | \u001b[39m    constructor(columnNumber) {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m        self\u001b[33m.\u001b[39mcolumnNumber \u001b[33m=\u001b[39m columnNumber\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m    }\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m\u001b[0m\n    at Parser._raise (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:746:17)\n    at Parser.raiseWithData (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:739:17)\n    at Parser.raise (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:733:17)\n    at Parser.unexpected (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:8807:16)\n    at Parser.semicolon (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:8789:40)\n    at Parser.parseExpressionStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11689:10)\n    at Parser.parseStatementContent (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11290:19)\n    at Parser.parseStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Parser.parseBlockOrModuleBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Parser.parseBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Parser.parseBlock (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11701:10)\n    at Parser.parseFunctionBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:10708:24)\n    at Parser.parseFunctionBodyAndFinish (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:10691:10)\n    at /Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11871:12\n    at Parser.withTopicForbiddingContext (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11031:14)\n    at Parser.parseFunction (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11870:10)\n    at Parser.parseExportDefaultExpression (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12345:19)\n    at Parser.parseExport (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12260:31)\n    at Parser.parseStatementContent (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11260:27)\n    at Parser.parseStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Parser.parseBlockOrModuleBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Parser.parseBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Parser.parseTopLevel (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11087:10)\n    at Parser.parse (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12768:10)\n    at parse (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12821:38)\n    at parser (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/core/lib/transformation/index.js:31:50)");

/***/ }),

/***/ "./assets/js/Grid/GridRow.js":
/*!***********************************!*\
  !*** ./assets/js/Grid/GridRow.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Applications/MAMP/htdocs/private/sudoku/assets/js/Grid/GridRow.js: Support for the experimental syntax 'classProperties' isn't currently enabled (8:14):\n\n\u001b[0m \u001b[90m  6 | \u001b[39m\u001b[90m     * @type {number}\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  7 | \u001b[39m\u001b[90m     */\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 | \u001b[39m    rowNumber\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m    \u001b[90m/**\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m\u001b[90m     * Cells in the row\u001b[39m\u001b[0m\n\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.\n    at Parser._raise (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:746:17)\n    at Parser.raiseWithData (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:739:17)\n    at Parser.expectPlugin (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:8812:18)\n    at Parser.parseClassProperty (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12185:12)\n    at Parser.pushClassProperty (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12145:30)\n    at Parser.parseClassMemberWithIsStatic (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12078:14)\n    at Parser.parseClassMember (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12015:10)\n    at /Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11960:14\n    at Parser.withTopicForbiddingContext (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11031:14)\n    at Parser.parseClassBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11937:10)\n    at Parser.parseClass (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11911:22)\n    at Parser.parseExportDefaultExpression (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12347:19)\n    at Parser.parseExport (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12260:31)\n    at Parser.parseStatementContent (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11260:27)\n    at Parser.parseStatement (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Parser.parseBlockOrModuleBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Parser.parseBlockBody (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Parser.parseTopLevel (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:11087:10)\n    at Parser.parse (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12768:10)\n    at parse (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/parser/lib/index.js:12821:38)\n    at parser (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Applications/MAMP/htdocs/private/sudoku/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/Applications/MAMP/htdocs/private/sudoku/node_modules/gensync/index.js:254:32)\n    at /Applications/MAMP/htdocs/private/sudoku/node_modules/gensync/index.js:266:13");

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid/Grid */ "./assets/js/Grid/Grid.js");
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controls */ "./assets/js/Controls.js");
/* harmony import */ var _EntryMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntryMode */ "./assets/js/EntryMode.js");




 // 'Namespace' of the project

window.Sudoku = {};
Sudoku.entryMode = new _EntryMode__WEBPACK_IMPORTED_MODULE_2__["default"]();
Sudoku.controls = new _Controls__WEBPACK_IMPORTED_MODULE_1__["default"]();
Sudoku.controls.init();
Sudoku.grid = new _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
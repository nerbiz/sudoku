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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "mouseDown", false);

    _defineProperty(this, "ctrlKeys", ['Control', 'Meta']);

    _defineProperty(this, "shiftKeys", 'Shift');

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
  }]);

  return _default;
}();



/***/ }),

/***/ "./assets/js/Grid.js":
/*!***************************!*\
  !*** ./assets/js/Grid.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridCell */ "./assets/js/GridCell.js");
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridRow */ "./assets/js/GridRow.js");
/* harmony import */ var _GridColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridColumn */ "./assets/js/GridColumn.js");
/* harmony import */ var _GridBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridBox */ "./assets/js/GridBox.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "gridCells", []);

    _defineProperty(this, "gridRows", []);

    _defineProperty(this, "gridColumns", []);

    _defineProperty(this, "gridBoxes", []);

    _defineProperty(this, "selectedCells", []);
  }

  _createClass(_default, [{
    key: "collectCells",

    /**
     * Collect all the cell elements
     * @return {void}
     */
    value: function collectCells() {
      // Create 9 rows, columns and 3x3 boxes
      for (var i = 1; i < 10; i++) {
        this.gridRows.push(new _GridRow__WEBPACK_IMPORTED_MODULE_1__["default"](i));
        this.gridColumns.push(new _GridColumn__WEBPACK_IMPORTED_MODULE_2__["default"](i));
        this.gridBoxes.push(new _GridBox__WEBPACK_IMPORTED_MODULE_3__["default"](i));
      } // Add all 81 cells


      var gridCell;

      for (var _i = 1; _i < 82; _i++) {
        gridCell = new _GridCell__WEBPACK_IMPORTED_MODULE_0__["default"](_i);
        gridCell.init(); // Add the cell

        this.gridCells.push(gridCell); // Add the cell to the applicable row/column/box
        // And vice versa

        for (var j = 0; j < 9; j++) {
          if (this.gridRows[j].getCellNumbers().indexOf(_i) !== -1) {
            this.gridRows[j].addCell(gridCell);
            gridCell.setRow(this.gridRows[j]);
          }

          if (this.gridColumns[j].getCellNumbers().indexOf(_i) !== -1) {
            this.gridColumns[j].addCell(gridCell);
            gridCell.setColumn(this.gridColumns[j]);
          }

          if (this.gridBoxes[j].getCellNumbers().indexOf(_i) !== -1) {
            this.gridBoxes[j].addCell(gridCell);
            gridCell.setBox(this.gridBoxes[j]);
          }
        }
      }
    }
    /**
     * Add a cell to the list of selected cells
     * @param {GridCell} cell
     * @return {void}
     */

  }, {
    key: "addSelectedCell",
    value: function addSelectedCell(cell) {
      this.selectedCells.push(cell);
    }
    /**
     * Get the state of the entire grid
     * @return {string}
     */

  }, {
    key: "getState",
    value: function getState() {
      return this.gridCells.map(function (cell) {
        return cell.getState();
      }).join('');
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./assets/js/GridBox.js":
/*!******************************!*\
  !*** ./assets/js/GridBox.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridCell */ "./assets/js/GridCell.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function () {
  /**
   * The 1-based box number in the grid
   * @type {number}
   */

  /**
   * Cells in the box
   * @type {GridCell[]}
   */

  /**
   * @param {number} boxNumber
   */
  function _default(boxNumber) {
    _classCallCheck(this, _default);

    _defineProperty(this, "boxNumber", void 0);

    _defineProperty(this, "gridCells", []);

    this.boxNumber = boxNumber;
  }
  /**
   * Add a cell to the box
   * @param {GridCell} cell
   * @return {void}
   */


  _createClass(_default, [{
    key: "addCell",
    value: function addCell(cell) {
      this.gridCells.push(cell);
    }
    /**
     * Get the cell numbers that this box has
     * @return {Array}
     */

  }, {
    key: "getCellNumbers",
    value: function getCellNumbers() {
      var boxIndex = this.boxNumber - 1; // The row index of the box (0, 1 or 2)

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
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./assets/js/GridCell.js":
/*!*******************************!*\
  !*** ./assets/js/GridCell.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridRow */ "./assets/js/GridRow.js");
/* harmony import */ var _GridColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridColumn */ "./assets/js/GridColumn.js");
/* harmony import */ var _GridBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridBox */ "./assets/js/GridBox.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _default = /*#__PURE__*/function () {
  _createClass(_default, [{
    key: "selected",

    /**
     * The row the cell belongs to
     * @type {GridRow|null}
     */

    /**
     * The column the cell belongs to
     * @type {GridColumn|null}
     */

    /**
     * The 3x3 box the cell belongs to
     * @type {GridBox|null}
     */

    /**
     * The 1-based cell number in the grid
     * @type {number}
     */

    /**
     * The HTML element that is the cell
     * @type {HTMLElement}
     */

    /**
     * Whether the cell value is set at the start
     * @type {boolean}
     */

    /**
     * The value of the cell
     * @type {number|null}
     */

    /**
     * The background color number of the cell
     * @type {number}
     */

    /**
     * The pencil mark values (corner mode)
     * @type {number[]}
     */

    /**
     * The pencil mark values (center mode)
     * @type {number[]}
     */

    /**
     * Whether the cell is currently selected
     * @type {boolean}
     * @private
     */

    /**
     * Getter for '_selected'
     * @return {boolean}
     */
    get: function get() {
      return this._selected;
    }
    /**
     * Setter for '_selected'
     * @param {boolean} selected
     * @return {void}
     */
    ,
    set: function set(selected) {
      if (selected) {
        this.element.classList.add('selected'); // Don't add duplicates to the list of selected cells

        if (!this.selected) {
          Sudoku.grid.addSelectedCell(this);
        }
      } else {
        this.element.classList.remove('selected');
      }

      this._selected = selected;
    }
    /**
     * @param {number} cellNumber
     */

  }]);

  function _default(cellNumber) {
    _classCallCheck(this, _default);

    _defineProperty(this, "gridRow", null);

    _defineProperty(this, "gridColumn", null);

    _defineProperty(this, "gridBox", null);

    _defineProperty(this, "cellNumber", void 0);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "predetermined", false);

    _defineProperty(this, "value", null);

    _defineProperty(this, "colorNumber", 1);

    _defineProperty(this, "cornerMarks", []);

    _defineProperty(this, "centerMarks", []);

    _defineProperty(this, "_selected", false);

    this.cellNumber = cellNumber; // The HTML cell element

    this.element = document.getElementById("grid-cell-".concat(cellNumber));

    if (this.element === null) {
      throw new Error("Cell element with ID 'grid-cell-".concat(cellNumber, "' not found"));
    }
  }
  /**
   * @param {GridRow} row
   * @return {void}
   */


  _createClass(_default, [{
    key: "setRow",
    value: function setRow(row) {
      this.gridRow = row;
    }
    /**
     * @param {GridColumn} column
     * @return {void}
     */

  }, {
    key: "setColumn",
    value: function setColumn(column) {
      this.gridColumn = column;
    }
    /**
     * @param {GridBox} box
     * @return {void}
     */

  }, {
    key: "setBox",
    value: function setBox(box) {
      this.gridBox = box;
    }
    /**
     * Initialize the object
     * @return {void}
     */

  }, {
    key: "init",
    value: function init() {
      this.registerEventHandlers();
    }
    /**
     * Handle events that happen on/for the cell
     * @return {void}
     */

  }, {
    key: "registerEventHandlers",
    value: function registerEventHandlers() {
      var _this = this;

      this.element.addEventListener('mousedown', function () {
        _this.selected = true;
      });
      this.element.addEventListener('mouseenter', function () {
        if (Sudoku.controls.mouseDown) {
          _this.selected = true;
        }
      });
    }
    /**
     * Get the state of the cell
     * @return {string}
     */

  }, {
    key: "getState",
    value: function getState() {
      return 'n' + this.cellNumber + (this.predetermined ? 'p' : '') + 'v' + this.value + 'c' + this.colorNumber + 'cr' + this.cornerMarks.join('') + 'cn' + this.centerMarks.join('');
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./assets/js/GridColumn.js":
/*!*********************************!*\
  !*** ./assets/js/GridColumn.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridCell */ "./assets/js/GridCell.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function () {
  /**
   * The 1-based row number in the grid
   * @type {number}
   */

  /**
   * Cells in the column
   * @type {GridCell[]}
   */

  /**
   * @param {number} columnNumber
   */
  function _default(columnNumber) {
    _classCallCheck(this, _default);

    _defineProperty(this, "columnNumber", void 0);

    _defineProperty(this, "gridCells", []);

    this.columnNumber = columnNumber;
  }
  /**
   * Add a cell to the column
   * @param {GridCell} cell
   * @return {void}
   */


  _createClass(_default, [{
    key: "addCell",
    value: function addCell(cell) {
      this.gridCells.push(cell);
    }
    /**
     * Get the cell numbers that this column has
     * @return {Array}
     */

  }, {
    key: "getCellNumbers",
    value: function getCellNumbers() {
      var numbers = [];
      var number = this.columnNumber; // Add the first cell number

      numbers.push(number); // Add 9 to the number 8 times

      for (var j = 0; j < 8; j++) {
        number += 9;
        numbers.push(number);
      }

      return numbers;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./assets/js/GridRow.js":
/*!******************************!*\
  !*** ./assets/js/GridRow.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridCell */ "./assets/js/GridCell.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function () {
  /**
   * The 1-based row number in the grid
   * @type {number}
   */

  /**
   * Cells in the row
   * @type {GridCell[]}
   */

  /**
   * @param {number} rowNumber
   */
  function _default(rowNumber) {
    _classCallCheck(this, _default);

    _defineProperty(this, "rowNumber", void 0);

    _defineProperty(this, "gridCells", []);

    this.rowNumber = rowNumber;
  }
  /**
   * Add a cell to the row
   * @param {GridCell} cell
   * @return {void}
   */


  _createClass(_default, [{
    key: "addCell",
    value: function addCell(cell) {
      this.gridCells.push(cell);
    }
    /**
     * Get the cell numbers that this row has
     * @return {Array}
     */

  }, {
    key: "getCellNumbers",
    value: function getCellNumbers() {
      var numbers = [];

      for (var i = 1; i < 10; i++) {
        numbers.push(i + (this.rowNumber - 1) * 9);
      }

      return numbers;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./assets/js/Grid.js");
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controls */ "./assets/js/Controls.js");

 // 'Namespace' of the project

window.Sudoku = {};
Sudoku.controls = new _Controls__WEBPACK_IMPORTED_MODULE_1__["default"]();
Sudoku.controls.init();
Sudoku.grid = new _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
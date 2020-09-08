!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";function o(){}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){var e=this,t=u.MODE_VALUE,n=document.getElementsByName("input_mode"),o=document.getElementById("input-mode-value-label"),r=document.getElementById("input-mode-corner-label"),l=document.getElementById("input-mode-center-label");e.init=function(){c(),a()};var c=function(){n.forEach((function(t){parseInt(t.value,10)===e.getMode()&&(t.checked=!0)}))},a=function(){n.forEach((function(t){t.addEventListener("change",(function(){e.setMode(parseInt(t.value,10))}))})),document.addEventListener("keydown",(function(t){switch(t.code){case"Space":e.changeMode();break;case"KeyI":e.setMode(u.MODE_VALUE);break;case"KeyO":e.setMode(u.MODE_CORNER);break;case"KeyP":Sudoku.settings.autoCandidateModeState()||e.setMode(u.MODE_CENTER)}}))};e.setMode=function(e){if(!0===Sudoku.settings.designModeState())return t=u.MODE_VALUE,void c();if("number"!==i(e).toLowerCase())throw new Error("Expected a number, got ".concat(i(e)));e>(!0===Sudoku.settings.autoCandidateModeState()?u.MODE_CORNER:u.MODE_CENTER)&&(e=u.MODE_VALUE),t=e,c()},e.changeMode=function(){e.setMode(t+1)},e.getMode=function(){return t};var s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!0===t?(e.classList.add("strike-through"),e.getElementsByTagName("input")[0].disabled=!0):(e.classList.remove("strike-through"),e.getElementsByTagName("input")[0].disabled=!1)};e.triggerAutoCandidateModeActions=function(t){!0===t?(s(l,!0),e.setMode(e.getMode())):s(l,!1)},e.triggerDesignModeActions=function(t){!0===t?(s(o,!0),s(r,!0),s(l,!0),e.setMode(e.getMode())):(s(o,!1),s(r,!1),s(l,!1))}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if("function"!==r(e).toLowerCase())throw new Error("Constructor needs to be a function, got ".concat(r(e)," instead"));if("function"!==r(t).toLowerCase())throw new Error("Base constructor needs to be a function, got ".concat(r(t)," instead"));e.prototype=new t,e.prototype.constructor=e}function c(e,t){if("object"!==r(e).toLowerCase())throw new Error("Instance needs to be an object, got ".concat(r(e)," instead"));if("function"!==r(t).toLowerCase())throw new Error("Trait constructor needs to be a function, got ".concat(r(t)," instead"));var n,o=new t;for(n in o)e[n]=o[n]}function a(){var e=this;e.gridCells=[],e.addCell=function(t){return e.gridCells.push(t)},e.getCells=function(){return e.gridCells},e.getCell=function(t){var n=e.gridCells.find((function(e){return e.getCellNumber()===t}));return void 0===n?null:n},e.getCellValues=function(){return e.gridCells.map((function(e){return e.getValue()})).filter((function(e){return null!==e}))},e.checkDuplicateCellValues=function(){var t={};e.gridCells.forEach((function(e){var n=e.getValue();if(null!==n){var o=t[n]||[];o.push(e),t[n]=o,o.length>1&&o.forEach((function(e){return e.setErrorState(!0)}))}}))},e.containsValue=function(t){t=parseInt(t,10);for(var n=e.getCells(),o=0;o<n.length;o++)if(n[o].hasValue(t))return!0;return!1}}function s(e){c(this,a);var t=e;this.getCellNumbers=function(){for(var e=[],n=t-1,o=1;o<10;o++)e.push(o+9*n);return e}}function d(e){c(this,a);var t=e;this.getCellNumbers=function(){var e=[],n=t;e.push(n);for(var o=0;o<8;o++)n+=9,e.push(n);return e}}function g(e){c(this,a);var t=e;this.getCellNumbers=function(){var e=t-1,n=3*e;n+=18*Math.floor(e/3),n++;for(var o=[],i=0;i<3;i++)o.push(n),o.push(++n),o.push(++n),n+=7;return o}}function h(e){var t=e;this.register=function(){n(),o(),i()};var n=function(){t.getElement().addEventListener("mousedown",(function(){Sudoku.controls.ctrlKeyIsPressed()?t.setSelectedState(!t.isSelected()):(Sudoku.grid.deselectAllCells(),t.setSelectedState(!0))}))},o=function(){t.getElement().addEventListener("mouseenter",(function(){Sudoku.controls.mouseIsPressed()&&t.setSelectedState(!0)}))},i=function(){t.getElement().addEventListener("mouseup",(function(){return Sudoku.grid.setLastNavigatedCell(t)}))}}function f(e){var t=this;t.cell=e,t.digits=[],t.get=function(){return t.digits},t.toggleDigit=function(e){throw new Error("'toggleDigit' method is not implemented in the pencil marks object")},t.setDigits=function(e){throw new Error("'setDigits' method is not implemented in the pencil marks object")},t.has=function(e){return t.get().indexOf(e)>-1},t.hasAny=function(){return t.get().length>0},t.show=function(){throw new Error("'show' method is not implemented in the pencil marks object")}}function m(e){var t=this;f.call(t,e),t.toggleDigit=function(e){if(!0!==t.cell.isPrefilled()&&null===t.cell.getValue()){var n=t.get(),o=n.indexOf(e);o>-1?n.splice(o,1):null!==e&&n.length<S.MAX_CORNER_MARKS&&n.push(e),t.setDigits(n)}},t.setDigits=function(e){e.length>S.MAX_CORNER_MARKS||(t.digits=e,t.show())},t.show=function(){for(var e=t.cell.getElement().getElementsByClassName("corner-mark"),n=0;n<e.length;n++)e[n].innerText=null;t.get().sort((function(e,t){return e-t})).forEach((function(e,n){document.getElementById("corner-mark-".concat(t.cell.getCellNumber(),"-").concat(n+1)).innerText=e.toString(10)}))}}function v(e){var t=this;f.call(t,e);var n=[];t.getAutoCandidates=function(){return n},t.toggleDigit=function(e){if(!0!==t.cell.isPrefilled()&&!0!==Sudoku.settings.autoCandidateModeState()&&null===t.cell.getValue()){var n=t.get(),o=n.indexOf(e);o>-1?n.splice(o,1):null!==e&&n.length<S.MAX_CENTER_MARKS&&n.push(e),t.setDigits(n)}},t.setDigits=function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===o&&e.length>S.MAX_CENTER_MARKS&&(e=[]),e.length>S.MAX_CENTER_MARKS||(!0===o?n=e:t.digits=e,t.show(o))},t.has=function(e){return(!0===Sudoku.settings.autoCandidateModeState()?t.getAutoCandidates():t.get()).indexOf(e)>-1},t.show=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=!0===e?t.getAutoCandidates():t.get();n=n.sort((function(e,t){return e-t})).join(""),t.cell.getElement().getElementsByClassName("center-marks")[0].innerText=n}}function S(e){var t=this,n=e,o=null,i=new m(t),r=new v(t),l=null,c=null,a=null,s=!1,d=null,g=!1,f=!1;t.init=function(){if(null===(o=document.getElementById("grid-cell-".concat(t.getCellNumber()))))throw new Error("Cell element with ID 'grid-cell-".concat(t.getCellNumber(),"' not found"));new h(t).register()},t.getCellNumber=function(){return n},t.getElement=function(){return o},t.isPrefilled=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==e){s=e;var n=!0===e?"add":"remove";t.getElement().classList[n]("is-prefilled")}return s},t.getColorNumber=function(){return 1},t.setDigit=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!0===Sudoku.settings.designModeState())return t.getCornerMarks().setDigits([]),t.getCenterMarks().setDigits([]),t.toggleValue(e),void t.isPrefilled(!0);if(!0!==t.isPrefilled())if(Sudoku.settings.autoErrorCheckingState()||t.setErrorState(!1),null===n&&(n=Sudoku.inputMode.getMode()),null!==e)switch(n){case u.MODE_VALUE:t.toggleValue(e);break;case u.MODE_CORNER:t.getCornerMarks().toggleDigit(e);break;case u.MODE_CENTER:t.getCenterMarks().toggleDigit(e)}else null===t.getValue()?(t.getCornerMarks().setDigits([]),Sudoku.settings.autoCandidateModeState()||t.getCenterMarks().setDigits([])):t.toggleValue(null)},t.getValue=function(){return d},t.toggleValue=function(e){e===t.getValue()&&(e=null),k(null===e),t.getElement().getElementsByClassName("cell-value")[0].innerText=e,d=e,Sudoku.gridCellHighlighter.highlightRelatedCells(),!0===Sudoku.settings.autoRemovePencilMarksState()&&S(e),!0===Sudoku.settings.autoCandidateModeState()&&Sudoku.grid.determineCandidates()},t.hasValue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===e?null!==t.getValue():t.getValue()===e},t.removePencilMark=function(e,n){if(["corner","center"].indexOf(e)<0)throw new Error("Invalid pencil mark type given, only 'corner' and 'center' are valid, '".concat(e,"' given"));var o="corner"===e?t.getCornerMarks():t.getCenterMarks(),i=o.get(),u=i.indexOf(n);u>-1&&(i.splice(u,1),o.setDigits(i))};var S=function(e){t.getRow().getCells().concat(t.getColumn().getCells()).concat(t.getBox().getCells()).forEach((function(t){t.removePencilMark("corner",e),t.removePencilMark("center",e)}))},k=function(e){for(var n=e?"remove":"add",o=1;o<9;o++)document.getElementById("corner-mark-".concat(t.getCellNumber(),"-").concat(o)).classList[n]("hide");t.getElement().getElementsByClassName("center-marks")[0].classList[n]("hide")};t.isSelected=function(){return g},t.setSelectedState=function(e){var n=e?"add":"remove";t.getElement().classList[n]("is-selected"),e&&!t.isSelected()&&Sudoku.grid.addSelectedCell(t),g=e},t.isHighlighted=function(){return f},t.setHighlightedState=function(e){var n=e?"add":"remove";t.getElement().classList[n]("is-highlighted"),e&&!t.isHighlighted()&&Sudoku.gridCellHighlighter.addHighlightedCell(t),f=e},t.getCornerMarks=function(){return i},t.getCenterMarks=function(){return r},t.getRow=function(){return l},t.setRow=function(e){return l=e},t.getColumn=function(){return c},t.setColumn=function(e){return c=e},t.getBox=function(){return a},t.setBox=function(e){return a=e},t.setErrorState=function(e){var n=e?"add":"remove";t.getElement().classList[n]("has-error")},t.getState=function(){return"n"+t.getCellNumber()+(t.isPrefilled()?"p":"")+"v"+t.getValue()+"c"+t.getColorNumber()+"cr"+t.getCornerMarks().get().join("")+"cn"+t.getCenterMarks().get().join("")}}function k(){this.execute=function(){throw new Error("'execute' method is not implemented in the command")}}function E(){k.call(this),this.undo=function(){throw new Error("'undo' method is not implemented in the command")}}function C(e){E.call(this);var t,n=e,o=Sudoku.grid.getSelectedCells(),i=Sudoku.inputMode.getMode(),u=(t={},o.forEach((function(e){t[e.getCellNumber()]={isPrefilled:e.isPrefilled(),value:e.getValue(),cornerMarks:e.getCornerMarks().get().map((function(e){return e})),centerMarks:e.getCenterMarks().get().map((function(e){return e}))}})),t);this.execute=function(){o.forEach((function(e){return e.setDigit(n,i)})),Sudoku.settings.autoErrorCheckingState()&&Sudoku.grid.checkForErrors()},this.undo=function(){o.forEach((function(e){var t=u[e.getCellNumber()];e.isPrefilled(t.isPrefilled),e.toggleValue(t.value),e.getCornerMarks().setDigits(t.cornerMarks.map((function(e){return e}))),e.getCenterMarks().setDigits(t.centerMarks.map((function(e){return e})))})),!0===Sudoku.settings.autoErrorCheckingState()&&Sudoku.grid.checkForErrors()}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){var e=this;k.call(e),e.state=null,e.execute=function(e){throw new Error("'execute' method is not implemented in the command")},e.toggle=function(){var t="function"===p(e.state).toLowerCase()?e.state():e.state;if(null===t)throw new Error("The command needs an (initial) boolean state, it can be a function that returns a boolean");e.execute(!t)}}function w(e){k.call(this);var t=e,n=document.getElementById(t);this.execute=function(){Sudoku.modal.setCurrentModalId(t),n.classList.add("show"),(new M).execute(!0)}}function M(){y.call(this),this.state=function(){return Sudoku.game.isPaused()};var e=document.getElementById("page-body");this.execute=function(t){var n=document.getElementById("game-pause-icon"),o=document.getElementById("game-resume-icon");!0===t?(Sudoku.clock.pause(),e.classList.add("is-paused"),n.classList.add("hide"),o.classList.remove("hide"),!1===Sudoku.modal.openState()&&new w("pause-modal").execute()):(Sudoku.clock.unpause(),e.classList.remove("is-paused"),n.classList.remove("hide"),o.classList.add("hide"));Sudoku.game.setPausedState(t)}}function b(){k.call(this);var e=new M;this.execute=function(){for(var t=document.getElementsByClassName("modal"),n=0;n<t.length;n++)t[n].classList.remove("show");e.execute(!1),Sudoku.modal.setCurrentModalId(null)}}function x(){y.call(this),this.state=function(){return Sudoku.settings.clockState()};var e=document.getElementById("clock-wrapper"),t=document.getElementById("setting-show-clock");this.execute=function(n){var o=n?"remove":"add";e.classList[o]("hide"),t.checked=n,Sudoku.settings.clockState(n)}}function L(){y.call(this),this.state=function(){return Sudoku.settings.autoErrorCheckingState()};var e=document.getElementById("check-errors"),t=document.getElementById("setting-auto-error-checking");this.execute=function(n){var o=n?"add":"remove";e.classList[o]("hide"),t.checked=n,Sudoku.settings.autoErrorCheckingState(n),!0===n?Sudoku.grid.checkForErrors():Sudoku.grid.removeAllErrors()}}function I(){y.call(this),this.state=function(){return Sudoku.settings.autoRemovePencilMarksState()};var e=document.getElementById("setting-auto-remove-pencil-marks");this.execute=function(t){e.checked=t,Sudoku.settings.autoRemovePencilMarksState(t)}}function B(){y.call(this),this.state=function(){return Sudoku.settings.highlightRowState()};var e=document.getElementById("setting-highlight-row");this.execute=function(t){e.checked=t,Sudoku.settings.highlightRowState(t)}}function N(){y.call(this),this.state=function(){return Sudoku.settings.highlightColumnState()};var e=document.getElementById("setting-highlight-column");this.execute=function(t){e.checked=t,Sudoku.settings.highlightColumnState(t)}}function R(){y.call(this),this.state=function(){return Sudoku.settings.highlightBoxState()};var e=document.getElementById("setting-highlight-box");this.execute=function(t){e.checked=t,Sudoku.settings.highlightBoxState(t)}}function A(){y.call(this),this.state=function(){return Sudoku.settings.highlightValueState()};var e=document.getElementById("setting-highlight-value");this.execute=function(t){e.checked=t,Sudoku.settings.highlightValueState(t)}}function D(){y.call(this),this.state=function(){return Sudoku.settings.highlightPencilMarksState()};var e=document.getElementById("setting-highlight-pencil-marks");this.execute=function(t){e.checked=t,Sudoku.settings.highlightPencilMarksState(t)}}function P(){y.call(this),this.state=function(){return Sudoku.settings.autoCandidateModeState()},this.execute=function(e){Sudoku.settings.autoCandidateModeState(e),Sudoku.inputMode.triggerAutoCandidateModeActions(e),!0===e?Sudoku.grid.determineCandidates():Sudoku.grid.removeCandidates()}}function O(){y.call(this),this.state=function(){return Sudoku.settings.designModeState()},this.execute=function(e){Sudoku.settings.designModeState(e),Sudoku.inputMode.triggerDesignModeActions(e)}}n.r(t),o.usesMacOs=null!==navigator.userAgent.toLowerCase().match(/macintosh/),u.MODE_VALUE=1,u.MODE_CORNER=2,u.MODE_CENTER=3,l(m,f),l(v,f),S.MAX_CORNER_MARKS=8,S.MAX_CENTER_MARKS=5,l(E,k),l(C,E),l(y,k),l(w,k),l(M,y),l(b,k),l(x,y),l(L,y),l(I,y),l(B,y),l(N,y),l(R,y),l(A,y),l(D,y),l(P,y),l(O,y),window.Sudoku={game:new function(){var e=!1;this.isPaused=function(){return e},this.setPausedState=function(t){return e=t}},settings:new function(){var e,t,n,o,i,u,r,l=this,c=!1,a=!1,s=!1;l.init=function(){null===localStorage.getItem("settings")&&localStorage.setItem("settings",JSON.stringify({})),d(),h()};var d=function(){var l=JSON.parse(localStorage.getItem("settings"));e=void 0===l.clock||l.clock,t=void 0===l.autoErrorChecking||l.autoErrorChecking,c=void 0!==l.autoRemovePencilMarks&&l.autoRemovePencilMarks,n=void 0===l.highlightRow||l.highlightRow,o=void 0===l.highlightColumn||l.highlightColumn,i=void 0===l.highlightBox||l.highlightBox,u=void 0===l.highlightValue||l.highlightValue,r=void 0===l.highlightPencilMarks||l.highlightPencilMarks},g=function(){localStorage.setItem("settings",JSON.stringify({clock:l.clockState(),autoErrorChecking:l.autoErrorCheckingState(),autoRemovePencilMarks:l.autoRemovePencilMarksState(),highlightRow:l.highlightRowState(),highlightColumn:l.highlightColumnState(),highlightBox:l.highlightBoxState(),highlightValue:l.highlightValueState(),highlightPencilMarks:l.highlightPencilMarksState()}))},h=function(){(new x).execute(l.clockState()),(new L).execute(l.autoErrorCheckingState()),(new I).execute(l.autoRemovePencilMarksState()),(new B).execute(l.highlightRowState()),(new N).execute(l.highlightColumnState()),(new R).execute(l.highlightBoxState()),(new A).execute(l.highlightValueState()),(new D).execute(l.highlightPencilMarksState())};l.clockState=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==t&&(e=t,g()),e},l.autoErrorCheckingState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(t=e,g()),t},l.autoRemovePencilMarksState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(c=e,g()),c},l.highlightRowState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(n=e,g()),n},l.highlightColumnState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(o=e,g()),o},l.highlightBoxState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(i=e,g()),i},l.highlightValueState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(u=e,g()),u},l.highlightPencilMarksState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(r=e,g()),r},l.autoCandidateModeState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(a=e),a},l.designModeState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(s=e),s}},history:new function(){var e=this,t=[],n=[];e.execute=function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!(e instanceof E))throw new Error("Command needs to have UndoableCommandInterface in its prototype chain");e.execute(),t.push(e),o&&(n=[])},e.undo=function(){if(!(t.length<1)){var e=t.pop();e.undo(),n.push(e)}},e.redo=function(){if(!(n.length<1)){var t=n.pop();e.execute(t,!1)}}},meta:new function(){var e=document.getElementById("meta-app-name").getAttribute("content"),t=document.getElementsByClassName("page-title"),n=document.getElementById("puzzle-title"),o=document.getElementById("puzzle-description"),i=null;this.init=function(){u()};var u=function(){var u=function(){for(var o=""!==(i=n.value.trim())?"".concat(i," - ").concat(e):e,u=0;u<t.length;u++)t[u].innerText=o};n.addEventListener("change",u),n.addEventListener("keyup",u),n.addEventListener("paste",u);var r=function(){return o.value};o.addEventListener("change",r),o.addEventListener("keyup",r),o.addEventListener("paste",r)}},controls:new function(){var e=this,t=!1,n=!1,i=!1,u={up:["ArrowUp","KeyW"],down:["ArrowDown","KeyS"],left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"]},r=u.up.concat(u.down).concat(u.left).concat(u.right),l=["Delete","Backspace"];e.init=function(){document.addEventListener("mousedown",(function(){return t=!0})),document.addEventListener("mouseup",(function(){return t=!1})),document.addEventListener("keyup",a),document.addEventListener("keydown",a),document.addEventListener("keydown",s),c()};var c=function(){document.addEventListener("click",(function(e){null!==e.target.closest(".click-prevent")&&e.preventDefault()}))};e.cancelKeyboardEvent=function(e){var t=e.target.nodeName.toLowerCase();return["input","textarea"].indexOf(t)>-1};var a=function(e){n=o.usesMacOs?e.metaKey:e.ctrlKey,i=e.shiftKey},s=function(t){e.cancelKeyboardEvent(t)||(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].indexOf(t.code)>-1&&t.preventDefault(),n&&"KeyY"===t.code&&t.preventDefault())};e.mouseIsPressed=function(){return t},e.ctrlKeyIsPressed=function(){return n},e.shiftKeyIsPressed=function(){return i},e.isNumberKey=function(e){return!isNaN(parseInt(e.key,10))},e.isDeleteKey=function(e){return l.indexOf(e.code)>-1},e.isArrowKey=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"any";return"any"===t?r.indexOf(e.code)>-1:u[t]&&u[t].indexOf(e.code)>-1}},inputMode:new u,gridCellHighlighter:new function(){var e=this,t=[];e.addHighlightedCell=function(e){return t.push(e)},e.getHighlightedCells=function(){return t},e.highlightRelatedCells=function(){e.dehighlightAllCells();var t=[];Sudoku.grid.getSelectedCells().forEach((function(e){Sudoku.settings.highlightRowState()&&(t=t.concat(e.getRow().getCellNumbers())),Sudoku.settings.highlightColumnState()&&(t=t.concat(e.getColumn().getCellNumbers())),Sudoku.settings.highlightBoxState()&&(t=t.concat(e.getBox().getCellNumbers()));var n=e.getValue();if(null!==n&&(Sudoku.settings.highlightValueState()||Sudoku.settings.highlightPencilMarksState())){var o=Sudoku.grid.getCells().filter((function(e){return!(!Sudoku.settings.highlightValueState()||!e.hasValue(n))||!(!Sudoku.settings.highlightPencilMarksState()||e.hasValue()||!e.getCornerMarks().has(n)&&!e.getCenterMarks().has(n))})).map((function(e){return e.getCellNumber()}));t=t.concat(o)}})),t.filter((function(e,t,n){return n.indexOf(e)===t})).forEach((function(e){Sudoku.grid.getCell(e).setHighlightedState(!0)}))},e.dehighlightAllCells=function(){e.getHighlightedCells().forEach((function(e){return e.setHighlightedState(!1)})),t=[]}},grid:new function(){var e=this;c(e,a);var t=[],n=[],o=[],i=[],u=null;e.init=function(){r()};var r=function(){for(var i=1;i<10;i++)t.push(new s(i)),n.push(new d(i)),o.push(new g(i));for(var u,r=1;r<82;r++){(u=new S(r)).init(),e.addCell(u);for(var l=0;l<9;l++)-1!==t[l].getCellNumbers().indexOf(r)&&(t[l].addCell(u),u.setRow(t[l])),-1!==n[l].getCellNumbers().indexOf(r)&&(n[l].addCell(u),u.setColumn(n[l])),-1!==o[l].getCellNumbers().indexOf(r)&&(o[l].addCell(u),u.setBox(o[l]))}e.setLastNavigatedCell(null)};e.getSelectedCells=function(){return i},e.addSelectedCell=function(e){i.push(e),Sudoku.gridCellHighlighter.highlightRelatedCells()},e.deselectAllCells=function(){e.getSelectedCells().forEach((function(e){return e.setSelectedState(!1)})),i=[]},e.getLastNavigatedCell=function(){return u},e.setLastNavigatedCell=function(t){u=null===t?e.getCell(41):t},e.checkForErrors=function(){e.removeAllErrors(),t.forEach((function(e){return e.checkDuplicateCellValues()})),n.forEach((function(e){return e.checkDuplicateCellValues()})),o.forEach((function(e){return e.checkDuplicateCellValues()}))},e.removeAllErrors=function(){e.getCells().forEach((function(e){return e.setErrorState(!1)}))},e.determineCandidates=function(){e.getCells().filter((function(e){return null===e.getValue()})).forEach((function(e){var t=[1,2,3,4,5,6,7,8,9].filter((function(t){return!e.getRow().containsValue(t)&&(!e.getColumn().containsValue(t)&&!e.getBox().containsValue(t))}));e.getCenterMarks().setDigits(t,!0)}))},e.removeCandidates=function(){e.getCells().forEach((function(e){e.getCenterMarks().setDigits([],!0),e.getCenterMarks().show()}))},e.getState=function(){return"a1t"+Sudoku.clock.getTotalElapsedMs()+e.getCells().map((function(e){return e.getState()})).join("")}},clock:new function(){var e=this,t=0,n=null,o=document.getElementById("elapsed-time"),i=null,u=!1;e.init=function(){e.start()},e.start=e.unpause=function(){n=new Date,u=!1,e.enableTimeInterval()},e.pause=function(){t+=e.getElapsedMsSinceStart(),n=null,u=!0,e.enableTimeInterval(!1)},e.isPaused=function(){return u},e.getElapsedMsSinceStart=function(){return null!==n?(new Date).getTime()-n.getTime():0},e.getTotalElapsedMs=function(){return t+e.getElapsedMsSinceStart()},e.getElapsedTimeString=function(){var t=Math.floor(e.getTotalElapsedMs()/1e3),n=Math.floor(t/3600),o=Math.floor(t%3600/60),i=(t%60).toString(10).padStart(2,"0");return n>0?(o=o.toString().padStart(2,"0"),"".concat(n,":").concat(o,":").concat(i)):"".concat(o,":").concat(i)},e.enableTimeInterval=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?i=setInterval((function(){o.innerText=e.getElapsedTimeString()}),1e3):clearInterval(i)}},modal:new function(){var e=this,t=document.getElementById("modal-backdrop"),n=!1,o=null,i=new b;e.init=function(){u(),r()},e.openState=function(){return n},e.setCurrentModalId=function(e){o=e,n=null!==e;var i=null!==e?"add":"remove";t.classList[i]("show")},e.getCurrentModalId=function(){return o},e.close=function(){return i.execute()};var u=function(){for(var e=document.getElementsByClassName("open-modal"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){new w(e.target.dataset.modalId).execute()}))},r=function(){for(var n=document.getElementsByClassName("close-modal"),o=0;o<n.length;o++)n[o].addEventListener("click",e.close);t.addEventListener("click",e.close)}},documentEventHandler:new function(){this.init=function(){e(),t()};var e=function(){var e=new M;document.addEventListener("keydown",(function(t){if(!Sudoku.controls.cancelKeyboardEvent(t)){if(Sudoku.controls.isArrowKey(t)){Sudoku.controls.ctrlKeyIsPressed()||Sudoku.grid.deselectAllCells();var n=Sudoku.grid.getLastNavigatedCell().getCellNumber()-1,o=null;Sudoku.controls.isArrowKey(t,"up")?(n-=9)<0&&(n=81+n):Sudoku.controls.isArrowKey(t,"down")?(n+=9)>80&&(n-=81):Sudoku.controls.isArrowKey(t,"left")?(1+--n)%9==0&&(n+=9):Sudoku.controls.isArrowKey(t,"right")&&++n%9==0&&(n-=9),(o=Sudoku.grid.getCell(n+1)).setSelectedState(!0),Sudoku.grid.setLastNavigatedCell(o)}if(Sudoku.controls.isNumberKey(t)){var i=parseInt(t.key,10);Sudoku.history.execute(new C(i))}else Sudoku.controls.isDeleteKey(t)?Sudoku.history.execute(new C(null)):"KeyZ"===t.code?Sudoku.controls.ctrlKeyIsPressed()&&(Sudoku.controls.shiftKeyIsPressed()?Sudoku.history.redo():Sudoku.history.undo()):"KeyY"===t.code?Sudoku.controls.ctrlKeyIsPressed()&&Sudoku.history.redo():"Escape"===t.code&&(!0===Sudoku.modal.openState()?Sudoku.modal.close():e.toggle())}}))},t=function(){document.addEventListener("mousedown",(function(e){null===e.target.closest(".grid-cell")&&(Sudoku.grid.deselectAllCells(),Sudoku.gridCellHighlighter.dehighlightAllCells())}))}},settingsEventHandler:new function(){this.init=function(){e(),t(),n(),o()};var e=function(){document.getElementById("setting-show-clock").addEventListener("change",(function(e){(new x).execute(e.target.checked)}))},t=function(){document.getElementById("setting-auto-error-checking").addEventListener("change",(function(e){(new L).execute(e.target.checked)}))},n=function(){document.getElementById("setting-auto-remove-pencil-marks").addEventListener("change",(function(e){(new I).execute(e.target.checked)}))},o=function(){document.getElementById("setting-highlight-row").addEventListener("change",(function(e){(new B).execute(e.target.checked)})),document.getElementById("setting-highlight-column").addEventListener("change",(function(e){(new N).execute(e.target.checked)})),document.getElementById("setting-highlight-box").addEventListener("change",(function(e){(new R).execute(e.target.checked)})),document.getElementById("setting-highlight-value").addEventListener("change",(function(e){(new A).execute(e.target.checked)})),document.getElementById("setting-highlight-pencil-marks").addEventListener("change",(function(e){(new D).execute(e.target.checked)}))}},actionsEventHandler:new function(){this.init=function(){e(),t(),n(),o()};var e=function(){document.getElementById("toggle-pause-button").addEventListener("click",(function(){(new M).toggle()})),document.getElementById("game-resume-button").addEventListener("click",(function(){(new M).execute(!1),Sudoku.modal.close()}))},t=function(){document.getElementById("check-errors").addEventListener("click",Sudoku.grid.checkForErrors)},n=function(){document.getElementById("setting-auto-candidate").addEventListener("change",(function(e){(new P).execute(e.target.checked)}))},o=function(){document.getElementById("toggle-design-mode").addEventListener("change",(function(e){(new O).execute(e.target.checked)}))}}},Sudoku.settings.init(),Sudoku.settingsEventHandler.init(),Sudoku.clock.init(),Sudoku.modal.init(),Sudoku.meta.init(),Sudoku.inputMode.init(),Sudoku.controls.init(),Sudoku.grid.init(),Sudoku.documentEventHandler.init(),Sudoku.actionsEventHandler.init()}]);
//# sourceMappingURL=app_8aeb87762ddd8938434a.js.map
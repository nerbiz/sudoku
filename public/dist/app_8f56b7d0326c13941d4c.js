(()=>{"use strict";(()=>{function e(){}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(){var e=this,o=n.MODE_VALUE,i=document.getElementsByName("input_mode"),u=document.getElementById("input-mode-value-label"),r=document.getElementById("input-mode-corner-label"),l=document.getElementById("input-mode-center-label");e.init=function(){c(),a()};var c=function(){i.forEach((function(t){parseInt(t.value,10)===e.getMode()&&(t.checked=!0)}))},a=function(){i.forEach((function(t){t.addEventListener("change",(function(){e.setMode(parseInt(t.value,10))}))})),document.addEventListener("keydown",(function(t){switch(t.code){case"Space":e.changeMode();break;case"KeyI":e.setMode(n.MODE_VALUE);break;case"KeyO":e.setMode(n.MODE_CORNER);break;case"KeyP":Sudoku.settings.autoCandidateModeState()||e.setMode(n.MODE_CENTER)}}))};e.setMode=function(e){if(!0===Sudoku.settings.designModeState())return o=n.MODE_VALUE,void c();if("number"!==t(e).toLowerCase())throw new Error("Expected a number, got ".concat(t(e)));e>(!0===Sudoku.settings.autoCandidateModeState()?n.MODE_CORNER:n.MODE_CENTER)&&(e=n.MODE_VALUE),o=e,c()},e.changeMode=function(){e.setMode(o+1)},e.getMode=function(){return o};var s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!0===t?(e.classList.add("strike-through"),e.getElementsByTagName("input")[0].disabled=!0):(e.classList.remove("strike-through"),e.getElementsByTagName("input")[0].disabled=!1)};e.triggerAutoCandidateModeActions=function(t){!0===t?(s(l,!0),e.setMode(e.getMode())):s(l,!1)},e.triggerDesignModeActions=function(t){!0===t?(s(u,!0),s(r,!0),s(l,!0),e.setMode(e.getMode())):(s(u,!1),s(r,!1),s(l,!1))}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if("function"!==o(e).toLowerCase())throw new Error("Constructor needs to be a function, got ".concat(o(e)," instead"));if("function"!==o(t).toLowerCase())throw new Error("Base constructor needs to be a function, got ".concat(o(t)," instead"));e.prototype=new t,e.prototype.constructor=e}function u(e,t){if("object"!==o(e).toLowerCase())throw new Error("Instance needs to be an object, got ".concat(o(e)," instead"));if("function"!==o(t).toLowerCase())throw new Error("Trait constructor needs to be a function, got ".concat(o(t)," instead"));var n,i=new t;for(n in i)e[n]=i[n]}function r(){var e=this;e.gridCells=[],e.addCell=function(t){return e.gridCells.push(t)},e.getCells=function(){return e.gridCells},e.getCell=function(t){var n=e.gridCells.find((function(e){return e.getCellNumber()===t}));return void 0===n?null:n},e.getCellValues=function(){return e.gridCells.map((function(e){return e.getValue()})).filter((function(e){return null!==e}))},e.checkDuplicateCellValues=function(){var t={};e.gridCells.forEach((function(e){var n=e.getValue();if(null!==n){var o=t[n]||[];o.push(e),t[n]=o,o.length>1&&o.forEach((function(e){return e.setErrorState(!0)}))}}))},e.containsValue=function(t){t=parseInt(t,10);for(var n=e.getCells(),o=0;o<n.length;o++)if(n[o].hasValue(t))return!0;return!1}}function l(e){u(this,r);var t=e;this.getCellNumbers=function(){for(var e=[],n=t-1,o=1;o<10;o++)e.push(o+9*n);return e}}function c(e){u(this,r);var t=e;this.getCellNumbers=function(){var e=[],n=t;e.push(n);for(var o=0;o<8;o++)n+=9,e.push(n);return e}}function a(e){u(this,r);var t=e;this.getCellNumbers=function(){var e=t-1,n=3*e;n+=18*Math.floor(e/3),n++;for(var o=[],i=0;i<3;i++)o.push(n),o.push(++n),o.push(++n),n+=7;return o}}function s(e){var t=e;this.register=function(){n(),o(),i()};var n=function(){t.getElement().addEventListener("mousedown",(function(){Sudoku.controls.ctrlKeyIsPressed()?t.setSelectedState(!t.isSelected()):(Sudoku.grid.deselectAllCells(),t.setSelectedState(!0))}))},o=function(){t.getElement().addEventListener("mouseenter",(function(){Sudoku.controls.mouseIsPressed()&&t.setSelectedState(!0)}))},i=function(){t.getElement().addEventListener("mouseup",(function(){return Sudoku.grid.setLastNavigatedCell(t)}))}}function d(e){var t=this;t.cell=e,t.digits=[],t.get=function(){return t.digits},t.toggleDigit=function(e){throw new Error("'toggleDigit' method is not implemented in the pencil marks object")},t.setDigits=function(e){throw new Error("'setDigits' method is not implemented in the pencil marks object")},t.has=function(e){return t.get().indexOf(e)>-1},t.hasAny=function(){return t.get().length>0},t.show=function(){throw new Error("'show' method is not implemented in the pencil marks object")}}function g(e){var t=this;d.call(t,e),t.toggleDigit=function(e){if(!0!==t.cell.isPrefilled()&&null===t.cell.getValue()){var n=t.get(),o=n.indexOf(e);o>-1?n.splice(o,1):null!==e&&n.length<f.MAX_CORNER_MARKS&&n.push(e),t.setDigits(n)}},t.setDigits=function(e){e.length>f.MAX_CORNER_MARKS||(t.digits=e,t.show())},t.show=function(){for(var e=t.cell.getElement().getElementsByClassName("corner-mark"),n=0;n<e.length;n++)e[n].innerText=null;t.get().sort((function(e,t){return e-t})).forEach((function(e,n){document.getElementById("corner-mark-".concat(t.cell.getCellNumber(),"-").concat(n+1)).innerText=e.toString(10)}))}}function h(e){var t=this;d.call(t,e);var n=[];t.getAutoCandidates=function(){return n},t.toggleDigit=function(e){if(!0!==t.cell.isPrefilled()&&!0!==Sudoku.settings.autoCandidateModeState()&&null===t.cell.getValue()){var n=t.get(),o=n.indexOf(e);o>-1?n.splice(o,1):null!==e&&n.length<f.MAX_CENTER_MARKS&&n.push(e),t.setDigits(n)}},t.setDigits=function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===o&&e.length>f.MAX_CENTER_MARKS&&(e=[]),e.length>f.MAX_CENTER_MARKS||(!0===o?n=e:t.digits=e,t.show(o))},t.has=function(e){return(!0===Sudoku.settings.autoCandidateModeState()?t.getAutoCandidates():t.get()).indexOf(e)>-1},t.show=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=!0===e?t.getAutoCandidates():t.get();n=n.sort((function(e,t){return e-t})).join(""),t.cell.getElement().getElementsByClassName("center-marks")[0].innerText=n}}function f(e){var t=this,o=e,i=null,u=new g(t),r=new h(t),l=null,c=null,a=null,d=!1,f=null,m=!1,v=!1;t.init=function(){if(null===(i=document.getElementById("grid-cell-".concat(t.getCellNumber()))))throw new Error("Cell element with ID 'grid-cell-".concat(t.getCellNumber(),"' not found"));new s(t).register()},t.getCellNumber=function(){return o},t.getElement=function(){return i},t.isPrefilled=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==e){d=e;var n=!0===e?"add":"remove";t.getElement().classList[n]("is-prefilled")}return d},t.getColorNumber=function(){return 1},t.setDigit=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!0===Sudoku.settings.designModeState())return t.getCornerMarks().setDigits([]),t.getCenterMarks().setDigits([]),t.toggleValue(e),void t.isPrefilled(null!==t.getValue());if(!0!==t.isPrefilled())if(Sudoku.settings.autoErrorCheckingState()||t.setErrorState(!1),null===o&&(o=Sudoku.inputMode.getMode()),null!==e)switch(o){case n.MODE_VALUE:t.toggleValue(e);break;case n.MODE_CORNER:t.getCornerMarks().toggleDigit(e);break;case n.MODE_CENTER:t.getCenterMarks().toggleDigit(e)}else null===t.getValue()?(t.getCornerMarks().setDigits([]),Sudoku.settings.autoCandidateModeState()||t.getCenterMarks().setDigits([])):t.toggleValue(null)},t.getValue=function(){return f},t.toggleValue=function(e){e===t.getValue()&&(e=null),k(null===e),t.getElement().getElementsByClassName("cell-value")[0].innerText=e,f=e,Sudoku.gridCellHighlighter.highlightRelatedCells(),!0===Sudoku.settings.autoRemovePencilMarksState()&&S(e),!0===Sudoku.settings.autoCandidateModeState()&&Sudoku.grid.determineCandidates()},t.hasValue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===e?null!==t.getValue():t.getValue()===e},t.removePencilMark=function(e,n){if(["corner","center"].indexOf(e)<0)throw new Error("Invalid pencil mark type given, only 'corner' and 'center' are valid, '".concat(e,"' given"));var o="corner"===e?t.getCornerMarks():t.getCenterMarks(),i=o.get(),u=i.indexOf(n);u>-1&&(i.splice(u,1),o.setDigits(i))};var S=function(e){t.getRow().getCells().concat(t.getColumn().getCells()).concat(t.getBox().getCells()).forEach((function(t){t.removePencilMark("corner",e),t.removePencilMark("center",e)}))},k=function(e){for(var n=e?"remove":"add",o=1;o<9;o++)document.getElementById("corner-mark-".concat(t.getCellNumber(),"-").concat(o)).classList[n]("hide");t.getElement().getElementsByClassName("center-marks")[0].classList[n]("hide")};t.isSelected=function(){return m},t.setSelectedState=function(e){var n=e?"add":"remove";t.getElement().classList[n]("is-selected"),e&&!t.isSelected()&&Sudoku.grid.addSelectedCell(t),m=e},t.isHighlighted=function(){return v},t.setHighlightedState=function(e){var n=e?"add":"remove";t.getElement().classList[n]("is-highlighted"),e&&!t.isHighlighted()&&Sudoku.gridCellHighlighter.addHighlightedCell(t),v=e},t.getCornerMarks=function(){return u},t.getCenterMarks=function(){return r},t.getRow=function(){return l},t.setRow=function(e){return l=e},t.getColumn=function(){return c},t.setColumn=function(e){return c=e},t.getBox=function(){return a},t.setBox=function(e){return a=e},t.setErrorState=function(e){var n=e?"add":"remove";t.getElement().classList[n]("has-error")},t.getState=function(){return"n"+t.getCellNumber()+(t.isPrefilled()?"p":"")+"v"+t.getValue()+"c"+t.getColorNumber()+"cr"+t.getCornerMarks().get().join("")+"cn"+t.getCenterMarks().get().join("")}}function m(){this.execute=function(){throw new Error("'execute' method is not implemented in the command")}}function v(){m.call(this),this.undo=function(){throw new Error("'undo' method is not implemented in the command")}}function S(e){var t=this;v.call(t);var n,o=e,i=Sudoku.grid.getSelectedCells(),u=Sudoku.inputMode.getMode(),r=(n={},i.forEach((function(e){n[e.getCellNumber()]={isPrefilled:e.isPrefilled(),value:e.getValue(),cornerMarks:e.getCornerMarks().get().map((function(e){return e})),centerMarks:e.getCenterMarks().get().map((function(e){return e}))}})),n);t.execute=function(){i.forEach((function(e){return e.setDigit(o,u)})),Sudoku.settings.autoErrorCheckingState()&&Sudoku.grid.checkForErrors()},t.undo=function(){i.forEach((function(e){var t=r[e.getCellNumber()];e.isPrefilled(t.isPrefilled),e.toggleValue(t.value),e.getCornerMarks().setDigits(t.cornerMarks.map((function(e){return e}))),e.getCenterMarks().setDigits(t.centerMarks.map((function(e){return e})))})),!0===Sudoku.settings.autoErrorCheckingState()&&Sudoku.grid.checkForErrors()}}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){var e=this;m.call(e),e.state=null,e.execute=function(e){throw new Error("'execute' method is not implemented in the command")},e.toggle=function(){var t="function"===k(e.state).toLowerCase()?e.state():e.state;if(null===t)throw new Error("The command needs an (initial) boolean state, it can be a function that returns a boolean");e.execute(!t)}}function C(e){m.call(this);var t=e,n=document.getElementById(t);this.execute=function(){Sudoku.modal.setCurrentModalId(t),n.classList.add("show"),(new p).execute(!0)}}function p(){var e=this;E.call(e),e.state=function(){return Sudoku.game.isPaused()};var t=document.getElementById("page-body");e.execute=function(e){var n=document.getElementById("game-pause-icon"),o=document.getElementById("game-resume-icon");!0===e?(Sudoku.clock.pause(),t.classList.add("is-paused"),n.classList.add("hide"),o.classList.remove("hide"),!1===Sudoku.modal.openState()&&new C("pause-modal").execute()):(Sudoku.clock.unpause(),t.classList.remove("is-paused"),n.classList.remove("hide"),o.classList.add("hide")),Sudoku.game.setPausedState(e)}}function w(){m.call(this);var e=new p;this.execute=function(){for(var t=document.getElementsByClassName("modal"),n=0;n<t.length;n++)t[n].classList.remove("show");e.execute(!1),Sudoku.modal.setCurrentModalId(null)}}function y(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.clockState()};var t=document.getElementById("clock-wrapper"),n=document.getElementById("setting-show-clock");e.execute=function(e){var o=e?"remove":"add";t.classList[o]("hide"),n.checked=e,Sudoku.settings.clockState(e)}}function M(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.autoErrorCheckingState()};var t=document.getElementById("check-errors"),n=document.getElementById("setting-auto-error-checking");e.execute=function(e){var o=e?"add":"remove";t.classList[o]("hide"),n.checked=e,Sudoku.settings.autoErrorCheckingState(e),!0===e?Sudoku.grid.checkForErrors():Sudoku.grid.removeAllErrors()}}function x(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.autoRemovePencilMarksState()};var t=document.getElementById("setting-auto-remove-pencil-marks");e.execute=function(e){t.checked=e,Sudoku.settings.autoRemovePencilMarksState(e)}}function b(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.highlightMultipleSelectionState()};var t=document.getElementById("setting-highlight-multiple-selection");e.execute=function(e){t.checked=e,Sudoku.settings.highlightMultipleSelectionState(e)}}function L(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.highlightRowState()};var t=document.getElementById("setting-highlight-row");e.execute=function(e){t.checked=e,Sudoku.settings.highlightRowState(e)}}function I(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.highlightColumnState()};var t=document.getElementById("setting-highlight-column");e.execute=function(e){t.checked=e,Sudoku.settings.highlightColumnState(e)}}function B(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.highlightBoxState()};var t=document.getElementById("setting-highlight-box");e.execute=function(e){t.checked=e,Sudoku.settings.highlightBoxState(e)}}function N(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.highlightValueState()};var t=document.getElementById("setting-highlight-value");e.execute=function(e){t.checked=e,Sudoku.settings.highlightValueState(e)}}function R(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.highlightPencilMarksState()};var t=document.getElementById("setting-highlight-pencil-marks");e.execute=function(e){t.checked=e,Sudoku.settings.highlightPencilMarksState(e)}}function A(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.autoCandidateModeState()},e.execute=function(e){Sudoku.settings.autoCandidateModeState(e),Sudoku.inputMode.triggerAutoCandidateModeActions(e),!0===e?Sudoku.grid.determineCandidates():Sudoku.grid.removeCandidates()}}function D(){var e=this;E.call(e),e.state=function(){return Sudoku.settings.designModeState()},e.execute=function(e){Sudoku.settings.designModeState(e),Sudoku.inputMode.triggerDesignModeActions(e)}}e.usesMacOs=null!==navigator.userAgent.toLowerCase().match(/macintosh/),n.MODE_VALUE=1,n.MODE_CORNER=2,n.MODE_CENTER=3,i(g,d),i(h,d),f.MAX_CORNER_MARKS=8,f.MAX_CENTER_MARKS=5,i(v,m),i(S,v),i(E,m),i(C,m),i(p,E),i(w,m),i(y,E),i(M,E),i(x,E),i(b,E),i(L,E),i(I,E),i(B,E),i(N,E),i(R,E),i(A,E),i(D,E),window.Sudoku={application:new function(){this.applyPuzzleProperties=function(e){}},game:new function(){var e=!1;this.isPaused=function(){return e},this.setPausedState=function(t){return e=t}},settings:new function(){var e,t,n,o,i,u,r,l,c=this,a=!1,s=!1,d=!1;c.init=function(){null===localStorage.getItem("settings")&&localStorage.setItem("settings",JSON.stringify({})),g(),f()};var g=function(){var c=JSON.parse(localStorage.getItem("settings"));e=void 0===c.clock||c.clock,t=void 0===c.autoErrorChecking||c.autoErrorChecking,a=void 0!==c.autoRemovePencilMarks&&c.autoRemovePencilMarks,n=void 0!==c.highlightMultipleSelection&&c.highlightMultipleSelection,o=void 0===c.highlightRow||c.highlightRow,i=void 0===c.highlightColumn||c.highlightColumn,u=void 0===c.highlightBox||c.highlightBox,r=void 0===c.highlightValue||c.highlightValue,l=void 0===c.highlightPencilMarks||c.highlightPencilMarks},h=function(){localStorage.setItem("settings",JSON.stringify({clock:c.clockState(),autoErrorChecking:c.autoErrorCheckingState(),autoRemovePencilMarks:c.autoRemovePencilMarksState(),highlightMultipleSelection:c.highlightMultipleSelectionState(),highlightRow:c.highlightRowState(),highlightColumn:c.highlightColumnState(),highlightBox:c.highlightBoxState(),highlightValue:c.highlightValueState(),highlightPencilMarks:c.highlightPencilMarksState()}))},f=function(){(new y).execute(c.clockState()),(new M).execute(c.autoErrorCheckingState()),(new x).execute(c.autoRemovePencilMarksState()),(new b).execute(c.highlightMultipleSelectionState()),(new L).execute(c.highlightRowState()),(new I).execute(c.highlightColumnState()),(new B).execute(c.highlightBoxState()),(new N).execute(c.highlightValueState()),(new R).execute(c.highlightPencilMarksState())};c.clockState=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==t&&(e=t,h()),e},c.autoErrorCheckingState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(t=e,h()),t},c.autoRemovePencilMarksState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(a=e,h()),a},c.highlightMultipleSelectionState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(n=e,h()),n},c.highlightRowState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(o=e,h()),o},c.highlightColumnState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(i=e,h()),i},c.highlightBoxState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(u=e,h()),u},c.highlightValueState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(r=e,h()),r},c.highlightPencilMarksState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(l=e,h()),l},c.autoCandidateModeState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(s=e),s},c.designModeState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!==e&&(d=e),d}},history:new function(){var e=this,t=[],n=[];e.execute=function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!(e instanceof v))throw new Error("Command needs to have UndoableCommandInterface in its prototype chain");e.execute(),t.push(e),o&&(n=[])},e.undo=function(){if(!(t.length<1)){var e=t.pop();e.undo(),n.push(e)}},e.redo=function(){if(!(n.length<1)){var t=n.pop();e.execute(t,!1)}}},meta:new function(){var e=document.getElementById("meta-app-name").getAttribute("content"),t=document.getElementsByClassName("page-title"),n=document.getElementById("puzzle-title"),o=document.getElementById("puzzle-notes"),i=null;this.init=function(){u()};var u=function(){var u=function(){for(var o=""!==(i=n.value.trim())?"".concat(i," - ").concat(e):e,u=0;u<t.length;u++)t[u].innerText=o};n.addEventListener("change",u),n.addEventListener("keyup",u),n.addEventListener("paste",u);var r=function(){return o.value};o.addEventListener("change",r),o.addEventListener("keyup",r),o.addEventListener("paste",r)}},controls:new function(){var t=this,n=!1,o=!1,i=!1,u={up:["ArrowUp","KeyW"],down:["ArrowDown","KeyS"],left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"]},r=u.up.concat(u.down).concat(u.left).concat(u.right),l=["Delete","Backspace"];t.init=function(){document.addEventListener("mousedown",(function(){return n=!0})),document.addEventListener("mouseup",(function(){return n=!1})),document.addEventListener("keyup",a),document.addEventListener("keydown",a),document.addEventListener("keydown",s),c()};var c=function(){document.addEventListener("click",(function(e){null!==e.target.closest(".click-prevent")&&e.preventDefault()}))};t.cancelKeyboardEvent=function(e){var t=e.target.nodeName.toLowerCase();return["input","textarea"].indexOf(t)>-1};var a=function(t){o=e.usesMacOs?t.metaKey:t.ctrlKey,i=t.shiftKey},s=function(e){t.cancelKeyboardEvent(e)||(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].indexOf(e.code)>-1&&e.preventDefault(),o&&"KeyY"===e.code&&e.preventDefault())};t.mouseIsPressed=function(){return n},t.ctrlKeyIsPressed=function(){return o},t.shiftKeyIsPressed=function(){return i},t.isNumberKey=function(e){return!isNaN(parseInt(e.key,10))},t.isDeleteKey=function(e){return l.indexOf(e.code)>-1},t.isArrowKey=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"any";return"any"===t?r.indexOf(e.code)>-1:u[t]&&u[t].indexOf(e.code)>-1}},inputMode:new n,gridCellHighlighter:new function(){var e=this,t=[];e.addHighlightedCell=function(e){return t.push(e)},e.getHighlightedCells=function(){return t},e.highlightRelatedCells=function(){e.dehighlightAllCells();var t=[];Sudoku.grid.getSelectedCells().forEach((function(e){Sudoku.settings.highlightRowState()&&(t=t.concat(e.getRow().getCellNumbers())),Sudoku.settings.highlightColumnState()&&(t=t.concat(e.getColumn().getCellNumbers())),Sudoku.settings.highlightBoxState()&&(t=t.concat(e.getBox().getCellNumbers()));var n=e.getValue();if(null!==n&&(Sudoku.settings.highlightValueState()||Sudoku.settings.highlightPencilMarksState())){var o=Sudoku.grid.getCells().filter((function(e){return!(!Sudoku.settings.highlightValueState()||!e.hasValue(n))||!(!Sudoku.settings.highlightPencilMarksState()||e.hasValue()||!e.getCornerMarks().has(n)&&!e.getCenterMarks().has(n))})).map((function(e){return e.getCellNumber()}));t=t.concat(o)}})),t.filter((function(e,t,n){return n.indexOf(e)===t})).forEach((function(e){Sudoku.grid.getCell(e).setHighlightedState(!0)}))},e.dehighlightAllCells=function(){e.getHighlightedCells().forEach((function(e){return e.setHighlightedState(!1)})),t=[]}},grid:new function(){var e=this;u(e,r);var t=[],n=[],o=[],i=[],s=null;e.init=function(){d()};var d=function(){for(var i=1;i<10;i++)t.push(new l(i)),n.push(new c(i)),o.push(new a(i));for(var u,r=1;r<82;r++){(u=new f(r)).init(),e.addCell(u);for(var s=0;s<9;s++)-1!==t[s].getCellNumbers().indexOf(r)&&(t[s].addCell(u),u.setRow(t[s])),-1!==n[s].getCellNumbers().indexOf(r)&&(n[s].addCell(u),u.setColumn(n[s])),-1!==o[s].getCellNumbers().indexOf(r)&&(o[s].addCell(u),u.setBox(o[s]))}e.setLastNavigatedCell(null)};e.getSelectedCells=function(){return i},e.addSelectedCell=function(e){i.push(e),Sudoku.gridCellHighlighter.highlightRelatedCells()},e.deselectAllCells=function(){e.getSelectedCells().forEach((function(e){return e.setSelectedState(!1)})),i=[]},e.getLastNavigatedCell=function(){return s},e.setLastNavigatedCell=function(t){s=null===t?e.getCell(41):t},e.checkForErrors=function(){e.removeAllErrors(),t.forEach((function(e){return e.checkDuplicateCellValues()})),n.forEach((function(e){return e.checkDuplicateCellValues()})),o.forEach((function(e){return e.checkDuplicateCellValues()}))},e.removeAllErrors=function(){e.getCells().forEach((function(e){return e.setErrorState(!1)}))},e.determineCandidates=function(){e.getCells().filter((function(e){return null===e.getValue()})).forEach((function(e){var t=[1,2,3,4,5,6,7,8,9].filter((function(t){return!e.getRow().containsValue(t)&&!e.getColumn().containsValue(t)&&!e.getBox().containsValue(t)}));e.getCenterMarks().setDigits(t,!0)}))},e.removeCandidates=function(){e.getCells().forEach((function(e){e.getCenterMarks().setDigits([],!0),e.getCenterMarks().show()}))},e.getState=function(){return"a1t"+Sudoku.clock.getTotalElapsedMs()+e.getCells().map((function(e){return e.getState()})).join("")}},clock:new function(){var e=this,t=0,n=null,o=document.getElementById("elapsed-time"),i=null,u=!1;e.init=function(){e.start()},e.start=e.unpause=function(){n=new Date,u=!1,e.enableTimeInterval()},e.pause=function(){t+=e.getElapsedMsSinceStart(),n=null,u=!0,e.enableTimeInterval(!1)},e.isPaused=function(){return u},e.getElapsedMsSinceStart=function(){return null!==n?(new Date).getTime()-n.getTime():0},e.getTotalElapsedMs=function(){return t+e.getElapsedMsSinceStart()},e.getElapsedTimeString=function(){var t=Math.floor(e.getTotalElapsedMs()/1e3),n=Math.floor(t/3600),o=Math.floor(t%3600/60),i=(t%60).toString(10).padStart(2,"0");return n>0?(o=o.toString().padStart(2,"0"),"".concat(n,":").concat(o,":").concat(i)):"".concat(o,":").concat(i)},e.enableTimeInterval=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?i=setInterval((function(){o.innerText=e.getElapsedTimeString()}),1e3):clearInterval(i)}},modal:new function(){var e=this,t=document.getElementById("modal-backdrop"),n=!1,o=null,i=new w;e.init=function(){u(),r()},e.openState=function(){return n},e.setCurrentModalId=function(e){o=e,n=null!==e;var i=null!==e?"add":"remove";t.classList[i]("show")},e.getCurrentModalId=function(){return o},e.close=function(){return i.execute()};var u=function(){for(var e=document.getElementsByClassName("open-modal"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){new C(e.target.dataset.modalId).execute()}))},r=function(){for(var n=document.getElementsByClassName("close-modal"),o=0;o<n.length;o++)n[o].addEventListener("click",e.close);t.addEventListener("click",(function(n){n.target===t&&e.close()}))}},documentEventHandler:new function(){this.init=function(){e(),t()};var e=function(){var e=new p;document.addEventListener("keydown",(function(t){if(!Sudoku.controls.cancelKeyboardEvent(t)){if(Sudoku.controls.isArrowKey(t)){Sudoku.controls.ctrlKeyIsPressed()||Sudoku.grid.deselectAllCells();var n=Sudoku.grid.getLastNavigatedCell().getCellNumber()-1,o=null;Sudoku.controls.isArrowKey(t,"up")?(n-=9)<0&&(n=81+n):Sudoku.controls.isArrowKey(t,"down")?(n+=9)>80&&(n-=81):Sudoku.controls.isArrowKey(t,"left")?(1+--n)%9==0&&(n+=9):Sudoku.controls.isArrowKey(t,"right")&&++n%9==0&&(n-=9),(o=Sudoku.grid.getCell(n+1)).setSelectedState(!0),Sudoku.grid.setLastNavigatedCell(o)}if(Sudoku.controls.isNumberKey(t)){var i=parseInt(t.key,10);i>0&&Sudoku.history.execute(new S(i))}else Sudoku.controls.isDeleteKey(t)?Sudoku.history.execute(new S(null)):"KeyZ"===t.code?Sudoku.controls.ctrlKeyIsPressed()&&(Sudoku.controls.shiftKeyIsPressed()?Sudoku.history.redo():Sudoku.history.undo()):"KeyY"===t.code?Sudoku.controls.ctrlKeyIsPressed()&&Sudoku.history.redo():"Escape"===t.code&&(!0===Sudoku.modal.openState()?Sudoku.modal.close():e.toggle())}}))},t=function(){document.addEventListener("mousedown",(function(e){null===e.target.closest(".grid-cell")&&(Sudoku.grid.deselectAllCells(),Sudoku.gridCellHighlighter.dehighlightAllCells())}))}},settingsEventHandler:new function(){this.init=function(){e(),t(),n(),o()};var e=function(){document.getElementById("setting-show-clock").addEventListener("change",(function(e){(new y).execute(e.target.checked)}))},t=function(){document.getElementById("setting-auto-error-checking").addEventListener("change",(function(e){(new M).execute(e.target.checked)}))},n=function(){document.getElementById("setting-auto-remove-pencil-marks").addEventListener("change",(function(e){(new x).execute(e.target.checked)}))},o=function(){document.getElementById("setting-highlight-multiple-selection").addEventListener("change",(function(e){(new b).execute(e.target.checked)})),document.getElementById("setting-highlight-row").addEventListener("change",(function(e){(new L).execute(e.target.checked)})),document.getElementById("setting-highlight-column").addEventListener("change",(function(e){(new I).execute(e.target.checked)})),document.getElementById("setting-highlight-box").addEventListener("change",(function(e){(new B).execute(e.target.checked)})),document.getElementById("setting-highlight-value").addEventListener("change",(function(e){(new N).execute(e.target.checked)})),document.getElementById("setting-highlight-pencil-marks").addEventListener("change",(function(e){(new R).execute(e.target.checked)}))}},actionsEventHandler:new function(){this.init=function(){e(),t(),n(),o()};var e=function(){document.getElementById("toggle-pause-button").addEventListener("click",(function(){(new p).toggle()})),document.getElementById("game-resume-button").addEventListener("click",(function(){(new p).execute(!1),Sudoku.modal.close()}))},t=function(){document.getElementById("check-errors").addEventListener("click",Sudoku.grid.checkForErrors)},n=function(){document.getElementById("setting-auto-candidate").addEventListener("change",(function(e){(new A).execute(e.target.checked)}))},o=function(){document.getElementById("toggle-design-mode").addEventListener("change",(function(e){(new D).execute(e.target.checked)}))}}},Sudoku.settings.init(),Sudoku.settingsEventHandler.init(),Sudoku.clock.init(),Sudoku.modal.init(),Sudoku.meta.init(),Sudoku.inputMode.init(),Sudoku.controls.init(),Sudoku.grid.init(),Sudoku.documentEventHandler.init(),Sudoku.actionsEventHandler.init()})()})();
//# sourceMappingURL=app_8f56b7d0326c13941d4c.js.map
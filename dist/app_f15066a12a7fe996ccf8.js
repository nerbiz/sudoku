!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";function r(e){var t=this;t.rowNumber=e,t.gridCells=[],t.addCell=function(e){return t.gridCells.push(e)},t.getCellNumbers=function(){for(var e=[],n=1;n<10;n++)e.push(n+9*(t.rowNumber-1));return e},t.getCellValues=function(){return t.gridCells.map((function(e){return e.getValue()})).filter((function(e){return null!==e}))},t.hasDuplicateCellValues=function(){var e=t.getCellValues();return new Set(e).size!==e.length}}function l(e){var t=this;t.columnNumber=e,t.gridCells=[],t.addCell=function(e){return t.gridCells.push(e)},t.getCellNumbers=function(){var e=[],n=t.columnNumber;e.push(n);for(var r=0;r<8;r++)n+=9,e.push(n);return e},t.getCellValues=function(){return t.gridCells.map((function(e){return e.getValue()})).filter((function(e){return null!==e}))},t.hasDuplicateCellValues=function(){var e=t.getCellValues();return new Set(e).size!==e.length}}function u(e){var t=this;t.boxNumber=e,t.gridCells=[],t.addCell=function(e){return t.gridCells.push(e)},t.getCellNumbers=function(){var e=t.boxNumber-1,n=3*e;n+=18*Math.floor(e/3),n++;for(var r=[],l=0;l<3;l++)r.push(n),r.push(++n),r.push(++n),n+=7;return r},t.getCellValues=function(){return t.gridCells.map((function(e){return e.getValue()})).filter((function(e){return null!==e}))},t.hasDuplicateCellValues=function(){var e=t.getCellValues();return new Set(e).size!==e.length}}function o(e){var t=this;t.cellNumber=e,t.gridRow=null,t.gridColumn=null,t.gridBox=null,t.element=null,t.isPrefilled=!1,t._value=null,t.colorNumber=1,t.cornerMarks=[],t.centerMarks=[],t._isSelected=!1,function(){if(t.element=document.getElementById("grid-cell-".concat(t.cellNumber)),null===t.element)throw new Error("Cell element with ID 'grid-cell-".concat(t.cellNumber,"' not found"));Sudoku.controls.registerCell(t)}(),t.init=function(){t.registerEventHandlers()},t.getValue=function(){return t._value},t.setValue=function(e){t._value=e,t.element.getElementsByClassName("cell-value")[0].innerText=e},t.getIsSelected=function(){return t._isSelected},t.setIsSelected=function(e){e?(t.element.classList.add("selected"),t.getIsSelected()||Sudoku.grid.addSelectedCell(t)):t.element.classList.remove("selected"),t._isSelected=e},t.setRow=function(e){return t.gridRow=e},t.setColumn=function(e){return t.gridColumn=e},t.setBox=function(e){return t.gridBox=e},t.registerEventHandlers=function(){t.element.addEventListener("mousedown",(function(){t.setIsSelected(!0)})),t.element.addEventListener("mouseenter",(function(){Sudoku.controls.mouseDown&&t.setIsSelected(!0)}))},t.getState=function(){return"n"+t.cellNumber+(t.isPrefilled?"p":"")+"v"+t.getValue()+"c"+t.colorNumber+"cr"+t.cornerMarks.join("")+"cn"+t.centerMarks.join("")}}function i(){}n.r(t),i.usesMacOs=function(){return null!==navigator.userAgent.match(/Macintosh/)},window.Sudoku={controls:new function(){var e=this;e.gridCells=[],e.mouseDown=!1,i.usesMacOs()?e.ctrlKeys=["MetaLeft","MetaRight"]:e.ctrlKeys=["ControlLeft","ControlRight"],e.arrowKeys={up:["ArrowUp","KeyW"],down:["ArrowDown","KeyS"],left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"]},e.numberKeys=["Digit1","Numpad1","Digit2","Numpad2","Digit3","Numpad3","Digit4","Numpad4","Digit5","Numpad5","Digit6","Numpad6","Digit7","Numpad7","Digit8","Numpad8","Digit9","Numpad9"],e.init=function(){document.addEventListener("mousedown",(function(){e.mouseDown=!0})),document.addEventListener("mouseup",(function(){e.mouseDown=!1}))},e.registerCell=function(t){return e.gridCells.push(t)}},entryMode:new function(){var e=this;e.MODE_VALUE="value",e.MODE_CORNER="corner",e.MODE_CENTER="center",e.mode=e.MODE_VALUE,e.setMode=function(t){return e.mode=t}},grid:new function(){var e=this;e.gridCells=[],e.gridRows=[],e.gridColumns=[],e.gridBoxes=[],e.selectedCells=[],e.collectCells=function(){for(var t=1;t<10;t++)e.gridRows.push(new r(t)),e.gridColumns.push(new l(t)),e.gridBoxes.push(new u(t));for(var n,i=1;i<82;i++){(n=new o(i)).init(),e.gridCells.push(n);for(var s=0;s<9;s++)-1!==e.gridRows[s].getCellNumbers().indexOf(i)&&(e.gridRows[s].addCell(n),n.setRow(e.gridRows[s])),-1!==e.gridColumns[s].getCellNumbers().indexOf(i)&&(e.gridColumns[s].addCell(n),n.setColumn(e.gridColumns[s])),-1!==e.gridBoxes[s].getCellNumbers().indexOf(i)&&(e.gridBoxes[s].addCell(n),n.setBox(e.gridBoxes[s]))}},e.addSelectedCell=function(t){return e.selectedCells.push(t)},e.getState=function(){return"ver1"+e.gridCells.map((function(e){return e.getState()})).join("")}},timer:new function(){var e=this;e.initialMs=0,e.startMoment=null,e.start=function(){return e.startMoment=new Date},e.pause=function(){e.initialMs+=e.getElapsedMsSinceStart(),e.startMoment=null},e.unpause=function(){return e.start()},e.getElapsedMsSinceStart=function(){return null!==e.startMoment?(new Date).getTime()-e.startMoment.getTime():0},e.getTotalElapsedMs=function(){return e.initialMs+e.getElapsedMsSinceStart()},e.getElapsedTimeString=function(){var t=Math.floor(e.getTotalElapsedMs()/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),l=(t%60).toString(10).padStart(2,"0");return n>0?(r=r.toString().padStart(2,"0"),"".concat(n,":").concat(r,":").concat(l)):"".concat(r,":").concat(l)}}},Sudoku.timer.start(),Sudoku.controls.init(),Sudoku.grid.collectCells()}]);
//# sourceMappingURL=app_f15066a12a7fe996ccf8.js.map
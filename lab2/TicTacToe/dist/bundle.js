/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nexports.Board = void 0;\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/Cell.ts\");\nvar Check_1 = __webpack_require__(/*! ./Check */ \"./src/Check.ts\");\nvar Board = /** @class */ (function () {\n    function Board(size) {\n        var _this = this;\n        this.cells = new Array(size);\n        this.currentSymbol = 1;\n        var table = document.getElementById(\"tictactoe\");\n        var i = 0;\n        for (var r = 0; r < size; r++) {\n            var row = table.insertRow(r);\n            var _loop_1 = function (c) {\n                var cell = row.insertCell(c);\n                cell.className = 'cell';\n                var newCell = new Cell_1.Cell(cell);\n                this_1.cells[i] = newCell;\n                cell.addEventListener(\"click\", function () { return _this.makeMove(newCell); }, false);\n                i++;\n            };\n            var this_1 = this;\n            for (var c = 0; c < size; c++) {\n                _loop_1(c);\n            }\n        }\n        this.current(this.currentSymbol);\n    }\n    Board.prototype.makeMove = function (cell) {\n        if (cell.cellValue == 0) {\n            cell.setCellValue(this.currentSymbol);\n            if (this.currentSymbol == 1) {\n                this.currentSymbol = -1;\n            }\n            else if (this.currentSymbol == -1) {\n                this.currentSymbol = 1;\n            }\n        }\n        new Check_1.Check(this.cells);\n        this.current(this.currentSymbol);\n    };\n    ;\n    Board.prototype.current = function (currentSymbol) {\n        var currentElement = document.getElementById(\"current\");\n        var crossImage = new Image();\n        var circleImage = new Image();\n        crossImage.src = \"../assets/x.png\";\n        circleImage.src = \"../assets/O.png\";\n        crossImage.classList.add(\"img\");\n        circleImage.classList.add(\"img\");\n        currentElement.innerHTML = \"Turn: \";\n        if (currentSymbol == 1) {\n            currentElement.appendChild(crossImage);\n        }\n        else if (currentSymbol == -1) {\n            currentElement.appendChild(circleImage);\n        }\n    };\n    return Board;\n}());\nexports.Board = Board;\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Cell.ts":
/*!*********************!*\
  !*** ./src/Cell.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.Cell = void 0;\nvar Cell = /** @class */ (function () {\n    function Cell(cell) {\n        this.htmlElement = cell;\n        this.cellValue = 0;\n    }\n    Cell.prototype.setCellValue = function (value) {\n        var crossImage = new Image();\n        var circleImage = new Image();\n        crossImage.classList.add(\"img\");\n        circleImage.classList.add(\"img\");\n        crossImage.src = \"../assets/x.png\";\n        circleImage.src = \"../assets/O.png\";\n        if (value == 1 && this.cellValue == 0) {\n            this.cellValue = value;\n            this.htmlElement.appendChild(crossImage);\n        }\n        else if (value == -1 && this.cellValue == 0) {\n            this.cellValue = value;\n            this.htmlElement.appendChild(circleImage);\n        }\n    };\n    return Cell;\n}());\nexports.Cell = Cell;\n\n\n//# sourceURL=webpack:///./src/Cell.ts?");

/***/ }),

/***/ "./src/Check.ts":
/*!**********************!*\
  !*** ./src/Check.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nexports.Check = void 0;\nvar Win_1 = __webpack_require__(/*! ./Win */ \"./src/Win.ts\");\nvar Check = /** @class */ (function () {\n    function Check(cells) {\n        var newCell = new Array();\n        for (var i = 0; i < Math.sqrt(cells.length); i++) {\n            newCell[i] = [];\n        }\n        var c = 0;\n        for (var i = 0; i < Math.sqrt(cells.length); i++) {\n            for (var j = 0; j < Math.sqrt(cells.length); j++) {\n                var el = cells[c];\n                newCell[j][i] = el;\n                c++;\n            }\n        }\n        var pl = 0;\n        for (var i = 0; i < cells.length; i++) {\n            var element = cells[i];\n            if (element.cellValue == 1 || element.cellValue == -1) {\n                pl++;\n            }\n            if (pl == cells.length) {\n                new Win_1.Win(0);\n            }\n        }\n        for (var i = 0; i < newCell.length; i++) {\n            var sX_1 = 0, sO_1 = 0;\n            for (var j = 0; j < newCell.length; j++) {\n                var el = newCell[i][j];\n                if (el.cellValue == -1) {\n                    sO_1++;\n                }\n                else if (el.cellValue == 1) {\n                    sX_1++;\n                }\n                if (sX_1 == newCell.length) {\n                    new Win_1.Win(1);\n                }\n                else if (sO_1 == newCell.length) {\n                    new Win_1.Win(-1);\n                }\n            }\n        }\n        for (var i = 0; i < newCell.length; i++) {\n            var sX_2 = 0, sO_2 = 0;\n            for (var j = 0; j < newCell.length; j++) {\n                var el = newCell[j][i];\n                if (el.cellValue == -1) {\n                    sO_2++;\n                }\n                else if (el.cellValue == 1) {\n                    sX_2++;\n                }\n                if (sX_2 == newCell.length) {\n                    new Win_1.Win(1);\n                }\n                else if (sO_2 == newCell.length) {\n                    new Win_1.Win(-1);\n                }\n            }\n        }\n        var sX = 0, sO = 0;\n        for (var i = 0; i < newCell.length; i++) {\n            var el = newCell[i][i];\n            if (el.cellValue == -1) {\n                sO++;\n            }\n            else if (el.cellValue == 1) {\n                sX++;\n            }\n            if (sX == newCell.length) {\n                new Win_1.Win(1);\n            }\n            else if (sO == newCell.length) {\n                new Win_1.Win(-1);\n            }\n        }\n        var spX = 0, spO = 0;\n        var lp = newCell.length - 1;\n        for (var i = 0; i < newCell.length; i++) {\n            var el = newCell[i][lp];\n            if (el.cellValue == -1) {\n                spO++;\n            }\n            else if (el.cellValue == 1) {\n                spX++;\n            }\n            if (spX == newCell.length) {\n                new Win_1.Win(1);\n            }\n            else if (spO == newCell.length) {\n                new Win_1.Win(-1);\n            }\n            lp--;\n            continue;\n        }\n    }\n    return Check;\n}());\nexports.Check = Check;\n\n\n//# sourceURL=webpack:///./src/Check.ts?");

/***/ }),

/***/ "./src/Win.ts":
/*!********************!*\
  !*** ./src/Win.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.Win = void 0;\nvar Win = /** @class */ (function () {\n    function Win(value) {\n        var win = document.getElementById(\"win\");\n        var winDiv = document.getElementById(\"winner\");\n        winDiv.classList.add('visible');\n        var ximg = new Image();\n        var oimg = document.createElement(\"img\");\n        ximg.src = \"../assets/x.png\";\n        oimg.src = \"../assets/O.png\";\n        ximg.classList.add(\"img\");\n        oimg.classList.add(\"img\");\n        win.innerHTML = \"Wygrał: \";\n        if (value == 1) {\n            this.wygrany = \"Krzyżyk\";\n            win.appendChild(ximg);\n        }\n        else if (value == -1) {\n            this.wygrany = \"Kółko\";\n            win.appendChild(oimg);\n        }\n        else {\n            this.wygrany = \"remis\";\n            win.innerHTML = \"Remis\";\n        }\n        console.log(\"Wygra\\u0142: \" + this.wygrany);\n    }\n    return Win;\n}());\nexports.Win = Win;\n\n\n//# sourceURL=webpack:///./src/Win.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\nvar inputNumber = document.getElementById(\"num\");\nvar tab = document.getElementById('tictactoe');\nvar play = document.getElementById('play');\nvar board;\nvar num;\nplay === null || play === void 0 ? void 0 : play.addEventListener('click', function () {\n    tab.innerHTML = \" \";\n    num = parseInt(inputNumber.value);\n    board = new Board_1.Board(num);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
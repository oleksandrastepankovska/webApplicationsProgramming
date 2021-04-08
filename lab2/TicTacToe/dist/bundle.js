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

eval("\nexports.__esModule = true;\nexports.Board = void 0;\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/Cell.ts\");\nvar Board = /** @class */ (function () {\n    function Board(size) {\n        var _this = this;\n        this.currentSymbol = 1;\n        this.cells = new Array(size);\n        var table = document.getElementById(\"tictactoe\");\n        var i = 0;\n        for (var r = 0; r < size; r++) {\n            var row = table.insertRow(r);\n            var _loop_1 = function (c) {\n                var cell = row.insertCell(c);\n                cell.className = \"cell\";\n                var newCell = new Cell_1.Cell(cell);\n                this_1.cells[i] = newCell;\n                cell.addEventListener(\"click\", function () { return _this.makeMove(newCell); }, false);\n                i++;\n            };\n            var this_1 = this;\n            for (var c = 0; c < size; c++) {\n                _loop_1(c);\n            }\n        }\n    }\n    Board.prototype.makeMove = function (cell) {\n        cell.setCellValue(this.currentSymbol);\n        this.currentSymbol = this.currentSymbol === 1 ? -1 : 1;\n        cell.fillCell(this.currentSymbol);\n    };\n    return Board;\n}());\nexports.Board = Board;\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Cell.ts":
/*!*********************!*\
  !*** ./src/Cell.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.Cell = void 0;\nvar Cell = /** @class */ (function () {\n    function Cell(cell) {\n        this.htmlElement = cell;\n    }\n    Cell.prototype.setCellValue = function (value) {\n        switch (value) {\n            case -1:\n                this.htmlElement.textContent = 'O';\n                break;\n            case 1:\n                this.htmlElement.textContent = 'X';\n                break;\n            default:\n                this.htmlElement.textContent = '';\n                break;\n        }\n    };\n    Cell.prototype.fillCell = function (value) {\n        this.htmlElement.style.backgroundColor = value === 1 ? '#BBBAFF' : '#F0B2D3';\n    };\n    return Cell;\n}());\nexports.Cell = Cell;\n\n\n//# sourceURL=webpack:///./src/Cell.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\nvar board = new Board_1.Board(3);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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
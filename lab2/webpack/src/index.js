"use strict";
exports.__esModule = true;
var Horse_js_1 = require("./Horse.js");
var Snake_js_1 = require("./Snake.js");
var sam = new Snake_js_1.Snake("Sammy the Python");
var tom = new Horse_js_1.Horse("Tommy the Palomino");
sam.move();
tom.move(34);

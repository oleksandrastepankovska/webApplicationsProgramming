/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/guid.ts":
/*!*********************!*\
  !*** ./src/guid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Guid": () => (/* binding */ Guid)
/* harmony export */ });
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}


/***/ }),

/***/ "./src/localstoragestore.ts":
/*!**********************************!*\
  !*** ./src/localstoragestore.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageStore": () => (/* binding */ LocalStorageStore)
/* harmony export */ });
class LocalStorageStore {
    deleteNote(id) {
        let notesValue = localStorage.getItem('notes');
        let oldNotes = JSON.parse(notesValue);
        let newNotes = [];
        oldNotes.forEach((note) => {
            if (note.id !== id)
                newNotes.push(note);
        });
        localStorage.setItem('notes', JSON.stringify(newNotes));
    }
    addNote(note) {
        let notesValues = localStorage.getItem('notes');
        let notes = JSON.parse(notesValues);
        if (!notes)
            notes = [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    getNotes() {
        let notesValues = localStorage.getItem('notes');
        let notes = JSON.parse(notesValues);
        return notes;
    }
}


/***/ }),

/***/ "./src/note.ts":
/*!*********************!*\
  !*** ./src/note.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid */ "./src/guid.ts");

class Note {
    constructor(title, content) {
        this.id = _guid__WEBPACK_IMPORTED_MODULE_0__.Guid.newGuid();
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
    }
}


/***/ }),

/***/ "./src/noteboard.ts":
/*!**************************!*\
  !*** ./src/noteboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteBoard": () => (/* binding */ NoteBoard)
/* harmony export */ });
/* harmony import */ var _localstoragestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstoragestore */ "./src/localstoragestore.ts");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ "./src/note.ts");


class NoteBoard {
    constructor() {
        this.storage = new _localstoragestore__WEBPACK_IMPORTED_MODULE_0__.LocalStorageStore();
        this.addTitleInput();
        this.addContentInput();
        this.addButton();
        this.notesContainer = (document.createElement('div'));
        document.body.append(this.notesContainer);
    }
    addTitleInput() {
        const div = (document.createElement('div'));
        const span = (document.createElement('span'));
        span.textContent = "Title:";
        const titleInput = (document.createElement('input'));
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        div.appendChild(span);
        div.appendChild(titleInput);
        document.body.appendChild(div);
    }
    addContentInput() {
        const div = (document.createElement('div'));
        const span = (document.createElement('span'));
        span.textContent = "Content:";
        const contentInput = (document.createElement('textarea'));
        contentInput.setAttribute('id', 'content');
        div.appendChild(span);
        div.appendChild(contentInput);
        document.body.appendChild(div);
    }
    addButton() {
        const div = (document.createElement('div'));
        const addButton = (document.createElement('button'));
        addButton.textContent = "Add";
        addButton.addEventListener('click', () => {
            let title = document.getElementById('title').value;
            let content = document.getElementById('content').value;
            this.storage.addNote(new _note__WEBPACK_IMPORTED_MODULE_1__.Note(title, content));
            this.refreshList();
        });
        div.appendChild(addButton);
        document.body.appendChild(div);
    }
    refreshList() {
        this.notesContainer.innerHTML = '';
        const notes = this.storage.getNotes();
        if (!notes)
            return;
        notes.forEach((item) => {
            const titleDiv = (document.createElement('div'));
            titleDiv.innerHTML = item.title;
            const contentDiv = (document.createElement('div'));
            contentDiv.innerHTML = item.content;
            const removeBtn = (document.createElement('button'));
            removeBtn.textContent = "Remove";
            removeBtn.setAttribute('data-id', item.id.toString());
            removeBtn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                this.storage.deleteNote(id);
                this.refreshList();
            });
            this.notesContainer.appendChild(titleDiv);
            this.notesContainer.appendChild(contentDiv);
            this.notesContainer.appendChild(removeBtn);
            this.notesContainer.appendChild(document.createElement('hr'));
        }, this);
    }
}


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noteboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noteboard */ "./src/noteboard.ts");

let board = new _noteboard__WEBPACK_IMPORTED_MODULE_0__.NoteBoard();
board.refreshList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3VpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxzdG9yYWdlc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdGVib2FyZC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjhCO0FBQ3ZCO0FBQ1A7QUFDQSxrQkFBa0IsK0NBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSd0Q7QUFDMUI7QUFDdkI7QUFDUDtBQUNBLDJCQUEyQixpRUFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUNBQUk7QUFDekM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7O1VDckVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ3hDLGdCQUFnQixpREFBUztBQUN6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHdWlkIHtcbiAgICBzdGF0aWMgbmV3R3VpZCgpIHtcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVN0b3JlIHtcbiAgICBkZWxldGVOb3RlKGlkKSB7XG4gICAgICAgIGxldCBub3Rlc1ZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG4gICAgICAgIGxldCBvbGROb3RlcyA9IEpTT04ucGFyc2Uobm90ZXNWYWx1ZSk7XG4gICAgICAgIGxldCBuZXdOb3RlcyA9IFtdO1xuICAgICAgICBvbGROb3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm90ZS5pZCAhPT0gaWQpXG4gICAgICAgICAgICAgICAgbmV3Tm90ZXMucHVzaChub3RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KG5ld05vdGVzKSk7XG4gICAgfVxuICAgIGFkZE5vdGUobm90ZSkge1xuICAgICAgICBsZXQgbm90ZXNWYWx1ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKTtcbiAgICAgICAgbGV0IG5vdGVzID0gSlNPTi5wYXJzZShub3Rlc1ZhbHVlcyk7XG4gICAgICAgIGlmICghbm90ZXMpXG4gICAgICAgICAgICBub3RlcyA9IFtdO1xuICAgICAgICBub3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShub3RlcykpO1xuICAgIH1cbiAgICBnZXROb3RlcygpIHtcbiAgICAgICAgbGV0IG5vdGVzVmFsdWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG4gICAgICAgIGxldCBub3RlcyA9IEpTT04ucGFyc2Uobm90ZXNWYWx1ZXMpO1xuICAgICAgICByZXR1cm4gbm90ZXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuL2d1aWRcIjtcbmV4cG9ydCBjbGFzcyBOb3RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLmlkID0gR3VpZC5uZXdHdWlkKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExvY2FsU3RvcmFnZVN0b3JlIH0gZnJvbSBcIi4vbG9jYWxzdG9yYWdlc3RvcmVcIjtcbmltcG9ydCB7IE5vdGUgfSBmcm9tIFwiLi9ub3RlXCI7XG5leHBvcnQgY2xhc3MgTm90ZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZVN0b3JlKCk7XG4gICAgICAgIHRoaXMuYWRkVGl0bGVJbnB1dCgpO1xuICAgICAgICB0aGlzLmFkZENvbnRlbnRJbnB1dCgpO1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbigpO1xuICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5ub3Rlc0NvbnRhaW5lcik7XG4gICAgfVxuICAgIGFkZFRpdGxlSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICAgIGFkZENvbnRlbnRJbnB1dCgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJDb250ZW50OlwiO1xuICAgICAgICBjb25zdCBjb250ZW50SW5wdXQgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSk7XG4gICAgICAgIGNvbnRlbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGVudElucHV0KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgICBhZGRCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XG4gICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmFkZE5vdGUobmV3IE5vdGUodGl0bGUsIGNvbnRlbnQpKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExpc3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICAgIHJlZnJlc2hMaXN0KCkge1xuICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBub3RlcyA9IHRoaXMuc3RvcmFnZS5nZXROb3RlcygpO1xuICAgICAgICBpZiAoIW5vdGVzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBub3Rlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZURpdiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IGl0ZW0uY29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XG4gICAgICAgICAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiO1xuICAgICAgICAgICAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGl0ZW0uaWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZU5vdGUoaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaExpc3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICAgICAgICAgICAgdGhpcy5ub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuICAgICAgICAgICAgdGhpcy5ub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBOb3RlQm9hcmQgfSBmcm9tIFwiLi9ub3RlYm9hcmRcIjtcbmxldCBib2FyZCA9IG5ldyBOb3RlQm9hcmQoKTtcbmJvYXJkLnJlZnJlc2hMaXN0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
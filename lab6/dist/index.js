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
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ "./src/note.ts");
/* harmony import */ var _sessionstoragestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionstoragestore */ "./src/sessionstoragestore.ts");


class NoteBoard {
    constructor() {
        this.storage = new _sessionstoragestore__WEBPACK_IMPORTED_MODULE_1__.SessionStorageStore();
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
            this.storage.addNote(new _note__WEBPACK_IMPORTED_MODULE_0__.Note(title, content));
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


/***/ }),

/***/ "./src/sessionstoragestore.ts":
/*!************************************!*\
  !*** ./src/sessionstoragestore.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionStorageStore": () => (/* binding */ SessionStorageStore)
/* harmony export */ });
class SessionStorageStore {
    deleteNote(id) {
        let notesValue = sessionStorage.getItem('notes');
        let oldNotes = JSON.parse(notesValue);
        let newNotes = [];
        oldNotes.forEach((note) => {
            if (note.id !== id)
                newNotes.push(note);
        });
        sessionStorage.setItem('notes', JSON.stringify(newNotes));
    }
    addNote(note) {
        let notesValues = sessionStorage.getItem('notes');
        let notes = JSON.parse(notesValues);
        if (!notes)
            notes = [];
        notes.push(note);
        sessionStorage.setItem('notes', JSON.stringify(notes));
    }
    getNotes() {
        let notesValues = sessionStorage.getItem('notes');
        let notes = JSON.parse(notesValues);
        return notes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3VpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm90ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm90ZWJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXNzaW9uc3RvcmFnZXN0b3JlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1A4QjtBQUN2QjtBQUNQO0FBQ0Esa0JBQWtCLCtDQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjhCO0FBQzhCO0FBQ3JEO0FBQ1A7QUFDQSwyQkFBMkIscUVBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHVDQUFJO0FBQ3pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOd0M7QUFDeEMsZ0JBQWdCLGlEQUFTO0FBQ3pCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEd1aWQge1xuICAgIHN0YXRpYyBuZXdHdWlkKCkge1xuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4vZ3VpZFwiO1xuZXhwb3J0IGNsYXNzIE5vdGUge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMuaWQgPSBHdWlkLm5ld0d1aWQoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTm90ZSB9IGZyb20gXCIuL25vdGVcIjtcbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlU3RvcmUgfSBmcm9tIFwiLi9zZXNzaW9uc3RvcmFnZXN0b3JlXCI7XG5leHBvcnQgY2xhc3MgTm90ZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IFNlc3Npb25TdG9yYWdlU3RvcmUoKTtcbiAgICAgICAgdGhpcy5hZGRUaXRsZUlucHV0KCk7XG4gICAgICAgIHRoaXMuYWRkQ29udGVudElucHV0KCk7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uKCk7XG4gICAgICAgIHRoaXMubm90ZXNDb250YWluZXIgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLm5vdGVzQ29udGFpbmVyKTtcbiAgICB9XG4gICAgYWRkVGl0bGVJbnB1dCgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgYWRkQ29udGVudElucHV0KCkge1xuICAgICAgICBjb25zdCBkaXYgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBjb25zdCBzcGFuID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIkNvbnRlbnQ6XCI7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRJbnB1dCA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcbiAgICAgICAgY29udGVudElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250ZW50SW5wdXQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICAgIGFkZEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKTtcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuYWRkTm90ZShuZXcgTm90ZSh0aXRsZSwgY29udGVudCkpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTGlzdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgcmVmcmVzaExpc3QoKSB7XG4gICAgICAgIHRoaXMubm90ZXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gdGhpcy5zdG9yYWdlLmdldE5vdGVzKCk7XG4gICAgICAgIGlmICghbm90ZXMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG5vdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gaXRlbS5jb250ZW50O1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gICAgICAgICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaXRlbS5pZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlTm90ZShpZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoTGlzdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICAgICAgICAgIHRoaXMubm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2Vzc2lvblN0b3JhZ2VTdG9yZSB7XG4gICAgZGVsZXRlTm90ZShpZCkge1xuICAgICAgICBsZXQgbm90ZXNWYWx1ZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG4gICAgICAgIGxldCBvbGROb3RlcyA9IEpTT04ucGFyc2Uobm90ZXNWYWx1ZSk7XG4gICAgICAgIGxldCBuZXdOb3RlcyA9IFtdO1xuICAgICAgICBvbGROb3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm90ZS5pZCAhPT0gaWQpXG4gICAgICAgICAgICAgICAgbmV3Tm90ZXMucHVzaChub3RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkobmV3Tm90ZXMpKTtcbiAgICB9XG4gICAgYWRkTm90ZShub3RlKSB7XG4gICAgICAgIGxldCBub3Rlc1ZhbHVlcyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG4gICAgICAgIGxldCBub3RlcyA9IEpTT04ucGFyc2Uobm90ZXNWYWx1ZXMpO1xuICAgICAgICBpZiAoIW5vdGVzKVxuICAgICAgICAgICAgbm90ZXMgPSBbXTtcbiAgICAgICAgbm90ZXMucHVzaChub3RlKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShub3RlcykpO1xuICAgIH1cbiAgICBnZXROb3RlcygpIHtcbiAgICAgICAgbGV0IG5vdGVzVmFsdWVzID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKTtcbiAgICAgICAgbGV0IG5vdGVzID0gSlNPTi5wYXJzZShub3Rlc1ZhbHVlcyk7XG4gICAgICAgIHJldHVybiBub3RlcztcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IE5vdGVCb2FyZCB9IGZyb20gXCIuL25vdGVib2FyZFwiO1xubGV0IGJvYXJkID0gbmV3IE5vdGVCb2FyZCgpO1xuYm9hcmQucmVmcmVzaExpc3QoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
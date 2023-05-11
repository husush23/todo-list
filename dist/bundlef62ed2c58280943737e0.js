/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> body {\n|   display: flex;\n|   align-items: center;");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// Vars
var form = document.querySelector('#todoform');
var todoInput = document.querySelector('#newtodo');
var todosListEl = document.querySelector('#todos-list');
var todos = JSON.parse(localStorage.getItem('todos')) || [];
var editTodoId = -1;
var todoId = -100;

// functions
function renderTodo() {
  // Clear render
  todosListEl.innerHTML = '';
  // render it
  todos.forEach(function (todo, index) {
    todosListEl.innerHTML += "\n    <div class=\"todo\" id=\"".concat(index, "\">\n    <i class=\"\"></i>\n    <i class=\"bi ").concat(todo.checked ? 'bi-check-circle-fill' : 'bi-circle', " \"\"\n    data-action=\"check\"\n    ></i>\n    <p class=\"paragraph ").concat(todo.checked ? 'line' : '', "\" data-action=\"check\">").concat(todo.value, "</p>\n    <i class=\"bi bi-pencil-square\" data-action=\"edit\"></i>\n    <i class=\"bi bi-trash\" data-action=\"delete\"></i>\n  </div>\n    ");
  });
}

// save
function saveTodos() {
  var todoValue = todoInput.value;

  // check if empty
  var isEmpty = todoValue === '';

  // Check for duplicate todos
  var isDuplicate = todos.some(function (todo) {
    return todo.value.toLowerCase() === todoValue.toLowerCase();
  });
  if (isEmpty) {
    alert('Todo is empty');
  } else if (isDuplicate) {
    alert('Todo already exist');
  } else {
    if (editTodoId >= 0) {
      todos = todos.map(function (todo, index) {
        return _objectSpread(_objectSpread({}, todo), {}, {
          value: index === editTodoId ? todoValue : todo.value
        });
      });
      editTodoId = -1;
    } else {
      todos.push({
        value: todoValue,
        checked: false
      });
    }
    todoInput.value = '';
  }
}

// Check function
function checkTodo(todoId) {
  todos = todos.map(function (todo, index) {
    return _objectSpread(_objectSpread({}, todo), {}, {
      checked: index === todoId ? !todo.checked : todo.checked
    });
  });
  renderTodo();
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Edit todo
function editTodo(todoId) {
  todoInput.value = todos[todoId].value;
  editTodoId = todoId;
}

// Delete todo
function deleteTodo(todoId) {
  todos = todos.filter(function (todo, index) {
    return index !== todoId;
  });
  editTodoId = -1;

  // Re-render the todos
  renderTodo();
  localStorage.setItem('todos', JSON.stringify(todos));
}

// submit form
form.addEventListener('submit', function (event) {
  event.preventDefault();
  saveTodos();
  renderTodo();
  localStorage.setItem('todos', JSON.stringify(todos));
});
renderTodo();

// Events
todosListEl.addEventListener('click', function (e) {
  var target = e.target;
  var parentElement = target.parentNode;
  if (parentElement.className !== 'todo') return;
  var todo = parentElement;
  todoId = Number(todo.id);

  // Target action
  var action = target.dataset.action;
  if (action === 'check') checkTodo(todoId);
  if (action === 'edit') editTodo(todoId);
  if (action === 'delete') deleteTodo(todoId);
});
function clearAll() {
  todos = todos.filter(function (obj) {
    return obj.checked !== true;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodo();
}
document.querySelector('.clear').addEventListener('click', clearAll);
})();

/******/ })()
;
//# sourceMappingURL=bundlef62ed2c58280943737e0.js.map
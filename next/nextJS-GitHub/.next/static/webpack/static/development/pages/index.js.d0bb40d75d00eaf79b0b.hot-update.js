webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var initialState = {
  count: 0
};
var ADD = 'ADD';

function countReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action) {
    case ADD:
      return {
        count: state.count + 1
      };

    default:
      return state;
  }
} // const AllReducer = combineReducers({
//   counter: countReducer
// })
// function userReducer(srare = )
// {counter: initialState}


var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(countReducer, initialState); // console.log(store.getState())

store.dispatch({
  type: 'ADD'
}); // console.log(store.getState())

store.subscribe(function () {
  console.log(store.getState());
}); // export default AllReducer

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=index.js.d0bb40d75d00eaf79b0b.hot-update.js.map
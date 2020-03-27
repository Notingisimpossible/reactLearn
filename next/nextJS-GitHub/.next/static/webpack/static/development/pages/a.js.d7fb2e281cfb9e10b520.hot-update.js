webpackHotUpdate("static\\development\\pages\\a.js",{

/***/ "./pages/a.js":
/*!********************!*\
  !*** ./pages/a.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var A = function A(_ref) {
  var router = _ref.router;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#aaa"
  }, __jsx("a", null, router.query.id, name));
};

A.getInitialProps = function _callee() {
  var promise;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve({
                name: 'wn'
              });
            }, 2000);
          });
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(promise);

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(A));

/***/ })

})
//# sourceMappingURL=a.js.d7fb2e281cfb9e10b520.hot-update.js.map
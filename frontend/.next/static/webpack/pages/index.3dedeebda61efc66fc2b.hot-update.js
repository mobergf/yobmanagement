webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_applicants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/applicants */ "./components/applicants.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./components/seo.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
var _this = undefined,
    _jsxFileName = "C:\\JobappNext\\my-project\\frontend\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Home = function Home(_ref) {
  _s();

  var homepage = _ref.homepage,
      applicants = _ref.applicants,
      stages = _ref.stages;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      applicantList = _useState[0],
      setApplicantList = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setApplicantList(applicants);
  }, [applicants]);
  console.log(applicantList);

  var handleSearch = function handleSearch(e) {
    console.log(e.target.value);
    var bob = Object(_lib_api__WEBPACK_IMPORTED_MODULE_4__["fetchAPI"])("/applicants?name_contains=".concat(e.target.value));
    setApplicantList(bob);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: stages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    seo: homepage.seo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "uk-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "uk-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, homepage.hero.title), __jsx("input", {
    className: "uk-input",
    placeholder: "S\xF6k p\xE5 namn",
    onChange: function onChange(e) {
      return handleSearch(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_components_applicants__WEBPACK_IMPORTED_MODULE_1__["default"], {
    applicants: applicantList,
    showStep: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))));
};

_s(Home, "ZyMaIevujSPCY3fistmDcJk9ca0=");

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImhvbWVwYWdlIiwiYXBwbGljYW50cyIsInN0YWdlcyIsInVzZVN0YXRlIiwiYXBwbGljYW50TGlzdCIsInNldEFwcGxpY2FudExpc3QiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYm9iIiwiZmV0Y2hBUEkiLCJzZW8iLCJoZXJvIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFzQztBQUFBOztBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSxNQUF6QkMsVUFBeUIsUUFBekJBLFVBQXlCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQzFDQyxhQUQwQztBQUFBLE1BQzNCQyxnQkFEMkI7O0FBRWpEQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsb0JBQWdCLENBQUNKLFVBQUQsQ0FBaEI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsVUFBRCxDQUZNLENBQVQ7QUFHQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlKLGFBQVo7O0FBQ0EsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHQyx5REFBUSxxQ0FBOEJKLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF2QyxFQUFwQjtBQUNBUCxvQkFBZ0IsQ0FBQ1EsR0FBRCxDQUFoQjtBQUNELEdBSkQ7O0FBTUEsU0FDRSxNQUFDLDBEQUFEO0FBQVEsY0FBVSxFQUFFWCxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFLLE9BQUcsRUFBRUYsUUFBUSxDQUFDZSxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtmLFFBQVEsQ0FBQ2dCLElBQVQsQ0FBY0MsS0FBbkIsQ0FERixFQUVFO0FBQ0UsYUFBUyxFQUFDLFVBRFo7QUFFRSxlQUFXLEVBQUMsbUJBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNQLENBQUQ7QUFBQSxhQUFPRCxZQUFZLENBQUNDLENBQUQsQ0FBbkI7QUFBQSxLQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU9FLE1BQUMsOERBQUQ7QUFBWSxjQUFVLEVBQUVOLGFBQXhCO0FBQXVDLFlBQVEsTUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREYsQ0FGRixDQURGO0FBZ0JELENBNUJEOztHQUFNTCxJOztLQUFBQSxJOztBQTRDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2RlZGVlYmRhNjFlZmM2NmZjMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwbGljYW50cyBmcm9tIFwiLi4vY29tcG9uZW50cy9hcHBsaWNhbnRzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZW9cIjtcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuY29uc3QgSG9tZSA9ICh7IGhvbWVwYWdlLCBhcHBsaWNhbnRzLCBzdGFnZXMgfSkgPT4ge1xuICBjb25zdCBbYXBwbGljYW50TGlzdCwgc2V0QXBwbGljYW50TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QXBwbGljYW50TGlzdChhcHBsaWNhbnRzKTtcbiAgfSwgW2FwcGxpY2FudHNdKTtcbiAgY29uc29sZS5sb2coYXBwbGljYW50TGlzdCk7XG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IGJvYiA9IGZldGNoQVBJKGAvYXBwbGljYW50cz9uYW1lX2NvbnRhaW5zPSR7ZS50YXJnZXQudmFsdWV9YCk7XG4gICAgc2V0QXBwbGljYW50TGlzdChib2IpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtzdGFnZXN9PlxuICAgICAgPFNlbyBzZW89e2hvbWVwYWdlLnNlb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMT57aG9tZXBhZ2UuaGVyby50aXRsZX08L2gxPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTw7ZrIHDDpSBuYW1uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2VhcmNoKGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFwcGxpY2FudHMgYXBwbGljYW50cz17YXBwbGljYW50TGlzdH0gc2hvd1N0ZXAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbYXBwbGljYW50cywgc3RhZ2VzLCBob21lcGFnZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvYXBwbGljYW50c1wiKSxcbiAgICBmZXRjaEFQSShcIi9zdGFnZXNcIiksXG4gICAgZmV0Y2hBUEkoXCIvaG9tZXBhZ2VcIiksXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYXBwbGljYW50cywgc3RhZ2VzLCBob21lcGFnZSB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9
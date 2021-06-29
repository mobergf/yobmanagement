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

  var handleSearch = function handleSearch(e) {
    console.log(e);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: stages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    seo: homepage.seo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "uk-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "uk-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(_components_applicants__WEBPACK_IMPORTED_MODULE_1__["default"], {
    applicants: applicantList,
    showStep: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImhvbWVwYWdlIiwiYXBwbGljYW50cyIsInN0YWdlcyIsInVzZVN0YXRlIiwiYXBwbGljYW50TGlzdCIsInNldEFwcGxpY2FudExpc3QiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTZWFyY2giLCJlIiwiY29uc29sZSIsImxvZyIsInNlbyIsImhlcm8iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXNDO0FBQUE7O0FBQUEsTUFBbkNDLFFBQW1DLFFBQW5DQSxRQUFtQztBQUFBLE1BQXpCQyxVQUF5QixRQUF6QkEsVUFBeUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsRUFBRCxDQUREO0FBQUEsTUFDMUNDLGFBRDBDO0FBQUEsTUFDM0JDLGdCQUQyQjs7QUFFakRDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxvQkFBZ0IsQ0FBQ0osVUFBRCxDQUFoQjtBQUNELEdBRlEsRUFFTixDQUFDQSxVQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxjQUFVLEVBQUVOLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUssT0FBRyxFQUFFRixRQUFRLENBQUNXLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1gsUUFBUSxDQUFDWSxJQUFULENBQWNDLEtBQW5CLENBREYsRUFFRTtBQUNFLGFBQVMsRUFBQyxVQURaO0FBRUUsZUFBVyxFQUFDLG1CQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDTCxDQUFEO0FBQUEsYUFBT0QsWUFBWSxDQUFDQyxDQUFELENBQW5CO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFPRSxNQUFDLDhEQUFEO0FBQVksY0FBVSxFQUFFSixhQUF4QjtBQUF1QyxZQUFRLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLENBRkYsQ0FERjtBQWdCRCxDQTFCRDs7R0FBTUwsSTs7S0FBQUEsSTs7QUEwQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFkMTUwMzYxZWQ2YTU1MjA2MDM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcGxpY2FudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXBwbGljYW50c1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VvXCI7XG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5cbmNvbnN0IEhvbWUgPSAoeyBob21lcGFnZSwgYXBwbGljYW50cywgc3RhZ2VzIH0pID0+IHtcbiAgY29uc3QgW2FwcGxpY2FudExpc3QsIHNldEFwcGxpY2FudExpc3RdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFwcGxpY2FudExpc3QoYXBwbGljYW50cyk7XG4gIH0sIFthcHBsaWNhbnRzXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17c3RhZ2VzfT5cbiAgICAgIDxTZW8gc2VvPXtob21lcGFnZS5zZW99IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+e2hvbWVwYWdlLmhlcm8udGl0bGV9PC9oMT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWlucHV0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU8O2ayBww6UgbmFtblwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaChlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBcHBsaWNhbnRzIGFwcGxpY2FudHM9e2FwcGxpY2FudExpc3R9IHNob3dTdGVwIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW2FwcGxpY2FudHMsIHN0YWdlcywgaG9tZXBhZ2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL2FwcGxpY2FudHNcIiksXG4gICAgZmV0Y2hBUEkoXCIvc3RhZ2VzXCIpLFxuICAgIGZldGNoQVBJKFwiL2hvbWVwYWdlXCIpLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFwcGxpY2FudHMsIHN0YWdlcywgaG9tZXBhZ2UgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
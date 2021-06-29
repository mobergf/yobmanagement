webpackHotUpdate_N_E("pages/applicants/[slug]",{

/***/ "./pages/applicants/[slug].js":
/*!************************************!*\
  !*** ./pages/applicants/[slug].js ***!
  \************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/image */ "./components/image.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ "./components/seo.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/media */ "./lib/media.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
var _this = undefined,
    _jsxFileName = "C:\\JobappNext\\my-project\\frontend\\pages\\applicants\\[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Applicant = function Applicant(_ref) {
  var applicants = _ref.applicants,
      allStages = _ref.allStages;
  var address = applicants.address,
      age = applicants.age,
      name = applicants.name,
      email = applicants.email,
      stage = applicants.stage,
      image = applicants.image,
      description = applicants.description;

  var updateStage = function updateStage(item) {
    var newBob = applicants;
    newBob.stage = item;
    Object(_lib_api__WEBPACK_IMPORTED_MODULE_7__["updateAPI"])("/applicants/".concat(applicants.id), newBob);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: allStages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "uk-container uk-margin-small-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: " uk-flex uk-flex-start uk-flex-between uk-flex-top uk-flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h1", {
    id: "category",
    className: "uk-text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, name), __jsx(_components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: image,
    style: {
      position: "static",
      borderRadius: "50%",
      height: 120,
      width: 120,
      objectFit: "cover"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "uk-flex uk-flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, allStages.map(function (item, index) {
    return __jsx("button", {
      className: "applicant-button",
      key: index,
      onClick: function onClick() {
        return updateStage(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, item.name);
  })), __jsx("hr", {
    className: "uk-divider-small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "applicant-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Adress: ", __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, address)), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "\xC5lder: ", __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 20
    }
  }, age, " \xE5r")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Email: ", __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 20
    }
  }, email))), __jsx("hr", {
    className: "uk-divider-small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: description,
    escapeHtml: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })));
};

_c = Applicant;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Applicant);

var _c;

$RefreshReg$(_c, "Applicant");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYW50cy9bc2x1Z10uanMiXSwibmFtZXMiOlsiQXBwbGljYW50IiwiYXBwbGljYW50cyIsImFsbFN0YWdlcyIsImFkZHJlc3MiLCJhZ2UiLCJuYW1lIiwiZW1haWwiLCJzdGFnZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVTdGFnZSIsIml0ZW0iLCJuZXdCb2IiLCJ1cGRhdGVBUEkiLCJpZCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQStCO0FBQUEsTUFBNUJDLFVBQTRCLFFBQTVCQSxVQUE0QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFBQSxNQUN2Q0MsT0FEdUMsR0FDa0JGLFVBRGxCLENBQ3ZDRSxPQUR1QztBQUFBLE1BQzlCQyxHQUQ4QixHQUNrQkgsVUFEbEIsQ0FDOUJHLEdBRDhCO0FBQUEsTUFDekJDLElBRHlCLEdBQ2tCSixVQURsQixDQUN6QkksSUFEeUI7QUFBQSxNQUNuQkMsS0FEbUIsR0FDa0JMLFVBRGxCLENBQ25CSyxLQURtQjtBQUFBLE1BQ1pDLEtBRFksR0FDa0JOLFVBRGxCLENBQ1pNLEtBRFk7QUFBQSxNQUNMQyxLQURLLEdBQ2tCUCxVQURsQixDQUNMTyxLQURLO0FBQUEsTUFDRUMsV0FERixHQUNrQlIsVUFEbEIsQ0FDRVEsV0FERjs7QUFHL0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzVCLFFBQU1DLE1BQU0sR0FBR1gsVUFBZjtBQUNBVyxVQUFNLENBQUNMLEtBQVAsR0FBZUksSUFBZjtBQUNBRSw4REFBUyx1QkFBZ0JaLFVBQVUsQ0FBQ2EsRUFBM0IsR0FBaUNGLE1BQWpDLENBQVQ7QUFDRCxHQUpEOztBQU1BLFNBQ0UsTUFBQywwREFBRDtBQUFRLGNBQVUsRUFBRVYsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxNQUFFLEVBQUMsVUFBUDtBQUFrQixhQUFTLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csSUFESCxDQURGLEVBSUUsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBRUcsS0FEVDtBQUVFLFNBQUssRUFBRTtBQUNMTyxjQUFRLEVBQUUsUUFETDtBQUVMQyxrQkFBWSxFQUFFLEtBRlQ7QUFHTEMsWUFBTSxFQUFFLEdBSEg7QUFJTEMsV0FBSyxFQUFFLEdBSkY7QUFLTEMsZUFBUyxFQUFFO0FBTE4sS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixFQWdCRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dqQixTQUFTLENBQUNrQixHQUFWLENBQWMsVUFBQ1QsSUFBRCxFQUFPVSxLQUFQLEVBQWlCO0FBQzlCLFdBQ0U7QUFDRSxlQUFTLEVBQUMsa0JBRFo7QUFFRSxTQUFHLEVBQUVBLEtBRlA7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNWCxXQUFXLENBQUNDLElBQUQsQ0FBakI7QUFBQSxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR0EsSUFBSSxDQUFDTixJQUxSLENBREY7QUFTRCxHQVZBLENBREgsQ0FoQkYsRUE4QkU7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixFQStCRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlGLE9BQUosQ0FEVixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLEdBQUosV0FEVCxDQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlFLEtBQUosQ0FEVCxDQVBGLENBL0JGLEVBMENFO0FBQUksYUFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQ0YsRUEyQ0UsTUFBQyxxREFBRDtBQUFlLFVBQU0sRUFBRUcsV0FBdkI7QUFBb0MsY0FBVSxFQUFFLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ0YsQ0FIRixDQURGO0FBbURELENBNUREOztLQUFNVCxTOztBQW9GU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXBwbGljYW50cy9bc2x1Z10uOGZhNGY3NjViOTBkYmZjNGVhYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW1hZ2VcIjtcclxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIjtcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vLi4vbGliL21lZGlhXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcblxyXG5jb25zdCBBcHBsaWNhbnQgPSAoeyBhcHBsaWNhbnRzLCBhbGxTdGFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgYWRkcmVzcywgYWdlLCBuYW1lLCBlbWFpbCwgc3RhZ2UsIGltYWdlLCBkZXNjcmlwdGlvbiB9ID0gYXBwbGljYW50cztcclxuXHJcbiAgY29uc3QgdXBkYXRlU3RhZ2UgPSAoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbmV3Qm9iID0gYXBwbGljYW50cztcclxuICAgIG5ld0JvYi5zdGFnZSA9IGl0ZW07XHJcbiAgICB1cGRhdGVBUEkoYC9hcHBsaWNhbnRzLyR7YXBwbGljYW50cy5pZH1gLCBuZXdCb2IpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2FsbFN0YWdlc30+XHJcbiAgICAgIHsvKiBVdMO2a2FkIGluZm8gb20gdmFyamUgYXBwbGljYW50ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXIgdWstbWFyZ2luLXNtYWxsLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHVrLWZsZXggdWstZmxleC1zdGFydCB1ay1mbGV4LWJldHdlZW4gdWstZmxleC10b3AgdWstZmxleC13cmFwXCI+XHJcbiAgICAgICAgICA8aDEgaWQ9XCJjYXRlZ29yeVwiIGNsYXNzTmFtZT1cInVrLXRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwic3RhdGljXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMTIwLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZmxleCB1ay1mbGV4LXdyYXBcIj5cclxuICAgICAgICAgIHthbGxTdGFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGxpY2FudC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVN0YWdlKGl0ZW0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cInVrLWRpdmlkZXItc21hbGxcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwbGljYW50LWluZm9cIj5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgQWRyZXNzOiA8cD57YWRkcmVzc308L3A+XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICDDhWxkZXI6IDxwPnthZ2V9IMOlcjwvcD5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIEVtYWlsOiA8cD57ZW1haWx9PC9wPlxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstZGl2aWRlci1zbWFsbFwiIC8+XHJcbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtkZXNjcmlwdGlvbn0gZXNjYXBlSHRtbD17ZmFsc2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBhcHBsaWNhbnRzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXBwbGljYW50c1wiKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IGFwcGxpY2FudHMubWFwKChhcHBsaWNhbnRzKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOiBhcHBsaWNhbnRzLnNsdWcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBhcHBsaWNhbnRzID0gYXdhaXQgZmV0Y2hBUEkoYC9hcHBsaWNhbnRzP3NsdWc9JHtwYXJhbXMuc2x1Z31gKTtcclxuICBjb25zdCBhbGxTdGFnZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9zdGFnZXNcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhbGxTdGFnZXM6IGFsbFN0YWdlcywgYXBwbGljYW50czogYXBwbGljYW50c1swXSB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
    className: "uk-flex uk-flex-wrap uk-margin-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, allStages.map(function (item, index) {
    return __jsx("button", {
      className: item.id === stage.id ? "applicant-button applicant-button--selected" : "applicant-button",
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
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "applicant-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Adress: ", __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, address)), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "\xC5lder: ", __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 20
    }
  }, age, " \xE5r")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Email: ", __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 20
    }
  }, email))), __jsx("hr", {
    className: "uk-divider-small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: description,
    escapeHtml: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwbGljYW50cy9bc2x1Z10uanMiXSwibmFtZXMiOlsiQXBwbGljYW50IiwiYXBwbGljYW50cyIsImFsbFN0YWdlcyIsImFkZHJlc3MiLCJhZ2UiLCJuYW1lIiwiZW1haWwiLCJzdGFnZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJ1cGRhdGVTdGFnZSIsIml0ZW0iLCJuZXdCb2IiLCJ1cGRhdGVBUEkiLCJpZCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQStCO0FBQUEsTUFBNUJDLFVBQTRCLFFBQTVCQSxVQUE0QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFBQSxNQUN2Q0MsT0FEdUMsR0FDa0JGLFVBRGxCLENBQ3ZDRSxPQUR1QztBQUFBLE1BQzlCQyxHQUQ4QixHQUNrQkgsVUFEbEIsQ0FDOUJHLEdBRDhCO0FBQUEsTUFDekJDLElBRHlCLEdBQ2tCSixVQURsQixDQUN6QkksSUFEeUI7QUFBQSxNQUNuQkMsS0FEbUIsR0FDa0JMLFVBRGxCLENBQ25CSyxLQURtQjtBQUFBLE1BQ1pDLEtBRFksR0FDa0JOLFVBRGxCLENBQ1pNLEtBRFk7QUFBQSxNQUNMQyxLQURLLEdBQ2tCUCxVQURsQixDQUNMTyxLQURLO0FBQUEsTUFDRUMsV0FERixHQUNrQlIsVUFEbEIsQ0FDRVEsV0FERjs7QUFHL0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzVCLFFBQU1DLE1BQU0sR0FBR1gsVUFBZjtBQUNBVyxVQUFNLENBQUNMLEtBQVAsR0FBZUksSUFBZjtBQUNBRSw4REFBUyx1QkFBZ0JaLFVBQVUsQ0FBQ2EsRUFBM0IsR0FBaUNGLE1BQWpDLENBQVQ7QUFDRCxHQUpEOztBQU1BLFNBQ0UsTUFBQywwREFBRDtBQUFRLGNBQVUsRUFBRVYsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxNQUFFLEVBQUMsVUFBUDtBQUFrQixhQUFTLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csSUFESCxDQURGLEVBSUUsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBRUcsS0FEVDtBQUVFLFNBQUssRUFBRTtBQUNMTyxjQUFRLEVBQUUsUUFETDtBQUVMQyxrQkFBWSxFQUFFLEtBRlQ7QUFHTEMsWUFBTSxFQUFFLEdBSEg7QUFJTEMsV0FBSyxFQUFFLEdBSkY7QUFLTEMsZUFBUyxFQUFFO0FBTE4sS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixFQWdCRTtBQUFLLGFBQVMsRUFBQyx1Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dqQixTQUFTLENBQUNrQixHQUFWLENBQWMsVUFBQ1QsSUFBRCxFQUFPVSxLQUFQLEVBQWlCO0FBQzlCLFdBQ0U7QUFDRSxlQUFTLEVBQ1BWLElBQUksQ0FBQ0csRUFBTCxLQUFZUCxLQUFLLENBQUNPLEVBQWxCLEdBQ0ksNkNBREosR0FFSSxrQkFKUjtBQU1FLFNBQUcsRUFBRU8sS0FOUDtBQU9FLGFBQU8sRUFBRTtBQUFBLGVBQU1YLFdBQVcsQ0FBQ0MsSUFBRCxDQUFqQjtBQUFBLE9BUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNHQSxJQUFJLENBQUNOLElBVFIsQ0FERjtBQWFELEdBZEEsQ0FESCxDQWhCRixFQWtDRTtBQUFJLGFBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENGLEVBbUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUYsT0FBSixDQURWLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsR0FBSixXQURULENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUUsS0FBSixDQURULENBUEYsQ0FuQ0YsRUE4Q0U7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlDRixFQStDRSxNQUFDLHFEQUFEO0FBQWUsVUFBTSxFQUFFRyxXQUF2QjtBQUFvQyxjQUFVLEVBQUUsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9DRixDQUhGLENBREY7QUF1REQsQ0FoRUQ7O0tBQU1ULFM7O0FBd0ZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHBsaWNhbnRzL1tzbHVnXS44ODUzYmQ2NzljM2EzZjZkMDhiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xyXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbWFnZVwiO1xyXG5pbXBvcnQgU2VvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nlb1wiO1xyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi8uLi9saWIvbWVkaWFcIjtcclxuaW1wb3J0IHsgdXBkYXRlQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuXHJcbmNvbnN0IEFwcGxpY2FudCA9ICh7IGFwcGxpY2FudHMsIGFsbFN0YWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBhZGRyZXNzLCBhZ2UsIG5hbWUsIGVtYWlsLCBzdGFnZSwgaW1hZ2UsIGRlc2NyaXB0aW9uIH0gPSBhcHBsaWNhbnRzO1xyXG5cclxuICBjb25zdCB1cGRhdGVTdGFnZSA9IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBuZXdCb2IgPSBhcHBsaWNhbnRzO1xyXG4gICAgbmV3Qm9iLnN0YWdlID0gaXRlbTtcclxuICAgIHVwZGF0ZUFQSShgL2FwcGxpY2FudHMvJHthcHBsaWNhbnRzLmlkfWAsIG5ld0JvYik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17YWxsU3RhZ2VzfT5cclxuICAgICAgey8qIFV0w7ZrYWQgaW5mbyBvbSB2YXJqZSBhcHBsaWNhbnQgKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lciB1ay1tYXJnaW4tc21hbGwtdG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdWstZmxleCB1ay1mbGV4LXN0YXJ0IHVrLWZsZXgtYmV0d2VlbiB1ay1mbGV4LXRvcCB1ay1mbGV4LXdyYXBcIj5cclxuICAgICAgICAgIDxoMSBpZD1cImNhdGVnb3J5XCIgY2xhc3NOYW1lPVwidWstdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMjAsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1mbGV4IHVrLWZsZXgtd3JhcCB1ay1tYXJnaW4tbWVkaXVtXCI+XHJcbiAgICAgICAgICB7YWxsU3RhZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLmlkID09PSBzdGFnZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJhcHBsaWNhbnQtYnV0dG9uIGFwcGxpY2FudC1idXR0b24tLXNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiYXBwbGljYW50LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlU3RhZ2UoaXRlbSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstZGl2aWRlci1zbWFsbFwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBsaWNhbnQtaW5mb1wiPlxyXG4gICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICBBZHJlc3M6IDxwPnthZGRyZXNzfTwvcD5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIMOFbGRlcjogPHA+e2FnZX0gw6VyPC9wPlxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgRW1haWw6IDxwPntlbWFpbH08L3A+XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJ1ay1kaXZpZGVyLXNtYWxsXCIgLz5cclxuICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2Rlc2NyaXB0aW9ufSBlc2NhcGVIdG1sPXtmYWxzZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGFwcGxpY2FudHMgPSBhd2FpdCBmZXRjaEFQSShcIi9hcHBsaWNhbnRzXCIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogYXBwbGljYW50cy5tYXAoKGFwcGxpY2FudHMpID0+ICh7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHNsdWc6IGFwcGxpY2FudHMuc2x1ZyxcclxuICAgICAgfSxcclxuICAgIH0pKSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGFwcGxpY2FudHMgPSBhd2FpdCBmZXRjaEFQSShgL2FwcGxpY2FudHM/c2x1Zz0ke3BhcmFtcy5zbHVnfWApO1xyXG4gIGNvbnN0IGFsbFN0YWdlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3N0YWdlc1wiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGFsbFN0YWdlczogYWxsU3RhZ2VzLCBhcHBsaWNhbnRzOiBhcHBsaWNhbnRzWzBdIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2FudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
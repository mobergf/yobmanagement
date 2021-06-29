webpackHotUpdate_N_E("pages/create",{

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
var _this = undefined,
    _jsxFileName = "C:\\JobappNext\\my-project\\frontend\\components\\form.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Form = function Form(_ref) {
  _s();

  var applicant = _ref.applicant,
      isNew = _ref.isNew,
      allStages = _ref.allStages,
      _ref$onSubmit = _ref.onSubmit,
      onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit;
  var nameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var mailRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var addressRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var descRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var newApplicant = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: mailRef.current.value,
      address: addressRef.current.value,
      description: descRef.current.value,
      stage: isNew ? allStages[0] : applicant.stage,
      slug: nameRef.current.value.replace(/\s+/g, "-").toLowerCase()
    };

    if (isNew) {
      Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__["createAPI"])("/applicants", newApplicant);
    } else {
      Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__["updateAPI"])("/applicants/".concat(applicant.id), newApplicant, "/applicants/".concat(newApplicant.slug));
    }

    onSubmit();
  };

  return __jsx("form", {
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    className: "uk-animation-fade",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("legend", {
    className: "uk-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Namn"), __jsx("input", {
    className: "uk-input uk-form-width-large uk-margin-small-bottom",
    placeholder: "Anna Andersson",
    ref: nameRef,
    defaultValue: applicant === null || applicant === void 0 ? void 0 : applicant.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("legend", {
    className: "uk-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "\xC5lder"), __jsx("input", {
    className: "uk-input uk-form-width-small uk-margin-small-bottom",
    placeholder: "99",
    ref: ageRef,
    defaultValue: applicant === null || applicant === void 0 ? void 0 : applicant.age,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("legend", {
    className: "uk-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "Email"), __jsx("input", {
    className: "uk-input uk-form-width-large uk-margin-small-bottom",
    placeholder: "anna.andersson@gmail.com",
    ref: mailRef,
    defaultValue: applicant === null || applicant === void 0 ? void 0 : applicant.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("legend", {
    className: "uk-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "Adress"), __jsx("input", {
    className: "uk-input uk-form-width-large uk-margin-small-bottom",
    placeholder: "G\xE5gatan 1, 123 45, Stockholm",
    ref: addressRef,
    defaultValue: applicant === null || applicant === void 0 ? void 0 : applicant.address,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx("legend", {
    className: "uk-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, "Beskrivning"), __jsx("textarea", {
    className: "uk-textarea uk-margin-small-bottom",
    ref: descRef,
    defaultValue: applicant === null || applicant === void 0 ? void 0 : applicant.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("button", {
    type: "submit",
    className: "applicant-button applicant-button--submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "Skicka"));
};

_s(Form, "DdTEGWCc3uY91lAWIirlD8J53ZE=");

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJhcHBsaWNhbnQiLCJpc05ldyIsImFsbFN0YWdlcyIsIm9uU3VibWl0IiwibmFtZVJlZiIsInVzZVJlZiIsImFnZVJlZiIsIm1haWxSZWYiLCJhZGRyZXNzUmVmIiwiZGVzY1JlZiIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0FwcGxpY2FudCIsIm5hbWUiLCJjdXJyZW50IiwidmFsdWUiLCJhZ2UiLCJlbWFpbCIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsInN0YWdlIiwic2x1ZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZUFQSSIsInVwZGF0ZUFQSSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBMEQ7QUFBQTs7QUFBQSxNQUF2REMsU0FBdUQsUUFBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLEtBQTRDLFFBQTVDQSxLQUE0QztBQUFBLE1BQXJDQyxTQUFxQyxRQUFyQ0EsU0FBcUM7QUFBQSwyQkFBMUJDLFFBQTBCO0FBQUEsTUFBMUJBLFFBQTBCLDhCQUFmLFlBQU0sQ0FBRSxDQUFPO0FBQ3JFLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLG9EQUFNLENBQUMsSUFBRCxDQUF0QjtBQUNBLE1BQU1HLFVBQVUsR0FBR0gsb0RBQU0sQ0FBQyxJQUFELENBQXpCO0FBQ0EsTUFBTUksT0FBTyxHQUFHSixvREFBTSxDQUFDLElBQUQsQ0FBdEI7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFF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QUVWLE9BRlA7QUFHRSxnQkFBWSxFQUFFVCxTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRW9CLFdBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsRUFvQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQywyQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcENGLENBREY7QUE2Q0QsQ0E1RUQ7O0dBQU1yQixJOztLQUFBQSxJO0FBOEVTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcmVhdGUuY2I1OWFjNjU5MWVlY2NiZTA3NGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFQSSwgdXBkYXRlQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb3JtID0gKHsgYXBwbGljYW50LCBpc05ldywgYWxsU3RhZ2VzLCBvblN1Ym1pdCA9ICgpID0+IHt9IH0pID0+IHtcclxuICBjb25zdCBuYW1lUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBtYWlsUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGFkZHJlc3NSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZGVzY1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBuZXdBcHBsaWNhbnQgPSB7XHJcbiAgICAgIG5hbWU6IG5hbWVSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgYWdlOiBhZ2VSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgZW1haWw6IG1haWxSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgYWRkcmVzczogYWRkcmVzc1JlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY1JlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBzdGFnZTogaXNOZXcgPyBhbGxTdGFnZXNbMF0gOiBhcHBsaWNhbnQuc3RhZ2UsXHJcbiAgICAgIHNsdWc6IG5hbWVSZWYuY3VycmVudC52YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgfTtcclxuICAgIGlmIChpc05ldykge1xyXG4gICAgICBjcmVhdGVBUEkoXCIvYXBwbGljYW50c1wiLCBuZXdBcHBsaWNhbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXBkYXRlQVBJKFxyXG4gICAgICAgIGAvYXBwbGljYW50cy8ke2FwcGxpY2FudC5pZH1gLFxyXG4gICAgICAgIG5ld0FwcGxpY2FudCxcclxuICAgICAgICBgL2FwcGxpY2FudHMvJHtuZXdBcHBsaWNhbnQuc2x1Z31gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gY2xhc3NOYW1lPVwidWstYW5pbWF0aW9uLWZhZGVcIj5cclxuICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJ1ay1sZWdlbmRcIj5OYW1uPC9sZWdlbmQ+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInVrLWlucHV0IHVrLWZvcm0td2lkdGgtbGFyZ2UgdWstbWFyZ2luLXNtYWxsLWJvdHRvbVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBbm5hIEFuZGVyc3NvblwiXHJcbiAgICAgICAgcmVmPXtuYW1lUmVmfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17YXBwbGljYW50Py5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInVrLWxlZ2VuZFwiPsOFbGRlcjwvbGVnZW5kPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dCB1ay1mb3JtLXdpZHRoLXNtYWxsIHVrLW1hcmdpbi1zbWFsbC1ib3R0b21cIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiOTlcIlxyXG4gICAgICAgIHJlZj17YWdlUmVmfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17YXBwbGljYW50Py5hZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+RW1haWw8L2xlZ2VuZD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidWstaW5wdXQgdWstZm9ybS13aWR0aC1sYXJnZSB1ay1tYXJnaW4tc21hbGwtYm90dG9tXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImFubmEuYW5kZXJzc29uQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgcmVmPXttYWlsUmVmfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17YXBwbGljYW50Py5lbWFpbH1cclxuICAgICAgLz5cclxuICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJ1ay1sZWdlbmRcIj5BZHJlc3M8L2xlZ2VuZD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidWstaW5wdXQgdWstZm9ybS13aWR0aC1sYXJnZSB1ay1tYXJnaW4tc21hbGwtYm90dG9tXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkfDpWdhdGFuIDEsIDEyMyA0NSwgU3RvY2tob2xtXCJcclxuICAgICAgICByZWY9e2FkZHJlc3NSZWZ9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXthcHBsaWNhbnQ/LmFkZHJlc3N9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+QmVza3Jpdm5pbmc8L2xlZ2VuZD5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidWstdGV4dGFyZWEgdWstbWFyZ2luLXNtYWxsLWJvdHRvbVwiXHJcbiAgICAgICAgcmVmPXtkZXNjUmVmfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17YXBwbGljYW50Py5kZXNjcmlwdGlvbn1cclxuICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYXBwbGljYW50LWJ1dHRvbiBhcHBsaWNhbnQtYnV0dG9uLS1zdWJtaXRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgU2tpY2thXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
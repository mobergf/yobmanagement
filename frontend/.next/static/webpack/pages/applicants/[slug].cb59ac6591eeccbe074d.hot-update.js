webpackHotUpdate_N_E("pages/applicants/[slug]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJhcHBsaWNhbnQiLCJpc05ldyIsImFsbFN0YWdlcyIsIm9uU3VibWl0IiwibmFtZVJlZiIsInVzZVJlZiIsImFnZVJlZiIsIm1haWxSZWYiLCJhZGRyZXNzUmVmIiwiZGVzY1JlZiIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0FwcGxpY2FudCIsIm5hbWUiLCJjdXJyZW50IiwidmFsdWUiLCJhZ2UiLCJlbWFpbCIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsInN0YWdlIiwic2x1ZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZUFQSSIsInVwZGF0ZUFQSSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBMEQ7QUFBQTs7QUFBQSxNQUF2REMsU0FBdUQsUUFBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLEtBQTRDLFFBQTVDQSxLQUE0QztBQUFBLE1BQXJDQyxTQUFxQyxRQUFyQ0EsU0FBcUM7QUFBQSwyQkFBMUJDLFFBQTBCO0FBQUEsTUFBMUJBLFFBQTBCLDhCQUFmLFlBQU0sQ0FBRSxDQUFPO0FBQ3JFLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLG9EQUFNLENBQUMsSUFBRCxDQUF0QjtBQUNBLE1BQU1HLFVBQVUsR0FBR0gsb0RBQU0sQ0FBQyxJQUFELENBQXpCO0FBQ0EsTUFBTUksT0FBTyxHQUFHSixvREFBTSxDQUFDLElBQUQsQ0FBdEI7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFF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QUVWLE9BRlA7QUFHRSxnQkFBWSxFQUFFVCxTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRW9CLFdBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsRUFvQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQywyQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcENGLENBREY7QUE2Q0QsQ0E1RUQ7O0dBQU1yQixJOztLQUFBQSxJO0FBOEVTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHBsaWNhbnRzL1tzbHVnXS5jYjU5YWM2NTkxZWVjY2JlMDc0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQVBJLCB1cGRhdGVBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZvcm0gPSAoeyBhcHBsaWNhbnQsIGlzTmV3LCBhbGxTdGFnZXMsIG9uU3VibWl0ID0gKCkgPT4ge30gfSkgPT4ge1xyXG4gIGNvbnN0IG5hbWVSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IG1haWxSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgYWRkcmVzc1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkZXNjUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld0FwcGxpY2FudCA9IHtcclxuICAgICAgbmFtZTogbmFtZVJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBhZ2U6IGFnZVJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBlbWFpbDogbWFpbFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzUmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjUmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIHN0YWdlOiBpc05ldyA/IGFsbFN0YWdlc1swXSA6IGFwcGxpY2FudC5zdGFnZSxcclxuICAgICAgc2x1ZzogbmFtZVJlZi5jdXJyZW50LnZhbHVlLnJlcGxhY2UoL1xccysvZywgXCItXCIpLnRvTG93ZXJDYXNlKCksXHJcbiAgICB9O1xyXG4gICAgaWYgKGlzTmV3KSB7XHJcbiAgICAgIGNyZWF0ZUFQSShcIi9hcHBsaWNhbnRzXCIsIG5ld0FwcGxpY2FudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cGRhdGVBUEkoXHJcbiAgICAgICAgYC9hcHBsaWNhbnRzLyR7YXBwbGljYW50LmlkfWAsXHJcbiAgICAgICAgbmV3QXBwbGljYW50LFxyXG4gICAgICAgIGAvYXBwbGljYW50cy8ke25ld0FwcGxpY2FudC5zbHVnfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIG9uU3VibWl0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfSBjbGFzc05hbWU9XCJ1ay1hbmltYXRpb24tZmFkZVwiPlxyXG4gICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInVrLWxlZ2VuZFwiPk5hbW48L2xlZ2VuZD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidWstaW5wdXQgdWstZm9ybS13aWR0aC1sYXJnZSB1ay1tYXJnaW4tc21hbGwtYm90dG9tXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFubmEgQW5kZXJzc29uXCJcclxuICAgICAgICByZWY9e25hbWVSZWZ9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXthcHBsaWNhbnQ/Lm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+w4VsZGVyPC9sZWdlbmQ+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInVrLWlucHV0IHVrLWZvcm0td2lkdGgtc21hbGwgdWstbWFyZ2luLXNtYWxsLWJvdHRvbVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCI5OVwiXHJcbiAgICAgICAgcmVmPXthZ2VSZWZ9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXthcHBsaWNhbnQ/LmFnZX1cclxuICAgICAgLz5cclxuICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJ1ay1sZWdlbmRcIj5FbWFpbDwvbGVnZW5kPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dCB1ay1mb3JtLXdpZHRoLWxhcmdlIHVrLW1hcmdpbi1zbWFsbC1ib3R0b21cIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiYW5uYS5hbmRlcnNzb25AZ21haWwuY29tXCJcclxuICAgICAgICByZWY9e21haWxSZWZ9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXthcHBsaWNhbnQ/LmVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInVrLWxlZ2VuZFwiPkFkcmVzczwvbGVnZW5kPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dCB1ay1mb3JtLXdpZHRoLWxhcmdlIHVrLW1hcmdpbi1zbWFsbC1ib3R0b21cIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiR8OlZ2F0YW4gMSwgMTIzIDQ1LCBTdG9ja2hvbG1cIlxyXG4gICAgICAgIHJlZj17YWRkcmVzc1JlZn1cclxuICAgICAgICBkZWZhdWx0VmFsdWU9e2FwcGxpY2FudD8uYWRkcmVzc31cclxuICAgICAgLz5cclxuICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJ1ay1sZWdlbmRcIj5CZXNrcml2bmluZzwvbGVnZW5kPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBjbGFzc05hbWU9XCJ1ay10ZXh0YXJlYSB1ay1tYXJnaW4tc21hbGwtYm90dG9tXCJcclxuICAgICAgICByZWY9e2Rlc2NSZWZ9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXthcHBsaWNhbnQ/LmRlc2NyaXB0aW9ufVxyXG4gICAgICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJhcHBsaWNhbnQtYnV0dG9uIGFwcGxpY2FudC1idXR0b24tLXN1Ym1pdFwiXHJcbiAgICAgID5cclxuICAgICAgICBTa2lja2FcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
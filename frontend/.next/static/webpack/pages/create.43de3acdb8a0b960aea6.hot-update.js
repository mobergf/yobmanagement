webpackHotUpdate_N_E("pages/create",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getStrapiURL, fetchAPI, updateAPI, createAPI, deleteAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrapiURL", function() { return getStrapiURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAPI", function() { return fetchAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAPI", function() { return updateAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAPI", function() { return createAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAPI", function() { return deleteAPI; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function getStrapiURL() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(path);
} // Helper to make GET requests to Strapi

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}

function _fetchAPI() {
  _fetchAPI = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(path) {
    var requestUrl, response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            requestUrl = getStrapiURL(path);
            _context.next = 3;
            return fetch(requestUrl);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

function updateAPI() {
  return _updateAPI.apply(this, arguments);
}

function _updateAPI() {
  _updateAPI = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var url,
        data,
        newUrl,
        requestUrl,
        _args2 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "";
            data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            newUrl = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
            requestUrl = getStrapiURL(url);
            _context2.next = 6;
            return fetch(requestUrl, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            });

          case 6:
            if (newUrl) {
              next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(window.location.origin + newUrl);
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_2___default.a.reload(window.location.pathname);
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateAPI.apply(this, arguments);
}

function createAPI() {
  return _createAPI.apply(this, arguments);
}

function _createAPI() {
  _createAPI = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var url,
        data,
        requestUrl,
        response,
        _args3 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : "";
            data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            requestUrl = getStrapiURL(url);
            _context3.next = 5;
            return fetch(requestUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            });

          case 5:
            response = _context3.sent;
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.reload(window.location.pathname);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createAPI.apply(this, arguments);
}

function deleteAPI() {
  return _deleteAPI.apply(this, arguments);
}

function _deleteAPI() {
  _deleteAPI = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var url,
        requestUrl,
        _args4 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : "";
            requestUrl = getStrapiURL(url);
            _context4.next = 4;
            return fetch(requestUrl, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
            });

          case 4:
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/"); // Router.reload(window.location.pathname);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteAPI.apply(this, arguments);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwiZmV0Y2hBUEkiLCJyZXF1ZXN0VXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidXBkYXRlQVBJIiwidXJsIiwibmV3VXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiUm91dGVyIiwicHVzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicmVsb2FkIiwicGF0aG5hbWUiLCJjcmVhdGVBUEkiLCJkZWxldGVBUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxZQUFULEdBQWlDO0FBQUEsTUFBWEMsSUFBVyx1RUFBSixFQUFJO0FBQ3RDLG1CQUNFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsMEJBQVosSUFBMEMsdUJBRDVDLFNBRUdILElBRkg7QUFHRCxDLENBRUQ7O0FBQ08sU0FBZUksUUFBdEI7QUFBQTtBQUFBOzs7K0xBQU8saUJBQXdCSixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0ssc0JBREQsR0FDY04sWUFBWSxDQUFDQyxJQUFELENBRDFCO0FBQUE7QUFBQSxtQkFFa0JNLEtBQUssQ0FBQ0QsVUFBRCxDQUZ2Qjs7QUFBQTtBQUVDRSxvQkFGRDtBQUFBO0FBQUEsbUJBR2NBLFFBQVEsQ0FBQ0MsSUFBVCxFQUhkOztBQUFBO0FBR0NDLGdCQUhEO0FBQUEsNkNBSUVBLElBSkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9BLFNBQWVDLFNBQXRCO0FBQUE7QUFBQTs7O2dNQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCQyxlQUF6Qiw4REFBK0IsRUFBL0I7QUFBbUNGLGdCQUFuQyw4REFBMEMsRUFBMUM7QUFBOENHLGtCQUE5Qyw4REFBdUQsSUFBdkQ7QUFDQ1Asc0JBREQsR0FDY04sWUFBWSxDQUFDWSxHQUFELENBRDFCO0FBQUE7QUFBQSxtQkFFQ0wsS0FBSyxDQUFDRCxVQUFELEVBQWE7QUFDdEJRLG9CQUFNLEVBQUUsS0FEYztBQUV0QkMscUJBQU8sRUFBRTtBQUNQLGdDQUFnQjtBQURULGVBRmE7QUFLdEJDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmO0FBTGdCLGFBQWIsQ0FGTjs7QUFBQTtBQVNMLGdCQUFJRyxNQUFKLEVBQVk7QUFDVk0sZ0VBQU0sQ0FBQ0MsSUFBUCxDQUFZQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEdBQXlCVixNQUFyQztBQUNELGFBRkQsTUFFTztBQUNMTSxnRUFBTSxDQUFDSyxNQUFQLENBQWNILE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkcsUUFBOUI7QUFDRDs7QUFiSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBZ0JBLFNBQWVDLFNBQXRCO0FBQUE7QUFBQTs7O2dNQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCZCxlQUF6Qiw4REFBK0IsRUFBL0I7QUFBbUNGLGdCQUFuQyw4REFBMEMsRUFBMUM7QUFDQ0osc0JBREQsR0FDY04sWUFBWSxDQUFDWSxHQUFELENBRDFCO0FBQUE7QUFBQSxtQkFFa0JMLEtBQUssQ0FBQ0QsVUFBRCxFQUFhO0FBQ3ZDUSxvQkFBTSxFQUFFLE1BRCtCO0FBRXZDQyxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCO0FBRFQsZUFGOEI7QUFLdkNDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmO0FBTGlDLGFBQWIsQ0FGdkI7O0FBQUE7QUFFQ0Ysb0JBRkQ7QUFTTFcsOERBQU0sQ0FBQ0ssTUFBUCxDQUFjSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JHLFFBQTlCOztBQVRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFZQSxTQUFlRSxTQUF0QjtBQUFBO0FBQUE7OztnTUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCZixlQUF6Qiw4REFBK0IsRUFBL0I7QUFDQ04sc0JBREQsR0FDY04sWUFBWSxDQUFDWSxHQUFELENBRDFCO0FBQUE7QUFBQSxtQkFFQ0wsS0FBSyxDQUFDRCxVQUFELEVBQWE7QUFDdEJRLG9CQUFNLEVBQUUsUUFEYztBQUV0QkMscUJBQU8sRUFBRTtBQUNQLGdDQUFnQjtBQURUO0FBRmEsYUFBYixDQUZOOztBQUFBO0FBUUxJLDhEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLEVBUkssQ0FTTDs7QUFUSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NyZWF0ZS40M2RlM2FjZGI4YTBiOTYwYWVhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gXCJcIikge1xuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHtwYXRofWA7XG59XG5cbi8vIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoKSB7XG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBnZXRTdHJhcGlVUkwocGF0aCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQVBJKHVybCA9IFwiXCIsIGRhdGEgPSB7fSwgbmV3VXJsID0gbnVsbCkge1xuICBjb25zdCByZXF1ZXN0VXJsID0gZ2V0U3RyYXBpVVJMKHVybCk7XG4gIGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIHtcbiAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgfSk7XG4gIGlmIChuZXdVcmwpIHtcbiAgICBSb3V0ZXIucHVzaCh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgbmV3VXJsKTtcbiAgfSBlbHNlIHtcbiAgICBSb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFQSSh1cmwgPSBcIlwiLCBkYXRhID0ge30pIHtcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTCh1cmwpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pO1xuICBSb3V0ZXIucmVsb2FkKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBUEkodXJsID0gXCJcIikge1xuICBjb25zdCByZXF1ZXN0VXJsID0gZ2V0U3RyYXBpVVJMKHVybCk7XG4gIGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgfSk7XG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgLy8gUm91dGVyLnJlbG9hZCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
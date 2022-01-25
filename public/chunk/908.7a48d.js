"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[908],{9908:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ SaveLoad)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7042);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(285);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4916);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5306);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4747);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7327);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7941);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8674);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2165);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1038);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5666);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar SaveLoad = /*#__PURE__*/function (_ui$view$SaveLoadUI) {\n  _inherits(SaveLoad, _ui$view$SaveLoadUI);\n\n  var _super = _createSuper(SaveLoad);\n\n  function SaveLoad() {\n    var _this;\n\n    _classCallCheck(this, SaveLoad);\n\n    _this = _super.call(this);\n\n    _this.btnClose.on(Laya.Event.CLICK, _assertThisInitialized(_this), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _this.close();\n\n            case 2:\n              $ui.switchView(UI.pages.MAIN);\n\n            case 3:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    _this.btnRead.on(Laya.Event.CLICK, _assertThisInitialized(_this), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      var result;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return $$copy(_this.input.text = _this.data);\n\n            case 2:\n              result = _context2.sent;\n              $$event(\'message\', [result ? \'UI_CopySuccess\' : \'UI_CopyFailed\']);\n\n            case 4:\n            case "end":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    })));\n\n    _this.btnWrite.on(Laya.Event.CLICK, _assertThisInitialized(_this), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n      var text;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return $$read();\n\n            case 2:\n              text = _context3.sent;\n\n              if (text == false) {\n                _this.data = [_this.input.text, \'UI_PasteFailedDecodeSuccess\', \'UI_PasteFailedDecodeFailed\'];\n              } else {\n                _this.input.text = text;\n                _this.data = [text, \'UI_PasteSuccessDecodeSuccess\', \'UI_PasteSuccessDecodeFailed\'];\n              }\n\n            case 4:\n            case "end":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    })));\n\n    _this.btnSave.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      var blob = new Blob([_this.data], {\n        type: \'application/json\'\n      });\n      var slice = blob.slice || blob.webkitSlice || blob.mozSlice;\n      blob = slice.call(blob, 0, blob.size, \'application/octet-stream\');\n      var a = document.createElementNS(\'http://www.w3.org/1999/xhtml\', \'a\');\n      a.href = URL.createObjectURL(blob);\n      a.download = "Remake_save_".concat(new Date().toISOString().replace(\':\', \'.\'), ".json");\n      document.body.appendChild(a);\n      a.click();\n      document.body.removeChild(a);\n      URL.revokeObjectURL(a.href);\n    });\n\n    _this.btnLoad.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      var file = document.createElement(\'input\');\n      file.setAttribute(\'type\', \'file\');\n      file.setAttribute(\'name\', \'file\');\n      file.setAttribute(\'accept\', \'application/json\');\n      file.setAttribute(\'style\', \'display: none;\');\n      document.body.appendChild(file);\n      file.click();\n\n      file.onchange = function (e) {\n        var file = e.target.files[0];\n        if (!file) return;\n        var reader = new FileReader();\n\n        reader.onload = function () {\n          return _this.data = [reader.result];\n        };\n\n        reader.readAsText(file);\n        document.body.removeChild(file);\n      };\n    });\n\n    _this.input.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), function () {\n      _this.input.setSelection(0, _this.input.text.length);\n    });\n\n    return _this;\n  }\n\n  _createClass(SaveLoad, [{\n    key: "init",\n    value: function init() {\n      this.input.text = this.data;\n    }\n  }, {\n    key: "data",\n    get: function get() {\n      var data = {};\n      Object.keys(localStorage).filter(function (v) {\n        return v.substr(0, 4) != \'goog\';\n      }).forEach(function (key) {\n        return data[key] = localStorage[key];\n      });\n      return JSON.stringify(data);\n    },\n    set: function set(_ref4) {\n      var _ref5 = _slicedToArray(_ref4, 3),\n          v = _ref5[0],\n          _ref5$ = _ref5[1],\n          success = _ref5$ === void 0 ? \'UI_LoadSuccess\' : _ref5$,\n          _ref5$2 = _ref5[2],\n          Failed = _ref5$2 === void 0 ? \'UI_LoadFailed\' : _ref5$2;\n\n      try {\n        var data = JSON.parse(v);\n\n        for (var key in data) {\n          localStorage.setItem(key, data[key]);\n        }\n\n        $$event(\'message\', [success]);\n        $ui.theme = $ui.theme;\n        this.btnClose.event(Laya.Event.CLICK);\n      } catch (e) {\n        console.error(e);\n        $$event(\'message\', [Failed]);\n      }\n    }\n  }], [{\n    key: "load",\n    value: function load() {\n      return ["images/atlas/images/radio.atlas"];\n    }\n  }]);\n\n  return SaveLoad;\n}(ui.view.SaveLoadUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkwOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVBOztBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBS0E7O0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQTVEQTtBQTZEQTs7OztBQU1BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBN0JBO0FBQ0E7QUFDQTs7OztBQWxFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmVfcmVzdGFydC8uL3NyYy91aS90aGVtZXMvc2F2ZWxvYWQuanM/MDZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTYXZlTG9hZCBleHRlbmRzIHVpLnZpZXcuU2F2ZUxvYWRVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAkdWkuc3dpdGNoVmlldyhVSS5wYWdlcy5NQUlOKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ0blJlYWQub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgJCRjb3B5KHRoaXMuaW5wdXQudGV4dCA9IHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICQkZXZlbnQoJ21lc3NhZ2UnLCBbcmVzdWx0PyAnVUlfQ29weVN1Y2Nlc3MnOiAnVUlfQ29weUZhaWxlZCddKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ0bldyaXRlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCAkJHJlYWQoKTtcclxuICAgICAgICAgICAgaWYodGV4dCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAnVUlfUGFzdGVGYWlsZWREZWNvZGVTdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAnVUlfUGFzdGVGYWlsZWREZWNvZGVGYWlsZWQnXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC50ZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICdVSV9QYXN0ZVN1Y2Nlc3NEZWNvZGVTdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAnVUlfUGFzdGVTdWNjZXNzRGVjb2RlRmFpbGVkJ1xyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJ0blNhdmUub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgKCk9PntcclxuICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbdGhpcy5kYXRhXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlID0gYmxvYi5zbGljZSB8fCBibG9iLndlYmtpdFNsaWNlIHx8IGJsb2IubW96U2xpY2U7XHJcbiAgICAgICAgICAgIGJsb2IgPSBzbGljZS5jYWxsKGJsb2IsIDAsIGJsb2Iuc2l6ZSwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJywgJ2EnKTtcclxuICAgICAgICAgICAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgYS5kb3dubG9hZCA9IGBSZW1ha2Vfc2F2ZV8ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKCc6JywnLicpfS5qc29uYDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChhLmhyZWYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYnRuTG9hZC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgZmlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgICAgICBmaWxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmaWxlJyk7XHJcbiAgICAgICAgICAgIGZpbGUuc2V0QXR0cmlidXRlKCdhY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgICAgICBmaWxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmaWxlKTtcclxuICAgICAgICAgICAgZmlsZS5jbGljaygpO1xyXG4gICAgICAgICAgICBmaWxlLm9uY2hhbmdlID0gKGUpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgICAgICBpZighZmlsZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB0aGlzLmRhdGEgPSBbcmVhZGVyLnJlc3VsdF07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZmlsZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uKDAsIHRoaXMuaW5wdXQudGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcImltYWdlcy9hdGxhcy9pbWFnZXMvcmFkaW8uYXRsYXNcIl07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0LnRleHQgPSB0aGlzLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgICAgIE9iamVjdFxyXG4gICAgICAgICAgICAua2V5cyhsb2NhbFN0b3JhZ2UpXHJcbiAgICAgICAgICAgIC5maWx0ZXIodj0+di5zdWJzdHIoMCw0KSE9J2dvb2cnKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChrZXk9PmRhdGFba2V5XSA9IGxvY2FsU3RvcmFnZVtrZXldKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGRhdGEoW3YsIHN1Y2Nlc3MgPSAnVUlfTG9hZFN1Y2Nlc3MnLCBGYWlsZWQgPSAnVUlfTG9hZEZhaWxlZCddKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uodik7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBrZXkgaW4gZGF0YSlcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgJCRldmVudCgnbWVzc2FnZScsIFtzdWNjZXNzXSk7XHJcbiAgICAgICAgICAgICR1aS50aGVtZSA9ICR1aS50aGVtZTtcclxuICAgICAgICAgICAgdGhpcy5idG5DbG9zZS5ldmVudChMYXlhLkV2ZW50LkNMSUNLKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICQkZXZlbnQoJ21lc3NhZ2UnLCBbRmFpbGVkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9908\n')}}]);
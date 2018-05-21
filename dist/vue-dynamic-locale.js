(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueDynamicLocale"] = factory();
	else
		root["VueDynamicLocale"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_js-objectex@1.0.4-beta.1@js-objectex/dist/js-objectex.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_js-objectex@1.0.4-beta.1@js-objectex/dist/js-objectex.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ActiveSelector.js":
/*!*******************************!*\
  !*** ./src/ActiveSelector.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveSelection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _JSEnvironment = __webpack_require__(/*! ./JSEnvironment */ "./src/JSEnvironment.js");

var _JSEnvironment2 = _interopRequireDefault(_JSEnvironment);

var _Generic = __webpack_require__(/*! ./Generic */ "./src/Generic.js");

var _Generic2 = _interopRequireDefault(_Generic);

var _RawMap = __webpack_require__(/*! ./RawMap */ "./src/RawMap.js");

var _RawMap2 = _interopRequireDefault(_RawMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CascadeMapping(mapping, newMapping) {
  if (mapping != null) {
    if (newMapping != null) {
      return function (value, key, enumerable) {
        return newMapping(mapping(value, key, enumerable), key, enumerable);
      };
    } else return mapping;
  } else return newMapping;
}

/**
 * An active selection respect specific enumerable object (Array or plain object) and give predicate
 */

var ActiveSelection = exports.ActiveSelection = function () {
  function ActiveSelection(enumerable) {
    var predicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var mappings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, ActiveSelection);

    this._enumerable = enumerable;
    this._predicates = predicates.length > 0 ? predicates : [null];
    this._mappings = mappings.length > 0 ? mappings : [null];
    this._iterateFunc = null;
  }

  /**
   * Foreach() executes a provided function once for each item in selection.
   * @param {function(*, string)} action action for each item.
   */


  _createClass(ActiveSelection, [{
    key: 'Foreach',
    value: function Foreach(action) {
      var _this = this;

      this._iterateFunc(this._enumerable, function (value, key) {
        var pass = true;
        for (var i = 0; i < _this._predicates.length && pass; ++i) {
          pass &= !_this._predicates[i] || _this._predicates[i](value, key);
          if (pass && _this._mappings[i]) {
            value = _this._mappings[i](value, key);
          }
        }
        if (pass) {
          action(value, key);
        }
      });
    }

    /**
     * Map() creates a new active selection with a provided function call on every item in selection.
     * @param {function(*, string):*} mapping function to produce a new value for each item.
     * @return {ActiveSelection} A new active selection.
     */

  }, {
    key: 'Map',
    value: function Map(mapping) {
      var last = this._mappings.length - 1;
      var lastMapping = CascadeMapping(this._mappings[last], mapping);
      var newMappings = this._mappings.slice(0, last).concat([lastMapping]);
      return new this.constructor(this._enumerable, this._predicates, newMappings);
    }

    /**
     * Where() creates a new active selection with items pass provided test.
     * @param {*} predicate test each item of selection.
     * @return {ActiveSelection} A new active selection
     */

  }, {
    key: 'Where',
    value: function Where(predicate) {
      return ActiveSelection.CreateSelection(this, predicate, null);
    }

    /**
     * Delete() deletes the selection from current enumerable.
     */

  }, {
    key: 'Delete',
    value: function Delete() {}

    /**
     * ToEnumerable() converts this selection to enumerable.
     */

  }, {
    key: 'ToEnumerable',
    value: function ToEnumerable() {}
  }], [{
    key: 'CreateSelection',
    value: function CreateSelection(enumerable) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var mapping = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (_Generic2.default.IsArray(enumerable)) {
        return new ArraySelection(enumerable, [predicate], [mapping]);
      } else if (_Generic2.default.IsObject(enumerable)) {
        if (!(enumerable instanceof ActiveSelection)) {
          return new RawMapSelection(enumerable, [predicate], [mapping]);
        } else {
          var newPredicates = enumerable._predicates.concat([predicate]);
          var newMappings = enumerable._mappings.concat([mapping]);
          return new enumerable.constructor(enumerable._enumerable, newPredicates, newMappings);
        }
      } else return null;
    }
  }]);

  return ActiveSelection;
}();

var ArraySelection = function (_ActiveSelection) {
  _inherits(ArraySelection, _ActiveSelection);

  function ArraySelection(array) {
    var predicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var mappings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, ArraySelection);

    var _this2 = _possibleConstructorReturn(this, (ArraySelection.__proto__ || Object.getPrototypeOf(ArraySelection)).call(this, array, predicates, mappings));

    _this2._iterateFunc = function (array, action) {
      return array.forEach(action);
    };
    return _this2;
  }

  _createClass(ArraySelection, [{
    key: 'Delete',
    value: function Delete() {
      var _this3 = this;

      var indexes = [];
      this.Foreach(function (value, index) {
        return indexes.push(index);
      });
      indexes.sort(function (a, b) {
        return b - a;
      }).forEach(function (index) {
        _this3._enumerable.splice(index, 1);
      });
    }
  }, {
    key: 'ToEnumerable',
    value: function ToEnumerable() {
      var results = [];
      this.Foreach(function (value) {
        results.push(value);
      });
      return results;
    }
  }]);

  return ArraySelection;
}(ActiveSelection);

var RawMapSelection = function (_ActiveSelection2) {
  _inherits(RawMapSelection, _ActiveSelection2);

  function RawMapSelection(rawMap) {
    var predicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var mappings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, RawMapSelection);

    var _this4 = _possibleConstructorReturn(this, (RawMapSelection.__proto__ || Object.getPrototypeOf(RawMapSelection)).call(this, rawMap, predicates, mappings));

    _this4._iterateFunc = _RawMap2.default.Foreach;
    return _this4;
  }

  _createClass(RawMapSelection, [{
    key: 'Delete',
    value: function Delete() {
      var _this5 = this;

      var keys = [];
      this.Foreach(function (value, key) {
        return keys.push(key);
      });
      keys.forEach(function (key) {
        return _JSEnvironment2.default.Delete(_this5._enumerable, key);
      });
    }
  }, {
    key: 'ToEnumerable',
    value: function ToEnumerable() {
      var results = {};
      this.Foreach(function (value, key) {
        results[key] = value;
      });
      return results;
    }
  }]);

  return RawMapSelection;
}(ActiveSelection);

var ActiveSelector = {
  Where: function Where(enumerable, predicate) {
    return ActiveSelection.CreateSelection(enumerable, predicate);
  }
};

exports.default = ActiveSelector;

/***/ }),

/***/ "./src/Generic.js":
/*!************************!*\
  !*** ./src/Generic.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Generic = {
  /**
   * Find the common value of provided array; for object array, first object is used for key reference, only property with common parts has key in result object.
   * @param {Array} values values to extract.
   * @param {number} eps eps for number equalitiy.
   * @return {*} common value.
   */
  Common: function Common(values) {
    var _this = this;

    var eps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (values.length > 1) {
      var reference = values[0];
      if (this.IsObject(reference) && !this.IsArray(reference)) {
        if (!values.some(function (value) {
          return value == null || !_this.IsObject(value);
        })) {
          var common = {};
          Object.keys(reference).forEach(function (key) {
            var subCommon = _this.Common(values.map(function (value) {
              return value[key];
            }), eps);
            if (subCommon != null) {
              common[key] = subCommon;
            }
          });
          return common;
        } else return null;
      } else {
        return values.every(function (value) {
          return _this.ValueEquals(value, reference, eps);
        }) ? reference : null;
      }
    } else return values[0];
  },


  /**
   * IsArray() determines whether the target is array.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is array; otherwise, false.
   */
  IsArray: function IsArray(target) {
    return Array.isArray(target);
  },


  /**
   * IsObject() determines whether the target is object.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is non-null object; otherwise, false.
   */
  IsObject: function IsObject(target) {
    return target === Object(target);
  },


  /**
   * IsNumber() determines whether the target is number.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is number; otherwise, false.
   */
  IsNumber: function IsNumber(target) {
    return typeof target === 'number';
  },


  /**
   * IsString() determines whether the target is string.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is string; otherwise, false.
   */
  IsString: function IsString(target) {
    return typeof target === 'string';
  },


  /**
   * IsInstance() determines whether the target is class instance.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is class instance; otherwise, false.
   */
  IsInstance: function IsInstance(target) {
    return this.IsObject(target) && target.constructor.name !== 'Object';
  },


  /**
   * IsEmpty() determines whether the target is empty (array of zero length, object without any property, null or undefined).
   * @param {Object.<string,*>} object arbitrary object
   * @return {boolean} true if object is empty; otherwise, false.
   */
  IsEmpty: function IsEmpty(object) {
    return object == null || this.IsObject(object) && Object.keys(object).length === 0;
  },


  /**
   * ValueClone() makes a deep value copy of given object.
   * @param {*} object arbitrary object to copy.
   * @return {*} value clone of given object.
   */
  ValueClone: function ValueClone(object) {
    var _this2 = this;

    if (this.IsArray(object)) {
      var clone = object.slice();
      clone.forEach(function (value, index) {
        clone[index] = _this2.ValueClone(value);
      });
      return clone;
    } else if (this.IsObject(object)) {
      var _clone = Object.assign({}, object);
      Object.keys(_clone).forEach(function (key) {
        _clone[key] = _this2.ValueClone(object[key]);
      });
      return _clone;
    } else return object;
  },


  /**
   * ValueEquals() does value compare for two arbitrary operands.
   * @param {*} o1 arbitary operand.
   * @param {*} o2 arbitary operand.
   * @param {number} eps maximum value for float equality.
   * @return {boolean} true if the two operands are value equal; otherwise, false.
   */
  ValueEquals: function ValueEquals(o1, o2) {
    var _this3 = this;

    var eps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    if (this.IsObject(o1) && this.IsObject(o2)) {
      if (this.IsArray(o1)) {
        if (o1.length === o2.length) {
          return o1.every(function (value, index) {
            return _this3.ValueEquals(value, o2[value]);
          });
        }
      } else {
        return Object.keys(o1).length === Object.keys(o2).length && Object.keys(o1).every(function (key) {
          return _this3.ValueEquals(o1[key], o2[key]);
        });
      }
    } else if (this.IsNumber(o1) && this.IsNumber(o2)) {
      return Math.abs(o1 - o2) <= eps;
    }
    return o1 === o2;
  }
};

exports.default = Generic;

/***/ }),

/***/ "./src/JSEnvironment.js":
/*!******************************!*\
  !*** ./src/JSEnvironment.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var JSEnvironment = {
  Set: function Set(target, key, value) {
    target[key] = value;
  },
  Delete: function Delete(target, key) {
    delete target[key];
  }
};

var JsObjectex = {
  InstallVue: function InstallVue(Vue) {
    JSEnvironment.Set = Vue.set;
    JSEnvironment.Delete = Vue.delete;
  }
};

exports.default = JSEnvironment;
exports.JsObjectex = JsObjectex;

/***/ }),

/***/ "./src/ObjectFitting.js":
/*!******************************!*\
  !*** ./src/ObjectFitting.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Generic = __webpack_require__(/*! ./Generic */ "./src/Generic.js");

var _Generic2 = _interopRequireDefault(_Generic);

var _RawMap = __webpack_require__(/*! ./RawMap */ "./src/RawMap.js");

var _RawMap2 = _interopRequireDefault(_RawMap);

var _ObjectMath = __webpack_require__(/*! ./ObjectMath */ "./src/ObjectMath.js");

var _ObjectMath2 = _interopRequireDefault(_ObjectMath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FITTING_EPS = 0.01;

function FitNumeric(percentage, start, end) {
  return start + (end - start) * percentage;
}

function FitSingleton(percentage, start, end) {
  return percentage > 0.5 ? end : start;
}

function FitRound(percentage, start, end) {
  return _ObjectMath2.default.Round(FitNumeric(percentage, start, end));
}

function FitLazy(percentage, start, end) {
  if (percentage < FITTING_EPS || end == null) {
    return start;
  } else if (percentage > 1 - FITTING_EPS) {
    return end;
  }
  return null;
}

var ObjectFitting = function () {
  function ObjectFitting() {
    var lazy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, ObjectFitting);

    this._lazy = lazy;
    this._customFittingProperties = new Map();
    this._customFittings = new Map();
    this._typeProperties = [];
    this._DefaultRegister();
  }

  _createClass(ObjectFitting, [{
    key: '_DefaultRegister',
    value: function _DefaultRegister() {
      this.RegisterCustomFitting('singleton', FitSingleton);
      this.RegisterCustomFitting('round', FitRound);
    }
  }, {
    key: 'IsFittable',
    value: function IsFittable(start, end) {
      if (end != null && (typeof start === 'undefined' ? 'undefined' : _typeof(start)) === (typeof end === 'undefined' ? 'undefined' : _typeof(end))) {
        return this._typeProperties.every(function (key) {
          return !start.hasOwnProperty(key) || _Generic2.default.ValueEquals(start[key], end[key]);
        });
      }
      return false;
    }
  }, {
    key: '_FitCustom',
    value: function _FitCustom(percentage, start, end, property) {
      var custom = this._customFittingProperties.get(property);
      if (custom) {
        return this._customFittings.get(custom)(percentage, start[property], end[property]);
      } else {
        return this.Fit(percentage, start[property], end[property]);
      }
    }
  }, {
    key: 'Fit',
    value: function Fit(percentage, start, end) {
      var _this = this;

      if (_Generic2.default.IsArray(start)) {
        var fit = this._lazy ? FitLazy(percentage, start, end) : null;
        if (fit == null) {
          if (start.length !== end.length) {
            return FitSingleton(percentage, start, end);
          } else {
            fit = start.map(function (value, index) {
              return _this.Fit(percentage, value, end[index]);
            });
          }
        }
        return fit;
      } else if (_Generic2.default.IsObject(start) && this.IsFittable(start, end)) {
        var _fit = this._lazy ? FitLazy(percentage, start, end) : null;
        if (_fit == null) {
          _fit = _Generic2.default.ValueClone(start);
          _RawMap2.default.Foreach(_fit, function (_, property) {
            _fit[property] = _this._FitCustom(percentage, start, end, property);
          });
        }
        return _fit;
      } else if (_Generic2.default.IsNumber(start)) {
        var _fit2 = this._lazy ? FitLazy(percentage, start, end) : null;
        if (_fit2 == null) {
          _fit2 = _Generic2.default.IsNumber(end) ? FitNumeric(percentage, start, end) : FitSingleton(percentage, start, end);
        }
        return _fit2;
      } else {
        return FitSingleton(percentage, start, end);
      }
    }
  }, {
    key: 'RegisterCustomFitting',
    value: function RegisterCustomFitting(name, fitting) {
      this._customFittings.set(name, fitting);
    }
  }, {
    key: 'RegisterCustomProperty',
    value: function RegisterCustomProperty(property, fittingName) {
      this._customFittingProperties.set(property, fittingName);
    }
  }, {
    key: 'RegisterTypeProperty',
    value: function RegisterTypeProperty(property) {
      if (!this._typeProperties.includes(property)) {
        this._typeProperties.push(property);
      }
    }
  }]);

  return ObjectFitting;
}();

exports.default = ObjectFitting;

/***/ }),

/***/ "./src/ObjectMath.js":
/*!***************************!*\
  !*** ./src/ObjectMath.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Generic = __webpack_require__(/*! ./Generic */ "./src/Generic.js");

var _Generic2 = _interopRequireDefault(_Generic);

var _RawMap = __webpack_require__(/*! ./RawMap */ "./src/RawMap.js");

var _RawMap2 = _interopRequireDefault(_RawMap);

var _RawTree = __webpack_require__(/*! ./RawTree */ "./src/RawTree.js");

var _RawTree2 = _interopRequireDefault(_RawTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _SINGLES = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil', 'cos', 'cosh', 'exp', 'floor', 'log', 'log10', 'log2', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'];

var ObjectMath = Object.assign({}, _RawMap2.default.From(_SINGLES.filter(function (f) {
  return Math[f] != null;
}), function (f) {
  return {
    key: f[0].toUpperCase() + f.substr(1),
    value: function value(x) {
      if (_Generic2.default.IsObject(x)) {
        return _RawTree2.default.OperateLeafExternal(x, function (xVal) {
          return _Generic2.default.IsNumber(xVal) ? Math[f](xVal) : xVal;
        });
      } else return Math[f](x);
    }
  };
}), {
  Atan2: function Atan2(y, x) {
    if (_Generic2.default.IsObject(x) && _Generic2.default.IsObject(y)) {
      return _RawTree2.default.OperateLeafExternal(y, function (yVal, xVal) {
        return Math.atan2(yVal, xVal);
      }, x);
    } else return Math.atan2(y, x);
  },
  Max: function Max(x) {
    for (var _len = arguments.length, ys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      ys[_key - 1] = arguments[_key];
    }

    if (_Generic2.default.IsObject(x) && ys.every(function (y) {
      return _Generic2.default.IsObject(y);
    })) {
      return _RawTree2.default.OperateLeafExternal.apply(_RawTree2.default, [x, function (xVal) {
        for (var _len2 = arguments.length, yVals = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          yVals[_key2 - 1] = arguments[_key2];
        }

        return Math.max.apply(Math, [xVal].concat(yVals));
      }].concat(_toConsumableArray(ys)));
    } else return Math.max.apply(Math, [x].concat(_toConsumableArray(ys)));
  },
  Min: function Min(x) {
    for (var _len3 = arguments.length, ys = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      ys[_key3 - 1] = arguments[_key3];
    }

    if (_Generic2.default.IsObject(x) && ys.every(function (y) {
      return _Generic2.default.IsObject(y);
    })) {
      return _RawTree2.default.OperateLeafExternal.apply(_RawTree2.default, [x, function (xVal) {
        for (var _len4 = arguments.length, yVals = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          yVals[_key4 - 1] = arguments[_key4];
        }

        return Math.min.apply(Math, [xVal].concat(yVals));
      }].concat(_toConsumableArray(ys)));
    } else return Math.min.apply(Math, [x].concat(_toConsumableArray(ys)));
  }
});

exports.default = ObjectMath;

/***/ }),

/***/ "./src/RawMap.js":
/*!***********************!*\
  !*** ./src/RawMap.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _JSEnvironment = __webpack_require__(/*! ./JSEnvironment */ "./src/JSEnvironment.js");

var _JSEnvironment2 = _interopRequireDefault(_JSEnvironment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A raw map is a javascript object used as map.
 */
var RawMap = {
  /**
   * @typedef KeyValuePair
   * @property {string} key key
   * @property {*} value value
   */

  /**
   * DoubleMap() creates a new raw map with the results of calling a provided function on every key-value pair in the calling raw map.
   * @param {Object.<string,*>} map raw map.
   * @param {function(*, string, *):KeyValuePair} mapping function to produce a new key and a new value for each key-value pair. return type should be { key, value }.
   * @return {Object.<string,*>} A new raw map with new keys and new values being results of the mapping funcion.
   */
  DoubleMap: function DoubleMap(map, mapping) {
    var newMap = {};
    Object.keys(map).forEach(function (oldKey) {
      var _mapping = mapping(map[oldKey], oldKey, map),
          key = _mapping.key,
          value = _mapping.value;

      newMap[key] = value;
    });
    return newMap;
  },


  /**
   * Every() method tests whether all key-value pairs in the raw map pass the test implemented by the provided function.
   * @param {Object.<string,*>} map raw map.
   * @param {function(*, string, *):boolean} predicate test each key-value pair of the raw map.
   * @return {boolean} true if callback function returns a truthy value for every pair; otherwise, false.
   */
  Every: function Every(map, predicate) {
    return Object.keys(map).every(function (key) {
      return predicate(map[key], key, map);
    });
  },


  /**
   * Filter() method creates a new raw map with all key-value pairs that pass the test implemented by the provided function.
   * @param {Object.<string,*>} map raw map.
   * @param {function(Object, string, Object)} predicate test each key-value pair of the raw map.
   * @return {Object.<string,*>} A new raw map with the key-value pair pass the test. If no pair pass the test, an empty object will be returned.
   */
  Filter: function Filter(map, predicate) {
    var resultMap = {};
    Object.keys(map).forEach(function (key) {
      if (predicate(map[key], key, map)) {
        resultMap[key] = map[key];
      }
    });
    return resultMap;
  },


  /**
   * Find() method returns the value of the first key-value pair in the raw map that satisfies the provided testing function. Otherwise undefined is returned.
   * @param {Object.<string,*>} map raw map.
   * @param {function(Object, string, Object)} predicate test each key-value pair of the raw map.
   * @return {*} A value in the map if a key-value pair passes the test; otherwise, undefined
   */
  Find: function Find(map, predicate) {
    var key = Object.keys(map).find(function (key) {
      return predicate(map[key], key, map);
    });
    if (key) {
      return map[key];
    } else {
      return undefined;
    }
  },


  /**
   * Find () method returns the key of the first key-value pair in the raw map that satisfies the provided testing function. Otherwise undefined is returned.
   * @param {Object.<string,*>} map raw map.
   * @param {function(Object, string, Object)} predicate test each key-value pair of the raw map.
   * @return {string} A key in the map if a key-value pair passes the test; otherwise, undefined
   */
  FindKey: function FindKey(map, predicate) {
    return Object.keys(map).find(function (key) {
      return predicate(map[key], key, map);
    });
  },


  /**
   * Foreach() method executes a provided function once for each key-value pair.
   * @param {Object.<string,*>} map raw map.
   * @param {function(*, string, Object):void} action action for each key-value pair.
   */
  Foreach: function Foreach(map, action) {
    Object.keys(map).forEach(function (key) {
      action(map[key], key, map);
    });
  },


  /**
   * From() create a raw map from a seed array and a generator function for each seed.
   * @param {Array} seeds array of seeds.
   * @param {function(Object, number, Array):KeyValuePair} generator generator function for each seed, generate both key & value.
   * @return {Object.<string,*>}
   */
  From: function From(seeds, generator) {
    var map = {};
    seeds.forEach(function (seed, index) {
      var _generator = generator(seed, index),
          key = _generator.key,
          value = _generator.value;

      map[key] = value;
    });
    return map;
  },


  /**
   * Map() method creates a new raw map with the results of calling a provided function on every key-value pair in the calling raw map.
   * @param {Object.<string,*>} map raw map.
   * @param {function(*, string, Object):*} mapping function to produce a new value for each key-value pair.
   * @return {Object.<string,*>} A new raw map with each original keys and new values being results of the mapping funcion.
   */
  Map: function Map(map, mapping) {
    var newMap = {};
    Object.keys(map).forEach(function (key) {
      newMap[key] = mapping(map[key], key, map);
    });
    return newMap;
  },


  /**
   * Pack() packs a key and a value to a raw map.
   * @param {string} key key
   * @param {*} value value
   * @return {Object.<string,*>} packed raw map.
   */
  Pack: function Pack(key, value) {
    var pack = {};
    pack[key] = value;
    return pack;
  },


  /**
   * Slice() creates a new map with provided keys and values from source map.
   * @param {Object.<string,*>} map source map.
   * @param {Array<string>} keys keys.
   * @return {Object.<string,*>} subset map.
   */
  Slice: function Slice(map, keys) {
    return this.From(keys, function (key) {
      return { key: key, value: map[key] };
    });
  },


  /**
   * Some() method tests whether at least one key-value pair in the raw map passes the test implemented by the provided function.
   * @param {Object.<string,*>} map raw map.
   * @param {function(*, string, *):boolean} predicate predicate for each item
   * @return true if the callback function returns a truthy value for any key-value pair; otherwise, false.
   */
  Some: function Some(map, predicate) {
    return Object.keys(map).some(function (key) {
      return predicate(map[key], key, map);
    });
  },


  /**
   * Splice() removes provided keys from source map and return the removed slice as a new raw map.
   * @param {Object.<string,*>} map source map.
   * @param {Array<string>} keys keys.
   * @return {Object.<string,*>} removed slice.
   */
  Splice: function Splice(map, keys) {
    var slice = {};
    keys.forEach(function (key) {
      slice[key] = map[key];
      _JSEnvironment2.default.Delete(map, key);
    });
    return slice;
  },


  /**
   * ToMap() converts raw map to es6 map.
   * @param {Object.<string,*>} map raw map.
   * @return {Map} map object.
   */
  ToMap: function ToMap(map) {
    var newMap = new Map();
    this.Foreach(map, function (value, key) {
      return newMap.set(key, value);
    });
    return newMap;
  }
};

exports.default = RawMap;

/***/ }),

/***/ "./src/RawTree.js":
/*!************************!*\
  !*** ./src/RawTree.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _JSEnvironment = __webpack_require__(/*! ./JSEnvironment */ "./src/JSEnvironment.js");

var _JSEnvironment2 = _interopRequireDefault(_JSEnvironment);

var _Generic = __webpack_require__(/*! ./Generic */ "./src/Generic.js");

var _Generic2 = _interopRequireDefault(_Generic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * A raw tree is a deep-level javascript object.
 */
var PATH_SEPERATOR = '/';

function _EachLeaf(tree, action) {
  var currentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var seperator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : PATH_SEPERATOR;

  if (_Generic2.default.IsObject(tree)) {
    var prefix = currentPath.length > 0 ? '' + currentPath + seperator : '';
    Object.keys(tree).forEach(function (key) {
      _EachLeaf(tree[key], action, '' + prefix + key, seperator);
    });
  } else {
    action(tree, currentPath);
  }
}

var RawTree = {
  /**
   * Delete() deletes the subtree with provided path.
   * @param {Object.<string,*>} tree raw tree.
   * @param {string} path path.
   */
  Delete: function Delete(tree, path) {
    var branch = this.GetBranch(tree, path);
    if (branch) {
      return _JSEnvironment2.default.Delete(branch.parent, branch.key);
    }
    return false;
  },


  /**
   * Create a flat single-level tree of leaves with each leaf's path as it's new key.
   * @param {Object.<string,*>} tree raw tree.
   * @param {string} prefix prefix of each path.
   * @param {string} seperator seperator for path, default is /.
   * @return {Object.<string,*>} a flatten tree.
   */
  Flat: function Flat(tree) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PATH_SEPERATOR;

    var flat = {};
    _EachLeaf(tree, function (value, path) {
      flat[path] = value;
    }, prefix, seperator);
    return flat;
  },


  /**
  * @typedef Branch
  * @type {Object.<string,*>}
  * @property {Object.<string,*>} parent parent tree.
  * @property {string} key branch key.
  */

  /**
   * GetBranch() gets the parent of provided path and it's branch key.
   * @param {Object.<string,*>} tree raw tree.
   * @param {string} path path.
   * @return {Branch} A branch object describes parent and branch key of provided path.
   */
  GetBranch: function GetBranch(tree, path) {
    var keys = path.split(PATH_SEPERATOR);
    for (; keys.length > 1 && tree; tree = tree[keys.splice(0, 1)[0]]) {}
    return keys.length === 1 && tree ? { parent: tree, key: keys[0] } : null;
  },


  /**
   * Get() returns the subtree or leaf with provided path.
   * @param {Object.<string,*>} tree raw tree.
   * @param {string} path path.
   * @return {*} subtree or leaf.
   */
  Get: function Get(tree, path) {
    if (path && path.length > 0) {
      var branch = this.GetBranch(tree, path);
      return branch ? branch.parent[branch.key] : null;
    } else return tree;
  },


  /**
   * MergeExternal() merges tree and another tree into a new tree.
   * @param {Object.<string, *>} tree tree to merge.
   * @param {Object.<string, *>} anotherTree another tree to merge.
   * @return {Object.<string, *>} merged tree.
   */
  MergeExternal: function MergeExternal(tree, anotherTree) {
    var newTree = _Generic2.default.ValueClone(tree);
    this.MergeInternal(newTree, anotherTree);
    return newTree;
  },


  /**
   * MergeInternal() merges anotherTree into tree.
   * @param {Object.<string, *>} tree original tree.
   * @param {Object.<string, *>} anotherTree another tree to merged in.
   */
  MergeInternal: function MergeInternal(tree, anotherTree) {
    var _this = this;

    var flat = this.Flat(anotherTree);
    Object.keys(flat).forEach(function (path) {
      _this.Set(tree, path, flat[path]);
    });
  },


  /**
   * OperateLeafInternal() applys provided operator on each leaf value and save the result to a new tree.
   * @param {Object.<string,*>} tree source tree.
   * @param {function(...)} leafOperator operator on leaf.
   * @param {Array<Object>} operandTrees operand trees.
   * @return {Object.<string,*>} result tree.
   */
  OperateLeafExternal: function OperateLeafExternal(tree, leafOperator) {
    var newTree = _Generic2.default.ValueClone(tree);

    for (var _len = arguments.length, operandTrees = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      operandTrees[_key - 2] = arguments[_key];
    }

    this.OperateLeafInternal.apply(this, [newTree, leafOperator].concat(_toConsumableArray(operandTrees)));
    return newTree;
  },


  /**
   * OperateLeafInternal() applys provided operator on each leaf value directly in source tree.
   * @param {Object.<string,*>} tree source tree.
   * @param {function(...)} leafOperator operator on leaf.
   * @param {Array<Object.<string,*>>} operandTrees operand trees.
   */
  OperateLeafInternal: function OperateLeafInternal(tree, leafOperator) {
    for (var _len2 = arguments.length, operandTrees = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      operandTrees[_key2 - 2] = arguments[_key2];
    }

    var _this2 = this;

    Object.keys(tree).forEach(function (key) {
      if (_Generic2.default.IsObject(tree[key])) {
        _this2.OperateLeafInternal.apply(_this2, [tree[key], leafOperator].concat(_toConsumableArray(operandTrees.map(function (t) {
          return t[key];
        }))));
      } else {
        _JSEnvironment2.default.Set(tree, key, leafOperator.apply(undefined, [tree[key]].concat(_toConsumableArray(operandTrees.map(function (t) {
          return t[key];
        })))));
      }
    });
  },


  /**
   * Set() sets the subtree with provided path.
   * @param {Object.<string,*>} tree raw tree.
   * @param {string} path path..
   */
  Set: function Set(tree, path, value) {
    var keys = path.split(PATH_SEPERATOR);
    for (var i = 0; i < keys.length - 1; ++i) {
      var key = keys[i];
      if (tree[key] == null) {
        tree[key] = {};
      }
      tree = tree[key];
    }
    _JSEnvironment2.default.Set(tree, keys[keys.length - 1], value);
  },


  /**
   * Swap branch of two raw tree.
   * @param {Object.<string,*>} t1 first tree.
   * @param {Object.<string,*>} t2 second tree.
   * @param {string} path path of branch.
   */
  Swap: function Swap(t1, t2, path) {
    var s1 = this.Get(t1, path);
    var s2 = this.Get(t2, path);
    if (s1 != null && s2 != null) {
      this.Set(t1, path, s2);
      this.Set(t2, path, s1);
      return true;
    } else return false;
  }
};

exports.default = RawTree;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawTree = exports.RawMap = exports.ObjectMath = exports.ObjectFitting = exports.Generic = exports.ActiveSelector = undefined;

var _ActiveSelector = __webpack_require__(/*! ./ActiveSelector */ "./src/ActiveSelector.js");

Object.defineProperty(exports, 'ActiveSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ActiveSelector).default;
  }
});

var _Generic = __webpack_require__(/*! ./Generic */ "./src/Generic.js");

Object.defineProperty(exports, 'Generic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Generic).default;
  }
});

var _ObjectFitting = __webpack_require__(/*! ./ObjectFitting */ "./src/ObjectFitting.js");

Object.defineProperty(exports, 'ObjectFitting', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ObjectFitting).default;
  }
});

var _ObjectMath = __webpack_require__(/*! ./ObjectMath */ "./src/ObjectMath.js");

Object.defineProperty(exports, 'ObjectMath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ObjectMath).default;
  }
});

var _RawMap = __webpack_require__(/*! ./RawMap */ "./src/RawMap.js");

Object.defineProperty(exports, 'RawMap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RawMap).default;
  }
});

var _RawTree = __webpack_require__(/*! ./RawTree */ "./src/RawTree.js");

Object.defineProperty(exports, 'RawTree', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RawTree).default;
  }
});

var _JSEnvironment = __webpack_require__(/*! ./JSEnvironment */ "./src/JSEnvironment.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _JSEnvironment.JsObjectex;

/***/ })

/******/ });
});
//# sourceMappingURL=js-objectex.js.map

/***/ }),

/***/ "./src/LocaleStore.js":
/*!****************************!*\
  !*** ./src/LocaleStore.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(/*! fs */ "fs");

var _fs2 = _interopRequireDefault(_fs);

var _jsObjectex = __webpack_require__(/*! js-objectex */ "./node_modules/_js-objectex@1.0.4-beta.1@js-objectex/dist/js-objectex.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormatTranslations(raw) {
  var rawTranslations = JSON.parse(raw);
  return _jsObjectex.RawTree.Flat(rawTranslations, '', '.');
}

function LoadTranslations(locale, localePath) {
  var languageFile = localePath + '/' + locale + '.json';
  return new Promise(function (resolve, reject) {
    if (_fs2.default.existsSync(languageFile)) {
      _fs2.default.readFile(languageFile, 'utf-8', function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    } else {
      reject(new Error('404'));
    }
  });
}

function CreateStore(path, defaultLocale) {
  var LOCALE_PATH = path;

  var state = {
    locale: defaultLocale,
    translations: {}
  };

  var mutations = {
    SET: function SET(state, locale) {
      state.locale = locale;
    },
    SET_TRANSLATIONS: function SET_TRANSLATIONS(state, translations) {
      state.translations = translations;
    }
  };

  var actions = {
    SET: function SET(_ref, locale) {
      var state = _ref.state,
          commit = _ref.commit;

      LoadTranslations(locale, LOCALE_PATH).then(function (data) {
        commit('SET', locale);
        commit('SET_TRANSLATIONS', FormatTranslations(data));
      });
    }
  };

  LoadTranslations(defaultLocale, LOCALE_PATH).then(function (data) {
    state.translations = FormatTranslations(data);
  });

  return {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions
  };
}

exports.default = CreateStore;

/***/ }),

/***/ "./src/VueDynamicLocale.js":
/*!*********************************!*\
  !*** ./src/VueDynamicLocale.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(/*! fs */ "fs");

var _fs2 = _interopRequireDefault(_fs);

var _LocaleStore = __webpack_require__(/*! ./LocaleStore */ "./src/LocaleStore.js");

var _LocaleStore2 = _interopRequireDefault(_LocaleStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueDynamicLocale = {
  install: function install(Vue, _ref) {
    var store = _ref.store,
        path = _ref.path,
        defaultLocale = _ref.defaultLocale;

    path = path || 'static/locale';
    defaultLocale = defaultLocale || 'en';

    store.registerModule('locale', (0, _LocaleStore2.default)(path, defaultLocale));

    Vue.prototype.$setLocale = function (locale) {
      this.$store.dispatch('locale/SET', locale);
    };

    Vue.prototype.$getLocales = function () {
      var candidates = _fs2.default.readdirSync(path);
      return candidates.filter(function (c) {
        return c.substr(c.length - 5).toLowerCase() === '.json';
      }).map(function (c) {
        return c.substr(0, c.length - 5);
      });
    };

    Vue.mixin({
      computed: {
        $t: function $t() {
          return this.$store.state.locale.translations;
        }
      }
    });
  }
};

exports.default = VueDynamicLocale;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VueDynamicLocale = __webpack_require__(/*! ./VueDynamicLocale */ "./src/VueDynamicLocale.js");

var _VueDynamicLocale2 = _interopRequireDefault(_VueDynamicLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _VueDynamicLocale2.default;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
});
//# sourceMappingURL=vue-dynamic-locale.js.map
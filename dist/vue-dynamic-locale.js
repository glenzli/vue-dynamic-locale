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

/***/ "./node_modules/_js-objectex@1.0.2-beta.1@js-objectex/dist/js-objectex.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_js-objectex@1.0.2-beta.1@js-objectex/dist/js-objectex.js ***!
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
/*! exports provided: ActiveSelection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveSelection", function() { return ActiveSelection; });
/* harmony import */ var _JSEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSEnvironment */ "./src/JSEnvironment.js");
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Generic */ "./src/Generic.js");
/* harmony import */ var _RawMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RawMap */ "./src/RawMap.js");




function CascadeMapping (mapping, newMapping) {
  if (mapping != null) {
    if (newMapping != null) {
      return (value, key, enumerable) => newMapping(mapping(value, key, enumerable), key, enumerable)
    } else return mapping
  } else return newMapping
}

/**
 * An active selection respect specific enumerable object (Array or plain object) and give predicate
 */
class ActiveSelection {
  constructor (enumerable, predicates = [], mappings = []) {
    this._enumerable = enumerable
    this._predicates = predicates.length > 0 ? predicates : [null]
    this._mappings = mappings.length > 0 ? mappings : [null]
    this._iterateFunc = null
  }

  /**
   * Foreach() executes a provided function once for each item in selection.
   * @param {function(*, string)} action action for each item.
   */
  Foreach (action) {
    this._iterateFunc(this._enumerable, (value, key) => {
      let pass = true
      for (let i = 0; i < this._predicates.length && pass; ++i) {
        pass &= !this._predicates[i] || this._predicates[i](value, key)
        if (pass && this._mappings[i]) {
          value = this._mappings[i](value, key)
        }
      }
      if (pass) {
        action(value, key)
      }
    })
  }

  /**
   * Map() creates a new active selection with a provided function call on every item in selection.
   * @param {function(*, string):*} mapping function to produce a new value for each item.
   * @return {ActiveSelection} A new active selection.
   */
  Map (mapping) {
    let last = this._mappings.length - 1
    let lastMapping = CascadeMapping(this._mappings[last], mapping)
    let newMappings = this._mappings.slice(0, last).concat([lastMapping])
    return new (this.constructor)(this._enumerable, this._predicates, newMappings)
  }

  /**
   * Where() creates a new active selection with items pass provided test.
   * @param {*} predicate test each item of selection.
   * @return {ActiveSelection} A new active selection
   */
  Where (predicate) {
    return ActiveSelection.CreateSelection(this, predicate, null)
  }

  /**
   * Delete() deletes the selection from current enumerable.
   */
  Delete () {}

  /**
   * ToEnumerable() converts this selection to enumerable.
   */
  ToEnumerable () {}

  static CreateSelection (enumerable, predicate = null, mapping = null) {
    if (_Generic__WEBPACK_IMPORTED_MODULE_1__["default"].IsArray(enumerable)) {
      return new ArraySelection(enumerable, [predicate], [mapping])
    } else if (_Generic__WEBPACK_IMPORTED_MODULE_1__["default"].IsObject(enumerable)) {
      if (!(enumerable instanceof ActiveSelection)) {
        return new RawMapSelection(enumerable, [predicate], [mapping])
      } else {
        let newPredicates = enumerable._predicates.concat([predicate])
        let newMappings = enumerable._mappings.concat([mapping])
        return new (enumerable.constructor)(enumerable._enumerable, newPredicates, newMappings)
      }
    } else return null
  }
}

class ArraySelection extends ActiveSelection {
  constructor (array, predicates = [], mappings = []) {
    super(array, predicates, mappings)
    this._iterateFunc = (array, action) => array.forEach(action)
  }

  Delete () {
    let indexes = []
    this.Foreach((value, index) => indexes.push(index))
    indexes.sort((a, b) => b - a).forEach(index => {
      this._enumerable.splice(index, 1)
    })
  }

  ToEnumerable () {
    let results = []
    this.Foreach(value => { results.push(value) })
    return results
  }
}

class RawMapSelection extends ActiveSelection {
  constructor (rawMap, predicates = [], mappings = []) {
    super(rawMap, predicates, mappings)
    this._iterateFunc = _RawMap__WEBPACK_IMPORTED_MODULE_2__["default"].Foreach
  }

  Delete () {
    let keys = []
    this.Foreach((value, key) => keys.push(key))
    keys.forEach(key => _JSEnvironment__WEBPACK_IMPORTED_MODULE_0__["default"].Delete(this._enumerable, key))
  }

  ToEnumerable () {
    let results = {}
    this.Foreach((value, key) => { results[key] = value })
    return results
  }
}

const ActiveSelector = {
  Where (enumerable, predicate) {
    return ActiveSelection.CreateSelection(enumerable, predicate)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ActiveSelector);


/***/ }),

/***/ "./src/Generic.js":
/*!************************!*\
  !*** ./src/Generic.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Generic = {
  /**
   * Find the common value of provided array; for object array, first object is used for key reference, only property with common parts has key in result object.
   * @param {Array} values values to extract.
   * @param {number} eps eps for number equalitiy.
   * @return {*} common value.
   */
  Common (values, eps = 0) {
    if (values.length > 1) {
      let reference = values[0]
      if (this.IsObject(reference) && !this.IsArray(reference)) {
        if (!values.some(value => value == null || !this.IsObject(value))) {
          let common = {}
          Object.keys(reference).forEach(key => {
            let subCommon = this.Common(values.map(value => value[key]), eps)
            if (subCommon != null) {
              common[key] = subCommon
            }
          })
          return common
        } else return null
      } else {
        return values.every(value => this.ValueEquals(value, reference, eps)) ? reference : null
      }
    } else return values[0]
  },

  /**
   * IsArray() determines whether the target is array.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is array; otherwise, false.
   */
  IsArray (target) {
    return Array.isArray(target)
  },

  /**
   * IsObject() determines whether the target is object.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is non-null object; otherwise, false.
   */
  IsObject (target) {
    return target === Object(target)
  },

  /**
   * IsNumber() determines whether the target is number.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is number; otherwise, false.
   */
  IsNumber (target) {
    return typeof target === 'number'
  },

  /**
   * IsString() determines whether the target is string.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is string; otherwise, false.
   */
  IsString (target) {
    return typeof target === 'string'
  },

  /**
   * IsInstance() determines whether the target is class instance.
   * @param {*} target arbitrary target.
   * @return {boolean} true if the target is class instance; otherwise, false.
   */
  IsInstance (target) {
    return this.IsObject(target) && target.constructor.name !== 'Object'
  },

  /**
   * IsEmpty() determines whether the target is empty (array of zero length, object without any property, null or undefined).
   * @param {Object.<string,*>} object arbitrary object
   * @return {boolean} true if object is empty; otherwise, false.
   */
  IsEmpty (object) {
    return object == null || (this.IsObject(object) && Object.keys(object).length === 0)
  },

  /**
   * ValueClone() makes a deep value copy of given object.
   * @param {*} object arbitrary object to copy.
   * @return {*} value clone of given object.
   */
  ValueClone (object) {
    if (this.IsArray(object)) {
      let clone = object.slice()
      clone.forEach((value, index) => {
        clone[index] = this.ValueClone(value)
      })
      return clone
    } else if (this.IsObject(object)) {
      let clone = Object.assign({}, object)
      Object.keys(clone).forEach(key => {
        clone[key] = this.ValueClone(object[key])
      })
      return clone
    } else return object
  },

  /**
   * ValueEquals() does value compare for two arbitrary operands.
   * @param {*} o1 arbitary operand.
   * @param {*} o2 arbitary operand.
   * @param {number} eps maximum value for float equality.
   * @return {boolean} true if the two operands are value equal; otherwise, false.
   */
  ValueEquals (o1, o2, eps = 0) {
    if (this.IsObject(o1) && this.IsObject(o2)) {
      if (this.IsArray(o1)) {
        if (o1.length === o2.length) {
          return o1.every((value, index) => this.ValueEquals(value, o2[value]))
        }
      } else {
        return Object.keys(o1).length === Object.keys(o2).length && Object.keys(o1).every(key => this.ValueEquals(o1[key], o2[key]))
      }
    } else if (this.IsNumber(o1) && this.IsNumber(o2)) {
      return Math.abs(o1 - o2) <= eps
    }
    return o1 === o2
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Generic);


/***/ }),

/***/ "./src/JSEnvironment.js":
/*!******************************!*\
  !*** ./src/JSEnvironment.js ***!
  \******************************/
/*! exports provided: default, JsObjectex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsObjectex", function() { return JsObjectex; });
const JSEnvironment = {
  Set (target, key, value) {
    target[key] = value
  },

  Delete (target, key) {
    delete target[key]
  }
}

const JsObjectex = {
  InstallVue (Vue) {
    JSEnvironment.Set = Vue.set
    JSEnvironment.Delete = Vue.delete
  }
}

/* harmony default export */ __webpack_exports__["default"] = (JSEnvironment);



/***/ }),

/***/ "./src/ObjectFitting.js":
/*!******************************!*\
  !*** ./src/ObjectFitting.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectFitting; });
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generic */ "./src/Generic.js");
/* harmony import */ var _RawMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawMap */ "./src/RawMap.js");
/* harmony import */ var _ObjectMath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ObjectMath */ "./src/ObjectMath.js");




const FITTING_EPS = 0.01

function FitNumeric (percentage, start, end) {
  return start + (end - start) * percentage
}

function FitSingleton (percentage, start, end) {
  return percentage > 0.5 ? end : start
}

function FitRound (percentage, start, end) {
  return _ObjectMath__WEBPACK_IMPORTED_MODULE_2__["default"].Round(FitNumeric(percentage, start, end))
}

function FitLazy (percentage, start, end) {
  if (percentage < FITTING_EPS || end == null) {
    return start
  } else if (percentage > 1 - FITTING_EPS) {
    return end
  }
  return null
}

class ObjectFitting {
  constructor (lazy = false) {
    this._lazy = lazy
    this._customFittingProperties = new Map()
    this._customFittings = new Map()
    this._typeProperties = []
    this._DefaultRegister()
  }

  _DefaultRegister () {
    this.RegisterCustomFitting('singleton', FitSingleton)
    this.RegisterCustomFitting('round', FitRound)
  }

  IsFittable (start, end) {
    if (end != null && typeof start === typeof end) {
      return this._typeProperties.every(key => !start.hasOwnProperty(key) || _Generic__WEBPACK_IMPORTED_MODULE_0__["default"].ValueEquals(start[key], end[key]))
    }
    return false
  }

  _FitCustom (percentage, start, end, property) {
    let custom = this._customFittingProperties.get(property)
    if (custom) {
      return this._customFittings.get(custom)(percentage, start[property], end[property])
    } else {
      return this.Fit(percentage, start[property], end[property])
    }
  }

  Fit (percentage, start, end) {
    if (_Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsArray(start)) {
      let fit = this._lazy ? FitLazy(percentage, start, end) : null
      if (fit == null) {
        if (start.length !== end.length) {
          return FitSingleton(percentage, start, end)
        } else {
          fit = start.map((value, index) => this.Fit(percentage, value, end[index]))
        }
      }
      return fit
    } else if (_Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsObject(start) && this.IsFittable(start, end)) {
      let fit = this._lazy ? FitLazy(percentage, start, end) : null
      if (fit == null) {
        fit = _Generic__WEBPACK_IMPORTED_MODULE_0__["default"].ValueClone(start)
        _RawMap__WEBPACK_IMPORTED_MODULE_1__["default"].Foreach(fit, (_, property) => { fit[property] = this._FitCustom(percentage, start, end, property) })
      }
      return fit
    } else if (_Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsNumber(start)) {
      let fit = this._lazy ? FitLazy(percentage, start, end) : null
      if (fit == null) {
        fit = _Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsNumber(end) ? FitNumeric(percentage, start, end) : FitSingleton(percentage, start, end)
      }
      return fit
    } else {
      return FitSingleton(percentage, start, end)
    }
  }

  RegisterCustomFitting (name, fitting) {
    this._customFittings.set(name, fitting)
  }

  RegisterCustomProperty (property, fittingName) {
    this._customFittingProperties.set(property, fittingName)
  }

  RegisterTypeProperty (property) {
    if (!this._typeProperties.includes(property)) {
      this._typeProperties.push(property)
    }
  }
}


/***/ }),

/***/ "./src/ObjectMath.js":
/*!***************************!*\
  !*** ./src/ObjectMath.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generic */ "./src/Generic.js");
/* harmony import */ var _RawMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawMap */ "./src/RawMap.js");
/* harmony import */ var _RawTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RawTree */ "./src/RawTree.js");




const _SINGLES = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil', 'cos', 'cosh', 'exp', 'floor', 'log', 'log10', 'log2', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc']

const ObjectMath = {
  ..._RawMap__WEBPACK_IMPORTED_MODULE_1__["default"].From(_SINGLES.filter(f => Math[f] != null), f => ({
    key: f[0].toUpperCase() + f.substr(1),
    value: function (x) {
      if (_Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsObject(x)) {
        return _RawTree__WEBPACK_IMPORTED_MODULE_2__["default"].OperateLeafExternal(x, xVal => {
          return _Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsNumber(xVal) ? Math[f](xVal) : xVal
        })
      } else return Math[f](x)
    }
  })),

  Atan2 (y, x) {
    if (_Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsObject(x) && _Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsObject(y)) {
      return _RawTree__WEBPACK_IMPORTED_MODULE_2__["default"].OperateLeafExternal(y, (yVal, xVal) => Math.atan2(yVal, xVal), x)
    } else return Math.atan2(y, x)
  },

  Max (x, ...ys) {
    if (_Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsObject(x) && ys.every(y => _Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsObject(y))) {
      return _RawTree__WEBPACK_IMPORTED_MODULE_2__["default"].OperateLeafExternal(x, (xVal, ...yVals) => Math.max(xVal, ...yVals), ...ys)
    } else return Math.max(x, ...ys)
  },

  Min (x, ...ys) {
    if (_Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsObject(x) && ys.every(y => _Generic__WEBPACK_IMPORTED_MODULE_0__["default"].IsObject(y))) {
      return _RawTree__WEBPACK_IMPORTED_MODULE_2__["default"].OperateLeafExternal(x, (xVal, ...yVals) => Math.min(xVal, ...yVals), ...ys)
    } else return Math.min(x, ...ys)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ObjectMath);


/***/ }),

/***/ "./src/RawMap.js":
/*!***********************!*\
  !*** ./src/RawMap.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JSEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSEnvironment */ "./src/JSEnvironment.js");


/**
 * A raw map is a javascript object used as map.
 */
const RawMap = {
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
  DoubleMap (map, mapping) {
    let newMap = {}
    Object.keys(map).forEach(oldKey => {
      let { key, value } = mapping(map[oldKey], oldKey, map)
      newMap[key] = value
    })
    return newMap
  },

  /**
   * Every() method tests whether all key-value pairs in the raw map pass the test implemented by the provided function.
   * @param {Object.<string,*>} map raw map.
   * @param {function(*, string, *):boolean} predicate test each key-value pair of the raw map.
   * @return {boolean} true if callback function returns a truthy value for every pair; otherwise, false.
   */
  Every (map, predicate) {
    return Object.keys(map).every(key => predicate(map[key], key, map))
  },

  /**
   * Filter() method creates a new raw map with all key-value pairs that pass the test implemented by the provided function.
   * @param {Object.<string,*>} map raw map.
   * @param {function(Object, string, Object)} predicate test each key-value pair of the raw map.
   * @return {Object.<string,*>} A new raw map with the key-value pair pass the test. If no pair pass the test, an empty object will be returned.
   */
  Filter (map, predicate) {
    let resultMap = {}
    Object.keys(map).forEach(key => {
      if (predicate(map[key], key, map)) {
        resultMap[key] = map[key]
      }
    })
    return resultMap
  },

  /**
   * Find() method returns the value of the first key-value pair in the raw map that satisfies the provided testing function. Otherwise undefined is returned.
   * @param {Object.<string,*>} map raw map.
   * @param {function(Object, string, Object)} predicate test each key-value pair of the raw map.
   * @return {*} A value in the map if a key-value pair passes the test; otherwise, undefined
   */
  Find (map, predicate) {
    let key = Object.keys(map).find(key => predicate(map[key], key, map))
    if (key) {
      return map[key]
    } else {
      return undefined
    }
  },

  /**
   * Find () method returns the key of the first key-value pair in the raw map that satisfies the provided testing function. Otherwise undefined is returned.
   * @param {Object.<string,*>} map raw map.
   * @param {function(Object, string, Object)} predicate test each key-value pair of the raw map.
   * @return {string} A key in the map if a key-value pair passes the test; otherwise, undefined
   */
  FindKey (map, predicate) {
    return Object.keys(map).find(key => predicate(map[key], key, map))
  },

  /**
   * Foreach() method executes a provided function once for each key-value pair.
   * @param {Object.<string,*>} map raw map.
   * @param {function(*, string, Object):void} action action for each key-value pair.
   */
  Foreach (map, action) {
    Object.keys(map).forEach(key => {
      action(map[key], key, map)
    })
  },

  /**
   * From() create a raw map from a seed array and a generator function for each seed.
   * @param {Array} seeds array of seeds.
   * @param {function(Object, number, Array):KeyValuePair} generator generator function for each seed, generate both key & value.
   * @return {Object.<string,*>}
   */
  From (seeds, generator) {
    let map = {}
    seeds.forEach((seed, index) => {
      let { key, value } = generator(seed, index)
      map[key] = value
    })
    return map
  },

  /**
   * Map() method creates a new raw map with the results of calling a provided function on every key-value pair in the calling raw map.
   * @param {Object.<string,*>} map raw map.
   * @param {function(*, string, Object):*} mapping function to produce a new value for each key-value pair.
   * @return {Object.<string,*>} A new raw map with each original keys and new values being results of the mapping funcion.
   */
  Map (map, mapping) {
    let newMap = {}
    Object.keys(map).forEach(key => {
      newMap[key] = mapping(map[key], key, map)
    })
    return newMap
  },

  /**
   * Pack() packs a key and a value to a raw map.
   * @param {string} key key
   * @param {*} value value
   * @return {Object.<string,*>} packed raw map.
   */
  Pack (key, value) {
    let pack = {}
    pack[key] = value
    return pack
  },

  /**
   * Slice() creates a new map with provided keys and values from source map.
   * @param {Object.<string,*>} map source map.
   * @param {Array<string>} keys keys.
   * @return {Object.<string,*>} subset map.
   */
  Slice (map, keys) {
    return this.From(keys, key => ({ key, value: map[key] }))
  },

  /**
   * Some() method tests whether at least one key-value pair in the raw map passes the test implemented by the provided function.
   * @param {Object.<string,*>} map raw map.
   * @param {function(*, string, *):boolean} predicate predicate for each item
   * @return true if the callback function returns a truthy value for any key-value pair; otherwise, false.
   */
  Some (map, predicate) {
    return Object.keys(map).some(key => predicate(map[key], key, map))
  },

  /**
   * Splice() removes provided keys from source map and return the removed slice as a new raw map.
   * @param {Object.<string,*>} map source map.
   * @param {Array<string>} keys keys.
   * @return {Object.<string,*>} removed slice.
   */
  Splice (map, keys) {
    let slice = {}
    keys.forEach(key => {
      slice[key] = map[key]
      _JSEnvironment__WEBPACK_IMPORTED_MODULE_0__["default"].Delete(map, key)
    })
    return slice
  },

  /**
   * ToMap() converts raw map to es6 map.
   * @param {Object.<string,*>} map raw map.
   * @return {Map} map object.
   */
  ToMap (map) {
    let newMap = new Map()
    this.Foreach(map, (value, key) => newMap.set(key, value))
    return newMap
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RawMap);


/***/ }),

/***/ "./src/RawTree.js":
/*!************************!*\
  !*** ./src/RawTree.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JSEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSEnvironment */ "./src/JSEnvironment.js");
/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Generic */ "./src/Generic.js");



/**
 * A raw tree is a deep-level javascript object.
 */
const PATH_SEPERATOR = '/'

function _EachLeaf (tree, action, currentPath = '', seperator = PATH_SEPERATOR) {
  if (_Generic__WEBPACK_IMPORTED_MODULE_1__["default"].IsObject(tree)) {
    let prefix = currentPath.length > 0 ? `${currentPath}${seperator}` : ''
    Object.keys(tree).forEach(key => {
      _EachLeaf(tree[key], action, `${prefix}${key}`, seperator)
    })
  } else {
    action(tree, currentPath)
  }
}

const RawTree = {
  /**
   * Delete() deletes the subtree with provided path.
   * @param {Object.<string,*>} tree raw tree.
   * @param {string} path path.
   */
  Delete (tree, path) {
    let branch = this.GetBranch(tree, path)
    if (branch) {
      return _JSEnvironment__WEBPACK_IMPORTED_MODULE_0__["default"].Delete(branch.parent, branch.key)
    }
    return false
  },

  /**
   * Create a flat single-level tree of leaves with each leaf's path as it's new key.
   * @param {Object.<string,*>} tree raw tree.
   * @param {string} prefix prefix of each path.
   * @param {string} seperator seperator for path, default is /.
   * @return {Object.<string,*>} a flatten tree.
   */
  Flat (tree, prefix = '', seperator = PATH_SEPERATOR) {
    let flat = {}
    _EachLeaf(tree, (value, path) => {
      flat[path] = value
    }, prefix, seperator)
    return flat
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
  GetBranch (tree, path) {
    let keys = path.split(PATH_SEPERATOR)
    for (; keys.length > 1 && tree; tree = tree[keys.splice(0, 1)[0]]) {}
    return (keys.length === 1 && tree) ? { parent: tree, key: keys[0] } : null
  },

  /**
   * Get() returns the subtree or leaf with provided path.
   * @param {Object.<string,*>} tree raw tree.
   * @param {string} path path.
   * @return {*} subtree or leaf.
   */
  Get (tree, path) {
    if (path && path.length > 0) {
      let branch = this.GetBranch(tree, path)
      return branch ? branch.parent[branch.key] : null
    } else return tree
  },

  /**
   * MergeExternal() merges tree and another tree into a new tree.
   * @param {Object.<string, *>} tree tree to merge.
   * @param {Object.<string, *>} anotherTree another tree to merge.
   * @return {Object.<string, *>} merged tree.
   */
  MergeExternal (tree, anotherTree) {
    let newTree = _Generic__WEBPACK_IMPORTED_MODULE_1__["default"].ValueClone(tree)
    this.MergeInternal(newTree, anotherTree)
    return newTree
  },

  /**
   * MergeInternal() merges anotherTree into tree.
   * @param {Object.<string, *>} tree original tree.
   * @param {Object.<string, *>} anotherTree another tree to merged in.
   */
  MergeInternal (tree, anotherTree) {
    let flat = this.Flat(anotherTree)
    Object.keys(flat).forEach(path => {
      this.Set(tree, path, flat[path])
    })
  },

  /**
   * OperateLeafInternal() applys provided operator on each leaf value and save the result to a new tree.
   * @param {Object.<string,*>} tree source tree.
   * @param {function(...)} leafOperator operator on leaf.
   * @param {Array<Object>} operandTrees operand trees.
   * @return {Object.<string,*>} result tree.
   */
  OperateLeafExternal (tree, leafOperator, ...operandTrees) {
    let newTree = _Generic__WEBPACK_IMPORTED_MODULE_1__["default"].ValueClone(tree)
    this.OperateLeafInternal(newTree, leafOperator, ...operandTrees)
    return newTree
  },

  /**
   * OperateLeafInternal() applys provided operator on each leaf value directly in source tree.
   * @param {Object.<string,*>} tree source tree.
   * @param {function(...)} leafOperator operator on leaf.
   * @param {Array<Object.<string,*>>} operandTrees operand trees.
   */
  OperateLeafInternal (tree, leafOperator, ...operandTrees) {
    Object.keys(tree).forEach(key => {
      if (_Generic__WEBPACK_IMPORTED_MODULE_1__["default"].IsObject(tree[key])) {
        this.OperateLeafInternal(tree[key], leafOperator, ...operandTrees.map(t => t[key]))
      } else {
        _JSEnvironment__WEBPACK_IMPORTED_MODULE_0__["default"].Set(tree, key, leafOperator(tree[key], ...operandTrees.map(t => t[key])))
      }
    })
  },

  /**
   * Set() sets the subtree with provided path.
   * @param {Object.<string,*>} tree raw tree.
   * @param {string} path path..
   */
  Set (tree, path, value) {
    let keys = path.split(PATH_SEPERATOR)
    for (let i = 0; i < keys.length - 1; ++i) {
      let key = keys[i]
      if (tree[key] == null) {
        tree[key] = {}
      }
      tree = tree[key]
    }
    _JSEnvironment__WEBPACK_IMPORTED_MODULE_0__["default"].Set(tree, keys[keys.length - 1], value)
  },

  /**
   * Swap branch of two raw tree.
   * @param {Object.<string,*>} t1 first tree.
   * @param {Object.<string,*>} t2 second tree.
   * @param {string} path path of branch.
   */
  Swap (t1, t2, path) {
    let s1 = this.Get(t1, path)
    let s2 = this.Get(t2, path)
    if (s1 != null && s2 != null) {
      this.Set(t1, path, s2)
      this.Set(t2, path, s1)
      return true
    } else return false
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RawTree);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, ActiveSelector, Generic, ObjectFitting, ObjectMath, RawMap, RawTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JSEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSEnvironment */ "./src/JSEnvironment.js");
/* harmony import */ var _ActiveSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveSelector */ "./src/ActiveSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveSelector", function() { return _ActiveSelector__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Generic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Generic */ "./src/Generic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Generic", function() { return _Generic__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ObjectFitting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObjectFitting */ "./src/ObjectFitting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectFitting", function() { return _ObjectFitting__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ObjectMath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ObjectMath */ "./src/ObjectMath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectMath", function() { return _ObjectMath__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _RawMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RawMap */ "./src/RawMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawMap", function() { return _RawMap__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _RawTree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RawTree */ "./src/RawTree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawTree", function() { return _RawTree__WEBPACK_IMPORTED_MODULE_6__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_JSEnvironment__WEBPACK_IMPORTED_MODULE_0__["JsObjectex"]);








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

var _jsObjectex = __webpack_require__(/*! js-objectex */ "./node_modules/_js-objectex@1.0.2-beta.1@js-objectex/dist/js-objectex.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormatTranslations(raw) {
  var rawTranslations = JSON.parse(raw);
  var flat = _jsObjectex.RawTree.Flat(rawTranslations, '', '.');
  return _jsObjectex.RawMap.DoubleMap(flat, function (value, key) {
    return {
      key: key.endsWith('..') ? key.substr(0, key.length - 2) : key,
      value: value
    };
  });
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

function CreateStore(path) {
  var LOCALE_PATH = path;

  var state = {
    locale: '',
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

    store.registerModule('locale', (0, _LocaleStore2.default)(path));
    store.dispatch('locale/SET', defaultLocale);

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
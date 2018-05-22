(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("js-objectex"));
	else if(typeof define === 'function' && define.amd)
		define(["js-objectex"], factory);
	else if(typeof exports === 'object')
		exports["VueDynamicLocale"] = factory(require("js-objectex"));
	else
		root["VueDynamicLocale"] = factory(root["js-objectex"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE_js_objectex__) {
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

var _jsObjectex = __webpack_require__(/*! js-objectex */ "js-objectex");

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

/***/ }),

/***/ "js-objectex":
/*!******************************!*\
  !*** external "js-objectex" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_js_objectex__;

/***/ })

/******/ });
});
//# sourceMappingURL=vue-dynamic-locale.js.map
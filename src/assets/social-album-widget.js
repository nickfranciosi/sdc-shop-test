/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("37fa");
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
   /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 
  
  /***/ }),
  
  /***/ "014b":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // ECMAScript 6 symbols shim
  var global = __webpack_require__("e53d");
  var has = __webpack_require__("07e3");
  var DESCRIPTORS = __webpack_require__("8e60");
  var $export = __webpack_require__("63b6");
  var redefine = __webpack_require__("9138");
  var META = __webpack_require__("ebfd").KEY;
  var $fails = __webpack_require__("294c");
  var shared = __webpack_require__("dbdb");
  var setToStringTag = __webpack_require__("45f2");
  var uid = __webpack_require__("62a0");
  var wks = __webpack_require__("5168");
  var wksExt = __webpack_require__("ccb9");
  var wksDefine = __webpack_require__("6718");
  var enumKeys = __webpack_require__("47ee");
  var isArray = __webpack_require__("9003");
  var anObject = __webpack_require__("e4ae");
  var isObject = __webpack_require__("f772");
  var toObject = __webpack_require__("241e");
  var toIObject = __webpack_require__("36c3");
  var toPrimitive = __webpack_require__("1bc3");
  var createDesc = __webpack_require__("aebd");
  var _create = __webpack_require__("a159");
  var gOPNExt = __webpack_require__("0395");
  var $GOPD = __webpack_require__("bf0b");
  var $GOPS = __webpack_require__("9aa9");
  var $DP = __webpack_require__("d9f6");
  var $keys = __webpack_require__("c3a1");
  var gOPD = $GOPD.f;
  var dP = $DP.f;
  var gOPN = gOPNExt.f;
  var $Symbol = global.Symbol;
  var $JSON = global.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var PROTOTYPE = 'prototype';
  var HIDDEN = wks('_hidden');
  var TO_PRIMITIVE = wks('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = shared('symbol-registry');
  var AllSymbols = shared('symbols');
  var OPSymbols = shared('op-symbols');
  var ObjectProto = Object[PROTOTYPE];
  var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
  var QObject = global.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
  
  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = DESCRIPTORS && $fails(function () {
    return _create(dP({}, 'a', {
      get: function () { return dP(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP(it, key, D);
    if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
  } : dP;
  
  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
  };
  
  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };
  
  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _create(D, { enumerable: createDesc(0, false) });
      } return setSymbolDesc(it, key, D);
    } return dP(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
    var D = gOPD(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN(toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    } return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    } return result;
  };
  
  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto) $set.call(OPSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      };
      if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
      return this._k;
    });
  
    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f = $defineProperty;
    __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
    __webpack_require__("355d").f = $propertyIsEnumerable;
    $GOPS.f = $getOwnPropertySymbols;
  
    if (DESCRIPTORS && !__webpack_require__("b8e3")) {
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }
  
    wksExt.f = function (name) {
      return wrap(wks(name));
    };
  }
  
  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
  
  for (var es6Symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
  
  for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
  
  $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () { setter = true; },
    useSimple: function () { setter = false; }
  });
  
  $export($export.S + $export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });
  
  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });
  
  $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return $GOPS.f(toObject(it));
    }
  });
  
  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });
  
  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(global.JSON, 'JSON', true);
  
  
  /***/ }),
  
  /***/ "0395":
  /***/ (function(module, exports, __webpack_require__) {
  
  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var toIObject = __webpack_require__("36c3");
  var gOPN = __webpack_require__("6abf").f;
  var toString = {}.toString;
  
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];
  
  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };
  
  module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
  };
  
  
  /***/ }),
  
  /***/ "07e3":
  /***/ (function(module, exports) {
  
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
  
  
  /***/ }),
  
  /***/ "0fc9":
  /***/ (function(module, exports, __webpack_require__) {
  
  var toInteger = __webpack_require__("3a38");
  var max = Math.max;
  var min = Math.min;
  module.exports = function (index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };
  
  
  /***/ }),
  
  /***/ "1173":
  /***/ (function(module, exports) {
  
  module.exports = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
      throw TypeError(name + ': incorrect invocation!');
    } return it;
  };
  
  
  /***/ }),
  
  /***/ "1654":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var $at = __webpack_require__("71c1")(true);
  
  // 21.1.3.27 String.prototype[@@iterator]()
  __webpack_require__("30f1")(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });
  
  
  /***/ }),
  
  /***/ "1691":
  /***/ (function(module, exports) {
  
  // IE 8- don't enum bug keys
  module.exports = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');
  
  
  /***/ }),
  
  /***/ "1ac2":
  /***/ (function(module, exports, __webpack_require__) {
  
  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__("b43c");
  if(typeof content === 'string') content = [[module.i, content, '']];
  if(content.locals) module.exports = content.locals;
  // add CSS to Shadow Root
  var add = __webpack_require__("35d6").default
  module.exports.__inject__ = function (shadowRoot) {
    add("457af281", content, shadowRoot)
  };
  
  /***/ }),
  
  /***/ "1bc3":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject = __webpack_require__("f772");
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  module.exports = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };
  
  
  /***/ }),
  
  /***/ "1ec9":
  /***/ (function(module, exports, __webpack_require__) {
  
  var isObject = __webpack_require__("f772");
  var document = __webpack_require__("e53d").document;
  // typeof document.createElement is 'object' in old IE
  var is = isObject(document) && isObject(document.createElement);
  module.exports = function (it) {
    return is ? document.createElement(it) : {};
  };
  
  
  /***/ }),
  
  /***/ "2083":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b2ca");
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
   /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 
  
  /***/ }),
  
  /***/ "2350":
  /***/ (function(module, exports) {
  
  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function(useSourceMap) {
    var list = [];
  
    // return the list of modules as css string
    list.toString = function toString() {
      return this.map(function (item) {
        var content = cssWithMappingToString(item, useSourceMap);
        if(item[2]) {
          return "@media " + item[2] + "{" + content + "}";
        } else {
          return content;
        }
      }).join("");
    };
  
    // import a list of modules into the list
    list.i = function(modules, mediaQuery) {
      if(typeof modules === "string")
        modules = [[null, modules, ""]];
      var alreadyImportedModules = {};
      for(var i = 0; i < this.length; i++) {
        var id = this[i][0];
        if(typeof id === "number")
          alreadyImportedModules[id] = true;
      }
      for(i = 0; i < modules.length; i++) {
        var item = modules[i];
        // skip already imported module
        // this implementation is not 100% perfect for weird media query combinations
        //  when a module is imported multiple times with different media queries.
        //  I hope this will never occur (Hey this way we have smaller bundles)
        if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
          if(mediaQuery && !item[2]) {
            item[2] = mediaQuery;
          } else if(mediaQuery) {
            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
          }
          list.push(item);
        }
      }
    };
    return list;
  };
  
  function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || '';
    var cssMapping = item[3];
    if (!cssMapping) {
      return content;
    }
  
    if (useSourceMap && typeof btoa === 'function') {
      var sourceMapping = toComment(cssMapping);
      var sourceURLs = cssMapping.sources.map(function (source) {
        return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
      });
  
      return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
  
    return [content].join('\n');
  }
  
  // Adapted from convert-source-map (MIT)
  function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  
    return '/*# ' + data + ' */';
  }
  
  
  /***/ }),
  
  /***/ "241e":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 7.1.13 ToObject(argument)
  var defined = __webpack_require__("25eb");
  module.exports = function (it) {
    return Object(defined(it));
  };
  
  
  /***/ }),
  
  /***/ "2483":
  /***/ (function(module, exports, __webpack_require__) {
  
  exports = module.exports = __webpack_require__("2350")(false);
  // imports
  
  
  // module
  exports.push([module.i, ".SocialAlbumWidget{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.SocialAlbumWidget-grid{display:grid;grid-gap:.5rem .5rem;grid-template-columns:auto}@media screen and (min-width:768px){.SocialAlbumWidget-grid{grid-gap:1rem 1rem;grid-template-columns:repeat(5,1fr)}}.SocialAlbumWidget-item:nth-child(9n+1),.SocialAlbumWidget-item:nth-child(9n+6){grid-column:span 2;grid-row:span 2}@media screen and (max-width:768px){.SocialAlbumWidget-item:nth-child(5n){grid-column:span 1;grid-row:span 1}}.SocialAlbumWidget-imageContainer{height:0;overflow:hidden;padding-top:100%;position:relative}.SocialAlbumWidget-image{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:0}.SocialAlbumWidget-imageOverlay{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(87,0,255,.75);bottom:0;cursor:pointer;left:0;opacity:0;position:absolute;right:0;top:0;-webkit-transition:opacity .2s cubic-bezier(.2,.51,.76,.72);transition:opacity .2s cubic-bezier(.2,.51,.76,.72);z-index:1}.SocialAlbumWidget-controls,.SocialAlbumWidget-imageOverlay{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.SocialAlbumWidget-controls{margin-top:1rem}@media (hover:hover){.SocialAlbumWidget-item:hover .SocialAlbumWidget-imageOverlay{opacity:1}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.SocialAlbumWidget-grid{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.SocialAlbumWidget-item{width:19%;margin:.5%}}", ""]);
  
  // exports
  
  
  /***/ }),
  
  /***/ "24c5":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var LIBRARY = __webpack_require__("b8e3");
  var global = __webpack_require__("e53d");
  var ctx = __webpack_require__("d864");
  var classof = __webpack_require__("40c3");
  var $export = __webpack_require__("63b6");
  var isObject = __webpack_require__("f772");
  var aFunction = __webpack_require__("79aa");
  var anInstance = __webpack_require__("1173");
  var forOf = __webpack_require__("a22a");
  var speciesConstructor = __webpack_require__("f201");
  var task = __webpack_require__("4178").set;
  var microtask = __webpack_require__("aba2")();
  var newPromiseCapabilityModule = __webpack_require__("656e");
  var perform = __webpack_require__("4439");
  var userAgent = __webpack_require__("bc13");
  var promiseResolve = __webpack_require__("cd78");
  var PROMISE = 'Promise';
  var TypeError = global.TypeError;
  var process = global.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8 || '';
  var $Promise = global[PROMISE];
  var isNode = classof(process) == 'process';
  var empty = function () { /* empty */ };
  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
  
  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);
      var FakePromise = (promise.constructor = {})[__webpack_require__("5168")('species')] = function (exec) {
        exec(empty, empty);
      };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode || typeof PromiseRejectionEvent == 'function')
        && promise.then(empty) instanceof FakePromise
        // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // we can't detect it synchronously, so just check versions
        && v8.indexOf('6.6') !== 0
        && userAgent.indexOf('Chrome/66') === -1;
    } catch (e) { /* empty */ }
  }();
  
  // helpers
  var isThenable = function (it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var notify = function (promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;
      var run = function (reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }
            if (handler === true) result = value;
            else {
              if (domain) domain.enter();
              result = handler(value); // may throw
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(TypeError('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };
      while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };
  var onUnhandled = function (promise) {
    task.call(global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;
      if (unhandled) {
        result = perform(function () {
          if (isNode) {
            process.emit('unhandledRejection', value, promise);
          } else if (handler = global.onunhandledrejection) {
            handler({ promise: promise, reason: value });
          } else if ((console = global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
      } promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };
  var isUnhandled = function (promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };
  var onHandleUnhandled = function (promise) {
    task.call(global, function () {
      var handler;
      if (isNode) {
        process.emit('rejectionHandled', promise);
      } else if (handler = global.onrejectionhandled) {
        handler({ promise: promise, reason: promise._v });
      }
    });
  };
  var $reject = function (value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function (value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if (promise === value) throw TypeError("Promise can't be resolved itself");
      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = { _w: promise, _d: false }; // wrap
          try {
            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e); // wrap
    }
  };
  
  // constructor polyfill
  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      anInstance(this, $Promise, PROMISE, '_h');
      aFunction(executor);
      Internal.call(this);
      try {
        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
      this._c = [];             // <- awaiting reactions
      this._a = undefined;      // <- checked in isUnhandled reactions
      this._s = 0;              // <- state
      this._d = false;          // <- done
      this._v = undefined;      // <- value
      this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false;          // <- notify
    };
    Internal.prototype = __webpack_require__("5c95")($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode ? process.domain : undefined;
        this._c.push(reaction);
        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function () {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = ctx($resolve, promise, 1);
      this.reject = ctx($reject, promise, 1);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
      return C === $Promise || C === Wrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };
  }
  
  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
  __webpack_require__("45f2")($Promise, PROMISE);
  __webpack_require__("4c95")(PROMISE);
  Wrapper = __webpack_require__("584a")[PROMISE];
  
  // statics
  $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
    }
  });
  $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("4ee1")(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = perform(function () {
        forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });
  
  
  /***/ }),
  
  /***/ "25eb":
  /***/ (function(module, exports) {
  
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  
  
  /***/ }),
  
  /***/ "268f":
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__("fde4");
  
  /***/ }),
  
  /***/ "294c":
  /***/ (function(module, exports) {
  
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  
  
  /***/ }),
  
  /***/ "3024":
  /***/ (function(module, exports) {
  
  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  module.exports = function (fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0: return un ? fn()
                        : fn.call(that);
      case 1: return un ? fn(args[0])
                        : fn.call(that, args[0]);
      case 2: return un ? fn(args[0], args[1])
                        : fn.call(that, args[0], args[1]);
      case 3: return un ? fn(args[0], args[1], args[2])
                        : fn.call(that, args[0], args[1], args[2]);
      case 4: return un ? fn(args[0], args[1], args[2], args[3])
                        : fn.call(that, args[0], args[1], args[2], args[3]);
    } return fn.apply(that, args);
  };
  
  
  /***/ }),
  
  /***/ "30f1":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var LIBRARY = __webpack_require__("b8e3");
  var $export = __webpack_require__("63b6");
  var redefine = __webpack_require__("9138");
  var hide = __webpack_require__("35e8");
  var Iterators = __webpack_require__("481b");
  var $iterCreate = __webpack_require__("8f60");
  var setToStringTag = __webpack_require__("45f2");
  var getPrototypeOf = __webpack_require__("53e2");
  var ITERATOR = __webpack_require__("5168")('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';
  
  var returnThis = function () { return this; };
  
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  
  
  /***/ }),
  
  /***/ "320c":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  
  
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
  
    return Object(val);
  }
  
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
  
      // Detect buggy property enumeration order in older V8 versions.
  
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }
  
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }
  
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !==
          'abcdefghijklmnopqrst') {
        return false;
      }
  
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  
  module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
  
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
  
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
  
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
  
    return to;
  };
  
  
  /***/ }),
  
  /***/ "32a6":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 19.1.2.14 Object.keys(O)
  var toObject = __webpack_require__("241e");
  var $keys = __webpack_require__("c3a1");
  
  __webpack_require__("ce7e")('keys', function () {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  
  
  /***/ }),
  
  /***/ "32fc":
  /***/ (function(module, exports, __webpack_require__) {
  
  var document = __webpack_require__("e53d").document;
  module.exports = document && document.documentElement;
  
  
  /***/ }),
  
  /***/ "335c":
  /***/ (function(module, exports, __webpack_require__) {
  
  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = __webpack_require__("6b4c");
  // eslint-disable-next-line no-prototype-builtins
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  
  
  /***/ }),
  
  /***/ "355d":
  /***/ (function(module, exports) {
  
  exports.f = {}.propertyIsEnumerable;
  
  
  /***/ }),
  
  /***/ "35d6":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  
  // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
  /**
   * Translates the list format produced by css-loader into something
   * easier to manipulate.
   */
  function listToStyles (parentId, list) {
    var styles = []
    var newStyles = {}
    for (var i = 0; i < list.length; i++) {
      var item = list[i]
      var id = item[0]
      var css = item[1]
      var media = item[2]
      var sourceMap = item[3]
      var part = {
        id: parentId + ':' + i,
        css: css,
        media: media,
        sourceMap: sourceMap
      }
      if (!newStyles[id]) {
        styles.push(newStyles[id] = { id: id, parts: [part] })
      } else {
        newStyles[id].parts.push(part)
      }
    }
    return styles
  }
  
  // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });
  
  
  function addStylesToShadowDOM (parentId, list, shadowRoot) {
    var styles = listToStyles(parentId, list)
    addStyles(styles, shadowRoot)
  }
  
  /*
  type StyleObject = {
    id: number;
    parts: Array<StyleObjectPart>
  }
  
  type StyleObjectPart = {
    css: string;
    media: string;
    sourceMap: ?string
  }
  */
  
  function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
    const injectedStyles =
      shadowRoot._injectedStyles ||
      (shadowRoot._injectedStyles = {})
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var style = injectedStyles[item.id]
      if (!style) {
        for (var j = 0; j < item.parts.length; j++) {
          addStyle(item.parts[j], shadowRoot)
        }
        injectedStyles[item.id] = true
      }
    }
  }
  
  function createStyleElement (shadowRoot) {
    var styleElement = document.createElement('style')
    styleElement.type = 'text/css'
    shadowRoot.appendChild(styleElement)
    return styleElement
  }
  
  function addStyle (obj /* StyleObjectPart */, shadowRoot) {
    var styleElement = createStyleElement(shadowRoot)
    var css = obj.css
    var media = obj.media
    var sourceMap = obj.sourceMap
  
    if (media) {
      styleElement.setAttribute('media', media)
    }
  
    if (sourceMap) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
      // http://stackoverflow.com/a/26603875
      css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
    }
  
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css
    } else {
      while (styleElement.firstChild) {
        styleElement.removeChild(styleElement.firstChild)
      }
      styleElement.appendChild(document.createTextNode(css))
    }
  }
  
  
  /***/ }),
  
  /***/ "35e8":
  /***/ (function(module, exports, __webpack_require__) {
  
  var dP = __webpack_require__("d9f6");
  var createDesc = __webpack_require__("aebd");
  module.exports = __webpack_require__("8e60") ? function (object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  
  
  /***/ }),
  
  /***/ "36c3":
  /***/ (function(module, exports, __webpack_require__) {
  
  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = __webpack_require__("335c");
  var defined = __webpack_require__("25eb");
  module.exports = function (it) {
    return IObject(defined(it));
  };
  
  
  /***/ }),
  
  /***/ "3702":
  /***/ (function(module, exports, __webpack_require__) {
  
  // check on default Array iterator
  var Iterators = __webpack_require__("481b");
  var ITERATOR = __webpack_require__("5168")('iterator');
  var ArrayProto = Array.prototype;
  
  module.exports = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  
  
  /***/ }),
  
  /***/ "37fa":
  /***/ (function(module, exports, __webpack_require__) {
  
  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__("f479");
  if(typeof content === 'string') content = [[module.i, content, '']];
  if(content.locals) module.exports = content.locals;
  // add CSS to Shadow Root
  var add = __webpack_require__("35d6").default
  module.exports.__inject__ = function (shadowRoot) {
    add("1186d649", content, shadowRoot)
  };
  
  /***/ }),
  
  /***/ "3a38":
  /***/ (function(module, exports) {
  
  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  
  
  /***/ }),
  
  /***/ "3c11":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  // https://github.com/tc39/proposal-promise-finally
  
  var $export = __webpack_require__("63b6");
  var core = __webpack_require__("584a");
  var global = __webpack_require__("e53d");
  var speciesConstructor = __webpack_require__("f201");
  var promiseResolve = __webpack_require__("cd78");
  
  $export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  } });
  
  
  /***/ }),
  
  /***/ "40c3":
  /***/ (function(module, exports, __webpack_require__) {
  
  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = __webpack_require__("6b4c");
  var TAG = __webpack_require__("5168")('toStringTag');
  // ES3 wrong here
  var ARG = cof(function () { return arguments; }()) == 'Arguments';
  
  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };
  
  module.exports = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  
  
  /***/ }),
  
  /***/ "4178":
  /***/ (function(module, exports, __webpack_require__) {
  
  var ctx = __webpack_require__("d864");
  var invoke = __webpack_require__("3024");
  var html = __webpack_require__("32fc");
  var cel = __webpack_require__("1ec9");
  var global = __webpack_require__("e53d");
  var process = global.process;
  var setTask = global.setImmediate;
  var clearTask = global.clearImmediate;
  var MessageChannel = global.MessageChannel;
  var Dispatch = global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;
  var run = function () {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function (event) {
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (__webpack_require__("6b4c")(process) == 'process') {
      defer = function (id) {
        process.nextTick(ctx(run, id, 1));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(ctx(run, id, 1));
      };
    // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
      defer = function (id) {
        global.postMessage(id + '', '*');
      };
      global.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in cel('script')) {
      defer = function (id) {
        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run.call(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(ctx(run, id, 1), 0);
      };
    }
  }
  module.exports = {
    set: setTask,
    clear: clearTask
  };
  
  
  /***/ }),
  
  /***/ "43fc":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // https://github.com/tc39/proposal-promise-try
  var $export = __webpack_require__("63b6");
  var newPromiseCapability = __webpack_require__("656e");
  var perform = __webpack_require__("4439");
  
  $export($export.S, 'Promise', { 'try': function (callbackfn) {
    var promiseCapability = newPromiseCapability.f(this);
    var result = perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  } });
  
  
  /***/ }),
  
  /***/ "4439":
  /***/ (function(module, exports) {
  
  module.exports = function (exec) {
    try {
      return { e: false, v: exec() };
    } catch (e) {
      return { e: true, v: e };
    }
  };
  
  
  /***/ }),
  
  /***/ "454f":
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__("46a7");
  var $Object = __webpack_require__("584a").Object;
  module.exports = function defineProperty(it, key, desc) {
    return $Object.defineProperty(it, key, desc);
  };
  
  
  /***/ }),
  
  /***/ "45f2":
  /***/ (function(module, exports, __webpack_require__) {
  
  var def = __webpack_require__("d9f6").f;
  var has = __webpack_require__("07e3");
  var TAG = __webpack_require__("5168")('toStringTag');
  
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };
  
  
  /***/ }),
  
  /***/ "46a7":
  /***/ (function(module, exports, __webpack_require__) {
  
  var $export = __webpack_require__("63b6");
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  $export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });
  
  
  /***/ }),
  
  /***/ "47ee":
  /***/ (function(module, exports, __webpack_require__) {
  
  // all enumerable object keys, includes symbols
  var getKeys = __webpack_require__("c3a1");
  var gOPS = __webpack_require__("9aa9");
  var pIE = __webpack_require__("355d");
  module.exports = function (it) {
    var result = getKeys(it);
    var getSymbols = gOPS.f;
    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = pIE.f;
      var i = 0;
      var key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    } return result;
  };
  
  
  /***/ }),
  
  /***/ "481b":
  /***/ (function(module, exports) {
  
  module.exports = {};
  
  
  /***/ }),
  
  /***/ "4c95":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var global = __webpack_require__("e53d");
  var core = __webpack_require__("584a");
  var dP = __webpack_require__("d9f6");
  var DESCRIPTORS = __webpack_require__("8e60");
  var SPECIES = __webpack_require__("5168")('species');
  
  module.exports = function (KEY) {
    var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  };
  
  
  /***/ }),
  
  /***/ "4ee1":
  /***/ (function(module, exports, __webpack_require__) {
  
  var ITERATOR = __webpack_require__("5168")('iterator');
  var SAFE_CLOSING = false;
  
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () { SAFE_CLOSING = true; };
    // eslint-disable-next-line no-throw-literal
    Array.from(riter, function () { throw 2; });
  } catch (e) { /* empty */ }
  
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };
  
  
  /***/ }),
  
  /***/ "50ed":
  /***/ (function(module, exports) {
  
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
  
  
  /***/ }),
  
  /***/ "5168":
  /***/ (function(module, exports, __webpack_require__) {
  
  var store = __webpack_require__("dbdb")('wks');
  var uid = __webpack_require__("62a0");
  var Symbol = __webpack_require__("e53d").Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';
  
  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };
  
  $exports.store = store;
  
  
  /***/ }),
  
  /***/ "53e2":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has = __webpack_require__("07e3");
  var toObject = __webpack_require__("241e");
  var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
  var ObjectProto = Object.prototype;
  
  module.exports = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };
  
  
  /***/ }),
  
  /***/ "5559":
  /***/ (function(module, exports, __webpack_require__) {
  
  var shared = __webpack_require__("dbdb")('keys');
  var uid = __webpack_require__("62a0");
  module.exports = function (key) {
    return shared[key] || (shared[key] = uid(key));
  };
  
  
  /***/ }),
  
  /***/ "584a":
  /***/ (function(module, exports) {
  
  var core = module.exports = { version: '2.6.9' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  
  
  /***/ }),
  
  /***/ "5a74":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  
  // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
  // This file is imported into lib/wc client bundles.
  
  if (typeof window !== 'undefined') {
    if (Object({"VUE_APP_CLI_UI_URL":"","NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
      __webpack_require__("f6fd")
    }
  
    var setPublicPath_i
    if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
      __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
    }
  }
  
  // Indicate to webpack that this file can be concatenated
  /* harmony default export */ var setPublicPath = (null);
  
  // EXTERNAL MODULE: external "Vue"
  var external_Vue_ = __webpack_require__("8bbf");
  var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);
  
  // CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
  const camelizeRE = /-(\w)/g;
  const camelize = str => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
  };
  
  const hyphenateRE = /\B([A-Z])/g;
  const hyphenate = str => {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  };
  
  function getInitialProps (propsList) {
    const res = {};
    propsList.forEach(key => {
      res[key] = undefined;
    });
    return res
  }
  
  function injectHook (options, key, hook) {
    options[key] = [].concat(options[key] || []);
    options[key].unshift(hook);
  }
  
  function callHooks (vm, hook) {
    if (vm) {
      const hooks = vm.$options[hook] || [];
      hooks.forEach(hook => {
        hook.call(vm);
      });
    }
  }
  
  function createCustomEvent (name, args) {
    return new CustomEvent(name, {
      bubbles: false,
      cancelable: false,
      detail: args
    })
  }
  
  const isBoolean = val => /function Boolean/.test(String(val));
  const isNumber = val => /function Number/.test(String(val));
  
  function convertAttributeValue (value, name, { type } = {}) {
    if (isBoolean(type)) {
      if (value === 'true' || value === 'false') {
        return value === 'true'
      }
      if (value === '' || value === name) {
        return true
      }
      return value != null
    } else if (isNumber(type)) {
      const parsed = parseFloat(value, 10);
      return isNaN(parsed) ? value : parsed
    } else {
      return value
    }
  }
  
  function toVNodes (h, children) {
    const res = [];
    for (let i = 0, l = children.length; i < l; i++) {
      res.push(toVNode(h, children[i]));
    }
    return res
  }
  
  function toVNode (h, node) {
    if (node.nodeType === 3) {
      return node.data.trim() ? node.data : null
    } else if (node.nodeType === 1) {
      const data = {
        attrs: getAttributes(node),
        domProps: {
          innerHTML: node.innerHTML
        }
      };
      if (data.attrs.slot) {
        data.slot = data.attrs.slot;
        delete data.attrs.slot;
      }
      return h(node.tagName, data)
    } else {
      return null
    }
  }
  
  function getAttributes (node) {
    const res = {};
    for (let i = 0, l = node.attributes.length; i < l; i++) {
      const attr = node.attributes[i];
      res[attr.nodeName] = attr.nodeValue;
    }
    return res
  }
  
  function wrap (Vue, Component) {
    const isAsync = typeof Component === 'function' && !Component.cid;
    let isInitialized = false;
    let hyphenatedPropsList;
    let camelizedPropsList;
    let camelizedPropsMap;
  
    function initialize (Component) {
      if (isInitialized) return
  
      const options = typeof Component === 'function'
        ? Component.options
        : Component;
  
      // extract props info
      const propsList = Array.isArray(options.props)
        ? options.props
        : Object.keys(options.props || {});
      hyphenatedPropsList = propsList.map(hyphenate);
      camelizedPropsList = propsList.map(camelize);
      const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
      camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
        map[key] = originalPropsAsObject[propsList[i]];
        return map
      }, {});
  
      // proxy $emit to native DOM events
      injectHook(options, 'beforeCreate', function () {
        const emit = this.$emit;
        this.$emit = (name, ...args) => {
          this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
          return emit.call(this, name, ...args)
        };
      });
  
      injectHook(options, 'created', function () {
        // sync default props values to wrapper on created
        camelizedPropsList.forEach(key => {
          this.$root.props[key] = this[key];
        });
      });
  
      // proxy props as Element properties
      camelizedPropsList.forEach(key => {
        Object.defineProperty(CustomElement.prototype, key, {
          get () {
            return this._wrapper.props[key]
          },
          set (newVal) {
            this._wrapper.props[key] = newVal;
          },
          enumerable: false,
          configurable: true
        });
      });
  
      isInitialized = true;
    }
  
    function syncAttribute (el, key) {
      const camelized = camelize(key);
      const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
      el._wrapper.props[camelized] = convertAttributeValue(
        value,
        key,
        camelizedPropsMap[camelized]
      );
    }
  
    class CustomElement extends HTMLElement {
      constructor () {
        super();
        this.attachShadow({ mode: 'open' });
  
        const wrapper = this._wrapper = new Vue({
          name: 'shadow-root',
          customElement: this,
          shadowRoot: this.shadowRoot,
          data () {
            return {
              props: {},
              slotChildren: []
            }
          },
          render (h) {
            return h(Component, {
              ref: 'inner',
              props: this.props
            }, this.slotChildren)
          }
        });
  
        // Use MutationObserver to react to future attribute & slot content change
        const observer = new MutationObserver(mutations => {
          let hasChildrenChange = false;
          for (let i = 0; i < mutations.length; i++) {
            const m = mutations[i];
            if (isInitialized && m.type === 'attributes' && m.target === this) {
              syncAttribute(this, m.attributeName);
            } else {
              hasChildrenChange = true;
            }
          }
          if (hasChildrenChange) {
            wrapper.slotChildren = Object.freeze(toVNodes(
              wrapper.$createElement,
              this.childNodes
            ));
          }
        });
        observer.observe(this, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true
        });
      }
  
      get vueComponent () {
        return this._wrapper.$refs.inner
      }
  
      connectedCallback () {
        const wrapper = this._wrapper;
        if (!wrapper._isMounted) {
          // initialize attributes
          const syncInitialAttributes = () => {
            wrapper.props = getInitialProps(camelizedPropsList);
            hyphenatedPropsList.forEach(key => {
              syncAttribute(this, key);
            });
          };
  
          if (isInitialized) {
            syncInitialAttributes();
          } else {
            // async & unresolved
            Component().then(resolved => {
              if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
                resolved = resolved.default;
              }
              initialize(resolved);
              syncInitialAttributes();
            });
          }
          // initialize children
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
          wrapper.$mount();
          this.shadowRoot.appendChild(wrapper.$el);
        } else {
          callHooks(this.vueComponent, 'activated');
        }
      }
  
      disconnectedCallback () {
        callHooks(this.vueComponent, 'deactivated');
      }
    }
  
    if (!isAsync) {
      initialize(Component);
    }
  
    return CustomElement
  }
  
  /* harmony default export */ var vue_wc_wrapper = (wrap);
  
  // EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
  var css_base = __webpack_require__("2350");
  
  // EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
  var addStylesShadow = __webpack_require__("35d6");
  
  // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
  /* globals __VUE_SSR_CONTEXT__ */
  
  // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
  // This module is a runtime utility for cleaner component module output and will
  // be included in the final webpack user bundle.
  
  function normalizeComponent (
    scriptExports,
    render,
    staticRenderFns,
    functionalTemplate,
    injectStyles,
    scopeId,
    moduleIdentifier, /* server only */
    shadowMode /* vue-cli only */
  ) {
    // Vue.extend constructor export interop
    var options = typeof scriptExports === 'function'
      ? scriptExports.options
      : scriptExports
  
    // render functions
    if (render) {
      options.render = render
      options.staticRenderFns = staticRenderFns
      options._compiled = true
    }
  
    // functional template
    if (functionalTemplate) {
      options.functional = true
    }
  
    // scopedId
    if (scopeId) {
      options._scopeId = 'data-v-' + scopeId
    }
  
    var hook
    if (moduleIdentifier) { // server build
      hook = function (context) {
        // 2.3 injection
        context =
          context || // cached call
          (this.$vnode && this.$vnode.ssrContext) || // stateful
          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
        // 2.2 with runInNewContext: true
        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__
        }
        // inject component styles
        if (injectStyles) {
          injectStyles.call(this, context)
        }
        // register component module identifier for async chunk inferrence
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier)
        }
      }
      // used by ssr in case component is cached and beforeCreate
      // never gets called
      options._ssrRegister = hook
    } else if (injectStyles) {
      hook = shadowMode
        ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
        : injectStyles
    }
  
    if (hook) {
      if (options.functional) {
        // for template-only hot-reload because in that case the render fn doesn't
        // go through the normalizer
        options._injectStyles = hook
        // register for functioal component in vue file
        var originalRender = options.render
        options.render = function renderWithStyleInjection (h, context) {
          hook.call(context)
          return originalRender(h, context)
        }
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate
        options.beforeCreate = existing
          ? [].concat(existing, hook)
          : [hook]
      }
    }
  
    return {
      exports: scriptExports,
      options: options
    }
  }
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f0dee8ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=c96db20e&shadow
  var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SocialAlbumWidget"},[(_vm.isModalVisible && _vm.media[_vm.activeIndex])?_c('div',[(_vm.media[_vm.activeIndex].source === 'instagram' || _vm.media[_vm.activeIndex].source === 'import' || _vm.media[_vm.activeIndex].source === 'onsite_upload')?_c('LightBox',{attrs:{"image":_vm.getImage(),"video":_vm.media[_vm.activeIndex].standard_resolution_url,"caption":_vm.media[_vm.activeIndex].post.content,"clicked":_vm.clicked,"date":_vm.media[_vm.activeIndex].post.created_time,"user":_vm.media[_vm.activeIndex].post.username},on:{"close":_vm.closeModal,"change":_vm.handleChange,"click":function($event){_vm.isModalVisible = !_vm.isModalVisible}}}):_vm._e(),(_vm.media[_vm.activeIndex].source === 'review')?_c('LightBox',{attrs:{"image":_vm.getImage(),"video":_vm.media[_vm.activeIndex].standard_resolution_url,"caption":_vm.media[_vm.activeIndex].review.content,"clicked":_vm.clicked,"date":_vm.media[_vm.activeIndex].review.created_at,"user":_vm.media[_vm.activeIndex].review.user.display_name},on:{"close":_vm.closeModal,"change":_vm.handleChange}}):_vm._e()],1):_vm._e(),_c('div',{staticClass:"SocialAlbumWidget-grid"},_vm._l((_vm.media),function(item,index){return _c('div',{key:index,staticClass:"SocialAlbumWidget-item"},[(item.media_type === 'image')?_c('div',{staticClass:"SocialAlbumWidget-imageContainer",on:{"click":function($event){return _vm.activateItem($event, index)}}},[_vm._m(0,true),(_vm.useHighResImages)?_c('img',{staticClass:"SocialAlbumWidget-image",attrs:{"src":item.medium_image_url,"alt":""}}):_c('img',{staticClass:"SocialAlbumWidget-image",attrs:{"src":item.low_resolution_image_url,"alt":""}})]):(item.media_type === 'video')?_c('div',{staticClass:"SocialAlbumWidget-imageContainer",on:{"click":function($event){return _vm.activateItem($event, index)}}},[_vm._m(1,true),_c('video',{staticClass:"SocialAlbumWidget-image",attrs:{"src":item.standard_resolution_url,"alt":""}})]):_vm._e()])}),0),_c('div',{staticClass:"SocialAlbumWidget-controls"},[(_vm.allowLoadMore && _vm.morePagesAvailable)?_c('Button',{attrs:{"disabled":_vm.clicked},on:{"click":_vm.loadMore}},[_vm._v("\n      Load More\n    ")]):_vm._e()],1)])}
  var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SocialAlbumWidget-imageOverlay"},[_c('img',{attrs:{"src":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT56b29tLWluLWljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTkuNywxOC4zIEwxNiwxNC42IEMxNy4yLDEzLjEgMTgsMTEuMSAxOCw5IEMxOCw0IDE0LDAgOSwwIEM0LDAgMCw0IDAsOSBDMCwxNCA0LDE4IDksMTggQzExLjEsMTggMTMuMSwxNy4zIDE0LjYsMTYgTDE4LjMsMTkuNyBDMTguNSwxOS45IDE4LjgsMjAgMTksMjAgQzE5LjIsMjAgMTkuNSwxOS45IDE5LjcsMTkuNyBDMjAuMSwxOS4zIDIwLjEsMTguNyAxOS43LDE4LjMgWiBNMiw5IEMyLDUuMSA1LjEsMiA5LDIgQzEyLjksMiAxNiw1LjEgMTYsOSBDMTYsMTAuOSAxNS4yLDEyLjcgMTQsMTMuOSBDMTQsMTMuOSAxNCwxMy45IDE0LDEzLjkgQzE0LDEzLjkgMTQsMTMuOSAxNCwxMy45IEMxMi43LDE1LjIgMTEsMTUuOSA5LjEsMTUuOSBDNS4xLDE2IDIsMTIuOSAyLDkgWiBNMTMsOSBDMTMsOS42IDEyLjYsMTAgMTIsMTAgTDEwLDEwIEwxMCwxMiBDMTAsMTIuNiA5LjYsMTMgOSwxMyBDOC40LDEzIDgsMTIuNiA4LDEyIEw4LDEwIEw2LDEwIEM1LjQsMTAgNSw5LjYgNSw5IEM1LDguNCA1LjQsOCA2LDggTDgsOCBMOCw2IEM4LDUuNCA4LjQsNSA5LDUgQzkuNiw1IDEwLDUuNCAxMCw2IEwxMCw4IEwxMiw4IEMxMi42LDggMTMsOC40IDEzLDkgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGlkPSJ6b29tLWluLWljb24iIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPg==","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"SocialAlbumWidget-imageOverlay"},[_c('img',{attrs:{"src":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT56b29tLWluLWljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTkuNywxOC4zIEwxNiwxNC42IEMxNy4yLDEzLjEgMTgsMTEuMSAxOCw5IEMxOCw0IDE0LDAgOSwwIEM0LDAgMCw0IDAsOSBDMCwxNCA0LDE4IDksMTggQzExLjEsMTggMTMuMSwxNy4zIDE0LjYsMTYgTDE4LjMsMTkuNyBDMTguNSwxOS45IDE4LjgsMjAgMTksMjAgQzE5LjIsMjAgMTkuNSwxOS45IDE5LjcsMTkuNyBDMjAuMSwxOS4zIDIwLjEsMTguNyAxOS43LDE4LjMgWiBNMiw5IEMyLDUuMSA1LjEsMiA5LDIgQzEyLjksMiAxNiw1LjEgMTYsOSBDMTYsMTAuOSAxNS4yLDEyLjcgMTQsMTMuOSBDMTQsMTMuOSAxNCwxMy45IDE0LDEzLjkgQzE0LDEzLjkgMTQsMTMuOSAxNCwxMy45IEMxMi43LDE1LjIgMTEsMTUuOSA5LjEsMTUuOSBDNS4xLDE2IDIsMTIuOSAyLDkgWiBNMTMsOSBDMTMsOS42IDEyLjYsMTAgMTIsMTAgTDEwLDEwIEwxMCwxMiBDMTAsMTIuNiA5LjYsMTMgOSwxMyBDOC40LDEzIDgsMTIuNiA4LDEyIEw4LDEwIEw2LDEwIEM1LjQsMTAgNSw5LjYgNSw5IEM1LDguNCA1LjQsOCA2LDggTDgsOCBMOCw2IEM4LDUuNCA4LjQsNSA5LDUgQzkuNiw1IDEwLDUuNCAxMCw2IEwxMCw4IEwxMiw4IEMxMi42LDggMTMsOC40IDEzLDkgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGlkPSJ6b29tLWluLWljb24iIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPg==","alt":""}})])}]
  
  
  // CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=c96db20e&shadow
  
  // EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
  var runtime = __webpack_require__("96cf");
  
  // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
  var promise = __webpack_require__("795b");
  var promise_default = /*#__PURE__*/__webpack_require__.n(promise);
  
  // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
  
  
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
  
    if (info.done) {
      resolve(value);
    } else {
      promise_default.a.resolve(value).then(_next, _throw);
    }
  }
  
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new promise_default.a(function (resolve, reject) {
        var gen = fn.apply(self, args);
  
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
  
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
  
        _next(undefined);
      });
    };
  }
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f0dee8ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button.vue?vue&type=template&id=116a1362&
  var Buttonvue_type_template_id_116a1362_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.getClasses(),on:{"click":_vm.handleClick}},[(_vm.$attrs.disabled)?_c('Loader'):_vm._t("default")],2)}
  var Buttonvue_type_template_id_116a1362_staticRenderFns = []
  
  
  // CONCATENATED MODULE: ./src/components/Button.vue?vue&type=template&id=116a1362&
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f0dee8ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loader.vue?vue&type=template&id=2cf20128&
  var Loadervue_type_template_id_2cf20128_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sdc-vue-Loader"},[_vm._v("\n  Loading...\n")])}
  var Loadervue_type_template_id_2cf20128_staticRenderFns = []
  
  
  // CONCATENATED MODULE: ./src/components/Loader.vue?vue&type=template&id=2cf20128&
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loader.vue?vue&type=script&lang=js&
  //
  //
  //
  //
  //
  //
  //
  //
  /* harmony default export */ var Loadervue_type_script_lang_js_ = ({
    name: 'Loader',
    props: {},
    methods: {}
  });
  // CONCATENATED MODULE: ./src/components/Loader.vue?vue&type=script&lang=js&
   /* harmony default export */ var components_Loadervue_type_script_lang_js_ = (Loadervue_type_script_lang_js_); 
  // CONCATENATED MODULE: ./src/components/Loader.vue
  
  
  
  function injectStyles (context) {
    
    var style0 = __webpack_require__("74ae")
  if (style0.__inject__) style0.__inject__(context)
  
  }
  
  /* normalize component */
  
  var component = normalizeComponent(
    components_Loadervue_type_script_lang_js_,
    Loadervue_type_template_id_2cf20128_render,
    Loadervue_type_template_id_2cf20128_staticRenderFns,
    false,
    injectStyles,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var Loader = (component.exports);
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Button.vue?vue&type=script&lang=js&
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  /* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
    name: 'Button',
    components: {
      Loader: Loader
    },
    props: {
      size: {
        type: String,
        default: 'normal',
        validator: function validator(value) {
          return ['small', 'normal'].indexOf(value) !== -1;
        }
      }
    },
    methods: {
      handleClick: function handleClick(event) {
        this.$emit('click', event);
      },
      getClasses: function getClasses() {
        return {
          // Add different size buttons here
          'sdc-vue-Button': true,
          'sdc-vue-Button--small': this.$props.size === 'small'
        };
      }
    }
  });
  // CONCATENATED MODULE: ./src/components/Button.vue?vue&type=script&lang=js&
   /* harmony default export */ var components_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
  // CONCATENATED MODULE: ./src/components/Button.vue
  
  
  
  function Button_injectStyles (context) {
    
    var style0 = __webpack_require__("8274")
  if (style0.__inject__) style0.__inject__(context)
  
  }
  
  /* normalize component */
  
  var Button_component = normalizeComponent(
    components_Buttonvue_type_script_lang_js_,
    Buttonvue_type_template_id_116a1362_render,
    Buttonvue_type_template_id_116a1362_staticRenderFns,
    false,
    Button_injectStyles,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var Button = (Button_component.exports);
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f0dee8ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LightBox/LightBox.vue?vue&type=template&id=0c17be6e&
  var LightBoxvue_type_template_id_0c17be6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LightBox"},[_c('div',{staticClass:"LightBox-backdrop",attrs:{"tabindex":"0"},on:{"click":_vm.close,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)}}},[_c('div',{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:(_vm.next),expression:"next",arg:"swipe",modifiers:{"left":true}},{name:"touch",rawName:"v-touch:swipe.right",value:(_vm.previous),expression:"previous",arg:"swipe",modifiers:{"right":true}}],staticClass:"LightBox-content",on:{"click":function($event){$event.stopPropagation();},"keyup":_vm.nextItem}},[_c('div',{staticClass:"LightBox-imageContainer"},[(_vm.image)?_c('img',{staticClass:"LightBox-image",attrs:{"src":_vm.image,"alt":""}}):_vm._e(),(_vm.video)?_c('video',{staticClass:"LightBox-image",attrs:{"alt":"","controls":"","autoplay":""}},[_c('source',{attrs:{"src":_vm.video,"type":"video/mp4"}})]):_vm._e(),_c('i',{staticClass:"LightBox-arrow LightBox-arrow--left",on:{"click":_vm.previous}}),(_vm.clicked)?_c('div',{staticClass:"LightBox-loading"},[_c('Loader')],1):_vm._e(),_c('i',{staticClass:"LightBox-arrow LightBox-arrow--right",on:{"click":_vm.next}})]),_c('div',{staticClass:"LightBox-body"},[_c('div',{staticClass:"LightBox-copy"},[_c('div',{staticClass:"LightBox-copyInfo"},[_c('div',{staticClass:"LightBox-profilePic"},[_c('div',{staticClass:"LightBox-profilePicLetter"},[_vm._v("\n                "+_vm._s(_vm.user.substr(0, 1).toUpperCase())+"\n              ")])]),_c('div',{staticClass:"LightBox-copyInfoText"},[_c('div',{staticClass:"LightBox-copyUsername"},[_vm._v("\n                "+_vm._s(_vm.user.toLowerCase())+"\n              ")]),_c('div',{staticClass:"LightBox-copySubheader"},[_vm._v("\n                Verified Buyer\n              ")])])]),_c('div',{staticClass:"LightBox-caption"},[_vm._v("\n            "+_vm._s(_vm.formatCaption(_vm.caption))+"\n          ")]),_c('div',{staticClass:"LightBox-date"},[_vm._v("\n            "+_vm._s(_vm.date.substring(0,10))+"\n          ")])]),_c('div',{staticClass:"LightBox-cta"},[_c('div',{staticClass:"LightBox-ctaText"},[_vm._v("\n            Get started on a smile you'll love by taking our free smile assessment.\n          ")]),_c('a',{staticClass:"LightBox-aLink",attrs:{"href":"https://smiledirectclub.com/smile_assessment"}},[_c('Button',{staticClass:"LightBox-ctaButton",attrs:{"size":"small"}},[_vm._v("\n              Am I a candidate?\n            ")])],1)])]),_c('button',{staticClass:"LightBox-close",on:{"click":_vm.close}})])])])}
  var LightBoxvue_type_template_id_0c17be6e_staticRenderFns = []
  
  
  // CONCATENATED MODULE: ./src/components/LightBox/LightBox.vue?vue&type=template&id=0c17be6e&
  
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LightBox/LightBox.vue?vue&type=script&lang=js&
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  
  /* harmony default export */ var LightBoxvue_type_script_lang_js_ = ({
    name: 'Modal',
    components: {
      Button: Button,
      Loader: Loader
    },
    props: {
      image: {
        type: String,
        required: false,
        default: null
      },
      video: {
        type: String,
        required: false,
        default: null
      },
      caption: {
        type: String,
        required: false,
        default: ''
      },
      date: {
        type: String,
        required: false,
        default: ''
      },
      user: {
        type: String,
        required: false,
        default: ''
      },
      clicked: {
        type: Boolean,
        required: false,
        default: false
      }
    },
  
    data() {
      return {
        open: false
      };
    },
  
    mounted() {
      document.addEventListener('keyup', this.nextItem);
    },
  
    methods: {
      close() {
        this.$emit('close');
      },
  
      // 3 functions below refer to handling indexing though media
      changeItem(value) {
        this.$emit('change', value);
      },
  
      previous() {
        this.changeItem(-1);
      },
  
      next() {
        this.changeItem(1);
      },
  
      // Indexing through lightbox using arrow keys
      nextItem(e) {
        if (e.keyCode === 37) {
          this.changeItem(-1);
        } else if (e.keyCode === 39) {
          this.changeItem(1);
        }
      },
  
      openModal() {
        this.open = true;
      },
  
      closeModal() {
        this.open = false;
      },
  
      // Don't allow caption to exceed 320 characters
      formatCaption() {
        var caption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var limit = 320;
        return caption.length > limit ? `${caption.substr(0, limit)}…` : caption;
      }
  
    }
  });
  // CONCATENATED MODULE: ./src/components/LightBox/LightBox.vue?vue&type=script&lang=js&
   /* harmony default export */ var LightBox_LightBoxvue_type_script_lang_js_ = (LightBoxvue_type_script_lang_js_); 
  // CONCATENATED MODULE: ./src/components/LightBox/LightBox.vue
  
  
  
  function LightBox_injectStyles (context) {
    
    var style0 = __webpack_require__("00c4")
  if (style0.__inject__) style0.__inject__(context)
  
  }
  
  /* normalize component */
  
  var LightBox_component = normalizeComponent(
    LightBox_LightBoxvue_type_script_lang_js_,
    LightBoxvue_type_template_id_0c17be6e_render,
    LightBoxvue_type_template_id_0c17be6e_staticRenderFns,
    false,
    LightBox_injectStyles,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var LightBox = (LightBox_component.exports);
  // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
  var get_own_property_descriptor = __webpack_require__("268f");
  var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);
  
  // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
  var get_own_property_symbols = __webpack_require__("e265");
  var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);
  
  // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
  var keys = __webpack_require__("a4bb");
  var keys_default = /*#__PURE__*/__webpack_require__.n(keys);
  
  // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
  var define_property = __webpack_require__("85f2");
  var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);
  
  // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      define_property_default()(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
  
    return obj;
  }
  // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
  
  
  
  
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
  
      var ownKeys = keys_default()(source);
  
      if (typeof get_own_property_symbols_default.a === 'function') {
        ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
          return get_own_property_descriptor_default()(source, sym).enumerable;
        }));
      }
  
      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }
  
    return target;
  }
  // CONCATENATED MODULE: ./node_modules/whatwg-fetch/fetch.js
  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob()
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }
  
  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }
  
  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]
  
    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      }
  }
  
  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }
  
  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }
  
  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }
  
    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }
  
    return iterator
  }
  
  function Headers(headers) {
    this.map = {}
  
    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }
  
  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue + ', ' + value : value
  }
  
  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }
  
  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }
  
  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }
  
  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }
  
  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }
  
  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) {
      items.push(name)
    })
    return iteratorFor(items)
  }
  
  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) {
      items.push(value)
    })
    return iteratorFor(items)
  }
  
  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) {
      items.push([name, value])
    })
    return iteratorFor(items)
  }
  
  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }
  
  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }
  
  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }
  
  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }
  
  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }
  
  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)
  
    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }
  
  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }
  
  function Body() {
    this.bodyUsed = false
  
    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        this._bodyText = body = Object.prototype.toString.call(body)
      }
  
      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }
  
    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }
  
        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }
  
      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }
  
    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }
  
      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }
  
    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }
  
    this.json = function() {
      return this.text().then(JSON.parse)
    }
  
    return this
  }
  
  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
  
  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return methods.indexOf(upcased) > -1 ? upcased : method
  }
  
  function Request(input, options) {
    options = options || {}
    var body = options.body
  
    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      this.signal = input.signal
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }
  
    this.credentials = options.credentials || this.credentials || 'same-origin'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.signal = options.signal || this.signal
    this.referrer = null
  
    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }
  
  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  }
  
  function decode(body) {
    var form = new FormData()
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=')
          var name = split.shift().replace(/\+/g, ' ')
          var value = split.join('=').replace(/\+/g, ' ')
          form.append(decodeURIComponent(name), decodeURIComponent(value))
        }
      })
    return form
  }
  
  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }
  
  Body.call(Request.prototype)
  
  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }
  
    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }
  
  Body.call(Response.prototype)
  
  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }
  
  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }
  
  var redirectStatuses = [301, 302, 303, 307, 308]
  
  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }
  
    return new Response(null, {status: status, headers: {location: url}})
  }
  
  var DOMException = self.DOMException
  try {
    new DOMException()
  } catch (err) {
    DOMException = function(message, name) {
      this.message = message
      this.name = name
      var error = Error(message)
      this.stack = error.stack
    }
    DOMException.prototype = Object.create(Error.prototype)
    DOMException.prototype.constructor = DOMException
  }
  
  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
  
      if (request.signal && request.signal.aborted) {
        return reject(new DOMException('Aborted', 'AbortError'))
      }
  
      var xhr = new XMLHttpRequest()
  
      function abortXhr() {
        xhr.abort()
      }
  
      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }
  
      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }
  
      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }
  
      xhr.onabort = function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }
  
      xhr.open(request.method, request.url, true)
  
      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }
  
      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }
  
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
  
      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr)
  
        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr)
          }
        }
      }
  
      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  
  fetch.polyfill = true
  
  if (!self.fetch) {
    self.fetch = fetch
    self.Headers = Headers
    self.Request = Request
    self.Response = Response
  }
  
  // EXTERNAL MODULE: ./node_modules/query-string/index.js
  var query_string = __webpack_require__("72bf");
  var query_string_default = /*#__PURE__*/__webpack_require__.n(query_string);
  
  // CONCATENATED MODULE: ./src/utils/albumApi.js
  
  
  
  
  
  /**
   * Yotpo app key. This is specific to the "store" in Yotpo.
   *
   * @var  {String}
   *
   * Get Social Data
   * Make an API call to the media service and get all the media data we need.
   *
   * @param   {Object} options API GET params to send.
   * @returns {Promise}        API response in Object format.
   *
   */
  
  var getSocialData =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(keyList, options) {
      var selectedKey, params, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              selectedKey = keyList.app_key;
              params = query_string_default.a.stringify(_objectSpread({}, options));
              _context.next = 4;
              return window.fetch("https://api.yotpo.com/v1/widget/".concat(selectedKey, "/albums/by_name?").concat(params), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
  
            case 4:
              response = _context.sent;
              return _context.abrupt("return", response.json());
  
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  
    return function getSocialData(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Album API
   * Exposes interface for getting data from the specified social media API.
   *
   * @returns {Promise} API response.
   */
  
  
  var albumApi = {
    getData: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(keyList, options) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getSocialData(keyList, options);
  
              case 2:
                data = _context2.sent;
                return _context2.abrupt("return", data.response);
  
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
  
      function getData(_x3, _x4) {
        return _getData.apply(this, arguments);
      }
  
      return getData;
    }()
  };
  /* harmony default export */ var utils_albumApi = (albumApi);
  // EXTERNAL MODULE: ./src/utils/scrollLock/style.css
  var style = __webpack_require__("bc10");
  
  // CONCATENATED MODULE: ./src/utils/scrollLock/index.js
  
  /**
   * Add or remove the scrollLock class on the body of the document. Default to toggling.
   *
   * @param   {Boolean}  (optional) Specifically add or remove the class.
   * @return  {Boolean}  Returns true if class is applied.
   */
  
  /* harmony default export */ var scrollLock = (function (add) {
    if (add === true) return document.body.classList.add('u-scrollLock');
    if (add === false) return document.body.classList.remove('u-scrollLock');
    return document.body.classList.toggle('u-scrollLock');
  });
  // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&shadow
  
  
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  
  
  
  /* harmony default export */ var Appvue_type_script_lang_js_shadow = ({
    name: 'SocialAlbumWidget',
    components: {
      Button: Button,
      LightBox: LightBox
    },
    props: {
      appKey: {
        type: String,
        default: '1s44JJfzJC1tbUFS9bwKEOS3gOchSTADX3dzqvux'
      },
      albumName: {
        type: String,
        default: 'og-home_page'
      },
      perPage: {
        type: Number,
        default: 9
      },
      allowLoadMore: {
        type: Boolean,
        default: true
      },
      useHighResImages: {
        type: Boolean,
        default: false
      }
    },
  
    data() {
      return {
        activeIndex: null,
        isModalVisible: false,
        media: [],
        page: 1,
        morePagesAvailable: false,
        clicked: false
      };
    },
  
    // Needed to lock scroll on open LightBox
    watch: {
      isModalVisible: value => {
        return value === true ? scrollLock(true) : scrollLock(false);
      }
    },
  
    // computed: {
    //   orderedMedia () {
    //     const imageTags = this.media.tagged_products.name
    //     var newMedia = []
    //     newMedia.push(this.imageTags)
    //     console.log(this.newMedia)
    //   }
    // },
    created() {
      var matchMobile = window.matchMedia('(max-width: 767px)');
      this.perPage = matchMobile.matches ? 5 : 9;
    },
  
    mounted() {
      this.fetchAlbumData();
    },
  
    methods: {
      fetchAlbumData() {
        var _this = this;
  
        return _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var keyList, options, _ref2, images, pagination;
  
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  keyList = {
                    'app_key': _this.$props.appKey
                  };
                  options = {
                    'per_page': _this.$props.perPage,
                    'page': _this.page,
                    'album_name': _this.$props.albumName
                  };
                  _context.next = 4;
                  return utils_albumApi.getData(keyList, options);
  
                case 4:
                  _ref2 = _context.sent;
                  images = _ref2.images;
                  pagination = _ref2.pagination;
                  _this.media = _this.media.concat(images);
                  _this.morePagesAvailable = pagination.page * pagination.per_page < pagination.total;
  
                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
  
      // Opening LightBox on media item clicked
      activateItem(event, index) {
        this.activeIndex = index;
        this.showModal();
      },
  
      showModal() {
        this.isModalVisible = true;
      },
  
      closeModal() {
        this.isModalVisible = false;
        this.activeIndex = null;
      },
  
      /**
       * Adjust the index of the active media item.
       *
       * @param  {Number} value This should be either 1 or -1.
       * @return {void}
       */
      handleChange(value) {
        if (typeof value === 'number' && !isNaN(value)) {
          var newIndex = this.activeIndex + value;
  
          if (newIndex > this.media.length - 1) {
            this.loadMore(() => {
              this.activeIndex = this.activeIndex + 1;
            });
          } else if (newIndex < 0) {
            this.activeIndex = this.media.length - 1;
          } else {
            this.activeIndex = this.activeIndex + value;
          }
        }
      },
  
      // Load More Button function
      loadMore(done) {
        if (this.morePagesAvailable) {
          this.clicked = true;
          this.page += 1;
          this.fetchAlbumData().then(resp => {
            this.clicked = false;
            done();
          });
        }
      },
  
      getImage() {
        var matchDesktop = window.matchMedia('(max-width: 1023px)');
  
        if (!matchDesktop.matches) {
          return this.media[this.activeIndex].original_image_url;
        } else {
          return this.media[this.activeIndex].low_resolution_image_url;
        }
      }
  
    }
  });
  // CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&shadow
   /* harmony default export */ var src_Appvue_type_script_lang_js_shadow = (Appvue_type_script_lang_js_shadow); 
  // CONCATENATED MODULE: ./src/App.vue?shadow
  
  
  
  function Appshadow_injectStyles (context) {
    
    var style0 = __webpack_require__("2083")
  if (style0.__inject__) style0.__inject__(context)
  
  }
  
  /* normalize component */
  
  var Appshadow_component = normalizeComponent(
    src_Appvue_type_script_lang_js_shadow,
    render,
    staticRenderFns,
    false,
    Appshadow_injectStyles,
    null,
    null
    ,true
  )
  
  /* harmony default export */ var Appshadow = (Appshadow_component.exports);
  // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js
  
  
  
  
  // runtime shared by every component chunk
  
  
  
  
  
  window.customElements.define('social-album-widget', vue_wc_wrapper(external_Vue_default.a, Appshadow))
  
  /***/ }),
  
  /***/ "5b4e":
  /***/ (function(module, exports, __webpack_require__) {
  
  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject = __webpack_require__("36c3");
  var toLength = __webpack_require__("b447");
  var toAbsoluteIndex = __webpack_require__("0fc9");
  module.exports = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };
  
  
  /***/ }),
  
  /***/ "5c95":
  /***/ (function(module, exports, __webpack_require__) {
  
  var hide = __webpack_require__("35e8");
  module.exports = function (target, src, safe) {
    for (var key in src) {
      if (safe && target[key]) target[key] = src[key];
      else hide(target, key, src[key]);
    } return target;
  };
  
  
  /***/ }),
  
  /***/ "62a0":
  /***/ (function(module, exports) {
  
  var id = 0;
  var px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  
  
  /***/ }),
  
  /***/ "63b6":
  /***/ (function(module, exports, __webpack_require__) {
  
  var global = __webpack_require__("e53d");
  var core = __webpack_require__("584a");
  var ctx = __webpack_require__("d864");
  var hide = __webpack_require__("35e8");
  var has = __webpack_require__("07e3");
  var PROTOTYPE = 'prototype';
  
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && has(exports, key)) continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? ctx(out, global)
      // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? (function (C) {
        var F = function (a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0: return new C();
              case 1: return new C(a);
              case 2: return new C(a, b);
            } return new C(a, b, c);
          } return C.apply(this, arguments);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      // make static versions for prototype methods
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  module.exports = $export;
  
  
  /***/ }),
  
  /***/ "6453":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  module.exports = function (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  };
  
  
  /***/ }),
  
  /***/ "6470":
  /***/ (function(module, exports, __webpack_require__) {
  
  exports = module.exports = __webpack_require__("2350")(false);
  // imports
  
  
  // module
  exports.push([module.i, ".sdc-vue-Loader,.sdc-vue-Loader:after{border-radius:50%;height:1.5rem;width:1.5rem}.sdc-vue-Loader{-ms-transform:translateZ(0);-webkit-animation:sdcload .85s cubic-bezier(.455,.03,.515,.955) infinite;-webkit-transform:translateZ(0);animation:sdcload .85s cubic-bezier(.455,.03,.515,.955) infinite;border-bottom:1em solid hsla(0,0%,100%,.3);border-left:1em solid hsla(0,0%,100%,.3);border-right:1em solid hsla(0,0%,100%,.3);border-top:1em solid #fff;font-size:4px;position:relative;text-indent:-9999em;transform:translateZ(0)}@-webkit-keyframes sdcload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes sdcload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
  
  // exports
  
  
  /***/ }),
  
  /***/ "656e":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // 25.4.1.5 NewPromiseCapability(C)
  var aFunction = __webpack_require__("79aa");
  
  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
  }
  
  module.exports.f = function (C) {
    return new PromiseCapability(C);
  };
  
  
  /***/ }),
  
  /***/ "6718":
  /***/ (function(module, exports, __webpack_require__) {
  
  var global = __webpack_require__("e53d");
  var core = __webpack_require__("584a");
  var LIBRARY = __webpack_require__("b8e3");
  var wksExt = __webpack_require__("ccb9");
  var defineProperty = __webpack_require__("d9f6").f;
  module.exports = function (name) {
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
  };
  
  
  /***/ }),
  
  /***/ "696e":
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__("c207");
  __webpack_require__("1654");
  __webpack_require__("6c1c");
  __webpack_require__("24c5");
  __webpack_require__("3c11");
  __webpack_require__("43fc");
  module.exports = __webpack_require__("584a").Promise;
  
  
  /***/ }),
  
  /***/ "6abf":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  var $keys = __webpack_require__("e6f3");
  var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');
  
  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
  };
  
  
  /***/ }),
  
  /***/ "6b4c":
  /***/ (function(module, exports) {
  
  var toString = {}.toString;
  
  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
  
  
  /***/ }),
  
  /***/ "6c1c":
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__("c367");
  var global = __webpack_require__("e53d");
  var hide = __webpack_require__("35e8");
  var Iterators = __webpack_require__("481b");
  var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');
  
  var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
    'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
    'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
    'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
    'TextTrackList,TouchList').split(',');
  
  for (var i = 0; i < DOMIterables.length; i++) {
    var NAME = DOMIterables[i];
    var Collection = global[NAME];
    var proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = Iterators.Array;
  }
  
  
  /***/ }),
  
  /***/ "71c1":
  /***/ (function(module, exports, __webpack_require__) {
  
  var toInteger = __webpack_require__("3a38");
  var defined = __webpack_require__("25eb");
  // true  -> String#at
  // false -> String#codePointAt
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that));
      var i = toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  
  
  /***/ }),
  
  /***/ "72bf":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var strictUriEncode = __webpack_require__("6453");
  var objectAssign = __webpack_require__("320c");
  var decodeComponent = __webpack_require__("f234");
  
  function encoderForArrayFormat(opts) {
    switch (opts.arrayFormat) {
      case 'index':
        return function (key, value, index) {
          return value === null ? [
            encode(key, opts),
            '[',
            index,
            ']'
          ].join('') : [
            encode(key, opts),
            '[',
            encode(index, opts),
            ']=',
            encode(value, opts)
          ].join('');
        };
  
      case 'bracket':
        return function (key, value) {
          return value === null ? encode(key, opts) : [
            encode(key, opts),
            '[]=',
            encode(value, opts)
          ].join('');
        };
  
      default:
        return function (key, value) {
          return value === null ? encode(key, opts) : [
            encode(key, opts),
            '=',
            encode(value, opts)
          ].join('');
        };
    }
  }
  
  function parserForArrayFormat(opts) {
    var result;
  
    switch (opts.arrayFormat) {
      case 'index':
        return function (key, value, accumulator) {
          result = /\[(\d*)\]$/.exec(key);
  
          key = key.replace(/\[\d*\]$/, '');
  
          if (!result) {
            accumulator[key] = value;
            return;
          }
  
          if (accumulator[key] === undefined) {
            accumulator[key] = {};
          }
  
          accumulator[key][result[1]] = value;
        };
  
      case 'bracket':
        return function (key, value, accumulator) {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, '');
  
          if (!result) {
            accumulator[key] = value;
            return;
          } else if (accumulator[key] === undefined) {
            accumulator[key] = [value];
            return;
          }
  
          accumulator[key] = [].concat(accumulator[key], value);
        };
  
      default:
        return function (key, value, accumulator) {
          if (accumulator[key] === undefined) {
            accumulator[key] = value;
            return;
          }
  
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  
  function encode(value, opts) {
    if (opts.encode) {
      return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
    }
  
    return value;
  }
  
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    } else if (typeof input === 'object') {
      return keysSorter(Object.keys(input)).sort(function (a, b) {
        return Number(a) - Number(b);
      }).map(function (key) {
        return input[key];
      });
    }
  
    return input;
  }
  
  function extract(str) {
    var queryStart = str.indexOf('?');
    if (queryStart === -1) {
      return '';
    }
    return str.slice(queryStart + 1);
  }
  
  function parse(str, opts) {
    opts = objectAssign({arrayFormat: 'none'}, opts);
  
    var formatter = parserForArrayFormat(opts);
  
    // Create an object with no prototype
    // https://github.com/sindresorhus/query-string/issues/47
    var ret = Object.create(null);
  
    if (typeof str !== 'string') {
      return ret;
    }
  
    str = str.trim().replace(/^[?#&]/, '');
  
    if (!str) {
      return ret;
    }
  
    str.split('&').forEach(function (param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      // Firefox (pre 40) decodes `%3D` to `=`
      // https://github.com/sindresorhus/query-string/pull/37
      var key = parts.shift();
      var val = parts.length > 0 ? parts.join('=') : undefined;
  
      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeComponent(val);
  
      formatter(decodeComponent(key), val, ret);
    });
  
    return Object.keys(ret).sort().reduce(function (result, key) {
      var val = ret[key];
      if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
        // Sort object keys, not values
        result[key] = keysSorter(val);
      } else {
        result[key] = val;
      }
  
      return result;
    }, Object.create(null));
  }
  
  exports.extract = extract;
  exports.parse = parse;
  
  exports.stringify = function (obj, opts) {
    var defaults = {
      encode: true,
      strict: true,
      arrayFormat: 'none'
    };
  
    opts = objectAssign(defaults, opts);
  
    if (opts.sort === false) {
      opts.sort = function () {};
    }
  
    var formatter = encoderForArrayFormat(opts);
  
    return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
      var val = obj[key];
  
      if (val === undefined) {
        return '';
      }
  
      if (val === null) {
        return encode(key, opts);
      }
  
      if (Array.isArray(val)) {
        var result = [];
  
        val.slice().forEach(function (val2) {
          if (val2 === undefined) {
            return;
          }
  
          result.push(formatter(key, val2, result.length));
        });
  
        return result.join('&');
      }
  
      return encode(key, opts) + '=' + encode(val, opts);
    }).filter(function (x) {
      return x.length > 0;
    }).join('&') : '';
  };
  
  exports.parseUrl = function (str, opts) {
    return {
      url: str.split('?')[0] || '',
      query: parse(extract(str), opts)
    };
  };
  
  
  /***/ }),
  
  /***/ "74ae":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9d0e");
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
   /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 
  
  /***/ }),
  
  /***/ "794b":
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
    return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
  });
  
  
  /***/ }),
  
  /***/ "795b":
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__("696e");
  
  /***/ }),
  
  /***/ "79aa":
  /***/ (function(module, exports) {
  
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  
  
  /***/ }),
  
  /***/ "7cd6":
  /***/ (function(module, exports, __webpack_require__) {
  
  var classof = __webpack_require__("40c3");
  var ITERATOR = __webpack_require__("5168")('iterator');
  var Iterators = __webpack_require__("481b");
  module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR]
      || it['@@iterator']
      || Iterators[classof(it)];
  };
  
  
  /***/ }),
  
  /***/ "7e90":
  /***/ (function(module, exports, __webpack_require__) {
  
  var dP = __webpack_require__("d9f6");
  var anObject = __webpack_require__("e4ae");
  var getKeys = __webpack_require__("c3a1");
  
  module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) dP.f(O, P = keys[i++], Properties[P]);
    return O;
  };
  
  
  /***/ }),
  
  /***/ "8274":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1ac2");
  /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
  /* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
   /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 
  
  /***/ }),
  
  /***/ "8436":
  /***/ (function(module, exports) {
  
  module.exports = function () { /* empty */ };
  
  
  /***/ }),
  
  /***/ "85f2":
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__("454f");
  
  /***/ }),
  
  /***/ "8aae":
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__("32a6");
  module.exports = __webpack_require__("584a").Object.keys;
  
  
  /***/ }),
  
  /***/ "8bbf":
  /***/ (function(module, exports) {
  
  module.exports = Vue;
  
  /***/ }),
  
  /***/ "8e60":
  /***/ (function(module, exports, __webpack_require__) {
  
  // Thank's IE8 for his funny defineProperty
  module.exports = !__webpack_require__("294c")(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });
  
  
  /***/ }),
  
  /***/ "8f60":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var create = __webpack_require__("a159");
  var descriptor = __webpack_require__("aebd");
  var setToStringTag = __webpack_require__("45f2");
  var IteratorPrototype = {};
  
  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  __webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });
  
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  
  
  /***/ }),
  
  /***/ "9003":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 7.2.2 IsArray(argument)
  var cof = __webpack_require__("6b4c");
  module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };
  
  
  /***/ }),
  
  /***/ "9138":
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__("35e8");
  
  
  /***/ }),
  
  /***/ "96cf":
  /***/ (function(module, exports, __webpack_require__) {
  
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  var runtime = (function (exports) {
    "use strict";
  
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  
    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);
  
      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);
  
      return generator;
    }
    exports.wrap = wrap;
  
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }
  
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
  
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
  
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
  
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };
  
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }
  
    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] =
      GeneratorFunction.displayName = "GeneratorFunction";
  
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }
  
    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };
  
    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };
  
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };
  
    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }
  
          return Promise.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }
  
      var previousPromise;
  
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
  
        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }
  
      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }
  
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;
  
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList)
      );
  
      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };
  
    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
  
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
  
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }
  
          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }
  
        context.method = method;
        context.arg = arg;
  
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
  
          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
  
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }
  
            context.dispatchException(context.arg);
  
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }
  
          state = GenStateExecuting;
  
          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;
  
            if (record.arg === ContinueSentinel) {
              continue;
            }
  
            return {
              value: record.arg,
              done: context.done
            };
  
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }
  
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;
  
        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);
  
            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }
  
          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }
  
        return ContinueSentinel;
      }
  
      var record = tryCatch(method, delegate.iterator, context.arg);
  
      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }
  
      var info = record.arg;
  
      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }
  
      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;
  
        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;
  
        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
  
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }
  
      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }
  
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
  
    Gp[toStringTagSymbol] = "Generator";
  
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };
  
    Gp.toString = function() {
      return "[object Generator]";
    };
  
    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };
  
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
  
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
  
      this.tryEntries.push(entry);
    }
  
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
  
    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
  
    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();
  
      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }
  
        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };
  
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
  
        if (typeof iterable.next === "function") {
          return iterable;
        }
  
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
  
            next.value = undefined;
            next.done = true;
  
            return next;
          };
  
          return next.next = next;
        }
      }
  
      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;
  
    function doneResult() {
      return { value: undefined, done: true };
    }
  
    Context.prototype = {
      constructor: Context,
  
      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;
  
        this.method = "next";
        this.arg = undefined;
  
        this.tryEntries.forEach(resetTryEntry);
  
        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },
  
      stop: function() {
        this.done = true;
  
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
  
        return this.rval;
      },
  
      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }
  
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
  
          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }
  
          return !! caught;
        }
  
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
  
          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }
  
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");
  
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
  
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
  
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
  
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
  
      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
  
        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }
  
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
  
        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }
  
        return this.complete(record);
      },
  
      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
  
        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
  
        return ContinueSentinel;
      },
  
      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
  
      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
  
        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },
  
      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };
  
        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }
  
        return ContinueSentinel;
      }
    };
  
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
  
  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     true ? module.exports : undefined
  ));
  
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  
  
  /***/ }),
  
  /***/ "9aa9":
  /***/ (function(module, exports) {
  
  exports.f = Object.getOwnPropertySymbols;
  
  
  /***/ }),
  
  /***/ "9d0e":
  /***/ (function(module, exports, __webpack_require__) {
  
  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__("6470");
  if(typeof content === 'string') content = [[module.i, content, '']];
  if(content.locals) module.exports = content.locals;
  // add CSS to Shadow Root
  var add = __webpack_require__("35d6").default
  module.exports.__inject__ = function (shadowRoot) {
    add("7d98f2be", content, shadowRoot)
  };
  
  /***/ }),
  
  /***/ "a159":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject = __webpack_require__("e4ae");
  var dPs = __webpack_require__("7e90");
  var enumBugKeys = __webpack_require__("1691");
  var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE = 'prototype';
  
  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = __webpack_require__("1ec9")('iframe');
    var i = enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    __webpack_require__("32fc").appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
  };
  
  module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };
  
  
  /***/ }),
  
  /***/ "a22a":
  /***/ (function(module, exports, __webpack_require__) {
  
  var ctx = __webpack_require__("d864");
  var call = __webpack_require__("b0dc");
  var isArrayIter = __webpack_require__("3702");
  var anObject = __webpack_require__("e4ae");
  var toLength = __webpack_require__("b447");
  var getIterFn = __webpack_require__("7cd6");
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
    var f = ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = call(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
  
  
  /***/ }),
  
  /***/ "a4bb":
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__("8aae");
  
  /***/ }),
  
  /***/ "aba2":
  /***/ (function(module, exports, __webpack_require__) {
  
  var global = __webpack_require__("e53d");
  var macrotask = __webpack_require__("4178").set;
  var Observer = global.MutationObserver || global.WebKitMutationObserver;
  var process = global.process;
  var Promise = global.Promise;
  var isNode = __webpack_require__("6b4c")(process) == 'process';
  
  module.exports = function () {
    var head, last, notify;
  
    var flush = function () {
      var parent, fn;
      if (isNode && (parent = process.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) notify();
          else last = undefined;
          throw e;
        }
      } last = undefined;
      if (parent) parent.enter();
    };
  
    // Node.js
    if (isNode) {
      notify = function () {
        process.nextTick(flush);
      };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
    } else if (Observer && !(global.navigator && global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise && Promise.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise.resolve(undefined);
      notify = function () {
        promise.then(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
      };
    }
  
    return function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      } last = task;
    };
  };
  
  
  /***/ }),
  
  /***/ "aebd":
  /***/ (function(module, exports) {
  
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  
  
  /***/ }),
  
  /***/ "b0dc":
  /***/ (function(module, exports, __webpack_require__) {
  
  // call something on iterator step with safe closing on error
  var anObject = __webpack_require__("e4ae");
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
  
  
  /***/ }),
  
  /***/ "b2ca":
  /***/ (function(module, exports, __webpack_require__) {
  
  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__("2483");
  if(typeof content === 'string') content = [[module.i, content, '']];
  if(content.locals) module.exports = content.locals;
  // add CSS to Shadow Root
  var add = __webpack_require__("35d6").default
  module.exports.__inject__ = function (shadowRoot) {
    add("65a9c7c4", content, shadowRoot)
  };
  
  /***/ }),
  
  /***/ "b43c":
  /***/ (function(module, exports, __webpack_require__) {
  
  exports = module.exports = __webpack_require__("2350")(false);
  // imports
  
  
  // module
  exports.push([module.i, ":root{--button-transition:200ms cubic-bezier(.2,.51,.76,.72)}.sdc-vue-Button{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#5700ff;border-radius:8px;border:2px solid transparent;color:#fff;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Sofia,Helvetica,Arial,sans-serif;font-size:1.125rem;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;letter-spacing:.0125rem;line-height:1.375rem;padding:1.25rem 1.875rem;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;-webkit-transition:background .2s cubic-bezier(.2,.51,.76,.72),border-color .2s cubic-bezier(.2,.51,.76,.72),color .2s cubic-bezier(.2,.51,.76,.72);transition:background .2s cubic-bezier(.2,.51,.76,.72),border-color .2s cubic-bezier(.2,.51,.76,.72),color .2s cubic-bezier(.2,.51,.76,.72)}.sdc-vue-Button:disabled{padding:1.175rem 4rem}.sdc-vue-Button--small{border-radius:4px;font-size:.8125rem;line-height:1;padding:.625rem 1.75rem}@media (hover:hover){.sdc-vue-Button:hover:enabled{background:#fff;border-color:#5700ff;color:#5700ff}}", ""]);
  
  // exports
  
  
  /***/ }),
  
  /***/ "b447":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 7.1.15 ToLength
  var toInteger = __webpack_require__("3a38");
  var min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };
  
  
  /***/ }),
  
  /***/ "b8e3":
  /***/ (function(module, exports) {
  
  module.exports = true;
  
  
  /***/ }),
  
  /***/ "bc10":
  /***/ (function(module, exports, __webpack_require__) {
  
  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__("f8a9");
  if(typeof content === 'string') content = [[module.i, content, '']];
  if(content.locals) module.exports = content.locals;
  // add CSS to Shadow Root
  var add = __webpack_require__("35d6").default
  module.exports.__inject__ = function (shadowRoot) {
    add("4e7d0eb1", content, shadowRoot)
  };
  
  /***/ }),
  
  /***/ "bc13":
  /***/ (function(module, exports, __webpack_require__) {
  
  var global = __webpack_require__("e53d");
  var navigator = global.navigator;
  
  module.exports = navigator && navigator.userAgent || '';
  
  
  /***/ }),
  
  /***/ "bf0b":
  /***/ (function(module, exports, __webpack_require__) {
  
  var pIE = __webpack_require__("355d");
  var createDesc = __webpack_require__("aebd");
  var toIObject = __webpack_require__("36c3");
  var toPrimitive = __webpack_require__("1bc3");
  var has = __webpack_require__("07e3");
  var IE8_DOM_DEFINE = __webpack_require__("794b");
  var gOPD = Object.getOwnPropertyDescriptor;
  
  exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
      return gOPD(O, P);
    } catch (e) { /* empty */ }
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
  };
  
  
  /***/ }),
  
  /***/ "bf90":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  var toIObject = __webpack_require__("36c3");
  var $getOwnPropertyDescriptor = __webpack_require__("bf0b").f;
  
  __webpack_require__("ce7e")('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  
  
  /***/ }),
  
  /***/ "c207":
  /***/ (function(module, exports) {
  
  
  
  /***/ }),
  
  /***/ "c367":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var addToUnscopables = __webpack_require__("8436");
  var step = __webpack_require__("50ed");
  var Iterators = __webpack_require__("481b");
  var toIObject = __webpack_require__("36c3");
  
  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  
  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;
  
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  
  
  /***/ }),
  
  /***/ "c3a1":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys = __webpack_require__("e6f3");
  var enumBugKeys = __webpack_require__("1691");
  
  module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };
  
  
  /***/ }),
  
  /***/ "ccb9":
  /***/ (function(module, exports, __webpack_require__) {
  
  exports.f = __webpack_require__("5168");
  
  
  /***/ }),
  
  /***/ "cd78":
  /***/ (function(module, exports, __webpack_require__) {
  
  var anObject = __webpack_require__("e4ae");
  var isObject = __webpack_require__("f772");
  var newPromiseCapability = __webpack_require__("656e");
  
  module.exports = function (C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };
  
  
  /***/ }),
  
  /***/ "ce7e":
  /***/ (function(module, exports, __webpack_require__) {
  
  // most Object methods by ES6 should accept primitives
  var $export = __webpack_require__("63b6");
  var core = __webpack_require__("584a");
  var fails = __webpack_require__("294c");
  module.exports = function (KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
  };
  
  
  /***/ }),
  
  /***/ "d864":
  /***/ (function(module, exports, __webpack_require__) {
  
  // optional / simple context binding
  var aFunction = __webpack_require__("79aa");
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };
  
  
  /***/ }),
  
  /***/ "d9f6":
  /***/ (function(module, exports, __webpack_require__) {
  
  var anObject = __webpack_require__("e4ae");
  var IE8_DOM_DEFINE = __webpack_require__("794b");
  var toPrimitive = __webpack_require__("1bc3");
  var dP = Object.defineProperty;
  
  exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  
  
  /***/ }),
  
  /***/ "dbdb":
  /***/ (function(module, exports, __webpack_require__) {
  
  var core = __webpack_require__("584a");
  var global = __webpack_require__("e53d");
  var SHARED = '__core-js_shared__';
  var store = global[SHARED] || (global[SHARED] = {});
  
  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: core.version,
    mode: __webpack_require__("b8e3") ? 'pure' : 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  
  
  /***/ }),
  
  /***/ "e265":
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__("ed33");
  
  /***/ }),
  
  /***/ "e4ae":
  /***/ (function(module, exports, __webpack_require__) {
  
  var isObject = __webpack_require__("f772");
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
  
  
  /***/ }),
  
  /***/ "e53d":
  /***/ (function(module, exports) {
  
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  
  
  /***/ }),
  
  /***/ "e6f3":
  /***/ (function(module, exports, __webpack_require__) {
  
  var has = __webpack_require__("07e3");
  var toIObject = __webpack_require__("36c3");
  var arrayIndexOf = __webpack_require__("5b4e")(false);
  var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
  
  module.exports = function (object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };
  
  
  /***/ }),
  
  /***/ "ebfd":
  /***/ (function(module, exports, __webpack_require__) {
  
  var META = __webpack_require__("62a0")('meta');
  var isObject = __webpack_require__("f772");
  var has = __webpack_require__("07e3");
  var setDesc = __webpack_require__("d9f6").f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !__webpack_require__("294c")(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  
  
  /***/ }),
  
  /***/ "ed33":
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__("014b");
  module.exports = __webpack_require__("584a").Object.getOwnPropertySymbols;
  
  
  /***/ }),
  
  /***/ "f201":
  /***/ (function(module, exports, __webpack_require__) {
  
  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
  var anObject = __webpack_require__("e4ae");
  var aFunction = __webpack_require__("79aa");
  var SPECIES = __webpack_require__("5168")('species');
  module.exports = function (O, D) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  
  
  /***/ }),
  
  /***/ "f234":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var token = '%[a-f0-9]{2}';
  var singleMatcher = new RegExp(token, 'gi');
  var multiMatcher = new RegExp('(' + token + ')+', 'gi');
  
  function decodeComponents(components, split) {
    try {
      // Try to decode the entire string first
      return decodeURIComponent(components.join(''));
    } catch (err) {
      // Do nothing
    }
  
    if (components.length === 1) {
      return components;
    }
  
    split = split || 1;
  
    // Split the array in 2 parts
    var left = components.slice(0, split);
    var right = components.slice(split);
  
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
  }
  
  function decode(input) {
    try {
      return decodeURIComponent(input);
    } catch (err) {
      var tokens = input.match(singleMatcher);
  
      for (var i = 1; i < tokens.length; i++) {
        input = decodeComponents(tokens, i).join('');
  
        tokens = input.match(singleMatcher);
      }
  
      return input;
    }
  }
  
  function customDecodeURIComponent(input) {
    // Keep track of all the replacements and prefill the map with the `BOM`
    var replaceMap = {
      '%FE%FF': '\uFFFD\uFFFD',
      '%FF%FE': '\uFFFD\uFFFD'
    };
  
    var match = multiMatcher.exec(input);
    while (match) {
      try {
        // Decode as big chunks as possible
        replaceMap[match[0]] = decodeURIComponent(match[0]);
      } catch (err) {
        var result = decode(match[0]);
  
        if (result !== match[0]) {
          replaceMap[match[0]] = result;
        }
      }
  
      match = multiMatcher.exec(input);
    }
  
    // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
    replaceMap['%C2'] = '\uFFFD';
  
    var entries = Object.keys(replaceMap);
  
    for (var i = 0; i < entries.length; i++) {
      // Replace all decoded components
      var key = entries[i];
      input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
    }
  
    return input;
  }
  
  module.exports = function (encodedURI) {
    if (typeof encodedURI !== 'string') {
      throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
    }
  
    try {
      encodedURI = encodedURI.replace(/\+/g, ' ');
  
      // Try the built in decoder first
      return decodeURIComponent(encodedURI);
    } catch (err) {
      // Fallback to a more advanced decoder
      return customDecodeURIComponent(encodedURI);
    }
  };
  
  
  /***/ }),
  
  /***/ "f479":
  /***/ (function(module, exports, __webpack_require__) {
  
  exports = module.exports = __webpack_require__("2350")(false);
  // imports
  
  
  // module
  exports.push([module.i, ".LightBox-loading{position:absolute;top:22.5%;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.LightBox{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Sofia,SofiaPro,Helvetica,Arial,sans-serif}.LightBox-backdrop{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.6);bottom:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000}.LightBox-backdrop,.LightBox-content{display:-webkit-box;display:-ms-flexbox;display:flex}.LightBox-content{background:#fff;-webkit-box-shadow:#000 2px 2px 20px 1px;box-shadow:2px 2px 20px 1px #000;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:auto;position:relative;width:100%}.LightBox-arrow{border-width:0 .2rem .2rem 0;border:solid hsla(0,0%,100%,.5);padding:.5rem;position:absolute;top:24%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:border-color .2s cubic-bezier(.2,.51,.76,.72);transition:border-color .2s cubic-bezier(.2,.51,.76,.72);z-index:1}.LightBox-arrow:hover{border-width:0 .2rem .2rem 0;border:solid hsla(0,0%,100%,.75);cursor:pointer}.LightBox-arrow--right{right:1.5rem;-webkit-transform:translateY(-50%) rotate(-45deg);transform:translateY(-50%) rotate(-45deg)}.LightBox-arrow--left,.LightBox-arrow--right,.LightBox-arrow--right:hover{border-width:0 .2rem .2rem 0}.LightBox-arrow--left{left:1.5rem;-webkit-transform:translateY(-50%) rotate(135deg);transform:translateY(-50%) rotate(135deg)}.LightBox-arrow--left:hover{border-width:0 .2rem .2rem 0}.LightBox-close{background:transparent;border:none;display:block;height:1.25rem;position:absolute;right:1.5rem;top:1rem;width:1.25rem}.LightBox-close:after,.LightBox-close:before{background-color:hsla(0,0%,100%,.6);content:\" \";height:20px;position:absolute;width:2px}.LightBox-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.LightBox-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.LightBox-close:hover{cursor:pointer}.LightBox-body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1.5rem}.LightBox-caption{line-height:1.5rem;margin-top:1rem;text-align:left!important}.LightBox-copy{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.LightBox-copy,.LightBox-copyInfo{display:-webkit-box;display:-ms-flexbox;display:flex}.LightBox-copyInfoText{margin-left:1rem;overflow:hidden}.LightBox-copyUsername{font-size:1.25rem;overflow-x:hidden;text-align:left!important;text-overflow:ellipsis;white-space:nowrap}.LightBox-copySubheader{font-size:.625rem;text-transform:uppercase}.LightBox-copySubheader,.LightBox-date{color:rgba(0,0,0,.22);text-align:left!important}.LightBox-date{font-size:.8rem;margin:.5rem 0}.LightBox-aLink{text-decoration:none}.LightBox-image{-ms-object-fit:cover;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;width:100%}.LightBox-modal-image-container{-webkit-box-flex:1;-ms-flex:1;flex:1}.LightBox-profilePic{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#5700ff;border-radius:50%;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-family:Sofia Black,Helvetica,Arial,sans-serif;font-size:1.4rem;height:3rem;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:.75;width:3rem}.LightBox-profilePicLetter{height:1rem;text-align:center;width:2rem;margin-bottom:.1rem}.LightBox-cta{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:hsla(0,0%,88.2%,.4);border-radius:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:1rem;padding:1.25rem;text-align:center;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.LightBox-ctaText{font-size:1rem;line-height:1.375rem;margin-bottom:1rem;max-width:none}@media only screen and (min-width:768px){.LightBox-content{border-radius:10px;height:95%;width:70%}.LightBox-close:after,.LightBox-close:before{height:30px;right:5px}.LightBox-arrow{padding:1rem;top:30%}.LightBox-loading{top:30%}.LightBox-copyInfo{display:-webkit-box;display:-ms-flexbox;display:flex}.LightBox-caption{font-size:1.2rem;line-height:1.875rem;padding:20px 0 0 0}.LightBox-copyUsername{font-size:1.3rem}}@media only screen and (min-width:1024px){.LightBox-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:auto;max-height:650px;max-width:1100px;overflow:hidden}.LightBox-copy{-webkit-box-flex:1;-ms-flex:1;flex:1}.LightBox-arrow{top:50%}.LightBox-loading{top:46%}.LightBox-arrow--right{right:1.875rem}.LightBox-arrow--left{left:1.875rem}.LightBox-close{right:1.875rem;top:1.5rem;padding:0 0 25px 0}.LightBox-close:after,.LightBox-close:before{background-color:#b3b3b3;height:1.25rem}.LightBox-body{height:auto;padding:1.875rem;width:40%}.LightBox-copyInfo{margin-bottom:1.875rem}.LightBox-copyUsername{font-size:1.25rem}.LightBox-caption{font-size:1rem;line-height:1.5rem;margin:0;padding:0}.LightBox-imageContainer{display:-webkit-box;display:-ms-flexbox;display:flex;height:0;padding-top:60%;position:relative;width:inherit}.LightBox-image{bottom:0;height:100%;left:0;position:absolute;right:0;top:0}.LightBox-ctaText{font-size:.9rem;max-width:240px}}@media only screen and (min-width:1024px) and (max-width:1300px){.LightBox-content{width:90%}.LightBox-ctaText{font-size:1rem}}@media only screen and (min-width:1920px){.LightBox-content{border-radius:.8vw;max-height:40vw;max-width:65vw}.LightBox-arrow{height:.5vw;width:.5vw}.LightBox-close{right:1.75vw;top:1.25vw}.LightBox-close:after,.LightBox-close:before{height:1.25vw}.LightBox-caption{font-size:1.1vw;line-height:1.6vw}.LightBox-copyUsername{font-size:1.2vw;line-height:1.5vw}.LightBox-copySubheader{font-size:.65vw}.LightBox-copyInfo{margin-bottom:1.5vw}.LightBox-date{font-size:.75vw}.LightBox-profilePic{font-size:1.25vw;height:3vw;line-height:.6;width:3vw}.LightBox-ctaText{font-size:1.05vw;line-height:1.2vw}.LightBox-cta{border-radius:.5vw;padding:.8vw}.LightBox-ctaButton{border-radius:6px;font-size:1vw;line-height:1.25;padding:.5vw 2.5vw}}", ""]);
  
  // exports
  
  
  /***/ }),
  
  /***/ "f6fd":
  /***/ (function(module, exports) {
  
  // document.currentScript polyfill by Adam Miller
  
  // MIT license
  
  (function(document){
    var currentScript = "currentScript",
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
    // If browser needs currentScript polyfill, add get currentScript() to the document object
    if (!(currentScript in document)) {
      Object.defineProperty(document, currentScript, {
        get: function(){
  
          // IE 6-10 supports script readyState
          // IE 10+ support stack trace
          try { throw new Error(); }
          catch (err) {
  
            // Find the second match for the "at" string to get file src url from stack.
            // Specifically works with the format of stack traces in IE.
            var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];
  
            // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
            for(i in scripts){
              if(scripts[i].src == res || scripts[i].readyState == "interactive"){
                return scripts[i];
              }
            }
  
            // If no match, return null
            return null;
          }
        }
      });
    }
  })(document);
  
  
  /***/ }),
  
  /***/ "f772":
  /***/ (function(module, exports) {
  
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  
  
  /***/ }),
  
  /***/ "f8a9":
  /***/ (function(module, exports, __webpack_require__) {
  
  exports = module.exports = __webpack_require__("2350")(false);
  // imports
  
  
  // module
  exports.push([module.i, ".u-scrollLock{height:100vh;overflow:hidden;-webkit-overflow-scrolling:touch}", ""]);
  
  // exports
  
  
  /***/ }),
  
  /***/ "fde4":
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__("bf90");
  var $Object = __webpack_require__("584a").Object;
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $Object.getOwnPropertyDescriptor(it, key);
  };
  
  
  /***/ })
  
  /******/ });
  //# sourceMappingURL=social-album-widget.js.map
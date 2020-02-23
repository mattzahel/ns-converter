// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/handlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexResult = exports.octResult = exports.binResult = exports.decResult = exports.numVal = exports.numSys = void 0;
var numSys = document.querySelector("#system");
exports.numSys = numSys;
var numVal = document.querySelector("#numVal");
exports.numVal = numVal;
var decResult = document.querySelector("#decResult");
exports.decResult = decResult;
var binResult = document.querySelector("#binResult");
exports.binResult = binResult;
var octResult = document.querySelector("#octResult");
exports.octResult = octResult;
var hexResult = document.querySelector("#hexResult");
exports.hexResult = hexResult;
},{}],"assets/js/toggleResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleResults = void 0;

var _handlers = require("./handlers");

_handlers.numVal.addEventListener("input", function () {
  document.querySelector("#results").classList.add("results--hidden");
});

var toggleResults = function toggleResults() {
  document.querySelector("#decBlock").style.display = "none";

  _handlers.numSys.addEventListener("change", function () {
    document.getElementById("numVal").value = '';
    document.querySelector("#results").classList.add("results--hidden");

    if (_handlers.numSys.value === "hex") {
      _handlers.numVal.type = "text";
    } else {
      _handlers.numVal.type = "number";
    }

    ;
    Array.from(document.getElementsByClassName("results__block")).forEach(function (item) {
      if (item.id == "".concat(_handlers.numSys.value, "Block")) item.style.display = "none";else item.style.display = "block";
    });
  });
};

exports.toggleResults = toggleResults;
toggleResults();
},{"./handlers":"assets/js/handlers.js"}],"assets/js/dec.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertFromDec = convertFromDec;

var _handlers = require("./handlers");

function decToBin(value) {
  var n = value;
  var binary = [];

  for (var i = 0; n > 0; i++) {
    binary[i] = Math.floor(n % 2);
    n = Math.floor(n / 2);
  }

  binary = binary.reverse().map(String).join("");
  return binary;
}

function decToOct(value) {
  var n = value;
  var octal = [];

  for (var i = 0; n > 0; i++) {
    octal[i] = Math.floor(n % 8);
    n = Math.floor(n / 8);
  }

  octal = octal.reverse().map(String).join("");
  return octal;
}

function decToHex(value) {
  var n = value;
  var hexadecimal = [];

  for (var i = 0; n > 0; i++) {
    hexadecimal[i] = Math.floor(n % 16);
    n = Math.floor(n / 16);
  }

  for (var _i = 0; _i < hexadecimal.length; _i++) {
    hexadecimal[_i] = hexadecimal[_i].toString(16).toUpperCase();
  }

  hexadecimal = hexadecimal.reverse().join("");
  return hexadecimal;
}

function convertFromDec(val) {
  _handlers.binResult.textContent = decToBin(val);
  _handlers.octResult.textContent = decToOct(val);
  _handlers.hexResult.textContent = decToHex(val);
}
},{"./handlers":"assets/js/handlers.js"}],"assets/js/bin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertFromBin = convertFromBin;

var _handlers = require("./handlers");

function binToDec(val) {
  var n = val;
  return parseInt(n, 2);
}

function binToOct(val) {
  var n = binToDec(val);
  return n.toString(8);
}

function binToHex(val) {
  var n = binToDec(val);
  return n.toString(16).toUpperCase();
}

function convertFromBin() {
  var val = document.getElementById("numVal").value;
  _handlers.decResult.textContent = binToDec(val);
  _handlers.octResult.textContent = binToOct(val);
  _handlers.hexResult.textContent = binToHex(val);
}
},{"./handlers":"assets/js/handlers.js"}],"assets/js/oct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertFromOct = convertFromOct;

var _handlers = require("./handlers");

function octToDec(val) {
  var n = val;
  return parseInt(n, 8);
}

function octToBin(val) {
  var n = octToDec(val);
  return n.toString(2);
}

function octToHex(val) {
  var n = octToDec(val);
  return n.toString(16).toUpperCase();
}

function convertFromOct() {
  var val = document.getElementById("numVal").value;
  _handlers.decResult.textContent = octToDec(val);
  _handlers.binResult.textContent = octToBin(val);
  _handlers.hexResult.textContent = octToHex(val);
}
},{"./handlers":"assets/js/handlers.js"}],"assets/js/hex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertFromHex = convertFromHex;

var _handlers = require("./handlers");

function hexToDec(val) {
  var n = val;
  return parseInt(n, 16);
}

function hexToBin(val) {
  var n = hexToDec(val);
  return n.toString(2);
}

function hexToOct(val) {
  var n = hexToDec(val);
  return n.toString(8);
}

function convertFromHex() {
  var val = document.getElementById("numVal").value;
  _handlers.decResult.textContent = hexToDec(val);
  _handlers.binResult.textContent = hexToBin(val);
  _handlers.octResult.textContent = hexToOct(val);
}
},{"./handlers":"assets/js/handlers.js"}],"assets/js/index.js":[function(require,module,exports) {
"use strict";

var _handlers = require("./handlers");

var _toggleResults = require("./toggleResults");

var _dec = require("./dec");

var _bin = require("./bin");

var _oct = require("./oct");

var _hex = require("./hex");

document.getElementById("convertForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var numVal = document.getElementById("numVal").value;

  if (numVal != "") {
    convert(numVal);
  }

  ;
});

function convert(number) {
  document.querySelector("#results").classList.remove("results--hidden");

  switch (_handlers.numSys.value) {
    case "dec":
      (0, _dec.convertFromDec)(number);
      break;

    case "bin":
      (0, _bin.convertFromBin)(number);
      break;

    case "oct":
      (0, _oct.convertFromOct)(number);
      break;

    case "hex":
      (0, _hex.convertFromHex)(number);
      break;
  }
}

;
},{"./handlers":"assets/js/handlers.js","./toggleResults":"assets/js/toggleResults.js","./dec":"assets/js/dec.js","./bin":"assets/js/bin.js","./oct":"assets/js/oct.js","./hex":"assets/js/hex.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55987" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/index.js"], null)
//# sourceMappingURL=/js.5c615dc2.js.map
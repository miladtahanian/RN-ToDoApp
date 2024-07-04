"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _constant = require("./constant");
Object.keys(_constant).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constant[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constant[key];
    }
  });
});
var _utils = require("./utils");
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});
//# sourceMappingURL=index.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils");
var _props = require("../props");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Weekdays = /*#__PURE__*/(0, _react.memo)(({
  weekdaysContainerStyle,
  weekdayStyle,
  weekdayTextStyle
}) => {
  const renderWeekdays = day => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    key: day,
    style: [_props.DEFAULT_PROPS.weekdayStyle, weekdayStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_props.DEFAULT_PROPS.weekdayTextStyle, weekdayTextStyle]
  }, day));
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [{
      flexDirection: 'row'
    }, _props.DEFAULT_PROPS.weekdaysContainerStyle, weekdaysContainerStyle]
  }, _utils.WEEKDAYS_SHORT.map(renderWeekdays));
});
var _default = exports.default = Weekdays;
//# sourceMappingURL=Weekdays.js.map
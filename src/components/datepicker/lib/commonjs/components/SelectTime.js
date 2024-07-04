"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectTime;
var _picker = require("@react-native-picker/picker");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils");
var _props = require("../props");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function SelectTime({
  mode,
  time,
  containerStyle,
  pickerStyle,
  pickerItemStyle,
  dropdownIconColor,
  onTimeChange
}) {
  const [hour, setHour] = (0, _react.useState)('00');
  const [minute, setMinute] = (0, _react.useState)('00');
  (0, _react.useEffect)(() => {
    if (time) {
      setHour(time.split(':')[0]);
      setMinute(time.split(':')[1]);
    }
  }, [time]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_props.DEFAULT_PROPS.selectTimePickerStyle, pickerStyle]
  }, /*#__PURE__*/_react.default.createElement(_picker.Picker, {
    selectedValue: minute,
    onValueChange: itemValue => {
      setMinute(itemValue);
      onTimeChange(`${hour}:${itemValue}`);
    },
    mode: mode,
    dropdownIconColor: dropdownIconColor
  }, (0, _utils.getTimeMinutes)().map(time => /*#__PURE__*/_react.default.createElement(_picker.Picker.Item, {
    style: pickerItemStyle,
    key: time,
    label: (0, _utils.toPersian)(String(time)),
    value: time
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      marginHorizontal: 10,
      fontSize: 16
    }
  }, ":"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_props.DEFAULT_PROPS.selectTimePickerStyle, pickerStyle]
  }, /*#__PURE__*/_react.default.createElement(_picker.Picker, {
    dropdownIconColor: dropdownIconColor,
    selectedValue: hour,
    onValueChange: itemValue => {
      setHour(itemValue);
      onTimeChange(`${itemValue}:${minute}`);
    },
    mode: mode
  }, (0, _utils.getTimeHours)().map(time => /*#__PURE__*/_react.default.createElement(_picker.Picker.Item, {
    style: pickerItemStyle,
    key: time,
    label: (0, _utils.toPersian)(String(time)),
    value: time
  })))));
}
//# sourceMappingURL=SelectTime.js.map
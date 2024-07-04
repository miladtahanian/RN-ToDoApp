"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils");
var _Day = _interopRequireDefault(require("./Day"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const RootCalendar = /*#__PURE__*/(0, _react.memo)(({
  year,
  month,
  selectedDate,
  onDateChange,
  dateSeparator,
  minDate,
  maxDate,
  dayStyle,
  selectedDayStyle,
  selectedDayColor,
  dayTextStyle,
  selectedDayTextColor,
  dayTextColor,
  disabledTextColor
}) => {
  const isSelected = day => selectedDate == (0, _utils.fullDate)(year, month, day, dateSeparator);
  const isDisabled = day => {
    const today = (0, _utils.fullDate)(year, month, day, dateSeparator);
    return (0, _utils.isBefore)(today, minDate, dateSeparator) || (0, _utils.isAfter)(today, maxDate, dateSeparator);
  };
  const onChange = day => () => onDateChange((0, _utils.fullDate)(year, month, day, dateSeparator));
  const renderDay = ({
    item
  }) => /*#__PURE__*/_react.default.createElement(_Day.default, {
    item: item,
    isSelected: isSelected(item),
    onDateChange: onChange(item),
    disabled: isDisabled(item),
    dayStyle: dayStyle,
    selectedDayStyle: selectedDayStyle,
    selectedDayColor: selectedDayColor,
    dayTextStyle: dayTextStyle,
    selectedDayTextColor: selectedDayTextColor,
    dayTextColor: dayTextColor,
    disabledTextColor: disabledTextColor
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    style: {
      flex: 1
    },
    data: (0, _utils.getDays)(year, month),
    renderItem: renderDay,
    keyExtractor: item => `${year}/${month}/${item}`,
    numColumns: 7
  });
});
var _default = exports.default = RootCalendar;
//# sourceMappingURL=RootCalendar.js.map
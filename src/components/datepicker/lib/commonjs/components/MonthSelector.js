"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../utils");
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _props = require("../props");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MonthSelector = ({
  onMonthChange,
  month,
  year,
  selectedEachMonthStyle,
  selectedEachMonthTextStyle,
  minYear,
  minMonth,
  maxYear,
  maxMonth,
  eachMonthStyle,
  eachMonthTextStyle
}) => {
  const selectMonth = month => () => onMonthChange(month);
  const isDisabled = index => {
    if (year == minYear && year == maxYear) {
      return index < minMonth || index > maxMonth;
    }
    if (year == minYear) {
      return index < minMonth;
    }
    if (year == maxYear) {
      return index > maxMonth;
    }
    return false;
  };
  const renderMonth = ({
    item,
    index
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    key: item,
    style: isDisabled(index + 1) ? [_props.DEFAULT_PROPS.eachMonthStyle, eachMonthStyle] : month === index + 1 ? [_props.DEFAULT_PROPS.selectedEachMonthStyle, selectedEachMonthStyle] : [_props.DEFAULT_PROPS.eachMonthStyle, eachMonthStyle],
    disabled: isDisabled(index + 1),
    onPress: selectMonth(index + 1)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDisabled(index + 1) ? {
      color: 'gray',
      fontSize: 16
    } : month === index + 1 ? [_props.DEFAULT_PROPS.selectedEachMonthTextStyle, selectedEachMonthTextStyle] : [_props.DEFAULT_PROPS.eachMonthTextStyle, eachMonthTextStyle]
  }, item));
  return /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    style: {
      minWidth: '95%',
      alignSelf: 'center',
      marginBottom: '3%'
    },
    data: _utils.MONTHS,
    renderItem: renderMonth,
    keyExtractor: item => `${item}`,
    numColumns: 3,
    removeClippedSubviews: true,
    maxToRenderPerBatch: 32,
    initialNumToRender: 32,
    windowSize: 48,
    getItemLayout: (_, index) => ({
      length: 60,
      offset: 60 * index,
      index
    })
  });
};
var _default = exports.default = MonthSelector;
//# sourceMappingURL=MonthSelector.js.map
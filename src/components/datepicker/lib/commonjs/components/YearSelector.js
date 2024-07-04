"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils");
var _props = require("../props");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const YearSelector = ({
  year,
  onYearChange,
  eachYearStyle,
  selectedEachYearStyle,
  eachYearTextStyle,
  selectedEachYearTextStyle,
  minYear,
  maxYear
}) => {
  const selectYear = year => () => onYearChange(year);
  const renderYear = ({
    item
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    key: item,
    style: item === year ? [_props.DEFAULT_PROPS.selectedEachYearStyle, selectedEachYearStyle] : [_props.DEFAULT_PROPS.eachYearStyle, eachYearStyle],
    onPress: selectYear(item)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: item === year ? [_props.DEFAULT_PROPS.selectedEachYearTextStyle, selectedEachYearTextStyle] : [_props.DEFAULT_PROPS.eachYearTextStyle, eachYearTextStyle]
  }, (0, _utils.toPersian)(String(item))));
  return /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    style: {
      minWidth: '95%',
      alignSelf: 'center',
      marginBottom: '3%'
    },
    data: (0, _utils.getYears)(minYear, maxYear),
    renderItem: renderYear,
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
var _default = exports.default = YearSelector;
//# sourceMappingURL=YearSelector.js.map
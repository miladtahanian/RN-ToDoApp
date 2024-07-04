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
const Header = /*#__PURE__*/(0, _react.memo)(({
  mode,
  containerStyle,
  changeModeTo,
  yearMonthTextStyle,
  iconContainerStyle,
  backIcon,
  backIconStyle,
  year,
  month,
  nextIcon,
  nextIconStyle,
  decreaseYear,
  increaseYear,
  decreaseMonth,
  increaseMonth,
  minYear,
  maxYear,
  minMonth,
  maxMonth,
  yearMonthBoxStyle,
  isShowMonthLabel
}) => {
  const renderIcon = (icon, isBack = false) => {
    if (mode === 'year') {
      return null;
    }
    const disabled = () => {
      if (mode === 'month') {
        return isBack ? year <= minYear : year >= maxYear;
      }
      return isBack ? year === minYear && month <= minMonth : year === maxYear && month >= maxMonth;
    };
    const onBackIconPress = () => {
      if (mode === 'month') {
        return decreaseYear();
      }
      decreaseMonth();
    };
    const onNextIconPress = () => {
      if (mode === 'month') {
        return increaseYear();
      }
      increaseMonth();
    };
    return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      style: [_props.DEFAULT_PROPS.iconContainerStyle, {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: disabled() ? 0.5 : 1
      }, isBack ? {
        position: 'absolute',
        left: 5
      } : {
        position: 'absolute',
        right: 5
      }, iconContainerStyle],
      disabled: disabled(),
      onPress: isBack ? onBackIconPress : onNextIconPress
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: icon,
      style: isBack ? backIconStyle : nextIconStyle
    }));
  };
  const renderTitle = () => {
    if (mode === 'calendar') {
      return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
        style: [_props.DEFAULT_PROPS.yearMonthTextStyle, yearMonthTextStyle]
      }, `${isShowMonthLabel ? _utils.MONTHS[month] : (0, _utils.toPersian)(String(month))}، ${(0, _utils.toPersian)(String(year))}`);
    }
    return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [_props.DEFAULT_PROPS.yearMonthTextStyle, yearMonthTextStyle]
    }, (0, _utils.toPersian)(String(year)));
  };
  const onYearMonthPress = () => {
    if (mode === 'calendar') {
      return changeModeTo('month');
    }
    return changeModeTo(mode === 'year' ? 'month' : 'year');
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_props.DEFAULT_PROPS.headerContainerStyle, {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch'
    }, containerStyle]
  }, renderIcon(backIcon, true), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: [_props.DEFAULT_PROPS.yearMonthBoxStyle, yearMonthBoxStyle],
    onPress: onYearMonthPress
  }, renderTitle()), renderIcon(nextIcon));
});
var _default = exports.default = Header;
//# sourceMappingURL=Header.js.map
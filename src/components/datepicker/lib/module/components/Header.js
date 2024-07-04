import React, { memo } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { MONTHS, toPersian } from '../utils';
import { DEFAULT_PROPS } from '../props';
const Header = /*#__PURE__*/memo(({
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
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: [DEFAULT_PROPS.iconContainerStyle, {
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
    }, /*#__PURE__*/React.createElement(Image, {
      source: icon,
      style: isBack ? backIconStyle : nextIconStyle
    }));
  };
  const renderTitle = () => {
    if (mode === 'calendar') {
      return /*#__PURE__*/React.createElement(Text, {
        style: [DEFAULT_PROPS.yearMonthTextStyle, yearMonthTextStyle]
      }, `${isShowMonthLabel ? MONTHS[month] : toPersian(String(month))}، ${toPersian(String(year))}`);
    }
    return /*#__PURE__*/React.createElement(Text, {
      style: [DEFAULT_PROPS.yearMonthTextStyle, yearMonthTextStyle]
    }, toPersian(String(year)));
  };
  const onYearMonthPress = () => {
    if (mode === 'calendar') {
      return changeModeTo('month');
    }
    return changeModeTo(mode === 'year' ? 'month' : 'year');
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [DEFAULT_PROPS.headerContainerStyle, {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch'
    }, containerStyle]
  }, renderIcon(backIcon, true), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [DEFAULT_PROPS.yearMonthBoxStyle, yearMonthBoxStyle],
    onPress: onYearMonthPress
  }, renderTitle()), renderIcon(nextIcon));
});
export default Header;
//# sourceMappingURL=Header.js.map
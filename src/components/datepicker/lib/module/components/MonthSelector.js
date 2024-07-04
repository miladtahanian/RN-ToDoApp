import { MONTHS } from '../utils';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { DEFAULT_PROPS } from '../props';
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
  }) => /*#__PURE__*/React.createElement(TouchableOpacity, {
    key: item,
    style: isDisabled(index + 1) ? [DEFAULT_PROPS.eachMonthStyle, eachMonthStyle] : month === index + 1 ? [DEFAULT_PROPS.selectedEachMonthStyle, selectedEachMonthStyle] : [DEFAULT_PROPS.eachMonthStyle, eachMonthStyle],
    disabled: isDisabled(index + 1),
    onPress: selectMonth(index + 1)
  }, /*#__PURE__*/React.createElement(Text, {
    style: isDisabled(index + 1) ? {
      color: 'gray',
      fontSize: 16
    } : month === index + 1 ? [DEFAULT_PROPS.selectedEachMonthTextStyle, selectedEachMonthTextStyle] : [DEFAULT_PROPS.eachMonthTextStyle, eachMonthTextStyle]
  }, item));
  return /*#__PURE__*/React.createElement(FlatList, {
    style: {
      minWidth: '95%',
      alignSelf: 'center',
      marginBottom: '3%'
    },
    data: MONTHS,
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
export default MonthSelector;
//# sourceMappingURL=MonthSelector.js.map
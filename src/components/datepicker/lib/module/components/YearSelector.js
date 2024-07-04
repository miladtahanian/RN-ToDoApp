import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { getYears, toPersian } from '../utils';
import { DEFAULT_PROPS } from '../props';
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
  }) => /*#__PURE__*/React.createElement(TouchableOpacity, {
    key: item,
    style: item === year ? [DEFAULT_PROPS.selectedEachYearStyle, selectedEachYearStyle] : [DEFAULT_PROPS.eachYearStyle, eachYearStyle],
    onPress: selectYear(item)
  }, /*#__PURE__*/React.createElement(Text, {
    style: item === year ? [DEFAULT_PROPS.selectedEachYearTextStyle, selectedEachYearTextStyle] : [DEFAULT_PROPS.eachYearTextStyle, eachYearTextStyle]
  }, toPersian(String(item))));
  return /*#__PURE__*/React.createElement(FlatList, {
    style: {
      minWidth: '95%',
      alignSelf: 'center',
      marginBottom: '3%'
    },
    data: getYears(minYear, maxYear),
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
export default YearSelector;
//# sourceMappingURL=YearSelector.js.map
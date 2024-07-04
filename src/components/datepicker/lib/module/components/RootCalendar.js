import React, { memo } from 'react';
import { FlatList } from 'react-native';
import { fullDate, getDays, isBefore, isAfter } from '../utils';
import Day from './Day';
const RootCalendar = /*#__PURE__*/memo(({
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
  const isSelected = day => selectedDate == fullDate(year, month, day, dateSeparator);
  const isDisabled = day => {
    const today = fullDate(year, month, day, dateSeparator);
    return isBefore(today, minDate, dateSeparator) || isAfter(today, maxDate, dateSeparator);
  };
  const onChange = day => () => onDateChange(fullDate(year, month, day, dateSeparator));
  const renderDay = ({
    item
  }) => /*#__PURE__*/React.createElement(Day, {
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
  return /*#__PURE__*/React.createElement(FlatList, {
    style: {
      flex: 1
    },
    data: getDays(year, month),
    renderItem: renderDay,
    keyExtractor: item => `${year}/${month}/${item}`,
    numColumns: 7
  });
});
export default RootCalendar;
//# sourceMappingURL=RootCalendar.js.map
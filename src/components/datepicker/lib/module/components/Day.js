import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { toPersian } from '../utils';
import { DEFAULT_PROPS } from '../props';
const Day = /*#__PURE__*/memo(({
  item,
  onDateChange,
  isSelected,
  disabled,
  dayStyle,
  selectedDayStyle,
  selectedDayColor,
  dayTextStyle,
  selectedDayTextColor,
  dayTextColor,
  disabledTextColor
}) => {
  const blank = item === '.';
  if (blank) {
    return /*#__PURE__*/React.createElement(View, {
      style: [DEFAULT_PROPS.dayStyle, dayStyle]
    });
  }
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [DEFAULT_PROPS.dayStyle, dayStyle],
    disabled: isSelected || disabled,
    onPress: onDateChange
  }, /*#__PURE__*/React.createElement(View, {
    style: [DEFAULT_PROPS.selectedDayStyle, {
      backgroundColor: isSelected ? selectedDayColor : 'transparent'
    }, selectedDayStyle]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [DEFAULT_PROPS.dayTextStyle, {
      color: disabled ? disabledTextColor : isSelected ? selectedDayTextColor : dayTextColor
    }, dayTextStyle]
  }, toPersian(item))));
});
export default Day;
//# sourceMappingURL=Day.js.map
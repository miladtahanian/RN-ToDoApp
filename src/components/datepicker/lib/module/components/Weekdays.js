import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { WEEKDAYS_SHORT } from '../utils';
import { DEFAULT_PROPS } from '../props';
const Weekdays = /*#__PURE__*/memo(({
  weekdaysContainerStyle,
  weekdayStyle,
  weekdayTextStyle
}) => {
  const renderWeekdays = day => /*#__PURE__*/React.createElement(View, {
    key: day,
    style: [DEFAULT_PROPS.weekdayStyle, weekdayStyle]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [DEFAULT_PROPS.weekdayTextStyle, weekdayTextStyle]
  }, day));
  return /*#__PURE__*/React.createElement(View, {
    style: [{
      flexDirection: 'row'
    }, DEFAULT_PROPS.weekdaysContainerStyle, weekdaysContainerStyle]
  }, WEEKDAYS_SHORT.map(renderWeekdays));
});
export default Weekdays;
//# sourceMappingURL=Weekdays.js.map
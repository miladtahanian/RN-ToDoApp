import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getTimeHours, getTimeMinutes, toPersian } from '../utils';
import { DEFAULT_PROPS } from '../props';
export default function SelectTime({
  mode,
  time,
  containerStyle,
  pickerStyle,
  pickerItemStyle,
  dropdownIconColor,
  onTimeChange
}) {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  useEffect(() => {
    if (time) {
      setHour(time.split(':')[0]);
      setMinute(time.split(':')[1]);
    }
  }, [time]);
  return /*#__PURE__*/React.createElement(View, {
    style: containerStyle
  }, /*#__PURE__*/React.createElement(View, {
    style: [DEFAULT_PROPS.selectTimePickerStyle, pickerStyle]
  }, /*#__PURE__*/React.createElement(Picker, {
    selectedValue: minute,
    onValueChange: itemValue => {
      setMinute(itemValue);
      onTimeChange(`${hour}:${itemValue}`);
    },
    mode: mode,
    dropdownIconColor: dropdownIconColor
  }, getTimeMinutes().map(time => /*#__PURE__*/React.createElement(Picker.Item, {
    style: pickerItemStyle,
    key: time,
    label: toPersian(String(time)),
    value: time
  })))), /*#__PURE__*/React.createElement(Text, {
    style: {
      marginHorizontal: 10,
      fontSize: 16
    }
  }, ":"), /*#__PURE__*/React.createElement(View, {
    style: [DEFAULT_PROPS.selectTimePickerStyle, pickerStyle]
  }, /*#__PURE__*/React.createElement(Picker, {
    dropdownIconColor: dropdownIconColor,
    selectedValue: hour,
    onValueChange: itemValue => {
      setHour(itemValue);
      onTimeChange(`${itemValue}:${minute}`);
    },
    mode: mode
  }, getTimeHours().map(time => /*#__PURE__*/React.createElement(Picker.Item, {
    style: pickerItemStyle,
    key: time,
    label: toPersian(String(time)),
    value: time
  })))));
}
//# sourceMappingURL=SelectTime.js.map
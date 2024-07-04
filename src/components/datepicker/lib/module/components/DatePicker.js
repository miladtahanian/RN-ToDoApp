import { I18nManager, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Calendar from './Calendar';
import React, { cloneElement, isValidElement, useEffect, useState } from 'react';
export default function DatePicker({
  renderItem,
  datePickerModalStyle,
  datePickerDismissIconColor,
  ...props
}) {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (!I18nManager.isRTL) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    }
  }, []);
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Modal, {
    animationType: "slide",
    transparent: true,
    visible: modalVisible,
    onDismiss: () => setModalVisible(!modalVisible),
    onRequestClose: () => setModalVisible(!modalVisible)
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.centeredView
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.modalView, datePickerModalStyle]
  }, /*#__PURE__*/React.createElement(Pressable, {
    style: {
      position: 'absolute',
      top: 10,
      left: 15
    },
    onPress: () => setModalVisible(false)
  }, /*#__PURE__*/React.createElement(Image, {
    style: {
      width: 20,
      height: 20,
      tintColor: datePickerDismissIconColor
    },
    source: {
      uri: 'https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-close-cross-symbol-for-discontinued-and-invalid-basic-filled-tal-revivo.png'
    }
  })), /*#__PURE__*/React.createElement(Calendar, props)))), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => setModalVisible(true)
  }, renderItem ? /*#__PURE__*/isValidElement(renderItem) ? /*#__PURE__*/cloneElement(renderItem) : typeof renderItem === 'function' ? renderItem() : null : /*#__PURE__*/React.createElement(View, {
    style: styles.input
  }, props.value ? /*#__PURE__*/React.createElement(Text, null, props.value) : /*#__PURE__*/React.createElement(Text, null, "\u06CC\u06A9 \u062A\u0627\u0631\u06CC\u062E \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"))));
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: '100%'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderColor: '#ccc',
    borderRadius: 10
  }
});
//# sourceMappingURL=DatePicker.js.map
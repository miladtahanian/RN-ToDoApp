"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePicker;
var _reactNative = require("react-native");
var _Calendar = _interopRequireDefault(require("./Calendar"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function DatePicker({
  renderItem,
  datePickerModalStyle,
  datePickerDismissIconColor,
  ...props
}) {
  const [modalVisible, setModalVisible] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (!_reactNative.I18nManager.isRTL) {
      _reactNative.I18nManager.allowRTL(true);
      _reactNative.I18nManager.forceRTL(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    animationType: "slide",
    transparent: true,
    visible: modalVisible,
    onDismiss: () => setModalVisible(!modalVisible),
    onRequestClose: () => setModalVisible(!modalVisible)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.centeredView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.modalView, datePickerModalStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: {
      position: 'absolute',
      top: 10,
      left: 15
    },
    onPress: () => setModalVisible(false)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: {
      width: 20,
      height: 20,
      tintColor: datePickerDismissIconColor
    },
    source: {
      uri: 'https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-close-cross-symbol-for-discontinued-and-invalid-basic-filled-tal-revivo.png'
    }
  })), /*#__PURE__*/_react.default.createElement(_Calendar.default, props)))), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => setModalVisible(true)
  }, renderItem ? /*#__PURE__*/(0, _react.isValidElement)(renderItem) ? /*#__PURE__*/(0, _react.cloneElement)(renderItem) : typeof renderItem === 'function' ? renderItem() : null : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.input
  }, props.value ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, props.value) : /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "\u06CC\u06A9 \u062A\u0627\u0631\u06CC\u062E \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"))));
}
const styles = _reactNative.StyleSheet.create({
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
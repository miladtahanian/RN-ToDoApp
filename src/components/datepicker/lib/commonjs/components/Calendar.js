"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _props = require("../props");
var _RootCalendar = _interopRequireDefault(require("./RootCalendar"));
var _Weekdays = _interopRequireDefault(require("./Weekdays"));
var _Header = _interopRequireDefault(require("./Header"));
var _YearSelector = _interopRequireDefault(require("./YearSelector"));
var _MonthSelector = _interopRequireDefault(require("./MonthSelector"));
var _SelectTime = _interopRequireDefault(require("./SelectTime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class Calendar extends _react.PureComponent {
  static defaultProps = _props.DEFAULT_PROPS;
  constructor(props) {
    var _props$value2;
    super(props);
    let year = 0;
    let month = 0;
    let date = '';
    let time = '';
    if (props.dateSeparator) {
      var _props$value;
      const selectedDate = ((_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.length) === 16 ? props.value.split(' ')[0] : props.value;
      const dateSeparator = props.dateSeparator;
      const dateComponents = selectedDate.split(dateSeparator);
      if (dateComponents.length >= 2) {
        year = parseInt(dateComponents[0]);
        month = parseInt(dateComponents[1]);
      }
      date = selectedDate;
    }
    if (_reactNative.Platform.OS === 'android') {
      _reactNative.UIManager.setLayoutAnimationEnabledExperimental && _reactNative.UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    let minYear = 0;
    let minMonth = 0;
    let maxYear = 0;
    let maxMonth = 0;
    if (props.minDate && props.maxDate && props.dateSeparator) {
      const minDateArray = props.minDate.split(props.dateSeparator);
      if (minDateArray.length >= 2) {
        minYear = parseInt(minDateArray[0]);
        minMonth = parseInt(minDateArray[1]);
      }
      const maxDateArray = props.maxDate.split(props.dateSeparator);
      if (minDateArray.length >= 2) {
        maxYear = parseInt(maxDateArray[0]);
        maxMonth = parseInt(maxDateArray[1]);
      }
    }
    if (((_props$value2 = props.value) === null || _props$value2 === void 0 ? void 0 : _props$value2.length) === 16) {
      time = props.value.split(' ')[1];
    }
    this.state = {
      year,
      month,
      date,
      mode: 'calendar',
      minYear,
      minMonth,
      maxYear,
      maxMonth,
      time: time
    };
  }
  componentDidMount() {
    if (!_reactNative.I18nManager.isRTL) {
      _reactNative.I18nManager.allowRTL(true);
      _reactNative.I18nManager.forceRTL(true);
    }
  }
  renderMonths() {
    const {
      year,
      month
    } = this.state;
    const {
      eachMonthStyle,
      selectedEachMonthTextStyle,
      selectedEachMonthStyle,
      eachMonthTextStyle
    } = this.props;
    const onMonthChange = month => this.setState({
      month,
      mode: 'calendar'
    });
    return /*#__PURE__*/_react.default.createElement(_MonthSelector.default, {
      onMonthChange: onMonthChange,
      eachMonthStyle: eachMonthStyle,
      selectedEachMonthStyle: selectedEachMonthStyle,
      eachMonthTextStyle: eachMonthTextStyle,
      selectedEachMonthTextStyle: selectedEachMonthTextStyle,
      year: year,
      month: month,
      minYear: this.state.minYear,
      minMonth: this.state.minMonth,
      maxYear: this.state.maxYear,
      maxMonth: this.state.maxMonth
    });
  }
  renderYears() {
    const {
      eachYearStyle,
      eachYearTextStyle,
      selectedEachYearTextStyle,
      selectedEachYearStyle
    } = this.props;
    const onYearChange = year => this.setState({
      year,
      mode: 'month'
    });
    return /*#__PURE__*/_react.default.createElement(_YearSelector.default, {
      year: this.state.year,
      onYearChange: onYearChange,
      eachYearStyle: eachYearStyle,
      selectedEachYearTextStyle: selectedEachYearTextStyle,
      eachYearTextStyle: eachYearTextStyle,
      selectedEachYearStyle: selectedEachYearStyle,
      minYear: this.state.minYear,
      maxYear: this.state.maxYear
    });
  }
  renderContent() {
    const {
      mode
    } = this.state;
    const {
      isShowSelectTime
    } = this.props;
    switch (mode) {
      case 'calendar':
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.renderWeekdays(), this.renderCalendar(), isShowSelectTime && this.renderSelectTime());
      case 'month':
        return this.renderMonths();
      case 'year':
        return this.renderYears();
      default:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }
  }
  renderSelectTime() {
    const {
      selectTimeContainerStyle,
      selectTimePickerItemStyle,
      selectTimePickerStyle,
      selectTimePickerMode,
      selectTimeDropdownIconColor,
      onChange
    } = this.props;
    const {
      date,
      time
    } = this.state;
    const onTimeChange = time => {
      this.setState({
        time
      });
      onChange(`${date} ${time}`);
    };
    return /*#__PURE__*/_react.default.createElement(_SelectTime.default, {
      time: time,
      dropdownIconColor: selectTimeDropdownIconColor,
      containerStyle: selectTimeContainerStyle,
      pickerStyle: selectTimePickerStyle,
      mode: selectTimePickerMode,
      pickerItemStyle: selectTimePickerItemStyle,
      onTimeChange: onTimeChange
    });
  }
  renderWeekdays() {
    const {
      weekdaysContainerStyle,
      weekdayStyle,
      weekdayTextStyle
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_Weekdays.default, {
      weekdaysContainerStyle: weekdaysContainerStyle,
      weekdayStyle: weekdayStyle,
      weekdayTextStyle: weekdayTextStyle
    });
  }
  renderHeader() {
    const {
      year,
      month,
      mode,
      minYear,
      maxYear,
      minMonth,
      maxMonth
    } = this.state;
    const {
      showMonthLabel,
      headerContainerStyle,
      yearMonthTextStyle,
      iconContainerStyle,
      backIcon,
      backIconStyle,
      nextIcon,
      nextIconStyle,
      yearMonthBoxStyle
    } = this.props;
    const changeModeTo = mode => this.setState({
      mode
    });
    const changeYear = increase => () => this.setState(state => ({
      year: increase ? state.year + 1 : state.year - 1,
      month: 1
    }));
    const changeMonth = increase => () => this.setState(prevState => {
      if (increase) {
        if (month == 12) {
          return {
            year: prevState.year + 1,
            month: 1
          };
        }
        return {
          month: prevState.month + 1
        };
      }
      if (month == 1) {
        return {
          year: prevState.year - 1,
          month: 12
        };
      }
      return {
        month: prevState.month - 1
      };
    });
    return /*#__PURE__*/_react.default.createElement(_Header.default, {
      isShowMonthLabel: showMonthLabel,
      containerStyle: headerContainerStyle,
      yearMonthBoxStyle: yearMonthBoxStyle,
      mode: mode,
      changeModeTo: changeModeTo,
      yearMonthTextStyle: yearMonthTextStyle,
      iconContainerStyle: iconContainerStyle,
      backIcon: backIcon,
      backIconStyle: backIconStyle,
      year: year,
      month: month - 1,
      nextIcon: nextIcon,
      nextIconStyle: nextIconStyle,
      increaseYear: changeYear(true),
      decreaseYear: changeYear(false),
      increaseMonth: changeMonth(true),
      decreaseMonth: changeMonth(false),
      minYear: minYear,
      minMonth: minMonth - 1,
      maxYear: maxYear,
      maxMonth: maxMonth - 1
    });
  }
  renderCalendar() {
    const {
      year,
      month,
      date,
      time
    } = this.state;
    const {
      dateSeparator,
      minDate,
      maxDate,
      onChange,
      dayStyle,
      selectedDayStyle,
      selectedDayColor,
      dayTextStyle,
      selectedDayTextColor,
      dayTextColor,
      disabledTextColor
    } = this.props;
    const onDateChange = date => onChange(`${date} ${time}`);
    return /*#__PURE__*/_react.default.createElement(_RootCalendar.default, {
      year: year,
      month: month,
      selectedDate: date,
      onDateChange: date => {
        this.setState({
          date
        });
        onDateChange(date);
      },
      dateSeparator: dateSeparator,
      minDate: minDate,
      maxDate: maxDate,
      dayStyle: dayStyle,
      selectedDayStyle: selectedDayStyle,
      selectedDayColor: selectedDayColor,
      dayTextStyle: dayTextStyle,
      selectedDayTextColor: selectedDayTextColor,
      dayTextColor: dayTextColor,
      disabledTextColor: disabledTextColor
    });
  }
  render() {
    const {
      style
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [_props.DEFAULT_PROPS.style, style]
    }, this.renderHeader(), this.renderContent());
  }
}
var _default = exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_PROPS = void 0;
var _utils = require("./utils");
const DEFAULT_PROPS = exports.DEFAULT_PROPS = {
  // Date Picker
  showMonthLabel: true,
  style: {
    width: '95%',
    alignSelf: 'center',
    height: 400
  },
  value: (0, _utils.today)(),
  isShowSelectTime: false,
  dateSeparator: '/',
  minDate: (0, _utils.lastYear)(),
  maxDate: (0, _utils.nextYear)(),
  onChange: date => console.log(date),
  // Header
  headerContainerStyle: {
    height: '15%'
  },
  yearMonthBoxStyle: {
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  yearMonthTextStyle: {
    fontSize: 22,
    color: 'black'
  },
  iconContainerStyle: {
    width: `${100 / 7}%`
  },
  backIcon: {
    uri: 'https://img.icons8.com/metro/52/forward.png'
  },
  backIconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: 'coral'
  },
  nextIcon: {
    uri: 'https://img.icons8.com/metro/52/back.png'
  },
  nextIconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: 'coral'
  },
  // Select time
  selectTimeContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: 'rgba(204,204,204,0.5)'
  },
  selectTimePickerStyle: {
    borderBottomWidth: 1,
    width: 100,
    borderColor: 'coral'
  },
  selectTimePickerMode: 'dropdown',
  // Years
  eachYearStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%'
  },
  selectedEachYearStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%',
    backgroundColor: 'coral',
    borderRadius: 50
  },
  eachYearTextStyle: {
    fontSize: 16
  },
  selectedEachYearTextStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  // Months
  eachMonthStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%'
  },
  selectedEachMonthStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%',
    backgroundColor: 'coral',
    borderRadius: 50
  },
  eachMonthTextStyle: {
    fontSize: 16
  },
  selectedEachMonthTextStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  // Weekdays
  weekdaysContainerStyle: {
    height: '10%',
    borderBottomWidth: 1,
    borderColor: 'coral'
  },
  weekdayStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  weekdayTextStyle: {
    fontSize: 16,
    color: 'coral',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  // Days
  dayStyle: {
    width: `${100 / 7}%`,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1
  },
  selectedDayStyle: {
    width: '70%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  selectedDayColor: 'coral',
  dayTextStyle: {
    fontSize: 18
  },
  selectedDayTextColor: '#FFFFFF',
  dayTextColor: '#111111',
  disabledTextColor: '#999999'
};
//# sourceMappingURL=props.js.map
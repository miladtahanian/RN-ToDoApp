"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.today = exports.toPersian = exports.nextYear = exports.lastYear = exports.isBefore = exports.isAfter = exports.getYears = exports.getTimeMinutes = exports.getTimeHours = exports.getDays = exports.fullDate = void 0;
var _constant = require("./constant");
var _jalaaliJs = require("jalaali-js");
/**
 * convert jalali to gregorian date
 * @param {string} date
 * @param {string} dateSeparator
 */
const j2g = (date, dateSeparator) => {
  const split = date.split(dateSeparator);
  const year = parseInt(split[0]);
  const month = parseInt(split[1]);
  const day = parseInt(split[2]);
  const {
    gy,
    gm,
    gd
  } = (0, _jalaaliJs.toGregorian)(year, month, day);
  return new Date(gy, gm - 1, gd);
};
const isBefore = (firstDate, secondDate, dateSeparator) => j2g(firstDate, dateSeparator) < j2g(secondDate, dateSeparator);
exports.isBefore = isBefore;
const isAfter = (firstDate, secondDate, dateSeparator) => j2g(firstDate, dateSeparator) > j2g(secondDate, dateSeparator);

/**
 * convert gregorian to jalali date
 * @param {string} date
 * @param {string} dateSeparator
 */
exports.isAfter = isAfter;
const g2j = (date, dateSeparator = '-') => {
  const split = date.split(dateSeparator);
  const year = parseInt(split[0]);
  const month = parseInt(split[1]);
  const day = parseInt(split[2]);
  const {
    jy,
    jm,
    jd
  } = (0, _jalaaliJs.toJalaali)(year, month, day);
  return fullDate(jy, jm, jd, '/');
};
const today = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return g2j(currentDate);
};
exports.today = today;
const lastYear = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const split = currentDate.split('-');
  const year = parseInt(split[0]) - 1;
  const month = split[1];
  const day = split[2];
  return g2j(`${year}-${month}-${day}`);
};
exports.lastYear = lastYear;
const nextYear = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const split = currentDate.split('-');
  const year = parseInt(split[0]) + 1;
  const month = split[1];
  const day = split[2];
  return g2j(`${year}-${month}-${day}`);
};
exports.nextYear = nextYear;
const getTimeHours = () => Array.from({
  length: 24
}, (_x, i) => i < 10 ? '0' + i : String(i));
exports.getTimeHours = getTimeHours;
const getTimeMinutes = () => Array.from({
  length: 60 / 5
}, (_x, i) => i * 5 < 10 ? '0' + i * 5 : String(i * 5));
exports.getTimeMinutes = getTimeMinutes;
const getDays = (year, month) => {
  const daysLength = (0, _jalaaliJs.jalaaliMonthLength)(year, month);
  const {
    gy,
    gm,
    gd
  } = (0, _jalaaliJs.toGregorian)(year, month, 1);
  const firstDayIndex = new Date(gy, gm - 1, gd).getDay();
  const startingEmptyDays = (firstDayIndex + 1) % 7;
  return [...Array(startingEmptyDays).fill('.'), ...Array.from({
    length: daysLength
  }, (_, i) => i + 1)];
};
exports.getDays = getDays;
const getYears = (min, max) => {
  const length = max - min + 1;
  return Array.from({
    length
  }, (_, i) => min + i);
};
exports.getYears = getYears;
const fullDate = (year, month, day, dateSeparator) => `${year}${dateSeparator}${month < 10 ? '0' + month : month}${dateSeparator}${parseInt(day) < 10 ? '0' + day : day}`;
exports.fullDate = fullDate;
const toPersian = num => `${num}`.split('').map(digit => _constant.PERSIAN_DIGITS[Number(digit)]).join('');
exports.toPersian = toPersian;
//# sourceMappingURL=utils.js.map
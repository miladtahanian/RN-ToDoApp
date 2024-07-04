import { PERSIAN_DIGITS } from './constant';
import { jalaaliMonthLength, toGregorian, toJalaali } from 'jalaali-js';

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
  } = toGregorian(year, month, day);
  return new Date(gy, gm - 1, gd);
};
export const isBefore = (firstDate, secondDate, dateSeparator) => j2g(firstDate, dateSeparator) < j2g(secondDate, dateSeparator);
export const isAfter = (firstDate, secondDate, dateSeparator) => j2g(firstDate, dateSeparator) > j2g(secondDate, dateSeparator);

/**
 * convert gregorian to jalali date
 * @param {string} date
 * @param {string} dateSeparator
 */
const g2j = (date, dateSeparator = '-') => {
  const split = date.split(dateSeparator);
  const year = parseInt(split[0]);
  const month = parseInt(split[1]);
  const day = parseInt(split[2]);
  const {
    jy,
    jm,
    jd
  } = toJalaali(year, month, day);
  return fullDate(jy, jm, jd, '/');
};
export const today = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return g2j(currentDate);
};
export const lastYear = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const split = currentDate.split('-');
  const year = parseInt(split[0]) - 1;
  const month = split[1];
  const day = split[2];
  return g2j(`${year}-${month}-${day}`);
};
export const nextYear = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const split = currentDate.split('-');
  const year = parseInt(split[0]) + 1;
  const month = split[1];
  const day = split[2];
  return g2j(`${year}-${month}-${day}`);
};
export const getTimeHours = () => Array.from({
  length: 24
}, (_x, i) => i < 10 ? '0' + i : String(i));
export const getTimeMinutes = () => Array.from({
  length: 60 / 5
}, (_x, i) => i * 5 < 10 ? '0' + i * 5 : String(i * 5));
export const getDays = (year, month) => {
  const daysLength = jalaaliMonthLength(year, month);
  const {
    gy,
    gm,
    gd
  } = toGregorian(year, month, 1);
  const firstDayIndex = new Date(gy, gm - 1, gd).getDay();
  const startingEmptyDays = (firstDayIndex + 1) % 7;
  return [...Array(startingEmptyDays).fill('.'), ...Array.from({
    length: daysLength
  }, (_, i) => i + 1)];
};
export const getYears = (min, max) => {
  const length = max - min + 1;
  return Array.from({
    length
  }, (_, i) => min + i);
};
export const fullDate = (year, month, day, dateSeparator) => `${year}${dateSeparator}${month < 10 ? '0' + month : month}${dateSeparator}${parseInt(day) < 10 ? '0' + day : day}`;
export const toPersian = num => `${num}`.split('').map(digit => PERSIAN_DIGITS[Number(digit)]).join('');
//# sourceMappingURL=utils.js.map
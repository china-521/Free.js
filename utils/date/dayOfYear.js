/**
 * 
 * @param {String} date 日期
 */

import {
	checkString
} from "../type/checkString.js";
import {
	format
} from "./format.js";
import {
	error
} from "../exception/error.js";
import {
	isLeapYear
} from './isLeapYear.js';

export function dayOfYear(date) {
	if (date && !checkString(date, false)) {
		error('Input type mismatch,the argument must be a String type');
	}
	const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let dateObj = format(date);
	let year = dateObj.year;
	let month = dateObj.month;
	let day = dateObj.day;
	let sum = 0;
	let result = 0;
	for (let i = 0; i < month - 1; i++) {
		sum += months[i]; // 前 mon-1 个月的天数相加
	}
	result = sum + day; // 前mon-1个月的天数加上第mon月的天数==所求天数
	if (isLeapYear(year.toString()) && month >= 3) {
		result += 1;
	}
	return result;
}
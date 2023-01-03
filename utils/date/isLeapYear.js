/******************************************【判断闰年】****************************************/
/**
 *  功能说明：
 *     - 判断输入的年份是否是闰年
 *  参数说明：
 *     @param {String} date 
 * 
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

export function isLeapYear(date) {
	if (date && !checkString(date, false)) {
		error('Input type mismatch,the argument must be a String type');
	}
	if (!date) {
		return false;
	}
	date = format(date).year;
	return (date % 4 === 0 && date % 100 !== 0) || date % 400 === 0;
}
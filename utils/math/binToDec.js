/**
 *  功能说明：
 *      - 将二进制数转化成十进制数
 *  参数说明：
 *      @param {String} value 一个二进制数
 */

import {
	checkString
} from "../type/checkString.js";
import {
	error
} from "../exception/error.js";
import {
	toArray
} from "../string/toArray.js";
import {
	contain
} from "../string/contain.js";
import { toString } from "../string/toString.js";

export function binToDec(value) {
	if (value && !checkString(value, false)) {
		error('The input data types do not match. The first argument must be a String type');
	}
	if (!value) {
		return undefined;
	}
	let result = 0;
	if (!contain(value,'-')) {
		if (!contain(value, '.')) {
			value = toArray(value, '');
			value.forEach((v, index) => {
				v = parseInt(v);
				v *= Math.pow(2, (value.length - 1 - index));
				result += v;
			});
		} else {
			let integerArr = toArray(value.substring(0, value.indexOf('.')), '');
			let decimalArr = toArray(value.substring(value.indexOf('.') + 1), '');
			let tempInteger = 0;
			let tempDecimal = 0
			integerArr.forEach((v, index) => {
				v = parseInt(v);
				v *= Math.pow(2, (integerArr.length - 1 - index));
				tempInteger += v;
			});
			decimalArr.forEach((v,index )=> {
				v = parseInt(v);
				v *= Math.pow(2,-(index + 1));
				tempDecimal += v;
			});
			result = toString(tempInteger + tempDecimal);
		}
	}else {
		value = value.replace('-','');
		result = '-' + binToDec(value);
	}
	return result;
}
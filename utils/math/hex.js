/**
 *  功能说明：
 *      - 将十进制数转化成十六进制数
 *  参数说明：
 *      @param {Number} value 一个十进制数
 * 		@param {Boolean} flag 开启负数计算补码模式
 * 
 */

import {
	error
} from "../exception/error.js";
import {
	checkNumber
} from "../type/checkNumber.js";
import {
	checkInteger
} from "../type/checkInteger.js";
import {
	toArray
} from "../string/toArray.js";

export function hex(value, flag) {
	if (value && !checkNumber(value, false)) {
		error('The input data types do not match. Please enter an Number');
	}
	if (!value) {
		return undefined;
	}
	if (!flag) {
		return value.toString(16);
	} else {
		if (value >= 0) {
			return value.toString(16);
		} else {
			if (!checkInteger(value, false)) {
				error('The method does not support hexadecimal conversion of negative decimals');
			}
		}
	}
}
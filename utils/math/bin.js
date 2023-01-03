/**
 *  功能说明：
 *      - 将十进制数转化成二进制数
 *  参数说明：
 *      @param {Number} value 一个十进制数
 * 		@param {Booolean} flag 开启负数计算补码模式
 * 
 */

import {
	error
} from "../exception/error.js";
import {
	checkNumber
} from "../type/checkNumber.js";
import {
	toArray
} from "../string/toArray.js";
import {
	checkBoolean
} from "../type/checkBoolean.js";
import {
	checkInteger
} from "../type/checkInteger.js";

export function bin(value, flag) {
	if (value && !checkNumber(value, false)) {
		error('The input data types do not match. The first argument must be an Number type');
	}
	if (flag && !checkBoolean(flag, false)) {
		error('The input data types do not match. The second argument must be an Boolean type');
	}
	if (!value) {
		return undefined;
	}
	if (!flag) {
		return value.toString(2);
	} else {
		if (value >= 0) {
			return value.toString(2);
		} else {
			if (!checkInteger(value, false)) {
				error('This method does not support binary conversion of negative decimals');
			}
			let bin = value.toString(2);
			let binList = toArray(bin.substring(bin.indexOf('-') + 1), '');
			// 得到正数的二进制数的补码
			binList.forEach((value, index) => {
				value = Number(value);
				if (value === 0) {
					value = 1;
				} else if (value === 1) {
					value = 0;
				}
				binList[index] = value;
			});
			let addNumber = ['1'];
			let result = '';
			let temp = 0;
			// 补码和 1 相加得到负整数的二进制数
			while (binList.length || addNumber.length || temp) {
				temp += ~~binList.pop() + ~~addNumber.pop();
				result = temp % 2 + result;
				temp = temp > 1;
			}
			return result;
		}
	}
}
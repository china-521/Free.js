/******************************************【数组过滤】****************************************/
/**
 * 功能说明：
 *      -得到当前数组过滤掉count个元素后剩下元素组成的数组
 * 参数说明：
 *      @param {Array} arr
 *      @param {Number} count
 *      @param {String} flag  判断从左开始过滤，还是从右边开始过滤
 */

import {
	checkArray
} from "../type/checkArray.js";
import {
	error
} from "../exception/error.js";
import {
	checkNumber
} from "../type/checkNumber.js";
import {
	checkBoolean
} from '../type/checkBoolean.js';

export function drop(arr, count, flag = true) {
	if (arr && !checkArray(arr, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	if (count && !checkNumber(count)) {
		error('Input type mismatch,the second argument must be an Number type');
	}
	if (flag && !checkBoolean(flag, false)) {
		error('Input type mismatch,the third argument must be an Boolean type');
	}
	arr = arr || [];
	count = count || 0;
	if (arr.length === 0) {
		return [];
	}
	if (flag) {
		return arr.filter((value, index) => index >= count);
	} else {
		return arr.filter((value, index) => index < arr.length - count);
	}
}
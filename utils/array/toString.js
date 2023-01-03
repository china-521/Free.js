/******************************************【数组转字符串】****************************************/
/**
 * 功能说明：
 *      -数组转字符串
 * 参数说明： 
 *      @param {Array} arr 目标数组
 * 		@param {*} separator 分隔符
 */

import {
	checkArray
} from "../type/checkArray.js";
import {
	error
} from "../exception/error.js";

export function toString(arr, separator) {
	if (arr && !checkArray(arr, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	arr = arr || [];
	separator = separator || '';
	if (arr.length === 0) {
		return undefined;
	}
	return arr.join(separator);
}
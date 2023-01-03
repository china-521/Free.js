/******************************************【数组对比去重(差集)】****************************************/
/**
 * 功能说明：
 *      -得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
 * 参数说明:
 *     @param arr1
 *     @param arr2 
 */
import {
	checkArray
} from "../type/checkArray.js";
import {
	error
} from "../exception/error.js";

export function difference(arr1, arr2) {
	if (arr1 && !checkArray(arr1, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	if (arr2 && !checkArray(arr2, false)) {
		error('Input type mismatch,the second argument must be an Array type');
	}
	arr1 = arr1 || [];
	arr2 = arr2 || [];
	// 判断参数
	if (arr1.length === 0) {
		return [];
	}
	if (arr2.length === 0) {
		return arr1.slice();
	}
	let result = arr1.filter(item => !arr2.includes(item));
	return result;
}
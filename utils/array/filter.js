/******************************************【filter方法】****************************************/
/**
 * 功能说明：
 *    - 按照给定的回调方法，对数组进行过滤，返回一个过滤后的新数组
 * 参数说明：
 *      @param {Array} arr
 *      @param {Function} callback
 */

import {
	checkArray
} from "../type/checkArray.js";
import {
	checkFun
} from "../type/checkFun.js";
import {
	error
} from "../exception/error.js";

export function filter(arr, callback) {
	if (arr && !checkArray(arr, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	if (callback && !checkFun(callback, false)) {
		error('Input type mismatch,the second argument must be a Function type');
	}
	if (arr && callback) {
		// 声明空数组
		let result = [];
		// 遍历数组
		for (let i = 0; i < arr.length; i++) {
			// 执行回调
			let res = callback(arr[i], i);
			// 判断 如果为 真 则压入到 result 结果中
			if (res) {
				result.push(arr[i]);
			}
		}
		// 返回结果
		return result;
	}else if(arr && !callback){
		return arr;
	}
	return [];
}
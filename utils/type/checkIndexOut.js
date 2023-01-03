/**
 *  功能描述
 * 		- 检查用户输入的数组索引是否存在角标越界异常
 * 
 *  @param {Array} arr 目标数组
 *  @param {Number} index 索引
 *  
 */


import {
	error
} from "../exception/error.js";
import {
	checkArray
} from "./checkArray.js";

export function checkIndexOut(arr, index) {
	if (checkArray(arr)) {
		if (!arr.length) {
			error('Array index out of range:' + index);
		} else {
			if (index < 0) {
				error('Array index out of range:' + index);
			} else if (index >= arr.length) {
				error('Array index out of range:' + index);
			}
		}
		return false;
	}
}
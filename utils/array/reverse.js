import {
	checkArray
} from "../type/checkArray.js";

/**
 *  功能说明：
 *       - 对数组元素进行反转
 *  参数说明：
 *     @param {Array} arr 目标数组
 */
export function reverse(arr) {
	arr = arr || [];
	if (checkArray(arr)) {
		return arr.reverse();
	}
}
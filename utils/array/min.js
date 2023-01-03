import {
	checkArray
} from "../../utils/type/checkArray.js";

/**
 *  功能说明：
 *       - 返回数组中元素最小值
 *  参数说明：
 *     @param {Array} arr 目标数组
 */
export function min(arr) {
	arr = arr || [];
	if (checkArray(arr)) {
		if (arr.length === 0) {
			return undefined;
		} else {
			return Math.min(...arr);
		}
	}
}
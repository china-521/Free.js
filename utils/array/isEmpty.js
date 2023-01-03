import { error } from "../exception/error.js";
import {
	checkArray
} from "../type/checkArray.js";

/**
 *  功能说明：
 *       - 判断数组是否为空
 *  参数说明：
 *     @param {Array} arr 目标数组
 */
export function isEmpty(arr) {
	if (checkArray(arr)) {
		return arr.length === 0 ? true : false;
	}
}
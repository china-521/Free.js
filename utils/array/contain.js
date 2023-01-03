/**
 *  功能说明：
 *      - 判断指定属性是否属于某个数组
 *  参数说明：
 *      @param {Array} arr 数组
 *      @param {*}  item 属性
 */
import {
	error
} from "../exception/error.js";
import {
	checkArray
} from "../type/checkArray.js";
export function contain(arr, item) {
	if (arr && !checkArray(arr, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	arr = arr || [];
	return arr.includes(item);
}
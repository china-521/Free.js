/**
 *  功能说明：
 *       - 删除数组中的指定位置上的元素
 *  参数说明：
 *     @param {Array} arr 目标数组
 *     @param {Number} index 元素位置  
 * 
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
	checkIndexOut
} from "../type/checkIndexOut.js";
export function del(arr, index) {
	if (arr && !checkArray(arr, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	if (index && !checkNumber(index, false)) {
		error('Input type mismatch,the second argument must be an Number type');
	}
	arr = arr || [];
	index = index || 0;
	if (arr.length === 0) {
		return [];
	}
	if (!checkIndexOut(arr, index)) {
		return arr.splice(index, 1);
	}
}
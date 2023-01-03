/******************************************【数组分块】****************************************/
/**
 * 功能说明：
 *      -数组分组：将数组拆分成多个 size 长度的区块，每个区块组成小数组，整体组成一个二维数组
 * 参数说明：
 *     @param {Array} arr 
 *     @param {Number} size 区块长度(每个区块包含元素的个数)
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

export function chunk(arr, size) {
	if (arr && !checkArray(arr, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	if (size && !checkNumber(size, false)) {
		error('Input type mismatch,the second argument must be an Number type');
	}
	arr = arr || [];
	size = size || 1;
	// 判断输入的是否是空数组
	if (arr.length === 0) {
		return [];
	}
	// 声明数组
	let result = [];
	let temp = [];
	// 遍历
	arr.forEach(item => {
		// 判断temp元素的长度是否为 0
		if (temp.length === 0) {
			// 将 temp 压入到 result 中
			result.push(temp);
		}
		// 将元素压入到临时数组 temp 中
		temp.push(item);
		// 判断是否达到目标 size
		if (temp.length === size) {
			temp = [];
		}
	});
	return result;
}
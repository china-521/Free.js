/******************************************【slice数组切片】****************************************/
/**
 * 功能说明：
 *      -数组切片：返回一个由 begin 和 end 决定的原数组的浅拷贝，原始数组不会被改变 
 * 参数说明：
 *      @param {Array} arr
 *      @param {Number} begin 起始索引
 *      @param {Number} end   终止索引
 */

import {
	checkArray
} from '../type/checkArray.js';
import {
	checkNumber
} from '../type/checkNumber.js';
import {
	error
} from '../exception/error.js';

export function slice(arr, begin, end) {
	if (arr && !checkArray(arr, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	if (begin && !checkNumber(begin, false)) {
		error('Input type mismatch,the second argument must be an Number type');
	}
	if (end && !checkNumber(end, false)) {
		error('Input type mismatch,the third argument must be an Number type');
	}
	arr = arr || [];
	// 若arr数组长度为0
	if (arr.length === 0) {
		return [];
	}
	//判断 begin
	begin = begin || 0;
	if (begin >= arr.length) {
		return [];
	}
	// 判断end
	end = end || arr.length;
	if (end <= begin) {
		return [];
	}
	// 声明一个空数组
	const result = [];
	// 遍历数组
	for (let i = 0; i < arr.length; i++) {
		if (i >= begin && i < end) {
			// 将下标对应的元素压入数组
			result.push(arr[i]);
		}
	}
	return result;
}
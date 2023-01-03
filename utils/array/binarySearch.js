/******************************************【数组查找】****************************************/
/**
 *  功能说明：
 *      - 查找指定元素在数组中的位置
 * 		- 需要数组提前排好序
 *  参数说明：
 *      @param {Array} arr 待查找数组
 *      @param {*} target 待查找元素
 */

import {
	checkArray
} from "../type/checkArray.js";
import {
	error
} from "../exception/error.js";
import {
	contain
} from "./contain.js"

export function binarySearch(arr, target) {
	if (arr && !checkArray(arr, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	arr = arr || [];
	if(arr.length === 0){
		return -1;
	}
	if(!target && target !== 0){
		return -1;
	}
	if(!contain(arr,target)){
		return -1;
	}
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let middle = parseInt((start + end) / 2);
		if (arr[middle] === target) {
			return middle;
		} else if (arr[middle] > target) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}
}
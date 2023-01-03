import {
	error
} from "../exception/error.js";
import {
	checkArray
} from "../type/checkArray.js";


/**
 *  功能说明：
 *       - 删除数组中的指定元素,并返回一个被删除元素数组
 *  参数说明：
 *     @param {Array} arr 目标数组
 *     @param {*}  items 待移除元素
 * 
 */
export function remove(arr, ...items) {
	if (arr && !checkArray(arr, false)) {
		error('Input type mismatch,the first argument must be an Array type');
	}
	arr = arr || [];
	if (arr.length) {
		let resultArray = [];
		for (let i = 0; i < items.length; i++) {
			if (checkArray(items[i], false)) {
				items[i].forEach(item => {
					let index = arr.indexOf(item);
					if (index > -1) {
						resultArray.push(...arr.splice(index, 1));
					}
				});
			} else {
				let index = arr.indexOf(items[i]);
				if (index > -1) {
					resultArray.push(...arr.splice(index, 1));
				}
			}
		}
		return resultArray;
	}
	return arr;
}
import {
	checkArray
} from "../type/checkArray.js";



/**
 *  功能说明：
 *      - 根据内容，判断两个数组是否相等
 *  参数说明：
 *      @param {Array} arr1 数组1
 *      @param {Array}  arr2 数组2
 */
export function equals(arr1, arr2) {
	if(!arr1){
		return false;
	}
	if(!arr2){
		return false;
	}
	if (checkArray(arr1) && checkArray(arr2)) {
		return (arr1.length === arr2.length) && arr1.includes(...arr2);
	}
}
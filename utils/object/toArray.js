import {
	checkObject
} from "../type/checkObject.js";

/**
 * 功能说明：
 *      -对象转换为数组
 * 参数说明：
 *      @param {Object} obj
 *  
 */
export function toArray(obj) {
	if (obj && checkObject(obj)) {
		let arr = [];
		for (let i in obj) {
			arr[i] = obj[i];
		}
		return arr;
	}
	return [];
}
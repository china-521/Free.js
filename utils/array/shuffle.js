import {
	checkArray
} from "../type/checkArray.js";

/**
 *  功能说明：
 *       - 随机排列数组元素
 *  参数说明：
 *     @param {Array} arr 目标数组
 */
export function shuffle(arr) {
	arr = arr || [];
	if (checkArray(arr)) {
		let len = arr.length;
		while (len) {
			let randomIndex = Math.floor(Math.random() * len--);
			[arr[randomIndex], arr[len]] = [arr[len], arr[randomIndex]]; // 数值交换
		}
		return arr;
	}
}
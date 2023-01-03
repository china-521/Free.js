 /******************************************【数组扁平化】****************************************/
 /**
  * 功能说明：
  *      -数组扁平化：取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
  * 参数说明：
  *      @param {Array} arr         *      
  */

 import {
 	checkArray
 } from "../type/checkArray.js";
 import {
 	error
 } from "../exception/error.js";

 export function flatten(arr) {
 	if (arr && !checkArray(arr, false)) {
 		error('Input type mismatch,the argument must be an Array type');
 	}
 	if (arr) {
 		// 声明空数组
 		let result = [...arr];
 		// 循环判断
 		while (result.some(item => Array.isArray(item))) {
 			result = [].concat(...result);
 		}
 		return result;
 	}
	return [];
 }
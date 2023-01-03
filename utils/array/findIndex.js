 /******************************************【findIndex方法】****************************************/
 /**
  * 功能说明：
  *      -找到第一个满足测试方法的元素并返回那个元素的索引，如果找不到则返回 undefined
  * 参数说明：
  *      @param {Array} arr
  *      @param {Function} callback
  */

 import {
 	checkArray
 } from "../type/checkArray.js";
 import {
 	checkFun
 } from "../type/checkFun.js";
 import {
 	error
 } from "../exception/error.js";


 export function findIndex(arr, callback) {
 	if (arr && !checkArray(arr, false)) {
 		error('Input type mismatch,the first argument must be an Array type');
 	}
 	if (callback && !checkFun(callback, false)) {
 		error('Input type mismatch,the second argument must be a Function type');
 	}
 	if (arr && callback) {
 		// 遍历数组
 		for (let i = 0; i < arr.length; i++) {
 			// 执行回调
 			let res = callback(arr[i], i);
 			// 判断
 			if (res) {
 				// 返回当前正在遍历的元素
 				return i;
 			}
 		}
 	}
	return undefined;
 }
 /******************************************【every方法】****************************************/
 /**
  * 功能说明：
  *      -如果数组中的每个元素都满足测试方法，则返回 true，否则返回false
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

 export function every(arr, callback) {
 	if (arr && !checkArray(arr, false)) {
 		error('Input type mismatch,the first argument must be an Array type');
 	}
 	if (callback && !checkFun(callback, false)) {
 		error('Input type mismatch,the second argument must be a Function type');
 	}
 	if (arr && callback) {
 		// 遍历数组
 		for (let i = 0; i < arr.length; i++) {
 			// 执行回调,如果回调执行结果返回为 false
 			if (!callback(arr[i], i)) {
 				return false;
 			}
 		}
 		return true;
 	}
	return false;
 }
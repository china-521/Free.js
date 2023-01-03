 /******************************************【map方法】****************************************/
 /** 
  * 功能说明:
  *      -创建一个新数组，其结果是 该数组中的每个元素是调用一次提供的方法后的返回值
  *      -即返回一个由回调方法的返回值组成的新数组
  * 参数说明：
  *      @param {Array} arr
  *      @param {Function} callback
  */
 import {
 	checkFun
 } from '../../utils/type/checkFun.js';
 import {
 	checkArray
 } from '../../utils/type/checkArray.js';
 import {
 	error
 } from '../../utils/exception/error.js';

 export function map(arr, callback) {
 	if (arr && !checkArray(arr, false)) {
 		error('Input type mismatch,the first argument must be an Array type');
 	}
 	if (callback && !checkFun(callback, false)) {
 		error('Input type mismatch,the second argument must be a Function type');
 	}
 	if (arr && callback) {
 		// 声明一个空数组
 		let result = [];
 		// 遍历数组
 		for (let i = 0; i < arr.length; i++) {
 			// 执行回调
 			result.push(callback(arr[i], i));
 		}
 		// 返回结果
 		return result;
 	}
	return undefined;
 }
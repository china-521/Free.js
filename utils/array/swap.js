 /******************************************【将指定数组中的i处元素和j处元素进行交换】*************************************** */
 /**
  *  功能说明：
  *       - 将指定数组中的i处元素和j处元素进行交换
  *  参数说明：
  *     @param {Array} arr 目标数组
  *     @param {Number} index1
  *     @param {Number} index2
  */

 import {
 	checkArray
 } from "../type/checkArray.js";

 import {
 	checkNumber
 } from "../type/checkNumber.js";

 import {
 	checkIndexOut
 } from "../type/checkIndexOut.js";

 import {
 	error
 } from "../exception/error.js";

 export function swap(arr, index1, index2) {
 	if (arr && !checkArray(arr, false)) {
 		error('Input type mismatch,the first argument must be an Array type');
 	}
 	if (index1 && !checkNumber(index1, false)) {
 		error('Input type mismatch,the second argument must be an Number type');
 	}
 	if (index2 && !checkNumber(index2, false)) {
 		error('Input type mismatch,the third argument must be an Number type');
 	}
 	arr = arr || [];
 	if (arr.length === 0) {
 		return [];
 	}
 	if (!index1 && index1 !== 0) {
 		return arr;
 	}
 	if (!index2 && index2 !== 0) {
 		return arr;
 	}
 	if (!checkIndexOut(arr, index1) && !checkIndexOut(arr, index2)) {
 		if (arr.length >= 2) {
 			let temp = arr[index1];
 			arr[index1] = arr[index2];
 			arr[index2] = temp;
 		}
 		return arr;
 	}
 	return [];


 }
 /******************************************【字符串拼接】****************************************/
 /**
  *  功能说明：
  *      - 将字符串进行拼接
  *  参数说明：
  *      @param {Array} strArr 字符串数组
  *      @param {String} separator 字符串分割符
  */

 import {
 	flatten
 } from '../array/flatten.js';

 import {
 	toString
 } from '../array/toString.js';

 import {
 	error
 } from '../exception/error.js';

 import {
 	checkArray
 } from '../type/checkArray.js';

 export function concat(strArr, separator) {
 	if (strArr && !checkArray(strArr, false)) {
 		error('Input type mismatch,the first argument must be an Array type');
 	}
	strArr = strArr || [];
	if(strArr.length === 0){
		return "";
	}
 	strArr = flatten(strArr);
 	return toString(strArr, separator);
 }
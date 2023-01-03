 /******************************************【统计子串在父串中出现的次数】*************************************** */
 /**
  *  功能说明：
  *      - 统计子字符串在父字符串中出现的次数
  *      - 如果没有找到则返回 0 ，如果找到则返回找到的个数
  *  参数说明：
  *      @param {String} mainStr 父字符串
  *      @param {String} subStr  子字符串
  * 
  */

 import {
 	error
 } from "../exception/error.js";
 import {
 	checkString
 } from "../type/checkString.js";

 export function count(mainStr, subStr) {
 	if (mainStr && !checkString(mainStr, false)) {
 		error('Input type mismatch,the first argument must be a string type');
 	}
 	if (subStr && !checkString(subStr, false)) {
 		error('Input type mismatch,the second argument must be a string type');
 	}
 	if (mainStr && subStr) {
 		let mainLength = mainStr.length;
 		let subLength = subStr.length;
 		let count = 0;
 		let index = 0;
 		if (mainLength >= subLength) {
 			while ((index = mainStr.indexOf(subStr, index)) != -1) {
 				count++;
 				index += subLength;
 			}
 			return count;
 		}
 		return 0;
 	}
 	return 0;
 }
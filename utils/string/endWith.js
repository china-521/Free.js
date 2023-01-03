 /******************************************【测试字符串是否是以指定的后缀结束】****************************************/
 /**
  *  功能说明：
  *      - 测试此字符串是否是以指定的后缀结束
  *  参数说明：
  *      @param {String} str 目标字符串
  *      @param {String} suffix 指定的后缀
  */

 import {
 	error
 } from "../exception/error.js";
 import {
 	checkString
 } from "../type/checkString.js";
 import {
 	reverse
 } from "./reverse.js";
 import {
 	toArray
 } from "./toArray.js";

 export function endWith(str, suffix) {
 	if (str && !checkString(str, false)) {
 		error('Input type mismatch,the first argument must be a string type');
 	}
 	if (suffix && !checkString(suffix, false)) {
 		error('Input type mismatch,the second argument must be a string type');
 	}
 	if (str && suffix) {
 		if (str.length < suffix.length) {
 			return false;
 		}
 		str = reverse(str);
 		let strArr = toArray(str, "");
		suffix = reverse(suffix);
 		let suffixArr = toArray(suffix,"");
 		for (let i = 0; i < suffixArr.length; i++) {
 			if (suffixArr[i] !== strArr[i]) {
 				return false;
 			}
 		}
 		return true;
 	}
 	return false;
 }
 /******************************************【测定字符串是否包含另一字符串】****************************************/
 /**
  *  功能说明：
  *      - 当且仅当此字符串包含指定的 char 值序列时，返回true
  *  参数说明：
  *      @param {String} mainStr 父字符串
  *      @param {String} subStr 子字符串
  */

 import {
 	checkString
 } from '../type/checkString.js';

 import {
 	error
 } from '../exception/error.js';

 export function contain(mainStr, subStr) {
 	if (mainStr && !checkString(mainStr, false)) {
 		error('Input type mismatch,the first argument must be a string type');
 	}
 	if (subStr && !checkString(subStr, false)) {
 		error('Input type mismatch,the second argument must be a string type');
 	}
	if(mainStr && subStr){
		return mainStr.indexOf(subStr) > -1;
	}
	return false;
 }
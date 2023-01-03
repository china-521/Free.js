/******************************************【比较两个字符串是否相等(忽略大小写)】****************************************/
/**
 *  功能说明：
 *      - 比较两个字符串是否相等(忽略大小写)
 *  参数说明：
 *      @param {String} str1 当前字符串
 *      @param {String} str2 对比字符串
 */

import {
	checkString
} from "../type/checkString.js";
import {
	error
} from "../exception/error.js";

export function equalsIgnoreCase(str1, str2) {
	if (str1 && !checkString(str1, false)) {
		error('Input type mismatch,the first argument must be a string type');
	}
	if (str2 && !checkString(str2, false)) {
		error('Input type mismatch,the second argument must be a string type');
	}
	if(str1 && str2){
		return str1.toLowerCase() === str2.toLowerCase();
	}
	return false;
}
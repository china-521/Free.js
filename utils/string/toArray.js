/******************************************【字符串转字符数组】****************************************/
/**
 * 功能说明：
 *      -字符串转换为数组
 * 参数说明： 
 *      @param {String} str 目标字符串
 *      @param {String/RegExp} separator 字符串或正则表达式，从该参数指定的地方分割String
 *      @param {Number} limit 指定返回的数组的最大长度
 *  
 */

import {
	checkString
} from "../type/checkString.js";
import {
	checkNumber
} from "../type/checkNumber.js";
import {
	error
} from "../exception/error.js";
import { checkRegExp } from "../type/checkRegExp.js";

export function toArray(str, separator, limit) {
	if (str && !checkString(str, false)) {
		error('Input type mismatch,the first argument must be a String type');
	}
	if (separator && !checkString(separator, false) && !checkRegExp(separator,false)) {
		error('Input type mismatch,the second argument must be a String type or a RegExp Object');
	}
	if (limit && !checkNumber(limit, false)) {
		error('Input type mismatch,the third argument must be an Number type');
	}
	str = str || "";
	if (str.length === 0) {
		return []
	}
	return str.split(separator, limit);
}
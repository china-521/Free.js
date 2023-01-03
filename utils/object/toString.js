/******************************************【对象转字符串】****************************************/
/**
 * 功能说明：
 *      -对象转字符串
 * 参数说明： 
 *      @param {Object} obj 目标对象
 * 		@param {*} separator 分隔符
 */

import {
	checkObject
} from "../type/checkObject.js";
import {
	error
} from "../exception/error.js";
import {
	isEmpty
} from "./isEmpty.js";
import {
	decycle
} from "../../global/utils/decycle.js";

export function toString(obj, separator) {
	if (obj && !checkObject(obj, false)) {
		error('Input type mismatch,the first argument must be an Object type');
	}
	obj = obj || {};
	separator = separator || '';
	if (isEmpty(obj)) {
		return undefined;
	}
	return JSON.stringify(decycle(obj)) + separator;
}
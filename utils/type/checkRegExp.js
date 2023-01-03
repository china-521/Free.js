/**
 *  功能描述：校验 数据 是否是 正则表达式
 * 
 * @param {*} data 输入的数据 
 * @param {Boolean} show 是否显示错误信息
 * @param {String} msg 自定义异常信息
 * @returns {Boolean} 
 */

import {
	checkObject
} from "./checkObject.js";
import {
	error
} from "../exception/error.js";
import {
	checkType
} from "./checkType.js";
import {
	toJson
} from "./toJson.js";

export function checkRegExp(data, show = true, msg) {
	let flag = checkObject(data, false) ? /^\/.*?\/$/.test(data) : false;
	if (!flag && show) {
		if (msg) {
			error(msg);
		}
		error('Input type mismatch,Please enter an RegExp object' + '\n' + '[error type]:' + `${checkType(data)} ~ ${toJson(data)}`);
	}
	return flag;
}
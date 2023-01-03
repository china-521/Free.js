/**
 *  功能描述：校验 数据 是否是 function
 * 
 *  @param {*} data 输入的数据 
 *  @param {Boolean} show 是否显示错误信息
 *  @param {String} msg 自定义异常信息
 * @returns {Boolean}
 */


import {
	getType
} from "./getType.js";
import {
	checkType
} from "./checkType.js";
import {
	error
} from "../exception/error.js";
import {
	toJson
} from "./toJson.js";

export function checkFun(data, show = true, msg) {
	let flag = getType(data) === 'Function';
	if (!flag && show) {
		if (msg) {
			error(msg);
		}
		error('Input type mismatch,Please enter a Function' + '\n' + '[error type]:' + `${checkType(data)} ~ ${toJson(data)}`);
	}
	return flag;
}
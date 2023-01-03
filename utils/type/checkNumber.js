/**
 *  功能描述：校验 数据 是否是 Number类型
 * 
 * @param {*} data 输入的数值
 * @param {Boolean} show 是否显示错误信息
 * @param {String} msg 自定义异常信息
 * @returns {Boolean}
 */


import {
	checkType
} from "./checkType.js";
import {
	error
} from "../exception/error.js";
import {
	toJson
} from "./toJson.js";

export function checkNumber(data, show = true, msg) {
	let flag = (typeof data === 'number' && (data + '') !== "NaN");
	if (!flag && show) {
		if (msg) {
			error(msg);
		}
		error('The input data types do not match. Please enter an Number' + '\n' + '[error type]:' + `${checkType(data)} ~ ${toJson(data)}`);
	}
	return flag;
}
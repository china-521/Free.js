/**
 *  功能描述：校验 数据 是否是 一个整数
 * 
 *  @param {*} data 输入的数据 
 *  @param {Boolean} show 是否显示错误信息
 *  @param {String} msg 自定义异常信息
 * @returns {Boolean}
 */

import {
	error
} from "../exception/error.js";
import {
	contain
} from "../string/contain.js";
import {
	toString
} from "../string/toString.js";
import {
	checkNumber
} from "./checkNumber.js";
import {
	checkType
} from "./checkType.js";
import {
	toJson
} from "./toJson.js";

export function checkInteger(data, show = true, msg) {
	if (!checkNumber(data, false)) {
		if (show) {
			if (msg) {
				error(msg);
			}
			error('Input type mismatch,Please enter an Integer' + '\n' + '[error type]:' + `${checkType(data)} ~ ${toJson(data)}`);
		}
		return false;
	}
	data = toString(data);
	let flag = contain(data, '.');
	if(flag && show){
		if(msg){
			error(msg);
		}
		error('Input type mismatch,Please enter an Integer' + '\n' + '[error type]:' + `${checkType(data)} ~ ${toJson(data)}`);
	}
	return !flag;
}
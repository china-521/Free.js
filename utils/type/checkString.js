/**
 *  功能描述：校验 数据 是否是 字符串
 * 
 * @param {*} str 输入的数据 
 * @param {Boolean} show 是否显示错误信息
 * @param {String} msg 自定义异常信息
 * @returns {Boolean}
 */


import {
	getType
} from './getType.js';
import {
	error
} from '../exception/error.js';
import {
	toJson
} from './toJson.js';


export function checkString(str, show = true, msg) {
	let flag = getType(str) === 'String';
	if (!flag && show) {
		if (msg) {
			error(msg);
		}
		error('Input type mismatch,Please enter an string' + '\n' + '[error type]:' + `${getType(str)} ~ ${toJson(str)}`);
	}
	return flag;
}
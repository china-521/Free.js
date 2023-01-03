/**
 *  功能描述：校验 数据 是否是 NaN
 * 
 * @param {*} data 输入的数据 
 * @param {Boolean} show 是否显示错误信息
 * @param {String} msg 自定义异常信息
 * @returns {Boolean}
 */

import {
	checkType
} from './checkType.js';
import {
	error
} from '../exception/error.js';
import {
	toJson
} from './toJson.js';

export function checkNaN(data, show = true, msg) {
	let flag = Number.isNaN(data);
	if (!flag && show) {
		if (msg) {
			error(msg);
		}
		error('Input type mismatch,Please enter an NaN' + '\n' + '[error type]:' + `${checkType(data)} ~ ${toJson(data)}`);
	}
	return flag;
}
/**
 *  功能描述：校验 数据 是否是 布尔值
 * 
 *  @param {*} data 输入的数据 
 *  @param {Boolean} show 是否显示错误信息
 *  @param {String} msg 自定义异常信息
 *  @returns {Boolean}
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

export function checkBoolean(data, show = true, msg) {
	let flag = getType(data) === 'Boolean';
	if (!flag && show) {
		if (msg) {
			error(msg);
		}
		error('Input type mismatch,Please enter a Boolean' + '\n' + '[error type]:' + `${getType(data)} ~ ${toJson(data)}`);
	}
	return flag;
}
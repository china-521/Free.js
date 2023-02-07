/**
 *  功能描述：校验 数据 是否是 数组
 * 
 *  @param {*} arr 输入的数据 
 *  @param {Boolean} show 是否显示错误信息
 *  @param {String} msg 自定义异常信息
 *  @returns {Boolean} 
 */

import {
	getType
} from './getType.js'
import {
	error
} from '../exception/error.js';
import {
	toJson
} from './toJson.js';
export function checkArray(arr, show = true, msg) {
	let flag = getType(arr) === 'Array';
	if (!flag && show) {
		if (msg) {
			error(msg);
		}
		error("The input data types do not match. Please enter an Array\n" + '[error type]:' + `${getType(arr)} ~ ${toJson(arr)}`);
	}
	return flag;
}
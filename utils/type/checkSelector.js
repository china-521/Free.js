/**
 *  功能描述：校验 数据 是否是 选择器
 * 
 * @param {*} selector 输入的数据 
 * @param {Boolean} show 是否显示错误信息
 * @param {String} msg 自定义异常信息
 * @returns {Boolean}
 */


import {
	checkType
} from './checkType.js';
import {
	checkString
} from './checkString.js';
import {
	checkDom
} from './checkDom.js';
import {
	error
} from '../exception/error.js';
import {
	toJson
} from './toJson.js';

export function checkSelector(selector, show = true, msg) {
	let flag = ((checkString(selector, false) && selector.length > 0) || checkDom(selector, false));
	if (!flag && show) {
		if (msg) {
			error(msg);
		}
		error('Selector input type mismatch,Please enter a non-null string or DOM object' + '\n' + '[error type]:' + `${checkType(selector)} ~ ${toJson(selector)}`);
	}
	return flag;
}
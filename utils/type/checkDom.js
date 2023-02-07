/**
 *  功能描述：校验 数据 是否是 dom 对象
 * 
 *  @param {*} data 输入的数据 
 *  @param {Boolean} show 是否显示错误信息
 *  @param {String} msg 自定义异常信息
 *  @returns {Boolean}
 */

import {
	getType
} from "./getType.js";
import {
	error
} from "../exception/error.js";
import {
	toJson
} from "./toJson.js";

export function checkDom(data, show = true, msg) {
	let flag = (typeof HTMLElement === 'object') ?
		(function () {
			return data instanceof HTMLElement;
		})() :
		(function () {
			return data && typeof data === 'object' && data.nodeType === 1 && typeof data.nodeName === 'string';
		})();
	if (!flag && show) {
		if (msg) {
			error(msg);
		}
		0
		error('Input type mismatch,Please enter a dom object' + '\n' + '[error type]:' + `${getType(data)} ~ ${toJson(data)}`);
	}
	return flag || false;
}
/**
 *  功能描述：校验 数据 是否是 json
 * 
 * @param {String} str 输入的数据 
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
	error
} from '../exception/error.js';


export function checkJson(str, show = true, msg) {
	if (checkString(str, show)) {
		try {
			let obj = JSON.parse(str);
			if (typeof obj === 'object' && obj) {
				return true;
			} else {
				return false;
			}

		} catch (e) {
			if (show) {
				if (msg) {
					error(msg);
				}
				error(e + "\n" + '[error type]:' + `${checkType(str)} ~ ${str}`);
			}
			return false;
		}
	}
}
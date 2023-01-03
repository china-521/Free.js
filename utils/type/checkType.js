/**
 *  功能描述：
 * 		- 校验数据类型，作用和getType相似，但要比getType更加精确
 * 
 * @param {*} data 目标数据 
 * @returns {String}
 */

import {
	checkDom
} from "./checkDom.js";
import {
	checkFun
} from "./checkFun.js";
import {
	checkNodeList
} from "./checkNodeList.js";
import {
	checkRegExp
} from "./checkRegExp.js";
import {
	getType
} from "./getType.js";


export function checkType(data) {
	let type;
	if (!data && getType(data) !== 'Boolean') {
		if ((data + '') === "null") {
			type = 'Object-Null';
		} else if (Number.isNaN(data)) {
			type = 'Number-NaN';
		} else {
			type = 'Undefined';
		}
	} else if (Array.isArray(data)) {
		type = 'Array';
	} else if (checkDom(data, false)) {
		type = 'DOM-Object';
	} else if (!checkNodeList(data, false) && !checkFun(data, false) && (data instanceof Object) && !Array.isArray(data) && (data + '') !== 'null') {
		type = 'Object';
	} else if (typeof data === 'string') {
		type = 'String';
	} else if (typeof data === 'number' && (data + '') !== 'NaN') {
		type = 'Number';
	} else {
		type = getType(data);
	}
	return type;
}
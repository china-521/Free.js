import {
	checkString
} from '../type/checkString.js';

/**
 *  功能描述：
 * 		- 大小写转换
 * 
 * @param {String} str 字符串 
 * @param {Number} mode  转换模式 1: 全大写 ，2：全小写，3：首字母大写
 */
export function turnCase(str, mode) {
	if (str && checkString(str)) {
		switch (mode) {
			case 1:
				return str = str.toUpperCase();
			case 2:
				return str = str.toLowerCase();
			case 3:
				return str = str[0].toUpperCase() + str.substring(1).toLowerCase();
			default:
				return str;
		}
	}
	return str;
}
import { checkString } from "../type/checkString.js";

/**
 *  功能说明：
 *      - 去除字符串中所有空格
 *  参数说明：
 *      @param {String} str
 */
export function trimAll(str) {
	if (str && checkString(str)) {
		return str.replace(/\s/g, '');
	}
	return str;
}
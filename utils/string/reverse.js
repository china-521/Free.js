import {
	checkString
} from "../type/checkString.js";
/**
 * 功能说明：
 *      - 字符串反转
 * 参数说明：
 *      @param {String} str
 */
export function reverse(str) {
	if (str && checkString(str)) {
		return str.split('').reverse().join('');
	}
	return str;
}
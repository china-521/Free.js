/**
 *  功能说明：
 * 		-生成指定长度的随机字符串
 * 
 * @param {Number} length 
 * @returns {String}
 */

import {
	error
} from "../exception/error.js";
import {
	checkNumber
} from "../type/checkNumber.js";

export function randomString(length) {
	if (length && checkNumber(length)) {
		let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-_#*!&@';
		let strLength = chars.length;
		let randomString = '';
		for (let i = 0; i < length; i++) {
			randomString += chars.charAt(Math.floor(Math.random() * strLength));
		}
		return randomString;
	}
	return null;
}
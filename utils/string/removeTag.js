/**
 *  功能说明：
 * 		- 移除字符串中的标签元素 
 * 
 * @param {String} str  
 */

import {
	checkString
} from '../type/checkString.js';
import {
	error
} from '../exception/error.js';

export function removeTag(str) {
	if (str && !checkString(str, false)) {
		error('Input type mismatch,the argument must be a String type');
	}
	return new DOMParser().parseFromString(str, 'text/html').body.textContent || '';
}
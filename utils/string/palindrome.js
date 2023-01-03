import { checkNumber } from '../type/checkNumber.js';
import { checkString } from '../type/checkString.js';
import {
	reverse
} from './reverse.js'
/**
 * 功能说明：
 *      -判断字符串是否是回文,返回一个布尔值
 * 参数说明：
 *      @param {String} str
 */
export function palindrome(str) {
	if(checkString(str,false)){
		return str === reverse(str);
	}else if(checkNumber(str,false)){
		return str.toString() === reverse(str.toString());
	}else {
		return false;
	}
}
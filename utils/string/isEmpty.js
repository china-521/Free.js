/******************************************【判断是否是空字符串】****************************************/
/**
 *  功能说明：
 *      - 判断指定字符串是否是空字符串
 *  参数说明：
 *      @param {String} str 目标字符串  如果为空返回true，否则返回false
 */

import {
	checkString
} from '../../utils/type/checkString.js';


export function isEmpty(str) {
	if(checkString(str)){
		return str.length === 0;
	}
}
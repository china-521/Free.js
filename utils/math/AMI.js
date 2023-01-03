import {
	error
} from "../exception/error.js";
import {
	toString
} from "../string/toString.js";
import {
	checkString
} from "../type/checkString.js";

/**
 *  功能说明：
 *      - 对一个字符串进行AMI编码
 *  参数说明：
 *      @param {String} str
 * 
 */
export function AMI(str) {
	if (str && !checkString(str, false)) {
		error('Input type mismatch,please input a string type');
	}
	if (str) {
		let tempArray = [];
		let count = 0;
		let strArray = [...str];
		for (let i = 0; i < strArray.length; i++) {
			if (strArray[i] === '0') {
				tempArray[i] = parseInt(strArray[i]);
			} else {
				count++;
				tempArray[i] = (count & 0x01) ? -1 : 1;
			}
		}
		return {
			argument: str,
			AMIString: toString(tempArray),
			AMIArray: tempArray
		};
	}
	return {
		AMIString: '',
		AMIArray: [],
		argument: str
	};
}
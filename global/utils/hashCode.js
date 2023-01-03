import {
	toString
} from '../../utils/string/toString.js';
import {
	checkString
} from '../../utils/type/checkString.js';
/**
 * 
 * @param {String} input 计算字符串的hashCode值 
 * @returns 
 */
let hash = 0;
export function hashCode(input) {
	if (input) {
		if (checkString(input, false)) {
			let h = hash;
			if (h === 0 && input.length > 0) {
				let val = [...input];
				val.forEach(v => {
					v = v.charCodeAt();
					h = 31 * h + v;
				});
				hash = h;
			}
			return h;
		} else {
			input = toString(input);
			return hashCode(input);
		}
	}
}
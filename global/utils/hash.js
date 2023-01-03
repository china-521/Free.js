import {
	checkString
} from "../../utils/type/checkString.js";
import {
	toString
} from "../../utils/string/toString.js";

const I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');

export function hash(input) {
	if (input) {
		if (checkString(input, false)) {
			let hash = 5381;
			let i = input.length - 1;

			if (checkString(input, false)) {
				for (; i > -1; i--) {
					hash += (hash << 5) + input.charCodeAt(i);
				}
			} else {
				for (; i > -1; i--) {
					hash += (hash << 5) + input[i];
				}
			}
			let value = hash & 0x7FFFFFFF;

			let retValue = '';
			do {
				retValue += I64BIT_TABLE[value & 0x3F];
			}
			while (value >>= 6);

			return retValue;
		} else {
			input = toString(input);
			return hash(input);
		}
	}
}
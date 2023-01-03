import {
	checkArray
} from "../../utils/type/checkArray.js";
import {
	checkObject
} from "../../utils/type/checkObject.js";
import {
	checkString
} from "../../utils/type/checkString.js";

/**
 *  功能说明：
 *      - 判断指定属性是否属于某个对象或数组或字符串
 *  参数说明：
 *      @param {Object/Array/String}  source
 *      @param {*}  item  属性
 */
export function contain(source, item) {
	if (checkArray(source, false)) {
		return source.includes(item);
	} else if (checkObject(source, false)) {
		return item in source;
	} else if (checkString(source, false)) {
		return source.indexOf(item) > -1;
	} else {
		return false;
	}
}
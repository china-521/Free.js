import { checkObject } from "../type/checkObject.js";
/**
 *  功能说明：
 *      - 判断一个对象是否为空
 *  参数说明：
 *      @param {Object} object 对象
 * 
 */
export function isEmpty(object) {
	if (checkObject(object)) {
		return Object.keys(object).length <= 0 ? true : false;
	}
}
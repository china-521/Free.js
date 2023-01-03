import {
	addClass
} from "./addClass.js";
import {
	hasClass
} from "./hasClass.js";
import {
	removeClass
} from "./removeClass.js";
import {
	checkSelector
} from "../type/checkSelector.js";
import {
	checkString
} from "../type/checkString.js";

/** 
 * 功能说明：
 *      - 切换一个类
 * 		- 如果元素中具有该类，则删除,如果元素中没有该类，则添加
 * 参数说明：
 *     @param {String} selector 要删除class属性的元素选择器
 *     @param {String} className 要删除的class值（类名）。字符串形式
 */
export function toggleClass(selector, className) {
	if (selector && className) {
		if (checkSelector(selector) && checkString(className)) {
			if (hasClass(selector, className)) {
				return removeClass(selector, className);
			} else {
				return addClass(selector, className);
			}
		}
	}
	return false;
}
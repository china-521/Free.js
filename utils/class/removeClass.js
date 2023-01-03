import {
	getElement
} from "../dom/getElement.js";
import {
	checkSelector
} from "../type/checkSelector.js";
import {
	checkString
} from "../type/checkString.js";
import {
	hasClass
} from "./hasClass.js";
/** 
 * 功能说明：
 *      -删除一个元素中指定的class属性
 * 参数说明：
 *     @param {String} selector 要删除class属性的元素选择器
 *     @param {String} className 要删除的class值（类名）。字符串形式
 */
export function removeClass(selector, className) {
	if (selector && className) {
		if (checkSelector(selector) && checkString(className)) {
			let obj = getElement(selector);
			if (hasClass(obj, className)) {
				obj.classList.remove(className);
				return !hasClass(obj,className) ? true : false;
			}
		}
	}
	return false;
}
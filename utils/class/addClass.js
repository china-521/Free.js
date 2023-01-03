import {
	checkSelector
} from "../type/checkSelector.js";
import {
	checkString
} from "../type/checkString.js";
import {
	hasClass
} from "./hasClass.js";
import {
	getElement
} from "../dom/getElement.js";
/** 
 * 功能说明：
 *      -用来向一个元素中添加指定的class属性值     
 * 参数说明：
 *     @param {String} selector 要添加class属性的元素选择器
 *     @param {String} className 要添加的class值（类名）。字符串形式
 */
export function addClass(selector, className) {
	if (selector && className) {
		if (checkSelector(selector) && checkString(className)) {
			let obj = getElement(selector);
			if (!hasClass(selector, className)) {
				obj.classList.add(className);
				return hasClass(obj,className) ? true : false;
			}
		}
	}
	return false;
}
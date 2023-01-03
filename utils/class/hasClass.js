import {
	getElement
} from "../dom/getElement.js";
import {
	checkSelector
} from "../type/checkSelector.js";
import {
	checkString
} from "../type/checkString.js";
/** 
 * 功能说明：
 *      -判断一个元素中是否含有指定的class属性值 
 * 参数说明：
 *     @param {String} selector 元素选择器
 *     @param {String} className 要添加的class值（类名）。字符串形式
 */
export function hasClass(selector, className) {
	if (selector && className) {
		if (checkSelector(selector) && checkString(className)) {
			let obj = getElement(selector);
			// 创建一个正则表达式(\b是正则表达式中的单词边界)
			let reg = new RegExp("\\b" + className + "\\b");
			return reg.test(obj.className);
		}
	}
	return false;
}
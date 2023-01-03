import {
	checkSelector
} from "../type/checkSelector.js";
import {
	hasClass
} from "./hasClass.js";
import {
	getElement
} from "../dom/getElement.js";
import {
	checkArray
} from "../type/checkArray.js";
import {
	removeClass
} from "./removeClass.js";
/** 
 * 功能说明：
 *      - 同时移除多个类  
 * 参数说明：
 *     @param {String} selector 要添加class属性的元素选择器
 *     @param {Array} className 要添加的class值（类名）。字符串数组或多个字符串或单个字符串
 */
export function removeMoreClass(selector, ...className) {
	if (selector && className) {
		if (checkSelector(selector)) {
			let obj = getElement(selector);
			let result = {
				count: 0,
				state: false,
				success: [],
				fail: []
			};
			for (let i = 0; i < className.length; i++) {
				if (checkArray(className[i], false)) {
					className[i].forEach((value) => {
						if (hasClass(obj, value)) {
							if (removeClass(obj, value)) {
								result.count++;
								result.success.push(value);
								result.count > 0 ? result.state = true : result.state = false;
							} else {
								result.fail.push(value);
								result.count > 0 ? result.state = true : result.state = false;
							}
						}
					});
				} else {
					if (hasClass(obj, className[i])) {
						if (removeClass(obj, className[i])) {
							result.count++;
							result.success.push(className[i]);
							result.count > 0 ? result.state = true : result.state = false;
						} else {
							result.fail.push(className[i]);
							result.count > 0 ? result.state = true : result.state = false;
						}
					}
				}
			}
			return result;
		}
	}
	return result;
}
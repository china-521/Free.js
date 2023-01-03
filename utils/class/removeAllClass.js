import { getElement } from "../dom/getElement.js";
import { toArray } from "../object/toArray.js";
import { checkSelector } from "../type/checkSelector.js";
import { classSize } from "./classSize.js";

/** 
 * 功能说明：
 *      - 同时移除所有的类
 * 参数说明：
 *     @param {String} selector 要添加class属性的元素选择器
 */
export function removeAllClass(selector) {
	if (selector) {
		if(checkSelector(selector)){
			if(classSize(selector) > 0){
				let obj = getElement(selector);
				// obj.classList = [];
			}
		}
	}
	return ;
}
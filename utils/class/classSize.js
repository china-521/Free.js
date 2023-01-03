import { getElement } from "../dom/getElement.js";

/**
 *  功能说明
 * 		- 查看类的个数
 * 
 * @param {String/DOM} selector  
 * @returns 
 */
export function classSize(selector){	
	return selector ? getElement(selector).classList.length : 0;
}
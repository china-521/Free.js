 import {
 	checkString
 } from '../type/checkString.js';
 import {
 	checkSelector
 } from '../type/checkSelector.js';
 import {
 	getElement
 } from '../dom/getElement.js';
 import {
 	checkDom
 } from '../type/checkDom.js';
 import {
 	error
 } from '../exception/error.js';

 /**
  * 功能说明：
  *      -获取元素的样式
  * 参数说明：
  *      @param {String,DomObject} selector 要获取样式的DOM选择器。
  *      @param {String} name 要获取的样式。
  */

 export function getStyle(selector, name) {
 	if (checkSelector(selector, false)) {
 		let obj = null;
 		if (checkString(selector, false)) {
 			obj = getElement(selector);
 		} else if (checkDom(selector, false)) {
 			obj = selector;
 		} else {
 			error('Selector input type mismatch. Please enter a string or DOM-object');
 		}

		if(!checkString(name,false)){
			error('Input type mismatch,the name must an string type');
		}

 		if (window.getComputedStyle) {
 			// 常浏览器的方式,具有getComputedStyle()方法
 			return getComputedStyle(obj, null)[name];
 		} else {
 			// IE8的方式,没有getComputedStyle()方法
 			return obj.currentStyle[name];
 		}
 	}
 }
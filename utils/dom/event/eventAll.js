 /******************************************【绑定DOM事件方法(为多个元素绑定方法)】****************************************/
 /**
  * 参数说明：
  *  @param {String/DomObject} selector，要绑定的DOM元素的选择器
  *  @param {String} eventName 事件名
  *  @param {Function} callback  回调方法。--->function(){}
  *  @param {Boolean} useCapture  默认值false：事件使用冒泡传递，如果为true：事件使用捕获方式传递
  */

 import {
 	event
 } from './event.js';

 export function eventAll(selector, eventName, callback, useCapture = false) {
 	if (selector === 'window') {
 		event(window, eventName, callback, useCapture);
 	} else if (selector === 'document') {
 		event(document, eventName, callback, useCapture);
 	} else {
 		let NodeList = document.querySelectorAll(selector);
		NodeList.forEach(node => {
			event(node, eventName, callback, useCapture);
		});
 	}
 }
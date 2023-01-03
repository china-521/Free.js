 import {
 	checkSelector
 } from "../type/checkSelector.js";
 import {
 	checkString
 } from "../type/checkString.js";

 /**
  * 功能说明：
  *      -获取DOM元素
  * 参数说明：
  *     @param {String} selector  要获取的DOM元素的选择器
  *     @param {Boolean} flag  flag = true,开启贪婪模式，获取所有拥有相同选择器的dom元素，false只获取第一个dom元素
  */
 export function getElement(selector, flag = false) {
 	if (checkSelector(selector)) {
 		if (checkString(selector, false)) {
 			if (flag) {
 				return document.querySelectorAll(selector);
 			}
 			return document.querySelector(selector);
 		} else {
 			return selector;
 		}
 	}
 }
/******************************************【移除生成DOM节点】****************************************/
/**
 *  功能说明：
 *      - 移除DOM节点
 *  参数说明
 *      @param {Stirng} selector 待移除元素选择器
 *      @param {String} el 待移除元素的父元素选择器
 * 
 */

import {
	error
} from "../exception/error.js";
import {
	checkSelector
} from "../type/checkSelector.js";
import {
	getElement
} from "./getElement.js";

export function removeChild({
	el,
	selector
}) {
	if (!checkSelector(el, false)) {
		error('input type mismatch,the el must be a non-null string or DOM object');
	}
	if (!checkSelector(selector, false)) {
		error('input type mismatch,the selector must be a non-null string or DOM object');
	}
	let mainNode = getElement(el);
	let subNode = getElement(selector);
	return {
		el: mainNode,
		sub: mainNode.removeChild(subNode)
	}
}
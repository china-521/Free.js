import {
	checkSelector
} from '../../../utils/type/checkSelector.js';
import {
	checkDom
} from '../../../utils/type/checkDom.js';
import {
	checkString
} from '../../../utils/type/checkString.js';
import {
	getElement
} from '../getElement.js';

/**
 * 参数说明：
 *  @param {String/DomObject} selector，要绑定的DOM元素的选择器
 *  @param {String} eventName 事件名
 *  @param {Function} Fun  回调方法。--->function(){}
 *  @param {Boolean} useCapture  默认值false：事件使用冒泡传递，如果为true：事件使用捕获方式传递
 */
export function event(selector, eventName, Fn, useCapture = false) {
	if (checkSelector(selector)) {
		eventName = eventName.replace(/^on/, '');
		if (selector === 'window') {
			event(window, eventName, Fn, useCapture);
			return;
		} else if (selector === 'document') {
			event(document, eventName, Fn, useCapture);
			return;
		} else if (checkString(selector, false)) {
			let tempSelector = getElement(selector);
			event(tempSelector, eventName, Fn, useCapture);
		} else if (checkDom(selector, false)) {
			event(selector, eventName, Fn, useCapture);
		}

		function event(selector, eventName, Fn, useCapture = false) {
			if (selector.addEventListener) {
				selector.addEventListener(eventName, Fn, useCapture);
			} else if (selector.attachEvent) {
				selector.attachEvent('on' + eventName, Fn);
			} else {
				selector['on' + eventName] = Fn;
			}
		};
	}
}
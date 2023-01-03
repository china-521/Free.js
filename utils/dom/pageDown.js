import {
	getElement
} from './getElement.js';
import {
	getStyle
} from './getStyle.js';
import {
	setStyle
} from './setStyle.js';
import {
	event
} from './event/event.js';
/**
 * 功能说明：
 *     -整屏翻页效果
 * 参数说明：
 *     @param {String/Object} el 滚动目标选择器
 *     @param {String/Object} button 激活滚动按钮选择器
 *     
 */
export function pageDown({
	el,
	button
}) {
	el = el || 'html';
	if (el && button) {
		let height = window.screen.height;
		let target = getElement(el);
		event(button, 'click', function () {
			target.scrollTo({
				top:height,
				behavior: 'smooth'
			});
		});
	}
}
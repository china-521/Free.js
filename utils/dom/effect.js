import {
	checkSelector
} from "../type/checkSelector.js";
import {
	getElement
} from "./getElement.js";
import {
	getStyle
} from "./getStyle.js";

import {
	error
} from "../exception/error.js";

import {
	setStyle
} from "./setStyle.js";
/**
 * 功能说明：
 *      -执行动画的方法。
 * 参数说明：
 *     @param {String} el 要执行动画的元素的css选择器。
 *     @param {String} style  要执行动画的样式，比如left，top，height，width等(以字符串形式传入)。
 *     @param {Number} target 执行动画的目标位置(移动边界)。
 *     @param {Number} speed 移动速度(传递一个正值即可)。
 *     @param {Function} callback  回调方法,这个方法将会在动画执行完毕以后执行（增加方法的可扩展性）。
 */
export function cartoon({
	el,
	style,
	target,
	speed,
	callback,
	interval
}) {
	if (el && checkSelector(el)) {
		let obj = getElement(el);
		if (style === 'left' || style === 'right' || style === 'top' || style === 'bottom') {
			// 判断用户是否开启定位
			if (getStyle(el, "position") == "static") {
				error("Positioning has not been enabled and cannot be dragged");
			}
		}
		clearInterval(obj.timer);
		let current = parseInt(getStyle(el, style));
		if (current < target) {
			speed = speed;
		} else if (current > target) {
			speed = -speed;
		}
		obj.timer = setInterval(() => {
			let oldValue = parseInt(getStyle(el, style));
			let newValue = oldValue + speed;
			// 防止div越界
			if (newValue > target && speed > 0) {
				newValue = target;
			} else if (newValue < target && speed < 0) {
				newValue = target;
			}
			obj.style[style] = newValue + "px";
			// 当元素移动到边界时，关闭定时器
			if (newValue == target) {
				clearInterval(obj.timer);
				//动画执行完毕，调用回调方法(采用“与”的形式是为了使用户在不需要回调方法时，就不用传递回调方法这个参数)
				callback && callback();
			}
		}, interval || 30);
	}
}



function hide(el) {
	if (checkSelector(el)) {
		setStyle(el, {
			display: 'none'
		});
	}
}

function show(el) {
	if (checkSelector(el)) {
		setStyle(el, {
			display: 'block'
		});
	}
}

export default {
	hide,
	show,
	cartoon
}
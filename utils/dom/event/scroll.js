import {
	throttle
} from "../../../global/utils/throttle.js";
import { error } from "../../exception/error.js";
import {
	checkNumber
} from "../../type/checkNumber.js";
import {
	checkSelector
} from "../../type/checkSelector.js";
import {
	event
} from "./event.js";
/**
 * 功能说明：
 *      - 实现鼠标滚动触发特定事件
 * 	 - 滚动事件分为两个，分别为向上滚动和向下滚动触发
 *  参数说明：
 *      @param {String/dom} el  添加滚动事件的元素选择器（默认是window）
 *      @param {Number} timer  设置函数节流的时间间隔
 * 		@param {Function} callbackStart  滚动到页面顶端要触发的事件
 *      @param {Function} callbackUp  向上滚动要触发的事件
 * 	 	@param {Function} callbackDown 向下滚动要触发的事件
 */
export function scroll({
	el,
	timer,
	callbackStart,
	callbackUp,
	callbackDown
}) {
	if (!checkNumber(timer, false)) {
		error("The input types do not match. The timer must be of type Number");
	}
	el = el || 'window';
	timer = timer || 0;
	if (checkSelector(el)) {
		let threshold = 0;
		event(el, 'scroll', throttle(() => {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop <= 0) {
				(callbackStart)();
				threshold = scrollTop;
			} else if (scrollTop >= threshold) {
				(callbackDown)();
				threshold = scrollTop;
			} else {
				(callbackUp)();
				threshold = scrollTop;
			}
		}, timer));

	}
}
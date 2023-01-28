import {
	getElement
} from "./getElement.js";
import {
	getStyle
} from "./getStyle.js";
import {
	warn
} from "../exception/warn.js";

/**
 *  碰撞检测(综合版)
 * 参数说明：
 *      @param {String} el 被拖拽元素的选择器
 *      @param {String} selector 碰撞元素的选择器(可有可无)
 *      @param {Boolean} flag 是否开启范围限制和磁性吸附,如果为true则开启范围限制，如果不传或者传递的是false则不开启范围限制（默认不开启范围限制）
 *      @param {Number} distance 吸附距离(单纯用来拖拽可不用传递，如果考虑碰撞则必须传递)
 *      @param {Function} callback  碰撞后要设置的回调事件(可有可无)
 *      
 */
export function drag({
	el,
	flag,
	distance,
	selector,
	callback
}) {
	distance = distance || 20;
	callback = callback || function callback() {
		console.log('d');
	};
	let obj = getElement(el);
	let bump;
	if (selector) {
		bump = getElement(selector);
	}
	// 当鼠标在被拖拽元素上按下时，开始拖拽 onmousedown
	obj.onmousedown = function (event) {
		event = event || window.event;
		// 判断用户是否开启定位
		if (getStyle(el, "position") == "static") {
			warn("Positioning has not been enabled and cannot be dragged");
			return;
		}
		let ol = event.clientX - this.offsetLeft;
		let ot = event.clientY - this.offsetTop;

		// 当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
		document.onmousemove = function (event) {
			event = event || window.event;
			// 获取鼠标坐标
			let x = event.clientX - ol;
			let y = event.clientY - ot;

			// 初始化distance
			let adsorb = 0;
			// 初始化limit
			let limit = flag === true ? true : false;
			// 设置范围
			if (limit) {
				// 如果吸附距离有值则开启吸附
				if (distance) {
					adsorb = distance;
				}
				// 如果flag为true则开启范围限制
				if (x < adsorb) {
					x = 0;
				}
				if (x > (document.documentElement.clientWidth - obj.offsetWidth - adsorb)) {
					x = document.documentElement.clientWidth - obj.offsetWidth;
				}
				if (y < adsorb) {
					y = 0;
				}
				if (y > (document.documentElement.clientHeight - obj.offsetHeight - adsorb)) {
					y = document.documentElement.clientHeight - obj.offsetHeight;
				}
			}
			// 修改obj的位置
			obj.style.left = x + "px";
			obj.style.top = y + "px";
			// 碰撞检测
			if (bump) {
				let Top1 = obj.offsetTop;
				let Bottom1 = obj.offsetTop + obj.offsetHeight;
				let Left1 = obj.offsetLeft;
				let Right1 = obj.offsetLeft + obj.offsetWidth;

				let Top2 = bump.offsetTop;
				let Bottom2 = bump.offsetTop + bump.offsetHeight;
				let Left2 = bump.offsetLeft;
				let Right2 = bump.offsetLeft + bump.offsetWidth;

				if (!(Right1 < Left2 || Left1 > Right2 || Top1 > Bottom2 || Bottom1 < Top2)) {
					(callback)();
				}
			}

		};
		document.onmouseup = function () {
			document.onmousemove = document.onmouseup = null;
		};
		return false;
	};
}


/**
 *  碰撞检测(综合版)
 * 参数说明：
 *      @param {String} el 被拖拽元素的选择器
 * 		@param {String} target 触发拖拽的元素(被拖拽元素的子元素)
 *      @param {String} selector 碰撞元素的选择器(可有可无)
 *      @param {Boolean} flag 是否开启范围限制和磁性吸附,如果为true则开启范围限制，如果不传或者传递的是false则不开启范围限制（默认不开启范围限制）
 *      @param {Number} distance 吸附距离(单纯用来拖拽可不用传递，如果考虑碰撞则必须传递)
 *      @param {Function} callback  碰撞后要设置的回调事件(可有可无)
 *      
 */
export function dragPlus({
	el,
	target,
	flag,
	distance,
	selector,
	callback
}) {
	distance = distance || 20;
	callback = callback || function callback() {
		console.log('Free-drag');
	};
	let parentNode = getElement(el);
	let targetNode = getElement(target);
	let bump;
	if (selector) {
		bump = getElement(selector);
	}
	// 当鼠标在被拖拽元素上按下时，开始拖拽 onmousedown
	targetNode.onmousedown = function (event) {
		event = event || window.event;
		// 判断用户是否开启定位
		if (getStyle(el, "position") == "static") {
			warn("Positioning has not been enabled and cannot be dragged");
			return;
		}
		let ol = event.clientX - parentNode.offsetLeft;
		let ot = event.clientY - parentNode.offsetTop;

		// 当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
		document.onmousemove = function (event) {
			event = event || window.event;
			// 获取鼠标坐标
			let x = event.clientX - ol;
			let y = event.clientY - ot;

			// 初始化distance
			let adsorb = 0;
			// 初始化limit
			let limit = flag === true ? true : false;
			// 设置范围
			if (limit) {
				// 如果吸附距离有值则开启吸附
				if (distance) {
					adsorb = distance;
				}
				// 如果flag为true则开启范围限制
				if (x < adsorb) {
					x = 0;
				}
				if (x > (document.documentElement.clientWidth - parentNode.offsetWidth - adsorb)) {
					x = document.documentElement.clientWidth - parentNode.offsetWidth;
				}
				if (y < adsorb) {
					y = 0;
				}
				if (y > (document.documentElement.clientHeight - parentNode.offsetHeight - adsorb)) {
					y = document.documentElement.clientHeight - parentNode.offsetHeight;
				}
			}
			// 修改parentNode的位置
			parentNode.style.left = x + "px";
			parentNode.style.top = y + "px";
			// 碰撞检测
			if (bump) {
				let Top1 = parentNode.offsetTop;
				let Bottom1 = parentNode.offsetTop + parentNode.offsetHeight;
				let Left1 = parentNode.offsetLeft;
				let Right1 = parentNode.offsetLeft + parentNode.offsetWidth;

				let Top2 = bump.offsetTop;
				let Bottom2 = bump.offsetTop + bump.offsetHeight;
				let Left2 = bump.offsetLeft;
				let Right2 = bump.offsetLeft + bump.offsetWidth;

				if (!(Right1 < Left2 || Left1 > Right2 || Top1 > Bottom2 || Bottom1 < Top2)) {
					(callback)();
				}
			}

		};
		document.onmouseup = function () {
			document.onmousemove = document.onmouseup = null;
		};
		return false;
	};

}
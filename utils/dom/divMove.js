import {
	error
} from "../exception/error.js";
import {
	getElement
} from "./getElement.js";
import {
	getStyle
} from "./getStyle.js";

/**
 * 功能说明：
 * 		- 键盘控制元素移动
 * 
 * 参数说明:
 *     @param {String} el  要移动的元素的选择器
 *     @param {Number} speed 移动速度
 * 	   @param {Object} keyBoard 按键对象
 *     @param {Number} accelerate 设置加速度多少(默认是0)
 *     @param {Number} timer 设置移动过程的卡顿感
 * 	   
 */
export function divMove({
	el,
	speed,
	accelerate,
	timer,
	keyBoard = {
		top: '',
		bottom: '',
		left: '',
		right: ''
	}
}) {
	// 判断用户是否开启定位
	if (getStyle(el, "position") == "static") {
		error("Positioning has not been enabled and cannot be dragged");
	}
	speed = speed || 20;
	accelerate = accelerate || 0;
	keyBoard.top = keyBoard.top || "ArrowUp";
	keyBoard.bottom = keyBoard.bottom || "ArrowDown";
	keyBoard.left = keyBoard.left || "ArrowLeft";
	keyBoard.right = keyBoard.right || "ArrowRight";
	let obj = getElement(el);
	//定义变量存储键盘编码(影响移动方向)
	let choice = 0;
	let tempSpeed = speed;
	// 绑定键盘按下事件
	document.onkeydown = function (Event) {
		Event = Event || window.Event;
		// 按下ctrl时加速
		if (Event.ctrlKey) {
			speed = accelerate;
		} else {
			speed = speed;
		}
		choice = Event.code || Event.which || Event.keyCode;
	};
	// 绑定键盘松开事件
	document.onkeyup = function (Event) {
		Event = Event || window.Event;
		choice = "";
		speed = tempSpeed;
		return false;
	};
	// 开启定时器,控制div移动
	setInterval(() => {
		switch (choice) {
			case keyBoard.left:
				obj.style.left = (obj.offsetLeft - speed) + "px";
				break;
			case keyBoard.top:
				obj.style.top = (obj.offsetTop - speed) + "px";
				break;
			case keyBoard.right:
				obj.style.left = (obj.offsetLeft + speed) + "px";
				break;
			case keyBoard.bottom:
				obj.style.top = (obj.offsetTop + speed) + "px";
				break;
		}
	}, timer || 5);
}
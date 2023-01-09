/******************************************【点击鼠标弹出自定义文本】****************************************/
/**
 *  功能说明：
 *      - 在页面任意位置点击鼠标都会弹出自定义文字，而且内容会不停变化
 *  参数说明:
 *      @param {Array} textArr : 文本数组
 *      @param {String} font : 文本样式
 *      @param {String/DOM-Object} el : 鼠标点击的容器
 *      @param {Number} top ：弹出的文本距离鼠标点击的向上偏移量
 *      @param {Number} left ：弹出的文本距离鼠标点击的向左偏移量
 * 
 */

import {
	event
} from "../dom/event/event.js";
import {
	error
} from "../exception/error.js";
import {
	checkArray
} from "../type/checkArray.js";
import {
	checkNumber
} from "../type/checkNumber.js";
import {
	checkSelector
} from "../type/checkSelector.js";
import {
	checkString
} from "../type/checkString.js";
import {
	setStyle
} from "../dom/setStyle.js";
import {
	getStyle
} from "../dom/getStyle.js";
import {
	createElement
} from "../dom/createElement.js";
import {
	removeChild
} from "../dom/removeChild.js";
import {
	randomColor
} from "./randomColor.js";

export function clickDynamicText({
	el,
	textArr,
	font,
	top,
	left
}) {
	el = el || 'html';
	textArr = textArr || [];
	font = font || 'bold 16px "微软雅黑","仿宋","楷体"';
	top = top || 25;
	left = left || 10;
	if (!checkSelector(el, false)) {
		error('The input types do not match. The target el must be a String or a DOM Object type ');
	}
	if (!checkArray(textArr, false)) {
		error('The input types do not match. TextArr must be an array type');
	}
	if (!checkString(font, false)) {
		error('The input types do not match. the font must be a string type');
	}
	if (!checkNumber(top, false)) {
		error('The input types do not match. the top must be a number type');
	}
	if (!checkNumber(left, false)) {
		error('The input types do not match. the top must be a number type');
	}
	event('document', 'click', function (e) {
		let event = e || window.event;
		let baseX = event.pageX;
		let baseY = event.pageY;
		// 创建文本存储容器
		let tempSpan = createElement({
			tagName: 'span',
			flag: true,
			el: el,
			style: {
				position: 'absolute',
				zIndex: '99999',
				font: font,
				left: `${baseX - left}`,
				top: `${baseY - top}`,
				color:randomColor()
			},
			childNode: textArr[Math.floor(Math.random() * textArr.length)]
		}).targetNode;
		// 定时器1实现字符串上升效果
		let timer1 = setInterval(() => {
			setStyle(tempSpan, {
				top: `${parseInt(getStyle(tempSpan,'top')) - 5}px`,
				opacity: `${getStyle(tempSpan,'opacity') - 0.08}`,
			});
		}, 60);
		//定时器2实现字符消失
		let count = 0;
		let timer2 = setInterval(() => {
			clearInterval(timer1);
			removeChild({
				el: el,
				selector: tempSpan
			});
			count++;
			if (count >= 0) {
				clearInterval(timer2);
			}
		}, 1000);
	}, true);

}
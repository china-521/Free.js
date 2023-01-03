/******************************************【修改鼠标指针样式】****************************************/
/**
 *  功能说明：
 *      - 修改鼠标指针的样式
 *  参数说明：
 *      @param {String} el 鼠标指针发生改变时进入的元素的选择器  
 *      @param {String} src 自定义鼠标指针图标路径
 *      @param {String} pointer 默认鼠标指针形状
 *      @param {String} offsetX 自定义鼠标指针图标水平偏移量  
 *      @param {String} offsetY 自定义鼠标指针图标垂直偏移量
 *      @param {Boolean} show 开启鼠标指针形状名称提示，true开启提示，false关闭提示
 */

import config from "../../config/config.js";
import {
	event
} from "../dom/event/event.js";
import {
	setStyle
} from '../dom/setStyle.js';
import {
	error
} from "../exception/error.js";
import {
	checkBoolean
} from "../type/checkBoolean.js";
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
	contain
} from "../object/contain.js";

export function mousePointer({
	el,
	pointer,
	src,
	offsetX,
	offsetY,
	show = true
}) {
	el = el || 'html';
	pointer = pointer || "auto";
	offsetX = offsetX || 0;
	offsetY = offsetY || 0;
	if (!checkSelector(el, false)) {
		error('The input types do not match. The target el must be a String type or a DOM Object');
	}
	if (!checkString(pointer, false)) {
		error('The input types do not match. The target pointer must be a String type');
	}
	if (src && !checkString(src, false)) {
		error('The input types do not match. The target src must be a String type');
	}
	if (!checkNumber(offsetX, false)) {
		error('The input types do not match. The target offsetX must be an Number type');
	}
	if (!checkNumber(offsetY, false)) {
		error('The input types do not match. The target offsetY must be an Number type');
	}
	if (!checkBoolean(show, false)) {
		error('The input types do not match. The target show must be a Boolean type');
	}
	// 鼠标形状对象(默认样式)
	let pointerObj = config.pointer;
	if (show) {
		console.log("The mouse types you can select are as follows:\n", pointerObj);
	}
	if (src) {
		event(el, 'mousemove', function () {
			setStyle(el, {
				cursor: `url(${src}) ${offsetX} ${offsetY},auto`,
			});
		});
	} else if (pointer) {
		if (contain(pointerObj,pointer)) {
			event(el, 'onmousemove', function () {
				setStyle(el, {
					cursor: pointerObj[pointer]
				});
			});
		} else {
			error('The pointer you entered does not exist');
		}
	}
}
/**
 * 功能说明：
 *      -通过传入样式对象，来给元素添加样式
 * 参数说明：
 *       @param {String,DomObject,NodeList,} selector 要设置样式的元素。
 *       @param {Object} css  样式配置对象
 *       @param {Boolean} flag 多匹配标识，false：只为拥有该选择器的第一个元素设置样式，true：为所有拥有该选择器的元素设置样式
 *      
 */

import config from '../../config/config.js';
import {
	checkDom
} from '../type/checkDom.js';
import {
	checkNodeList
} from '../type/checkNodeList.js';
import {
	checkObject
} from '../type/checkObject.js';
import {
	checkSelector
} from '../type/checkSelector.js';
import {
	checkString
} from '../type/checkString.js';
import {
	toArray
} from '../object/toArray.js';
import {
	getElement
} from './getElement.js';
import {
	error
} from '../exception/error.js';
import {
	matchNullStr
} from '../reg/matchNullStr.js';
import {
	getKeys
} from '../object/getKeys.js';


// 匹配大写字符，并进行转换(使用递归进行遍历)
function change(css) {
	// 判断是否有大写字符
	let flag = /[A-Z]/g.test(css);
	// 如果没有大写字符直接返回当前配置对象
	if (!flag) {
		return css;
	} else {
		// 如果有大写字符则转换为小写字符并使用 - 来连接
		let str = /[A-Z]/.exec(css)[0];
		// 转换为小写
		str = str.toLowerCase();
		// 字符拼接
		css = css.replace(/[A-Z]/, `-${str}`);
	}
	return change(css);
}

// 字符串样式转换为对象格式
function toObject(str) {
	let result = {};
	str = str.split(';');
	str.forEach(v => {
		if (!matchNullStr(v)) {
			let pre = v.substring(0, v.indexOf(':')).trim();
			pre = '"' + pre + '"';
			let next = v.substring(v.indexOf(':') + 1).trim();
			if (/\"/g.test(next)) {
				next = next.replace(/"/g, '\\\"');
			}
			next = '"' + next + '"';
			v = "{" + pre + ':' + next + "}";
			v = JSON.parse(v);
			result[getKeys(v)[0]] = v[getKeys(v)[0]];
		}
	});
	return result;
}

export function setStyle(selector, css, flag = true) {
	if (!selector) {
		error('Selector cannot be empty');
	}
	if (!css) {
		error('Style configuration object (CSS) cannot be empty');
	}
	if (checkObject(css) && checkSelector(selector)) {
		// 针对 width、height、和 opacity等进行特殊处理
		let cssArray = toArray(css);
		// 获取特殊样式值，进行单位省略处理
		let tempPx = config.style.px;
		let tempNoUnit = config.style.noUnit;
		for (let key in cssArray) {
			if (key === tempPx[key] && !(/px/.test(cssArray[key]))) {
				css[key] += 'px';
			}
			if (key === tempNoUnit[key] && !checkString(cssArray[key], false)) {
				css[key] = `${cssArray[key]}`;
			}
		}
		// 获取元素
		let element = null;
		if (checkString(selector, false)) {
			element = getElement(selector, flag);
		} else if (checkDom(selector, false)) {
			element = selector;
		} else {
			error('Selector input type mismatch. Please enter a String or DOM-object');
		}
		// 检查当前元素上一次是否存在样式，如果存在，则保存到临时字符串中
		let olderCss = '';
		let isElementNodeList = false;
		if (checkNodeList(element, false)) {
			isElementNodeList = true;
			olderCss = element[0].style.cssText;
		} else {
			olderCss = element.style.cssText;
		}
		// 如果当前元素之前存在样式，则将新添加的样式和原来存在的样式进行比对
		if (olderCss.length) {
			olderCss = toObject(olderCss);
			css = Object.assign({}, olderCss, css);
		}
		// 将配置对象转换为 json字符串
		css = JSON.stringify(css);
		// 逗号替换为分号 (, ---> ;)
		//css = css.replace(/(,)(?=[^\)]*(\(|$))/g, ';');
		css = css.replace(/(?<=\")\,/g, ';');
		// 替换左右括号
		css = css.replace(/[\{}]/g, '"');
		// 匹配大写字符并进行转换
		css = change(css);
		// //去掉所有的引号 ("" 或 '')
		css = css.replace(/\"/g, '');
		// 匹配 中文样式 并添加 ""
		if (/[^\x00-\xff]/g.test(css)) {
			// 中文字符串之间使用 ',' 隔开
			css = css.replace(/;(?=\\)/g, ',');
			css = css.replace(/(\\(?=[^\x00-\xff]))|(?<=[^\x00-\xff])\\/g, '"');
		}
		if (isElementNodeList) {
			element.forEach(value => {
				value.style.cssText = `${css}`;
			});
		} else {
			element.style.cssText = css;
		}
		return css;
	}
}
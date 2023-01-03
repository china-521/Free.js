 import {
 	isEmpty
 } from "../../global/utils/isEmpty.js";
 import {
 	checkObject
 } from "../type/checkObject.js";
 import {
 	checkArray
 } from "../type/checkArray.js";
 import {
 	checkFun
 } from "../type/checkFun.js";
 import {
 	setStyle
 } from "../dom/setStyle.js";


 /**
  *  功能说明：
  *      - 让js控制台打印内容带自定义样式
  *  参数说明：
  *      @param {*} context 需要输出的内容
  *      @param {Number} timeout 延迟输出 单位毫秒
  *      @param {Object} style 设置的样式 
  * 	
  * 
  */
 export function log({
 	context,
 	delay,
 	style
 }) {
 	if (typeof console !== 'undefined' && context) {
 		if (style && checkObject(style,false) && !isEmpty(style)) {
 			let div = document.createElement('div');
 			style = setStyle(div, style);
 			if (typeof console !== 'undefined') {
 				let isDelay = delay ? true : false;
 				if (checkObject(context, false) || checkArray(context, false) || checkFun(context, false)) {
 					isDelay ? setTimeout(() => {
 						console[console.dir ? 'dir' : 'log'](context)
 					}, delay) : console[console.dir ? 'dir' : 'log'](context);
 				} else {
 					isDelay ? setTimeout(() => {
 						console[console.info ? 'info' : 'log']("%c%s", `${style}`, context);
 					}, delay) : console[console.info ? 'info' : 'log'](
 						"%c%s", `${style}`, context
 					);
 				}
 			}
 		} else {
 			if (typeof console !== 'undefined') {
 				let isDelay = delay ? true : false;
 				if (checkObject(context, false) || checkArray(context, false) || checkFun(context, false)) {
 					isDelay ? setTimeout(() => {
 						console[console.dir ? 'dir' : 'log'](context)
 					}, delay) : console[console.dir ? 'dir' : 'log'](context);
 				} else {
 					isDelay ? setTimeout(() => {
 						console[console.info ? 'info' : 'log'](context)
 					}, delay) : console[console.info ? 'info' : 'log'](context);
 				}
 			}
 		}
 	} else {
 		error('Your browser does not support console, please try to change your browser');
 	}
 }

 export function logPlus({
 	context,
 	delay,
 	style
 }) {
 	if (typeof console !== 'undefined' && context && checkArray(context, false)) {
 		if (style && checkArray(style, false) && !isEmpty(style,false)) {
 			let isDelay = delay ? true : false;
 			let str = "";
 			let count = 0;
 			let styleStrArray = [];
 			style.forEach(v => {
 				let div = document.createElement('div');
 				v = setStyle(div, v);
 				styleStrArray.push(v);
 			});
 			context.forEach(v => {
 				if (checkObject(v, false) || checkArray(v, false) || checkFun(v, false)) {
 					isDelay ? setTimeout(() => {
 						console[console.dir ? 'dir' : 'log'](v)
 					}, delay) : console[console.dir ? 'dir' : 'log'](v);
 				} else {
 					count++;
 					str = str + "%c" + v;
 				}
 			});
 			if (count > style.length) {
 				// 处理 style数组长度 和 context数组长度不相等
 				for (let i = 0; i < (count - style.length); i++) {
 					styleStrArray.push('color:black;');
 				}
 			}
 			isDelay ? setTimeout(() => {
 				console[console.info ? 'info' : 'log'](str, ...styleStrArray)
 			}, delay) : console[console.info ? 'info' : 'log'](str, ...styleStrArray);
 		} else {
 			let isDelay = delay ? true : false;
 			if (checkObject(context, false) || checkArray(context, false) || checkFun(context, false)) {
 				isDelay ? setTimeout(() => {
 					console[console.dir ? 'dir' : 'log'](context)
 				}, delay) : console[console.dir ? 'dir' : 'log'](context);
 			} else {
 				isDelay ? setTimeout(() => {
 					console[console.info ? 'info' : 'log'](context)
 				}, delay) : console[console.info ? 'info' : 'log'](context);
 			}
 		}
 	} else {
 		log({
 			context: context,
 			delay: delay,
 			style: style
 		});
 	}
 }


 //  style = JSON.stringify(style).replace(/^\{|\}$|(\")/g, '');
 //  style = style.replace(/,/g, ';');
 //  if (/[^\x00-\xff]/g.test(style)) {
 //  	style = style.replace(/;(?=\\)/g, ',');
 //  	style = style.replace(/(\\(?=[^\x00-\xff]))|(?<=[^\x00-\xff])\\/g, '"');
 //  }
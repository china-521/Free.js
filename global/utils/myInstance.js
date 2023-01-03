/**
 * 功能说明：
 *      -判断 obj 是否是 Type 类型的实例
 *      - Type的原型对象是否是obj的原型链上的某个对象，如果是返回true，否则返回false。
 *      - 判断 第一个参数 是否在 第二个参数的原型链上
 * 参数说明：
 *      @param {Object/Function} obj
 *      @param {Function} Fn
 */

import {
	checkFun
} from "../../utils/type/checkFun.js";
import {
	checkObject
} from "../../utils/type/checkObject.js";
import {
	error
} from "../../utils/exception/error.js";

export function myInstance(obj, Fn) {
	if(!obj){
		error('You need to pass in two parameters. The first parameter cannot be empty');
	}
	if(!Fn){
		error('You need to pass in two parameters. The second parameter cannot be empty');
	}
	if ((!checkObject(obj, false) && !checkFun(Fn, false))) {
		error('The input types do not match. The first parameter must be an object or function type');
	}
	if (!checkFun(Fn, false)) {
		error('The input types do not match. The second parameter must be a function type');
	}
	// 获取函数的显示原型
	let prototype = Fn.prototype;
	// 获取 obj 的隐式原型对象
	let proto = obj.__proto__;
	// 遍历原型链
	while (proto) {
		// 检测原型对象是否相等
		if (prototype === proto) {
			return true;
		} else {
			proto = proto.__proto__;
		}
	}
	return false;
}
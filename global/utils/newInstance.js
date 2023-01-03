 /**
  * 功能说明：
  *      -创建Fn构造函数的实例对象
  * 参数说明：
  *      @param {Function} Fn
  *      @param {...any} args
  */

 import {
 	checkFun
 } from "../../utils/type/checkFun.js";
 import {
 	error
 } from "../../utils/exception/error.js";

 export function newInstance(Fn, ...args) {
	if(!Fn){
		error('The first parameter cannot be empty');
	}else if (!checkFun(Fn, false)) {
 		error('The input types do not match. The first parameter must be a function type');
 	}
 	// 创建一个新对象
 	const obj = {};
 	// 修改函数内部 this 指向新对象并执行
 	const result = Fn.call(obj, ...args);
 	// 修改新对象的原型对象
 	obj.__proto__ = Fn.prototype;
 	// 返回新对象
 	return result instanceof Object ? result : obj;
 }
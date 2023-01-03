/******************************************【apply方法】****************************************/
/**
 * 功能说明：
 *      -改变方法this指向，执行方法并返回结果
 *      -即执行Fn,使this为obj，并将args数组中的元素传给fn(功能等同于方法对象的apply方法),如果obj为null，则 this 指向全局对象
 * 参数说明：
 *      @param {Function} Fn   要执行的方法
 *      @param {Object} obj   方法运行时this指向的对象
 *      @param {Array} args   数组
 *      
 */

import { checkArray } from "../../utils/type/checkArray.js";
import { checkFun } from "../../utils/type/checkFun.js";
import { checkObject } from "../../utils/type/checkObject.js";
import { error } from "../../utils/exception/error.js";

export function apply(Fn, obj, ...args) {
	if(!checkFun(Fn,false)){
		error('Input type mismatch,the first argument must be a Function type');
	}
	if(obj && !checkObject(obj,false)){
		error('Input type mismatch,the second argument must be an Object type');
	}
	if(args && !checkArray(args,false)){
		error('Input type mismatch,the third argument must be an Array type');
	}
	// 判断
	if (obj === undefined || obj === null) {
		obj = globalThis;
	}
	// 为 obj 添加临时的方法
	obj.temp = Fn;
	// 执行方法
	let result = obj.temp(...args);
	// 删除临时属性
	delete obj.temp;
	// 返回结果
	return result;
}
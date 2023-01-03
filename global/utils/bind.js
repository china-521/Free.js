/******************************************【bind方法】****************************************/
/**
 * 功能说明：
 *      --改变方法this指向，执行方法并返回结果
 *      -给Fn绑定this为obj，并指定参数为后面的n个参数(功能等同于方法对象的bind方法)
 * 参数说明：
 *      @param {Function} Fn   要执行的方法
 *      @param {Object} obj    方法运行时this指向的对象
 *      @param {...any} args   方法运行时的传入的参数
 *      @param {...any} args2  方法运行时的参数
 */
import {
	checkArray
} from "../../utils/type/checkArray.js";
import {
	checkFun
} from "../../utils/type/checkFun.js";
import {
	checkObject
} from "../../utils/type/checkObject.js";
import {
	error
} from "../../utils/exception/error.js";
import {
	call
} from "./call.js";
export function bind(Fn, obj, ...args) {
	if (!checkFun(Fn, false)) {
		error('Input type mismatch,the first argument must be a Function type');
	}
	if (obj && !checkObject(obj, false)) {
		error('Input type mismatch,the second argument must be an Object type');
	}
	if (args && !checkArray(args, false)) {
		error('Input type mismatch,the third argument must be an Array type');
	}
	// 返回一个新的方法
	return function (...args2) {
		// 执行 call 方法
		return call(Fn, obj, ...args, ...args2);
	}
}
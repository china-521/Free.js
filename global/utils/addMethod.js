import {
	checkFun
} from "../../utils/type/checkFun.js";
import {
	checkObject
} from "../../utils/type/checkObject.js";
import {
	checkString
} from "../../utils/type/checkString.js";

/**
 * 为一个对象添加方法，可以实现方法的重载
 * 
 * @param {Object} object 
 * @param {String} name 
 * @param {Function} fn 
 */
export function addMethod(object, name, fn) {
	if (object && !checkObject(object, false)) {
		error('Input type mismatch,the first argument must be an Object type');
	}
	if (name && !checkString(name, false)) {
		error('Input type mismatch,the second argument must be a String type');
	}
	if (fn && !checkFun(fn, false)) {
		error('Input type mismatch,the third argument must be a Function type');
	}
	if (object && name && fn) {
		const older = object[name];
		object[name] = function (...args) {
			if (args.length === fn.length) {
				return fn.apply(this, args);
			} else if (typeof older === 'function') {
				return older.apply(this, args);
			}
		}
	}
}
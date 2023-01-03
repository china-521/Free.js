/**
 * 
 * @param {Object} target 被代理对象
 * @param {Object} proxy 代理对象 
 * @param {Boolean} flag 是否开启深度代理，默认为false
 */
import {
	error
} from "../../utils/exception/error.js";
import { checkBoolean } from "../../utils/type/checkBoolean.js";
import {
	checkObject
} from "../../utils/type/checkObject.js";

export function proxy(target, proxyObj, flag) {
	if (!target || !checkObject(target, false)) {
		return;
	}
	if (proxyObj && !checkObject(proxyObj, false)) {
		error('Input type mismatch,the second argument must be an Object type');
	}
	if(flag && !checkBoolean(flag,false)){
		error('Input type mismatch,the third argument must be a Boolean type');
	}
	proxyObj = proxyObj || {};
	Object.keys(target).forEach(key => {
		let val = target[key];
		flag ? proxy(val, proxyObj) : '';
		Object.defineProperty(proxyObj, key, {
			configurable: true,
			enumerable: true,
			get() {
				return val;
			},
			set(newVal) {
				val = newVal;
				flag ? proxy(val, proxyObj) : '';
			},
		})
	});
	return proxyObj;
}
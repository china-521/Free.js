import {
	checkObject
} from '../utils/type/checkObject.js'

import {
	checkFun
} from '../utils/type/checkFun.js';
import {
	error
} from '../utils/exception/error.js';
import {
	isEmpty
} from '../global/utils/isEmpty.js';
/**
 *  功能说明：
 *      - 类似于jQuery或者vue中的自定义插件或函数
 *      - Free允许使用者将自定义的方法，挂载到Free对象身上，并且通过Free将自定义的方法挂载到其他对象身上，比如Vue的原型对象。
 *  参数说明：
 *       @param {Object/Function} context 配置对象/函数
 *       @param {Object} instance 目标对象，默认是 Free
 *     
 */
export function extend(context, instance) {
	let count = 0;
	let result = {
		conflictObject:{},
		state:false
	}
	let conflictObject = {};
	if (context && instance) {
		if (checkObject(context, false) && checkObject(instance, false)) {
			if (Object.keys(context).length) {
				for (let key in context) {
					let flag = true;
					// 检查用户自定义插件是否和Free的方法存在冲突
					if (key in instance) {
						flag = false;
						conflictObject[key] = context[key];
					}
					if (flag) {
						count++;
						instance[key] = context[key];
					}
				}
				if (!isEmpty(conflictObject)) {
					console.warn('[Free warn]:Free has detected that there are attributes with the same name as Free in your plug-in.' +
						'To avoid serious errors, Free will prohibit the following attributes in your plug-in from being added to Free.\n', conflictObject);
				}
				count > 0 ? (result.conflictObject = conflictObject, result.state = true) : (result.conflictObject = conflictObject, result.state = false);
			} else {
				console.warn('Free has not detected a custom plug-in.');
			}
		} else if (checkFun(context, false) && checkObject(instance, false)) {
			(context.name in instance) ? conflictObject[context.name] = context: (instance[context.name] = context, count++);
			if (!isEmpty(conflictObject)) {
				console.warn('[Free warn]:Free has detected that there are attributes with the same name as Free in your plug-in.' +
					'To avoid serious errors, Free will prohibit the following attributes in your plug-in from being added to Free.\n', conflictObject);
			}
			count > 0 ? (result.conflictObject = conflictObject, result.state = true) : (result.conflictObject = conflictObject, result.state = false);
		} else {
			error('Free detected that the parameter type passed is not a configuration object or function.Please ensure that an object or function is passed');
		}
		return result;
	}
	return result;
}
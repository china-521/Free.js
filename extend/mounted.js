import global from '../global/global.js';
import Free from '../load/instance.js';
import {
	checkType
} from '../utils/type/checkType.js';
import {
	checkFun
} from '../utils/type/checkFun.js';
import {
	checkObject
} from '../utils/type/checkObject.js';
import {
	isEmpty
} from '../global/utils/isEmpty.js';
import {
	toJson
} from '../utils/type/toJson.js';
import {
	error
} from '../utils/exception/error.js';
import {
	log
} from '../utils/log/log.js';
import {
	hash
} from '../global/utils/hash.js';

/**
 *  -功能说明：
 *      - 将Free身上的方法挂载到其他对象的身上或构造函数的原型对象身上
 *  -参数说明：
 *      @param {Function/Object} target 挂载的目标对象
 * 		@param {Object} instance Free实例对象
 */
export function $mounted(target, instance) {
	let result = {
		conflictObject: {},
		state: false
	}
	if (target) {
		let count = 0;
		if (checkObject(target, false)) {
			let key = target;
			let hashKey = hash(key);
			global.$config.mounted[hashKey] = target;
			let conflictObject = {};
			if (instance && checkObject(instance, false)) {
				for (let key in instance) {
					(key in target) ? conflictObject[key] = instance[key]: (target[key] = instance[key], count++);
				}
			} else {
				for (let key in Free) {
					(key in target) ? conflictObject[key] = Free[key]: (target[key] = Free[key], count++);
				}
			}
			if (count > 0) {
				log({
					context: `Free has been successfully attached to ${hashKey}`,
					style: {
						color: 'deeppink'
					}
				});
			}
			if (!isEmpty(conflictObject)) {
				console.warn("[Free warn]:Free has detected that some methods have the same name as the methods on the target prototype." +
					"In order to avoid uncontrollable errors, the following methods will not be added to the target prototype." +
					"Please call them in the original way of Free.\n", conflictObject);
			}
			count > 0 ? (result.conflictObject = conflictObject, result.state = true) : (result.conflictObject = conflictObject, result.state = false);
		} else if (checkFun(target, false)) {
			if (!target.prototype) {
				error('Cannot mount Free on anonymous functions');
			}
			global.$config.mounted[target.name] = target;
			let conflictObject = {};
			if (instance && checkObject(instance, false)) {
				for (let key in instance) {
					(key in target.prototype) ? conflictObject[key] = instance[key]: (target.prototype[key] = instance[key], count++);
				}
			} else {
				for (let key in Free) {
					(key in target.prototype) ? conflictObject[key] = Free[key]: (target.prototype[key] = Free[key], count++);
				}
			}
			if (count > 0) {
				log({
					context: `Free has been successfully attached to ${target.name}'s prototype object`,
					style: {
						color: 'blue'
					}
				});
			}
			if (!isEmpty(conflictObject)) {
				console.warn("[Free warn]:Free has detected that some methods have the same name as the methods on the target prototype." +
					"In order to avoid uncontrollable errors, the following methods will not be added to the target prototype." +
					"Please call them in the original way of Free.\n", conflictObject);
			}
			count > 0 ? (result.conflictObject = conflictObject, result.state = true) : (result.conflictObject = conflictObject, result.state = false);
		} else {
			error("Input type does not match, please enter an object or function\n", `[error type]:${checkType(target)} ~ ${toJson(target)}`);
		}
		return result;
	}
	return result;
}
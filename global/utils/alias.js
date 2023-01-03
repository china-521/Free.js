import {
	checkArray
} from "../../utils/type/checkArray.js";
import {
	contain
} from "./contain.js";
import {
	checkString
} from "../../utils/type/checkString.js";
import {
	isEmpty
} from "./isEmpty.js";

/**
 *  功能描述：
 * 		- 为 Free 的方法设置别名，解决Free和其他插件方法名冲突
 * 
 * @param {String} alias 方法别名
 * @param {Object/String} target 要替换的对象或函数
 * @param {Object} instance Free实例对象
 */
export function alias(instance, alias, ...target) {
	if (alias && !checkString(alias, false)) {
		error('The input types do not match. The second argument alias must be a string type');
	}
	if (target && !checkArray(target, false)) {
		error('The input types do not match. The last argument target must be an array type');
	}
	if (alias) {
		let result = {};
		if (!isEmpty(target)) {
			target.forEach(v => {
				if (checkString(v, false) && contain(instance, v)) {
					result[v + '_' + alias] = instance[v];
					delete instance[v];
				}
			});
			for(let key in instance){
				result[key] = instance[key];
			}
		} else {
			for (let key in instance) {
				result[key + '_' + alias] = instance[key];
			}
		}
		return Object.create(result);
	}
	return instance;
}
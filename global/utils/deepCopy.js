/******************************************【对象/数组深拷贝终极版】****************************************/
/**
 * 功能说明：
 *      -终极版(优化遍历)
 *      -对象或数组的深拷贝(递归拷贝)
 * 参数说明：
 *      @param {*} target
 *      @param {Map} map 映射(容器)
 */

import {
	checkArray
} from "../../utils/type/checkArray.js";
import {
	checkObject
} from "../../utils/type/checkObject.js";

export function deepCopy(target, map) {
	//检测数据类型
	if (checkObject(target, false) || checkArray(target, false)) {
		// 判断数据之前是否克隆过
		map = map || new Map();
		let hasCopy = map.get(target);
		if (hasCopy) {
			return hasCopy;
		}
		// 判断目标数据的类型
		let isArray = checkArray(target, false);
		// 创建一个容器
		const result = isArray ? [] : {};
		// 将新的结果存储到容器中
		map.set(target, result);
		// 如果目标数据是数组
		if (isArray) {
			// forEach遍历
			target.forEach((item, index) => {
				result[index] = deepCopy(item, map);
			});
		} else {
			// 如果目标数据是对象，获取所有的键名，然后 forEach 遍历
			Object.keys(target).forEach(key => {
				result[key] = deepCopy(target[key], map);
			});
		}
		return result;
	} else {
		return target;
	}
}
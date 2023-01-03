/**
 *  功能描述：
 * 		- 将对象转换为字JSON符串
 * 
 * @param {Object} obj 
 * @returns {String}
 * 
 */

import {
	decycle
} from '../../global/utils/decycle.js';
import {
	checkArray
} from './checkArray.js';
import {
	checkObject
} from './checkObject.js';

export function toJson(obj) {
	return (checkObject(obj, false) || checkArray(obj, false)) ? JSON.stringify(decycle(obj)) : obj;
}
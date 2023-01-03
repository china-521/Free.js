import {checkObject} from '../type/checkObject.js';
/**
 *  功能说明：
 *      - 获取对象的属性名
 *  参数说明：
 *      @param {Object} obj 对象
 * 
 */
export function getKeys(obj) {
	if(obj && checkObject(obj)){
		return Object.keys(obj);
	}
	return [];
}
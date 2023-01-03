import {
	toString
} from '../string/toString.js';
import {
	checkArray
} from '../type/checkArray.js';
import {
	checkJson
} from '../type/checkJson.js';
import {
	checkObject
} from '../type/checkObject.js';
import {
	isEmpty
} from '../../global/utils/isEmpty.js';
import {
	checkString
} from '../type/checkString.js';
/**
 *  功能说明：
 *      - 将数据保存到本地浏览器或从本地浏览器读取数据
 *  参数说明：
 *      @param {Object} data 将数据以对象的形式传递进来
 *      @param {Array} key 需要查看的键值对的 key 的集合数组 
 * 		@returns {Number} 成功保存的数量
 */

function set(data) {
	let count = 0;
	if (data && checkObject(data) && !isEmpty(data)) {
		for (let key in data) {
			localStorage.setItem(key, toString(data[key]));
			count++;
		}
	}
	return count;
}

/**
 *  读取本地存储
 * 
 * @param  {...any} keys key数组或单个key
 * @returns {Object} 读取的结果集对象
 */
function get(...keys) {
	keys = keys || [];
	let result = {};
	if (keys && checkArray(keys) && !isEmpty(keys)) {
		keys.forEach(key => {
			if (checkArray(key, false)) {
				key.forEach(v => {
					if (checkString(v, false)) {
						let value = localStorage.getItem(v);
						if (value) {
							result[v] = checkJson(value, false) ? JSON.parse(value) : value;
						}
					}
				});
			} else {
				let value = localStorage.getItem(key);
				if (value) {
					result[key] = checkJson(value, false) ? JSON.parse(value) : value;
				}
			}
		});
	}
	return result;
}

/**
 * 移除本地存储
 * @param  {...any} keys key数组或单个key
 * @returns {Object} 移除的元素集合对象
 */
function remove(...keys) {
	keys = keys || [];
	let result = {
		count: 0,
		state: false,
		removeItem: {}
	};
	if (keys && checkArray(keys) && !isEmpty(keys)) {
		keys.forEach(key => {
			if (checkArray(key, false)) {
				key.forEach(v => {
					let tempValue = localStorage.getItem(v);
					if (tempValue) {
						result.removeItem[v] = checkJson(tempValue, false) ? JSON.parse(tempValue) : tempValue;;
						localStorage.removeItem(v);
						result.count++;
						result.count = result.count;
					}
				});

			} else {
				let tempValue = localStorage.getItem(key);
				if (tempValue) {
					result.removeItem[key] = checkJson(tempValue, false) ? JSON.parse(tempValue) : tempValue;
					localStorage.removeItem(key);
					result.count++;
					result.count = result.count;
				}
			}
		});
		result.count > 0 ? result.state = true : result.state = false;
	}
	return result;
}

/**
 * 清空本地存储
 * @returns {Object} 
 */
function clear() {
	let len = localStorage.length;
	let result = {
		count: 0,
		state: false
	};
	if (len > 0) {
		localStorage.clear();
		if (localStorage.length <= 0) {
			result.count = len;
			result.state = true;
		}
	}
	return result;
}

/**
 *  获取本地存储数量
 * 	@returns {Number}
 */

function size() {
	return localStorage.length;
}

/**
 * 本地存储是否存在 key 
 * 
 * @param {String} key 
 * @returns {Boolean} 
 */
function hasKey(key) {
	if (key && checkString(key)) {
		return !isEmpty(get(key)) ? true : false;
	}
	return false;
}

export default {
	set,
	get,
	clear,
	remove,
	size,
	hasKey
}
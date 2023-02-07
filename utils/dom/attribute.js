import {
	checkJson
} from "../type/checkJson.js";
import {
	isEmpty
} from "../../global/utils/isEmpty.js";
import {
	checkArray
} from "../type/checkArray.js";
import {
	checkString
} from "../type/checkString.js";
import {
	checkObject
} from "../type/checkObject.js";
import {
	getElement
} from "./getElement.js";
import {
	checkSelector
} from "../type/checkSelector.js";



function set(el, obj) {
	if (el && checkSelector(el) && obj && checkObject(obj) && !isEmpty(obj)) {
		let node = getElement(el);
		let len = size(el);
		for (let key in obj) {
			node.setAttribute(key, obj[key]);
		}
		return size(el) > len ? true : false;
	}
	return false;
}

function get(el, ...keys) {
	keys = keys || [];
	let result = {};
	if (el && checkSelector(el) && keys && checkArray(keys) && !isEmpty(keys)) {
		let node = getElement(el);
		keys.forEach(key => {
			if (checkArray(key, false)) {
				key.forEach(v => {
					let value = node.getAttribute(v);
					if (value) {
						result[v] = checkJson(value, false) ? JSON.parse(value) : value;
					}
				})
			} else {
				let value = node.getAttribute(key);
				if (value) {
					result[key] = checkJson(value, false) ? JSON.parse(value) : value;
				}
			}
		});
	}
	return result;
}

function remove(el, ...keys) {
	keys = keys || [];
	let result = {
		count: 0,
		state: false,
		removeItem: {}
	};
	if (el && checkSelector(el) && keys && checkArray(keys) && !isEmpty(keys)) {
		let node = getElement(el);
		keys.forEach(key => {
			if (checkArray(key, false)) {
				keys.forEach(v => {
					let value = node.getAttribute(v);
					if (value) {
						result.removeItem[v] = checkJson(value, false) ? JSON.parse(value) : value;
						result.count++;
						node.removeAttribute(v);
					}
				})
			} else {
				let value = node.getAttribute(key);
				if (value) {
					result.removeItem[key] = checkJson(value, false) ? JSON.parse(value) : value;
					result.count++;
					node.removeAttribute(key);
				}
			}
		});
		result.count > 0 ? result.state = true : result.state = false;
		return result;
	}
	return {};
}

function hasKey(el, key) {
	if (el && checkSelector(el) && key && checkString(key)) {
		return get(el, key) ? true : false;
	}
	return false;
}

function keys(el){
	const keys = [];
	if(el && checkSelector(el)){
		const element = getElement(el);
		const map = element.attributes;
		const keyList = Object.keys(map);
		if(keyList){
			keyList.forEach(key => {
				keys.push(map[key]);
			});
		}
	}
	return keys;
}

function size(el) {
	if (el && checkSelector(el)) {
		let node = getElement(el);
		return node.attributes.length;
	}
	return 0;
}

function clear(el) {
	let result = {
		count:0,
		state:false
	}
	if (el && checkSelector(el) && size(el) > 0) {
		let attributeMap = el.attributes;
		let keyList = [];
		for (let i = 0; i < size(el); i++) {
			keyList.push(attributeMap.item(i.toString()).name);
		}
		let temp = remove(el, ...keyList);
		result.count = temp.count;
		result.state = temp.state;
		return result;
	}
	return result;
}

export default {
	set,
	get,
	remove,
	hasKey,
	size,
	clear,
	keys

}
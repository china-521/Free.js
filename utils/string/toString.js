import {
	checkArray
} from "../type/checkArray.js";
import {
	checkObject
} from "../type/checkObject.js";
import {
	checkNumber
} from "../type/checkNumber.js";
import {
	checkDom
} from "../type/checkDom.js";
import {
	checkFun
} from "../type/checkFun.js";
import {
	decycle
} from "../../global/utils/decycle.js";

// 将 任意数据类型 转换为 String
export function toString(data) {
	if (checkArray(data, false)) {
		data = data.toString();
	} else if (checkObject(data, false)) {
		data = JSON.stringify(decycle(data));
	} else if (checkNumber(data, false)) {
		data = data.toString();
	} else if (checkDom(data, false)) {
		let tempNode = document.createElement('div');
		tempNode.appendChild(data.cloneNode(true));
		data = tempNode.innerHTML;
		tempNode = null;
	} else if (checkFun(data, false)) {
		data = data.toString();
	} else {
		data = (data + '') || data.toString();
	}
	return data;
}
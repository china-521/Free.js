import {
	checkObject
} from "../utils/type/checkObject.js";
import {
	error
} from "../utils/exception/error.js";
import {
	$mounted
} from "./mounted.js";
import {
	checkFun
} from "../utils/type/checkFun.js";
// 将 Free 的方法挂载到 Vue 身上
export function installToVue(Vue) {
	if (Vue) {
		if (!checkObject(Vue, false) || !checkFun(Vue, false)) {
			error('The input types do not match. Please enter an object or function type');
		}
		return $mounted(Vue);
	}
	return false;
}
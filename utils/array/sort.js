import {
	checkArray
} from "../type/checkArray.js";
import { checkFun } from "../type/checkFun.js";

/**
 * 功能说明：
 *      -对数组进行排序
 * 		- 默认按照编码大小排序
 * 		- 通过传递一个函数实现按字典排序：(a, b) => a.localeCompare(b)
 * 参数说明：
 *      @param {Array} arr  待排序数组
 * 		@param {Function} callback 回调函数
 *      @param {String} flag  true：递增排序，false：递减排序
 */
export function sort(arr, callback,flag = true) {
	if(arr && !checkArray(arr,false)){
		error('The input types do not match. The first argument must be an Array type');
	}
	if(callback && !checkFun(callback,false)){
		error('The input types do not match. The second argument must be a Function type');
	}
	arr = arr || [];
	if(callback){
		return flag ? arr.sort(callback) : arr.sort(callback).reverse();
	}
	return flag ? arr.sort() : arr.sort().reverse();
}
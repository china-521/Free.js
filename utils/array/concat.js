  /******************************************【concat数组合并】****************************************/
  /**
   * 功能说明：
   *      -数组合并：将 n 个数组或值与当前数组合并生成一个新数组
   * 参数说明：
   *      @param {Array} arr
   *      @param {...any} args 合并的元素
   * 
   */

  import {
  	error
  } from "../../utils/exception/error.js";
  import {
  	checkArray
  } from "../../utils/type/checkArray.js";

  export function concat(arr, ...args) {
  	if (arr && !checkArray(arr, false)) {
  		error('Input type mismatch,the first argument must be an Array type');
  	}
  	if (arr) {
  		// 声明一个空数组
  		const result = [...arr];
  		// 遍历数组
  		args.forEach(item => {
  			// 判断 item 是否为数组
  			if (checkArray(item, false)) {
  				// 将数组 item 展开再存入
  				result.push(...item);
  			} else {
  				// 将非数组 item 直接存入
  				result.push(item);
  			}
  		});
  		// 返回结果
  		return result;
  	}
	return [];
  }
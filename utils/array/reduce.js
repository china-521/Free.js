  /**
   * 功能说明：
   *     -从左到右为每个数组元素执行一次回调方法，并把上次回调方法的返回值放在一个暂存器中，传给下次回调方法，
   *          并返回最后一次回调方法的返回值。
   * 参数说明：
   *     @param {Array} arr
   *     @param {Function} callback
   *     @param {*} initValue  初始值    
   */
  import {
  	error
  } from "../exception/error.js";
  import {
  	checkArray
  } from "../type/checkArray.js";
  import {
  	checkFun
  } from "../type/checkFun.js";
  export function reduce(arr, callback, initValue) {
  	if (arr && !checkArray(arr, false)) {
  		error('Input type mismatch,the first argument must be an Array type');
  	}
  	if (callback && !checkFun(callback, false)) {
  		error('Input type mismatch,the second argument must be a Function type');
  	}
	if(callback && !initValue && initValue !== 0){
		error('The third parameter cannot be null,and an initialization value must be passed');
	}
	arr = arr || [];
	if(arr.length === 0){
		return undefined;
	}
  	// 声明变量
  	let result = initValue;
  	// 遍历数组
  	for (let i = 0; i < arr.length; i++) {
  		// 执行回调
  		result = callback && callback(result, arr[i]);
  	}
  	// 返回最终的结果
  	return result;
  }
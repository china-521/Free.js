 /******************************************【数组去重】****************************************/
 /**
  * 功能说明：
  *      -数组去重：根据当前数组产生一个去除重复元素后的新数组
  * 参数说明:
  *       @param {Array} arr 
  */

import { error } from "../exception/error.js";
import { checkArray } from "../type/checkArray.js";

 export function distinct(arr){
	if(arr && !checkArray(arr,false)){
		error('Input type mismatch,the argument must be an Array type');
	}
	return [...new Set(arr)];
 }
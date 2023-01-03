 import {
 	checkNumber
 } from '../../utils/type/checkNumber.js';
 import {
 	error
 } from '../exception/error.js';



 /**
  *  功能说明：
  *      - 生成指定区间内的随机数
  *  参数说明：
  *      @param {Number} begin
  *      @param {Number} end 
  * 
  */

 export function random(begin, end) {
 	if (begin && !checkNumber(begin, false)) {
 		error('The input data types do not match.The first argument must be an Number type');
 	}
 	if (end && !checkNumber(end, false)) {
 		error('The input data types do not match.The second argument must be an Number type ');
 	}
 	if (!begin && !end) {
 		return Math.random();
 	} else if (begin && !end) {
 		return Math.random() * begin;
 	} else if (!begin && end) {
 		return Math.random() * end;
 	} else if (begin && end) {
 		return Math.random() * (end - begin) + begin;
 	}
 }
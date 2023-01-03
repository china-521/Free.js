  /******************************************【测试字符串是否是以指定的前缀开始】****************************************/
  /**
   *  功能说明：
   *      - 测试此字符串是否是以指定的前缀开始
   *  参数说明：
   *      @param {String} str 目标字符串
   *      @param {String} prefix 指定的前缀
   */

  import {
  	error
  } from "../exception/error.js";
  import {
  	checkString
  } from "../type/checkString.js";

  export function startWith(str, prefix) {
  	if (str && !checkString(str, false)) {
  		error('Input type mismatch,the first argument must be a string type');
  	}
  	if (prefix && !checkString(prefix, false)) {
  		error('Input type mismatch,the second argument must be a string type');
  	}
  	if (str && prefix) {
  		if (str.length < prefix.length) {
  			return false;
  		}
  		let strArr = [...str];
  		let prefixArr = [...prefix];
  		for (let i = 0; i < prefixArr.length; i++) {
  			if (prefixArr[i] !== strArr[i]) {
  				return false;
  			}
  		}
  		return true;
  	}
  	return false;
  }
  /******************************************【格式化日期】****************************************/
  /**
   *  功能说明：
   *     - 格式化日期
   *  参数说明：
   *     @param {String/Number} date 日期或时间戳
   *     @param {format} 输出形式 如果为空则默认返回的是一个对象,否则返回 YYYY-MM-DD HH:mm:ss，YYYY/MM/DD HH:mm:ss
   * 
   */

  import {
  	checkString
  } from "../type/checkString.js";
  import {
  	error
  } from "../exception/error.js";
  import {
  	checkNumber
  } from "../type/checkNumber.js";

  export function format(date, format) {
  	if (date && !checkString(date, false) && !checkNumber(date, false)) {
  		error('Input type mismatch,the first argument must be a String or an Number type');
  	}
  	if (format && !checkString(format, false)) {
  		error('Input type mismatch,the second argument must be a String type');
  	}
  	if (!date) {
  		return undefined;
  	}
  	format = format || '';
  	let time = new Date(date); // 初始化日期
  	let year = time.getFullYear();
  	let month = time.getMonth() + 1;
  	let day = time.getDate();
  	let hour = time.getHours();
  	let minute = time.getMinutes();
  	let second = time.getSeconds();
  	let milliSecond = time.getMilliseconds();
  	let resutTimeObject = {
  		year,
  		month,
  		day,
  		hour,
  		minute,
  		second,
  		milliSecond
  	};
  	if (!format) {
  		return resutTimeObject;
  	} else {
  		format = format.trim();
  		if (format === 'YYYY-MM-DD hh:mm:ss') {
  			return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  		} else if (format === 'YYYY/MM/DD hh:mm:ss') {
  			return year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
  		} else if (format === 'YYYY-MM-DD') {
  			return year + '-' + month + '-' + day;
  		} else if (format === 'YYYY/MM/DD') {
  			return year + '/' + month + '/' + day;
  		} else if (format === 'hh:mm:ss') {
  			return hour + ':' + minute + ':' + second;
  		} else if (format === 'hh-mm-ss') {
  			return hour + '-' + minute + '-' + second;
  		} else {
  			return date;
  		}
  	}
  }
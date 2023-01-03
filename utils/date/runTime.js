/******************************************【运行时间计时器】****************************************/
/**
 * 功能说明：
 *      -用于个人网站，个人博客等运行时间的精确记录。
 * 参数说明：
 *      @param {String/DOMObject} el 展示时间的DOM的选择器
 *      @param {String/Number/Object} timeStamp 时间戳
 * 		@param {String} desc 自定义描述文本
 *      @param {Number} year
 *      @param {Number} month
 *      @param {Number} day
 *      @param {Number} hour
 *      @param {Number} minute
 *      @param {Number} second
 *      @param {boolean} flag 返回时间的方式，如果为true，返回带有描述性文本格式的时间模板，如果为false，则返回时间数组，用户可操作返回的时间数组。
 *      
 */

import {
	error
} from "../exception/error.js";
import {
	contain
} from "../string/contain.js";
import {
	format as formatDate
} from "./format.js";
import {
	fixedNumber
} from "../other/fixedNumber.js";
import {
	checkSelector
} from "../type/checkSelector.js";
import {
	getElement
} from "../dom/getElement.js";
import {
	checkNumber
} from "../type/checkNumber.js";
import {
	checkString
} from "../type/checkString.js";
import {
	checkBoolean
} from "../type/checkBoolean.js";


// 转换时间
function handleTime(unitSecond, format) {
	// 创建数组存储 年、日、时、分、秒
	let timeArr = new Array(0, 0, 0, 0, 0);
	// 将秒转换成对应的 年 日 时 分 秒
	let unitYear = 365 * 24 * 60 * 60;
	let unitDay = 24 * 60 * 60;
	let unitHour = 60 * 60;
	let unitMin = 60;
	let unitSec = 0;
	if (!unitSecond) {
		return;
	}
	if ((contain(format,'Y')) && unitSecond >= unitYear) {
		timeArr[0] = parseInt(unitSecond / unitYear);
		unitSecond %= unitYear;
	}
	if (unitSecond >= unitDay) {
		timeArr[1] = parseInt(unitSecond / unitDay);
		unitSecond %= unitDay;
	}
	if (unitSecond >= unitHour) {
		timeArr[2] = parseInt(unitSecond / unitHour);
		unitSecond %= unitHour;
	}
	if (unitSecond >= unitMin) {
		timeArr[3] = parseInt(unitSecond / unitMin);
		unitSecond %= unitMin;
	}
	if (unitSecond > unitSec) {
		timeArr[4] = unitSecond;
	}
	return timeArr;
}
// 获取时间
function getTime(year, month, day, hour, minute, second) {
	// 初始化起始时间
	let startTime = Math.round(new Date(Date.UTC(year, month - 1, day, hour, minute, second)).getTime() / 1000);
	// 获取当前时间(中国时区和UTC世界标椎时间相差 8 个小时)
	let nowTime = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
	return handleTime(nowTime - startTime);
}
// 处理输出模板格式
function handleResult(runTimeArr, format) {
	if (!format) {
		return runTimeArr[1] + '天' + runTimeArr[2] + '时' + runTimeArr[3] + '分' + runTimeArr[4] + '秒';
	} else if (format === 'Y-D h:m:s') {
		return runTimeArr[0] + '年' + runTimeArr[1] + '天' + runTimeArr[2] + '时' + runTimeArr[3] + '分' + runTimeArr[4] + '秒';
	} else if (format === 'D h:m:s') {
		return runTimeArr[1] + '天' + runTimeArr[2] + '时' + runTimeArr[3] + '分' + runTimeArr[4] + '秒';
	}
}

export function runTime({
	el,
	timeStamp,
	desc,
	year,
	month,
	day,
	hour,
	minute,
	second,
	flag = true,
	format
}) {
	if (el && !checkSelector(el, false)) {
		error('The input types do not match. The target el must be a String or a DOM Object type');
	}
	if (timeStamp && !checkNumber(timeStamp, false)) {
		error('The input types do not match. The target timeStamp must be an Number type');
	}
	if (desc && !checkString(desc, false)) {
		error('The input types do not match. The target desc must be a String type');
	}
	if (year && !checkNumber(year, false)) {
		error('The input types do not match. The target year must be an Number type');
	}
	if (month && !checkNumber(month, false)) {
		error('The input types do not match. The target month must be an Number type');
	}
	if (day && !checkNumber(day, false)) {
		error('The input types do not match. The target day must be an Number type');
	}
	if (hour && !checkNumber(hour, false)) {
		error('The input types do not match. The target hour must be an Number type');
	}
	if (minute && !checkNumber(minute, false)) {
		error('The input types do not match. The target minute must be an Number type');
	}
	if (second && !checkNumber(second, false)) {
		error('The input types do not match. The target second must be an Number type');
	}
	if (flag && !checkBoolean(flag, false)) {
		error('The input types do not match. The target flag must be a Boolean type');
	}
	desc = desc || '';
	if (timeStamp) {
		let time = formatDate(timeStamp);
		year = time.year;
		month = time.month;
		day = time.day;
		hour = time.hour;
		minute = time.minute;
		second = time.second;
	}
	if (flag && el) {
		let time_wrapper = getElement(el);
		//开始计时
		setInterval(() => {
			let runTimeArr = getTime(year, month, day, hour, minute, second);
			runTimeArr[2] = fixedNumber(runTimeArr[2], 2, 0);
			runTimeArr[3] = fixedNumber(runTimeArr[3], 2, 0);
			runTimeArr[4] = fixedNumber(runTimeArr[4], 2, 0);
			time_wrapper.innerText = desc + handleResult(runTimeArr, format);
		}, 1000);
	} else {
		return getTime(year, month, day, hour, minute, second);
	}
}
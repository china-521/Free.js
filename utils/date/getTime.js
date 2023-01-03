/******************************************【获取当前时间】****************************************/
/**
 * 功能说明：
 *      - 动态返回当前的时间 ,包括年、月、日、时、分、秒、毫秒
 * 参数说明：
 *      @param {String} el 时间展示容器
 *      @param {boolean} flag 返回时间的方式，如果为true，返回带有描述性文本格式的时间模板，如果为false，则返回时间数组，用户可操作返回的时间数组。
 *      @param {Array} $timeArray 临时保存更新后的时间
 */

import {
	checkSelector
} from "../type/checkSelector.js";
import {
	getElement
} from "../dom/getElement.js";
import {
	fixedNumber
} from "../other/fixedNumber.js";

function handleTime(flag) {
	let timeArr = new Array(0, 0, 0, 0, 0, 0, 0);
	let nowTime = new Date();
	timeArr[0] = nowTime.getFullYear();
	timeArr[1] = nowTime.getMonth() + 1;
	timeArr[2] = nowTime.getDate();
	timeArr[3] = nowTime.getHours();
	timeArr[4] = nowTime.getMinutes();
	timeArr[5] = nowTime.getSeconds();
	timeArr[6] = nowTime.getMilliseconds();
	if (flag) {
		timeArr[1] = fixedNumber(timeArr[1], 2, 0);
		timeArr[2] = fixedNumber(timeArr[2], 2, 0);
		timeArr[3] = fixedNumber(timeArr[3], 2, 0);
		timeArr[4] = fixedNumber(timeArr[4], 2, 0);
		timeArr[5] = fixedNumber(timeArr[5], 2, 0);
		timeArr[6] = fixedNumber(timeArr[6], 3, 0);
	}
	return timeArr;
};

export function getTime(el, describe, flag = true) {
	if (el && checkSelector(el, false)) {
		describe = describe || '当前时间：';
		let time_wrapper = getElement(el);
		setInterval(() => {
			let _timeArr = handleTime(flag);
			time_wrapper.innerText = describe + _timeArr[0] + '-' + _timeArr[1] + '-' + _timeArr[2] + '  ' + _timeArr[3] + ':' + _timeArr[4] + ':' + _timeArr[5];
		}, 0);
	} else {
		return handleTime(flag);
	}
}
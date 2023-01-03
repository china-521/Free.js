/******************************************【媒体时间】****************************************/
/**
 * 
 * @param {Number} timeAll //媒体（音频、视频）总时间 
 */

import {
	checkString
} from "../type/checkString.js";
import {
	fixedNumber
} from "./fixedNumber.js";

export function mediaTime(time) {
	if (checkString(time, false)) {
		time = new Date(time).getTime();
	}
	let hour = fixedNumber(parseInt(time / 3600), 2);
	let min = fixedNumber(parseInt(time % 3600 / 60), 2);
	let sec = fixedNumber(parseInt(time % 3600), 2);
	return hour + ":" + min + ":" + sec;
}
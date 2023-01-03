import {
	toString
} from "../string/toString.js";
/**
 * 
 * @param {*} msg 自定义异常信息 
 */
export function warn(msg) {
	console.warn('[Free warn]:' + toString(msg));
}
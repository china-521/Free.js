import {
	toString
} from "../string/toString.js";
/**
 * 
 * @param {*} msg 自定义异常信息 
 */
export function error(msg) {
	throw new Error('[Free error]:' + toString(msg));
}
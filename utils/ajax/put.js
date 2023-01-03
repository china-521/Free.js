import { $axios } from "./axios.js";

/**
 * 
 * @param {String} url 
 * @param {Object} options 请求体 或 params
 * @returns 
 */
export function PUT(url, options) {
	// 发送 ajax 请求 GET
	let config = Object.assign(options, {
		method: 'PUT',
		url: url
	});
	return $axios(config);
}
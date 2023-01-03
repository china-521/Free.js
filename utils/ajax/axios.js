import {
	error
} from "../exception/error.js";
import {
	checkString
} from "../type/checkString.js";

/**
 * 功能说明：
 *      -利用函数发送 ajax 请求
 * 参数说明：
 *      @param {String} method 请求方式
 *      @param {String} url 接口地址
 *      @param {Object} params 请求参数
 *      @param {Object} data  请求体
 *      @param {Object} headers 请求头
 *      
 */
export function $axios({
	method,
	url,
	params,
	data
}) {
	// method大写化
	if (method) {
		if (checkString(method, false)) {
			method = method.toUpperCase();
		} else {
			error('The input types do not match. The method must be a String type');
		}
	} else {
		error('Method cannot be empty');
	}
	if (url) {
		if(!checkString(url,false)){
			error('The input types do not match. The method must be a String type');
		}
	} else {
		error('url cannot be empty');
	}
	// 返回值
	return new Promise((resolve, reject) => {
		// 1.创建对象
		const xhr = new XMLHttpRequest();
		// 2.初始化
		// 处理 params 对象(包含 url 参数)
		let str = '';
		for (let k in params) {
			str += `${k}=${params[k]}&`;
		}
		// 截取 url 参数后边的 & 符
		str = str.slice(0, -1);
		// 设置 url 参数
		xhr.open(method, url + '?' + str);
		// 3.发送请求
		if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
			// 设置 Content-type mime 类型(请求头类型)
			xhr.setRequestHeader('Content-type', 'application/json');
			// 设置请求体
			xhr.send(JSON.stringify(data));
		} else {
			xhr.send();
		}
		// 设置响应结果的类型为 JSON
		xhr.responseType = 'json';
		// 4.处理结果
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					// 成功的状态
					resolve({
						status: xhr.status,
						statusText: xhr.statusText,
						data: xhr.response,
						config: {
							url: url,
							method: method,
							params: params
						}
					});
				} else {
					reject(new Error('[Free error]:Request failed with status code:' + xhr.status));
				}
			}
		};
	});
}
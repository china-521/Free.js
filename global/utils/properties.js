import {
	error
} from "../../utils/exception/error.js";

/**
 *  功能说明：
 *      - 读取配置文件
 *  参数说明：
 *      @param {String} url 配置文件路径
 *  返回值说明：
 *      @returns 
 */
let result = {};
let status = 300;
let source = "";


function propertiesHandle(url, data) {
	// 处理 json
	if (/.json$/gi.test(url) && data.length !== 0) {
		data = JSON.parse(data);
	}
	return data;
}

function read(url) {
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		let response = '';
		let status = '';
		let propertiesURL = '';
		request.open("get", url);
		request.send(null);
		request.onload = function () {
			if (request.status === 200) {
				response = propertiesHandle(url, request.response);
				status = request.status;
				propertiesURL = request.responseURL;
				result = response;
				status = status;
				source = propertiesURL;
				resolve({
					result: response,
					status: status,
					source: propertiesURL
				});
			} else {
				reject(error('Failed to read. Please check whether the configuration file exists or the path is correct\n' + 'Request failed with status code:' + request.status));
			}
		};
	});
}

export default {
	result,
	status,
	source,
	read
}
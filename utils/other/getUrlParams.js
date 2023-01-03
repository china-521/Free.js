/**
 *  功能说明：
 *      - 提取出 url 里面的参数并转换为对象
 *  参数说明：
 *      @param {String} url url地址 
 */
export function getUrlParams(url) {
	let reg = /([^?&=]+)=([^?&=]+)/g;
	let obj = {};
	url.replace(reg, function () {
		obj[arguments[1]] = arguments[2];
	});
	return obj;
}
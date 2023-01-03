/**
 *  功能说名：
 *      -返回当前浏览器的相关信息
 *  
 */
export function userAgent() {
	let ua = navigator.userAgent;
	console.log(ua);
	console.log(window.clientInformation);
	return {
		userAgent:ua,
		clientInformation:window.clientInformation
	};
}
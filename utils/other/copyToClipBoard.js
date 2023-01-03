/******************************************【复制内容到粘贴板】****************************************/
/**
 *  功能说明：
 *      - 复制文本到粘贴板
 *  参数说明：  
 *      @param {*} copyText 待复制的文本
 *      @param {Function} callback 复制后的回调函数
 */

export function copyToClipBoard(copyText, callback,errorCallback) {
	navigator.clipboard.writeText(copyText).then(() => {
		callback && callback();
	}).catch((error) => {
		if (document.execCommand('copy')) {
			const v = document.createElement('textarea');
			document.body.appendChild(v);
			v.value = copyText;
			v.focus();
			v.select();
			document.execCommand('copy');
			document.body.removeChild(v);
		} else {
			errorCallback && errorCallback();
			console.error(error);
		}
	});
}
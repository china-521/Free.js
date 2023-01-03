/******************************************【读取粘贴板内容】****************************************/
/**
 *  功能说明：
 *      - 读取粘贴板内容
 *  参数说明：  
 *      @param {*} text 待复制的文本
 *      @param {Function} callback 复制后的回调函数
 */
export function readClipBoard() {
	return navigator.clipboard.readText();
}
/**
 *  功能说明：
 *      - 获取数据类型
 *  参数说明：
 *      @param {*} data 目标数据
 */
export function getType(data) {
	return Object.prototype.toString.call(data).slice(8, -1);
}
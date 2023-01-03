/******************************************【检查日期是否合法】****************************************/
/**
 *  功能说明：
 *     - 检查日期是否合法
 *  参数说明：
 *     @param {String} date 日期
 * 
 */

export function isDateValid(...date){
	return !Number.isNaN(new Date(date).valueOf());
}
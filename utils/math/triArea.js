/******************************************【计算三角形的面积】*************************************** */
/**
 *  功能说明：
 *      - 计算三角形的面积
 *  参数说明：
 *      三角形的三条边
 *      @param {Number} a 
 *      @param {Number} b
 *      @param {Number} c
 * 
 */

export function triArea(a, b, c) {
	let num = (a + b + c) / 2;
	let area = Math.sqrt((num - a) * (num - b) * (num - c) * num);
	return area;
}
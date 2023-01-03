/******************************************【角度转换为弧度】*************************************** */
/**
 *  功能说明：
 *      - 将角度转化为弧度，其中，参数angle为角度值
 *  参数说明：
 *      @param {Number} angle
 * 
 */

export function radians(angle) {
	const unit = 180 / Math.PI;
	return angle / unit;
}
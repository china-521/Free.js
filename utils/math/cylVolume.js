/******************************************【计算圆柱体的体积】*************************************** */
/**
 *  功能说明：
 *      - 计算圆柱体的体积
 *  参数说明：
 *      @param {Number} r 圆柱体的底面圆半径
 *      @param {Number} h 圆柱体的高
 *      @param {Number} area 圆柱体底面积
 */

import { cirArea } from "./cirArea.js";

export function cylVolume(r,h,area){
	if (!area) {
		return cirArea(r) * h;
	} else {
		return area * h;
	}
}
/******************************************【计算圆柱体的表面积】*************************************** */
/**
 *  功能说明：
 *      - 计算圆柱体的表面积
 *  参数说明：
 *      @param {Number} r 圆柱体的底面圆半径
 *      @param {Number} h 圆柱体的高
 *      @param {Number} area 圆柱体底面积
 */

import { cirArea } from "./cirArea.js";
import { cirPerimeter } from "./cirPerimeter.js";

export function cylArea(r, h, area) {
	if (!area) {
		return 2 * cirArea(r) + cirPerimeter(r) * h;
	} else {
		let R = Math.sqrt(area / Math.PI);
		return 2 * area + cirPerimeter(R) * h;
	}
}
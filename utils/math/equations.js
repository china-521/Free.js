/******************************************【计算二元一次方程组】*************************************** */
/**
 *  功能说明：
 *      - 计算二元一次方程组
 *  参数说明：
 *      一元二次方程的三个系数,和等号右边的结果值
 *      @param {Number} a
 *      @param {Number} b
 *      @param {Number} c
 *      @param {Number} d
 * 
 */

import {
	error
} from "../exception/error.js";

export function equations(a, b, c, d) {
	if (a === 0) {
		error('Quadratic term coefficient cannot be zero');
	}
	if (d && c) {
		c -= d;
	}
	if (!c && d) {
		c = d;
	}
	let disc = Math.pow(b, 2) - 4 * a * c;
	let p = null;
	let q = null;
	let realPart = null;
	let imagePart = null;
	let X1 = null;
	let X2 = null;
	if (disc > 0) {
		p = -b + Math.sqrt(disc);
		q = -b - Math.sqrt(disc);
		X1 = p / (2 * a);
		X2 = q / (2 * a);
		return {
			X1: X1,
			X2: X2,
			disc: disc
		};
	} else if (disc === 0) {
		X1 = X2 = -b / (2 * a);
		return {
			X1: X1,
			X2: X2,
			disc: disc
		};
	} else {
		realPart = -b / (2 * a);
		imagePart = Math.sqrt(-disc) / (2 * a);
		p = realPart;
		q = imagePart;
		X1 = String(p) + '+' + String(q) + 'i';
		X2 = String(p) + '-' + String(q) + 'i';
		return {
			X1: X1,
			X2: X2,
			disc: disc,
			realPart: realPart,
			imagePart: imagePart
		};
	}
}
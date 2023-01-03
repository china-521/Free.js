/******************************************【二维码生成器】*************************************** */
/**
 *  功能说明：
 *       - 二维码生成
 *  参数说明：
 *     @param {String/DomObject} el 存放二维码的容器
 *     @param {String} text 二维码携带的数据
 *     @param {Number} width 二维码的宽度
 *     @param {Number} height 二维码的高度
 *     @param {String} colorDark 二维码的黑色像素
 *     @param {String} colorLight 二维码的白色像素
 *     @param {String} correctLevel 二维码的纠错能力
 *     @param {String} logoSrc 二维码logo路径
 */

import {
	createElement
} from "../dom/createElement.js";
import {
	getElement
} from "../dom/getElement.js";
import {
	error
} from "../exception/error.js";
import {
	contain
} from "../object/contain.js";
import {
	checkNumber
} from "../type/checkNumber.js";
import {
	checkSelector
} from "../type/checkSelector.js";
import {
	checkString
} from "../type/checkString.js";

export function qrcode({
	el,
	text,
	width,
	height,
	colorDark,
	colorLight,
	correctLevel,
	logoSrc,
}) {
	text = text || "";
	width = width || 100;
	height = height || 100;
	colorDark = colorDark || "#000000";
	colorLight = colorLight || "#ffffff";
	correctLevel = correctLevel || "H";
	if (el && checkSelector(el)) {
		if (!checkString(text, false)) {
			error('The input types do not match. The text must be a String type');
		}
		if (!checkNumber(width, false)) {
			error('The input types do not match. The width must be a Number type');
		}
		if (!checkNumber(height, false)) {
			error('The input types do not match. The height must be a Number type');
		}
		if (!checkString(colorDark, false)) {
			error('The input types do not match. The colorDark must be a String type');
		}
		if (!checkString(colorLight, false)) {
			error('The input types do not match. The colorLight must be a String type');
		}
		if (!checkString(correctLevel,false)) {
			error('The input types do not match. The correctLevel must be a String type');
		}
		createElement({
			tagName: 'script',
			flag: true,
			el: 'body',
			attribute: {
				src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js'
			}
		});
		createElement({
			tagName: 'script',
			flag: true,
			el: 'body',
			attribute: {
				src: 'https://wk-china.gitee.io/qrcode-min/qrcode-min.js'
			}
		});
		let container = getElement(el);
		let count = 0;
		let timer = setInterval(() => {
			// 定义纠错能力
			let correctLevelObject = {};
			if (window.QRCode) {
				clearInterval(timer);
				correctLevelObject = {
					L: QRCode.CorrectLevel.L,
					M: QRCode.CorrectLevel.M,
					Q: QRCode.CorrectLevel.Q,
					H: QRCode.CorrectLevel.H
				};
				if (!contain(correctLevelObject, correctLevel)) {
					error('The entered correctlevel is illegal. You can select from the following specified values: [L, M, Q, H]');
				}
				new QRCode(container, {
					text: text,
					width: width,
					height: height,
					render: 'canvas',
					colorDark: colorDark,
					colorLight: colorLight,
					correctLevel: correctLevelObject[`${correctLevel}`]
				});
				// 添加logo
				if (logoSrc) {
					// 获取画布
					let canvas = getElement(`${el} > canvas`);
					// 获取生成的二维码图片
					let qrImg = getElement(`${el} > img`);
					// 设置logo参数
					let logoWidth = width / 4;
					let logoHeight = height / 4;
					let logoX = (width - logoWidth) / 2;
					let logoY = (height - logoHeight) / 2;
					if (canvas.getContext) {
						let ctx = canvas.getContext('2d');
						let img = new Image();
						img.src = logoSrc;
						img.onload = function () {
							// 清空上一次残留的logo
							ctx.clearRect(logoX, logoY, logoWidth, logoHeight);
							// 将logo绘制到二维码上
							ctx.drawImage(img, logoX, logoY, logoWidth, logoHeight);
							// 将logo和二维码结合生成新的图片
							qrImg.src = canvas.toDataURL();
						}
					}
				}
			} else {
				count++;
				if (count > 1000) {
					clearInterval(timer);
				}
			}
		}, 20);
	}
}
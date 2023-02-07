import {
	getElement
} from "../../utils/dom/getElement.js";
import {
	flatten
} from "../../utils/array/flatten.js";

/**
 *  功能说明：
 *      - 动态引入js
 *  参数说明：
 *      @param {String/Array} srcs
 * 		@param {String} parent 生成的script要插入的节点
 */

export function importScript(parent, ...srcs) {
	const fragment = document.createDocumentFragment();
	srcs = flatten(srcs);
	srcs.forEach(src => {
		const script = document.createElement('script');
		script.type = "text/javascript";
		script.async = true;
		script.src = src;
		fragment.appendChild(script);
	});
	parent = parent || 'body';
	parent = getElement(parent);
	parent.appendChild(fragment);
}
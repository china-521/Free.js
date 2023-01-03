import {
	checkArray
} from "../type/checkArray.js";
import {
	checkObject
} from "../type/checkObject.js";
import {
	checkSelector
} from "../type/checkSelector.js";
import {
	checkString
} from "../type/checkString.js";
import {
	nodeHandler
} from "./createElement.js";

/**
 * 
 * @param {String/DOM} root 根节点 
 * @param {Object} treeNode DOM节点树
 */
function render(root, treeNode) {
	if (checkSelector(root, false) && checkObject(treeNode, false)) {
		root = getElement(root);
		const attribute = treeNode.attribute;
		const style = treeNode.style;
		const el = document.createElement(treeNode.tag);
		nodeHandler(el, {
			attribute: attribute,
			style: style
		});
		if (treeNode.childNode && checkString(treeNode.childNode, false)) {
			const text = document.createTextNode(treeNode.childNode);
			el.append(text);
		} else if (treeNode.childNode && checkArray(treeNode.childNode, false)) {
			treeNode.childNode.forEach(v => {
				if (checkObject(v, false)) {
					render(el, v);
				}
			});
		}
		root.appendChild(el);

	}
}

export default {
	render
}
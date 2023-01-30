import attribute from "../dom/attribute.js";
import {
	checkBoolean
} from "../type/checkBoolean.js";
import {
	checkSelector
} from "../type/checkSelector.js";
import {
	error
} from "../exception/error.js";
import {
	checkString
} from "../type/checkString.js";
import {
	checkObject
} from "../type/checkObject.js";
import {
	checkNumber
} from "../type/checkNumber.js";
import {
	checkFun
} from "../type/checkFun.js";
import {
	checkArray
} from "../type/checkArray.js";
import {
	getElement
} from "./getElement.js";
import {
	isEmpty
} from "../../global/utils/isEmpty.js";
import {
	remove
} from "../array/remove.js";
import {
	addMoreClass
} from "../class/addMoreClass.js";
import {
	setStyle
} from "./setStyle.js";
import {
	event
} from "./event/event.js";


const attributeUtils = attribute;
const eventUtils = event;

/**
 * 处理 dom 节点，比如设置类名，绑定事件，设置样式等
 * @param {DOM} node dom节点元素 
 * @param {Object} 属性对象 
 * @returns 
 */
export function nodeHandler(node, {
	className,
	id,
	attribute,
	style,
	childNode,
	event,
	callback,
	useCapture = false
}) {
	if (node) {
		node = getElement(node);
	}
	if (className && checkArray(className)) {
		let errClassNameList = [];
		className.forEach(v => {
			if (!checkString(v, false)) {
				errClassNameList.push(v);
			}
		});
		if (!isEmpty(errClassNameList)) {
			remove(className, errClassNameList);
			console.warn('ClassName must be a string type. Free will prevent the following classNames from being added to the created DOM node', errClassNameList);
		}
		addMoreClass(node, className);
	}
	if (id && checkString(id)) {
		attributeUtils.set(node, {
			id: id
		});
	}
	if (attribute && checkObject(attribute)) {
		attributeUtils.set(node, attribute);
	}
	if (style && checkObject(style)) {
		setStyle(node, style);
	}
	if (childNode) {
		node.innerHTML = childNode;
	}
	if (event && checkString(event)) {
		eventUtils(node, event, callback, useCapture);
	}
	return node;
}



/**
 *  功能说明：
 *      - 根据标签名或树形结构创建DOM节点
 *  参数说明：
 *      @param {String} tagName 标签名
 * 	 	@param {Object} treeNode 树形结构
 *      @param {Boolean} append 是否将创建的节点，添加到其它节点（默认是true，添加）（可选值）
 *      @param {String} el  父容器
 *      @param {Number} count 创建的DOM元素的数量
 *      @param {Array} className 为生成的节点添加类名（可选值）
 *      @param {String} id 为生成的节点添加一个id（可选值）
 *      @param {Object} attribute 为生成的节点添加对应的属性
 *      @param {Object} style 为生成的节点添加样式
 *      @param {*} childNode 为创建的DOM元素添加子节点
 *      @param {String} event 为创建的DOM元素绑定的事件名
 *      @param {Function} callback 事件执行的函数
 *      @param {Boolean} useCapture  默认值false：事件使用冒泡传递，如果为true：事件使用捕获方式传递
 */
export function createElement({
	tagName,
	el,
	append = true,
	count,
	className,
	id,
	attribute,
	style,
	childNode,
	event,
	callback,
	useCapture = false
}) {
	count = count || 1;
	attribute = attribute || {};
	style = style || {};
	if (el && !checkSelector(el, false)) {
		error('The input types do not match. The childNode must be a String or DOM-Object type');
	}
	if (append && !checkBoolean(append, false)) {
		error('The input types do not match. The append must be a Boolean type');
	}
	if (tagName && !checkString(tagName, false)) {
		error('The input types do not match. The tagName must be a String type');
	}
	if (count && !checkNumber(count, false)) {
		error('The input types do not match. The count must be a Number type');
	}
	if (className && !checkArray(className, false)) {
		error('The input types do not match. The className must be a String type');
	}
	if (id && !checkString(id, false)) {
		error('The input types do not match. The id must be a String type');
	}
	if (attribute && !checkObject(attribute, false)) {
		error('The input types do not match. The attribute must be a Object type');
	}
	if (style && !checkObject(style, false)) {
		error('The input types do not match. The style must be a Object type');
	}
	if (event && !checkString(event, false)) {
		error('The input types do not match. The event must be a String type');
	}
	if (callback && !checkFun(callback, false)) {
		error('The input types do not match. The callback must be a Function type');
	}
	if (useCapture && !checkBoolean(useCapture, false)) {
		error('The input types do not match. The useCapture must be a Boolean type');
	}
	// 设置模式
	let mode = count > 1 ? 2 : 1;
	// 获取父元素
	if (tagName) {
		if (mode === 1) {
			let node = document.createElement(tagName);
			node = nodeHandler(node, {
				className: className,
				id: id,
				attribute: attribute,
				style: style,
				childNode: childNode,
				event: event,
				callback: callback
			});
			if (append && el) {
				let parentNode = getElement(el);
				parentNode.append(node);
			}
			return {
				targetNode: node,
				style: style,
				outerHtml: node.outerHTML,
				classList: className,
				id: id
			}
		} else {
			const fragment = document.createDocumentFragment();
			for (let i = 0; i < count; i++) {
				let element = document.createElement(tagName);
				element = nodeHandler(element, {
					className: className,
					id: id,
					attribute: attribute,
					style: style,
					childNode: childNode,
					event: event,
					callback: callback
				});
				fragment.appendChild(element);
			}
			if (append && el) {
				let parentNode = getElement(el);
				parentNode.appendChild(fragment);
			}
			return {
				count,
				fragment
			};
		}
	}
}
import eventBus from "../../utils/dom/event/eventBus.js";
import pubSub from "../../utils/dom/event/pubSub.js";
import attribute from "../../utils/dom/attribute.js";
import effect from "../../utils/dom/effect.js";
import vm from "../../utils/dom/vm.js";
import {
	getStyle
} from "../../utils/dom/getStyle.js";
import {
	setStyle
} from "../../utils/dom/setStyle.js";
import {
	getElement
} from "../../utils/dom/getElement.js";
import {
	eventDelegation
} from "../../utils/dom/event/eventDelegation.js";
import {
	event
} from "../../utils/dom/event/event.js";
import {
	eventAll
} from "../../utils/dom/event/eventAll.js";
import {
	backToTop
} from "../../utils/dom/backToTop.js";
import {
	backToBottom
} from "../../utils/dom/backToBottom.js";
import {
	drag
} from "../../utils/dom/drag.js";
import {
	dragPlus
} from "../../utils/dom/drag.js";
import {
	divMove
} from "../../utils/dom/divMove.js";
import {
	scroll
} from "../../utils/dom/event/scroll.js";
import {
	nodeHandler
} from "../../utils/dom/createElement.js";
import {
	createElement
} from "../../utils/dom/createElement.js";
import {
	removeChild
} from "../../utils/dom/removeChild.js";
import {
	pageDown
} from "../../utils/dom/pageDown.js";

export default {
	vm,
	attribute,
	eventBus,
	pubSub,
	effect,
	getStyle,
	setStyle,
	getElement,
	eventDelegation,
	event,
	eventAll,
	backToTop,
	backToBottom,
	drag,
	divMove,
	scroll,
	createElement,
	removeChild,
	nodeHandler,
	pageDown,
	dragPlus
}
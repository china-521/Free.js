import properties from './utils/properties.js';
import {
	isEmpty
} from './utils/isEmpty.js';
import {
	getKeys
} from './utils/getKeys.js';
import {
	contain
} from './utils/contain.js';
import {
	hash
} from './utils/hash.js';
import {
	hashCode
} from './utils/hashCode.js';
import {
	uuid
} from './utils/uuid.js';
import {
	decycle
} from './utils/decycle.js';
import {
	throttle
} from './utils/throttle.js';
import {
	debounce
} from './utils/debounce.js';
import {
	installToVue
} from '../extend/installToVue.js';
import {
	installToJquery
} from '../extend/installToJquery.js';
import {
	newInstance
} from './utils/newInstance.js';
import {
	myInstance
} from './utils/myInstance.js';
import {
	alias
} from './utils/alias.js';
import {
	apply
} from './utils/apply.js';
import {
	call
} from './utils/call.js';
import {
	bind
} from './utils/bind.js';
import {
	map
} from './utils/map.js';
import {
	shallowCopy
} from './utils/shallowCopy.js';
import {
	deepCopy
} from './utils/deepCopy.js';
import {
	proxy
} from './utils/proxy.js';
import {
	addMethod
} from './utils/addMethod.js';
// 全局属性或方法
export default {
	$config: {
		productionTip: true,
		mounted: {},
	},
	properties,
	isEmpty,
	getKeys,
	contain,
	hash,
	hashCode,
	uuid,
	decycle,
	throttle,
	debounce,
	installToVue,
	installToJquery,
	newInstance,
	myInstance,
	alias,
	apply,
	call,
	bind,
	map,
	shallowCopy,
	deepCopy,
	proxy,
	addMethod
}
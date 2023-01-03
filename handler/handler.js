import instance from '../load/instance.js';
import global from '../global/global.js';
import about from '../about/about.js';
import {
	checkFun
} from '../utils/type/checkFun.js';
import {
	log,
	logPlus
} from "../utils/log/log.js";
import {
	error
} from '../utils/exception/error.js';
import {
	alias
} from "../global/utils/alias.js";
import {
	installToVue
} from "../extend/installToVue.js";

class $Free {
	constructor() {
		for (let key in global) {
			if (checkFun(global[key], false)) {
				this[key] = global[key];
			}
		}
		//将instance的方法挂载到$Free 的原型上
		for (let key in instance) {
			$Free.prototype[key] = instance[key];
		}
	}

	// 为 Free 上的方法设置别名
	aliasHandler(aliasStr, ...target) {
		const newInstance = Object.assign({}, instance);
		return alias(newInstance, aliasStr, ...target);
	}

	// 将 Free 挂载到 Vue 的原型对象上
	// flag : true,将 Free 上的方法挂载到 Vue的原型对象上，
	// flag : false,将 Free对象，挂载到 Vue的原型对象上
	install(Vue, flag) {
		if (flag) {
			installToVue(Vue);
		} else {
			Vue.prototype.Free = Object.create(instance);
		}
	}
}

function Free() {
	if (!(this instanceof Free)) {
		error('Free is a constructor and should be called with the `new` keyword');
	}
	return Object.assign(instance);
}

export default {
	// 将Free挂载到 window 上
	mountedFree() {
		window.$Free = $Free;
		window.Free = Free;
	},
	// 开启生产提示
	productionTip() {
		let inBrowser = typeof window !== 'undefined';
		if (inBrowser) {
			setTimeout(function () {
				if (global.$config.productionTip !== false &&
					typeof console !== 'undefined'
				) {
					log({
						context: 'Free does not support running under IE browser for the time being.\n' +
							`Welcome to my blog：${about.blog}  ${about.csdn}`,
						style: {
							color: 'deeppink'
						}
					});
					logPlus({
						context: [`Free.js ${about.version}`, `${about.api}`],
						style: [{
								padding: '5px',
								fontSize: '12px',
								background: 'black',
								color: '#f6d79e'
							},
							{
								padding: '5px',
								fontSize: '12px',
								background: 'black',
								background: '#f1c97d',
							}
						]
					});
				}
			}, 0);
		}
	},
	Free,
	$Free,
}
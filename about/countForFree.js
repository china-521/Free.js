import Free from "../load/instance.js";
import {
	checkObject
} from "../utils/type/checkObject.js";

// Free 对象上的属性数量
export function countForFree() {
	let index = 0;
	for (let key in Free) {
		index++;
		console.log('✈—————— ' + key);
		if (checkObject(Free[key], false)) {
			for (let keys in Free[key]) {
				index++;
				console.log('\t☢_____ ' + keys);
			}
		}
	}
	return {
		functionCount: index,
		version: Free.aboutFree.version,
		information: Free.aboutFree
	};
}
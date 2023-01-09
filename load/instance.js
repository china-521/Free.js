// 加载器
import {
	extend
} from '../extend/extend.js';

// 方法集合
import global from '../global/global.js';
import aboutUtils from './utils/aboutUtils.js';
import logUtils from './utils/logUtils.js';
import extendUtils from './utils/extendUtils.js';
import arrayUtils from './utils/arrayUtils.js';
import regUtils from './utils/regUtils.js';
import ajaxUtils from './utils/ajaxUtils.js';
import typeUtils from './utils/typeUtils.js';
import objectUtils from './utils/objectUtils.js';
import domUtils from './utils/domUtils.js';
import stringUtils from './utils/stringUtils.js';
import storageUtils from './utils/storageUtils.js';
import exceptionUtils from './utils/exceptionUtils.js';
import otherUtils from './utils/otherUtils.js';
import mathUtils from './utils/mathUtils.js';
import dateUtils from './utils/dateUtils.js';
import classUtils from './utils/classUtils.js';


// instance对象
let instance = {};

// 挂载方法
extend(global, instance);
extend(aboutUtils, instance);
extend(arrayUtils, instance);
extend(objectUtils, instance);
extend(stringUtils, instance);
extend(domUtils, instance);
extend(logUtils, instance);
extend(extendUtils, instance);
extend(regUtils, instance);
extend(ajaxUtils, instance);
extend(typeUtils, instance);
extend(storageUtils, instance);
extend(exceptionUtils, instance);
extend(otherUtils, instance);
extend(mathUtils, instance);
extend(dateUtils, instance);
extend(classUtils,instance);

// 暴露 instance 对象
export default instance;
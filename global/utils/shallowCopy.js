  /******************************************【对象/数组浅拷贝】****************************************/
  /**
   * 功能说明：
   *      - es5语法
   *      -对象或数组的浅拷贝
   *      -浅拷贝：只是复制了对象属性或数组元素本身(只是引用地址值)
   * 参数说明：
   *      @param {*} target
   */

  import {
  	checkArray
  } from "../../utils/type/checkArray.js";
  import {
  	checkObject
  } from "../../utils/type/checkObject.js";

  export function shallowCopy(target) {
  	if (checkObject(target, false) || checkArray(target,false)) {
  		// 创建一个容器
  		const result = checkArray(target, false) ? [] : {};
  		// 遍历 target 数据
  		for (let key in target) {
  			// 判断当前对象身上是否包含该属性(不能拷贝原型对象上的属性)
  			if (target.hasOwnProperty(key)) {
  				// 将属性设置到 result 结果数据中
  				result[key] = target[key];
  			}
  		}
  		return result;
  	} else {
  		return target;
  	}
  }
import {
   checkObject
} from "../type/checkObject.js";

/**
 *  功能说明：
 *      - 判断指定属性是否属于某个对象
 *  参数说明：
 *      @param {Object} object 对象
 *      @param {String} item 属性
 */
export function contain(object, item) {
   if (object && checkObject(object)) {
      return item in object;
   }
   return false;
}
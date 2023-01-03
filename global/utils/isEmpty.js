/**
 *  功能说明：
 *      - 判断一个对象或数组或字符串是否为空
 *  参数说明：
 *      @param {Object/Array/String} value 
 * 
 */
export function isEmpty(value){
	return Object.keys(value).length <= 0 ? true : false;
}
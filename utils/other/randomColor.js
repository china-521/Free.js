
/**
 * 功能描述：
 * 		- 产生随机颜色
 * 
 * @returns {String}
 */
export function randomColor(){
	return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,'0');
}
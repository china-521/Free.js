/******************************************【固定整数位数】****************************************/
/**
 * 定义方法固定位数（位数不够，前面补充自定义数字），实现视频时间显示为两位数。
 * 参数说明：
 *  @param {Number} num：被操作数
 *  @param {Number} n： 固定的总位数
 *  @param {Number} num1：位数不足时要补充的数
 */

export function fixedNumber(num,n,num1){
	num1 = num1 || 0;
	return (Array(n).join(num1) + num).slice(-n);
}
 /******************************************【弧度转换为角度】*************************************** */
 /**
  *  功能说明：
  *      - 将弧度转化为角度，其中，参数angle为弧度值
  *  参数说明：
  *      @param {Number} angle
  * 
  */

 export function degrees(angle) {
     const unit = 180 / Math.PI;
     return angle * unit;
 }
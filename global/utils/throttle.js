 /**
  *  函数节流
  * 
  * 限制事件处理方法频繁调用：1.方法节流 2.方法防抖
  * 节流了解：
  *      -在方法需要频繁触发时：方法执行一次后，只有大于设定的执行周期后才会执行第二次
  *      -适用于多次事件按事件做平均分配触发
  * 功能场景：
  *      -窗口调整(resize)
  *      -页面滚动(scroll)
  *      -DOM元素的拖拽功能实现(mousemove)
  *      -抢购疯狂点击(click)
  *      -向后台发送请求(ajax)
  * 功能说明:
  *      -创建一个节流方法，在wait毫秒内最多执行 callback 一次
  * 
  * 参数说明：
  *      @param {Function} callback 回调函数
  *      @param {Number} wait  时间间隔
  */

 import {
     error
 } from "../../utils/exception/error.js";
 import {
     checkNumber
 } from "../../utils/type/checkNumber.js";
 import {
     checkFun
 } from "../../utils/type/checkFun.js";

 export function throttle(callback, wait) {
     if (!checkFun(callback, false)) {
         error('Input type mismatch,the first argument must be a Function type');
     }
     if (wait && !checkNumber(wait, false)) {
         error('Input type mismatch,the second argument must be a Number type');
     }
     wait = wait || 0;
     // 定义开始时间
     let start = 0;
     // 返回结果是一个方法
     return function (Event) {
         // 获取当前的时间戳
         let nowTime = Date.now();
         // 判断
         if (nowTime - start >= wait) {
             // 若满足条件则执行回调方法,this指向事件源(事件调用者)
             callback.call(this, Event);
             // 修改开始时间
             start = nowTime;
         }
     }
 }
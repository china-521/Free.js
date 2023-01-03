  /**
   *  功能说明：
   *      - 打开qq聊天窗口
   *  参数说明：
   *      @param {String} qq qq号 
   */

  export function openQQ(qq) {
  	window.open('http://wpa.qq.com/msgrd?v=3&uin=' + qq + '&site=qq&menu=yes', '_brank');
  }
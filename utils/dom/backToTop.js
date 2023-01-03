   import {
      getElement
   } from './getElement.js';
   import {
      getStyle
   } from './getStyle.js';
   import {
      setStyle
   } from './setStyle.js';
   import {
      event
   } from './event/event.js';

   /**
    * 功能说明：
    *     -点击按钮回到页面顶部
    * 参数说明：
    *     @param {String} el 元素选择器 
    *     @param {Number} threshold  显示控件的滚动条的距离阈值
    *     @param {Number} timer 控件显示和隐藏的过渡时间 
    *     
    */
   function scrollToTop(el) {
      let target = getElement('html');
      event(el, 'click', () => {
         target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      });
   }


   export function backToTop({
      el,
      threshold,
      timer
   }) {
      timer = timer || 30;
      let obj = getElement(el, false);
      if (threshold) {
         setStyle(obj, {
            display: 'none',
            opacity: 0,
            transition: 'all 0.3s ease-in-out'
         });
         event('window', 'scroll', () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop <= threshold) {
               let opacity = (Number)(getStyle(obj, 'opacity'));
               if (opacity > 0) {
                  clearInterval(obj.timer);
                  obj.timer = setInterval(() => {
                     opacity -= 0.2;
                     if (opacity <= 0) {
                        opacity = 0;
                        clearInterval(obj.timer);
                        setStyle(obj, {
                           display: 'none'
                        });
                     }
                     setStyle(obj, {
                        opacity: opacity
                     });
                  }, timer);
               }
            } else {
               obj.style.display = 'block';
               let opacity = (Number)(getStyle(obj, 'opacity'));
               if (opacity < 1) {
                  clearInterval(obj.timer);
                  obj.timer = setInterval(() => {
                     opacity += 0.2;
                     if (opacity >= 1) {
                        opacity = 1;
                        clearInterval(obj.timer);
                     }
                     setStyle(obj, {
                        opacity: opacity
                     });
                  }, timer);
               }
            }
            scrollToTop(obj);
         });
      } else {
         scrollToTop(obj);
      }
   }
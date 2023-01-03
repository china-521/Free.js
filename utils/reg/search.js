import {
    checkString
} from "../type/checkString.js";

/**
 *  功能说明：
 *      - search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
 *                  如果没有找到任何匹配的子串，则返回 -1
 *  参数说明：
 *      @param {regExp} subStr 子字符串
 *      @param {String} parentStr   父字符串
 */
export function search(elStr, subStr) {
    if (checkString(elStr)) {
        return parsentStr.search(subStr);
    }
    return -1;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkInteger = checkInteger;

var _error = require("../exception/error.js");

var _checkNumber = require("./checkNumber.js");

var _checkType = require("./checkType.js");

var _toJson = require("./toJson.js");

/**
 *  功能描述：校验 数据 是否是 一个整数
 * 
 *  @param {*} data 输入的数据 
 *  @param {Boolean} show 是否显示错误信息
 *  @param {String} msg 自定义异常信息
 * @returns {Boolean}
 */
function checkInteger(value) {
  var show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var msg = arguments.length > 2 ? arguments[2] : undefined;

  if (!(0, _checkNumber.checkNumber)(value, false)) {
    if (show) {
      if (msg) {
        (0, _error.error)(msg);
      }

      (0, _error.error)('Input type mismatch,Please enter an Number' + '\n' + '[error type]:' + "".concat((0, _checkType.checkType)(data), " ~ ").concat((0, _toJson.toJson)(data)));
    }

    return false;
  }
}
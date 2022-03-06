/**
 * Project name(项目名称)：JS_Date
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/6
 * Time(创建时间)： 21:13
 * Version(版本): 1.0
 * Description(描述)：
 * Date 对象中的属性
 属性	        描述
 constructor	返回创建 Date 对象的原型函数
 prototype	通过该属性您可以向对象中添加属性和方法
 */


document.write("<br/>")
var time = new Date();
Date.prototype.name = null;
time.name = "JavaScript";
document.write(time.constructor + "<br>");
document.write(time.name + "<br>");
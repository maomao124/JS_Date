/**
 * Project name(项目名称)：JS_Date
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/6
 * Time(创建时间)： 21:15
 * Version(版本): 1.0
 * Description(描述)：
 * Date 对象中的方法
 方法	    描述
 getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)
 getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)
 getMonth()	从 Date 对象返回月份 (0 ~ 11)
 getFullYear()	从 Date 对象返回四位数字的年份
 getYear()	已废弃，请使用 getFullYear() 方法代替
 getHours()	返回 Date 对象的小时 (0 ~ 23)
 getMinutes()	返回 Date 对象的分钟 (0 ~ 59)
 getSeconds()	返回 Date 对象的秒数 (0 ~ 59)
 getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)
 getTime()	返回 1970 年 1 月 1 日至今的毫秒数
 getTimezoneOffset()	返回本地时间与格林威治标准时间 (GMT) 的分钟差
 getUTCDate()	根据通用时间从 Date 对象返回月中的一天 (1 ~ 31)
 getUTCDay()	根据通用时间从 Date 对象返回周中的一天 (0 ~ 6)
 getUTCMonth()	根据通用时间从 Date 对象返回月份 (0 ~ 11)
 getUTCFullYear()	根据通用时间从 Date 对象返回四位数的年份
 getUTCHours()	根据通用时间返回 Date 对象的小时 (0 ~ 23)
 getUTCMinutes()	根据通用时间返回 Date 对象的分钟 (0 ~ 59)
 getUTCSeconds()	根据通用时间返回 Date 对象的秒钟 (0 ~ 59)
 getUTCMilliseconds()	根据通用时间返回 Date 对象的毫秒(0 ~ 999)
 parse()	返回1970年1月1日午夜到指定日期（字符串）的毫秒数
 setDate()	设置 Date 对象中月的某一天 (1 ~ 31)
 setMonth()	设置 Date 对象中月份 (0 ~ 11)
 setFullYear()	设置 Date 对象中的年份（四位数字）
 setYear()	已废弃，请使用 setFullYear() 方法代替
 setHours()	设置 Date 对象中的小时 (0 ~ 23)
 setMinutes()	设置 Date 对象中的分钟 (0 ~ 59)
 setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)
 setMilliseconds()	设置 Date 对象中的毫秒 (0 ~ 999)
 setTime()	以毫秒设置 Date 对象
 setUTCDate()	根据通用时间设置 Date 对象中月份的一天 (1 ~ 31)
 setUTCMonth()	根据通用时间设置 Date 对象中的月份 (0 ~ 11)
 setUTCFullYear()	根据通用时间设置 Date 对象中的年份（四位数字）
 setUTCHours()	根据通用时间设置 Date 对象中的小时 (0 ~ 23)
 setUTCMinutes()	根据通用时间设置 Date 对象中的分钟 (0 ~ 59)
 setUTCSeconds()	根据通用时间设置 Date 对象中的秒钟 (0 ~ 59)
 setUTCMilliseconds()	根据通用时间设置 Date 对象中的毫秒 (0 ~ 999)
 toSource()	返回该对象的源代码
 toString()	把 Date 对象转换为字符串
 toTimeString()	把 Date 对象的时间部分转换为字符串
 toDateString()	把 Date 对象的日期部分转换为字符串
 toGMTString()	已废弃，请使用 toUTCString() 方法代替
 toUTCString()	根据通用时间，把 Date 对象转换为字符串
 toLocaleString()	根据本地时间格式，把 Date 对象转换为字符串
 toLocaleTimeString()	根据本地时间格式，把 Date 对象的时间部分转换为字符串
 toLocaleDateString()	根据本地时间格式，把 Date 对象的日期部分转换为字符串
 UTC()	根据通用时间返回 1970 年 1 月 1 日 到指定日期的毫秒数
 valueOf()	返回 Date 对象的原始值
 */


document.write("<br/>")
var date = new Date();

document.write(date.getDate()+"<br>");
document.write(date.getDay()+"<br>");
document.write(date.getMonth()+"<br>");
document.write(date.getFullYear()+"<br>");
document.write(date.getHours()+"<br>");
document.write(date.getMinutes()+"<br>");
document.write(date.getSeconds()+"<br>");
document.write(date.getMilliseconds()+"<br>");
document.write(date.getTime()+"<br>");
document.write(date.getTimezoneOffset()+"<br>");
document.write(date.getUTCDate()+"<br>");
document.write(date.getUTCDay()+"<br>");
document.write(date.getUTCMonth()+"<br>");
document.write(date.getUTCFullYear()+"<br>");
document.write(date.getUTCHours()+"<br>");
document.write(date.getUTCMinutes()+"<br>");
document.write(date.getUTCSeconds()+"<br>");
document.write(date.getUTCMilliseconds()+"<br>");

document.write(date.toString()+"<br>");
document.write(date.toDateString()+"<br>");
document.write(date.toTimeString()+"<br>");
document.write(date.toLocaleString()+"<br>");
document.write(date.toLocaleDateString()+"<br>");
document.write(date.toLocaleTimeString()+"<br>");




/**
 * Project name(项目名称)：JS_Date
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/6
 * Time(创建时间)： 20:43
 * Version(版本): 1.0
 * Description(描述)：
 * 创建 Date 对象
 在开始处理时间和日期之前，我们需要先创建一个 Date 对象。与其他对象（数组对象、字符串对象等）不同，Date 对象不能直接声明，必须通过 Date() 函数定义。

 JavaScript 中提供了四种不同的方法来创建 Date 对象，如下所示：
 var time = new Date();
 var time = new Date(milliseconds);
 var time = new Date(datestring);
 var time = new Date(year, month, date[, hour, minute, second, millisecond]);
 参数说明如下：
 不提供参数：若调用 Date() 函数时不提供参数，则创建一个包含当前时间和日期的 Date 对象；
 milliseconds（毫秒）：若提供一个数值作为参数，则会将这个参数视为一个以毫秒为单位的时间值，并返回自 1970-01-01 00:00:00 起，
 经过指定毫秒数的时间，例如 new Date(5000) 会返回一个 1970-01-01 00:00:00 经过 5000 毫秒之后的时间；
 datestring（日期字符串）：若提供一个字符串形式的日期作为参数，则会将其转换为具体的时间，日期的字符串形式有两种，如下所示：
 YYYY/MM/dd HH:mm:ss（推荐）：若省略时间部分，则返回的 Date 对象的时间为 00:00:00；
 YYYY-MM-dd HH:mm:ss：若省略时间部分，则返回的 Date 对象的时间为 08:00:00（加上本地时区），若不省略，在 IE 浏览器中会转换失败。
 将具体的年月日、时分秒转换为 Date 对象，其中：
 year：表示年，为了避免错误的产生，推荐使用四位的数字来表示年份；
 month：表示月，0 代表 1 月，1 代表 2 月，以此类推；
 date：表示月份中的某一天，1 代表 1 号，2 代表 2 号，以此类推；
 hour：表示时，以 24 小时制表示，取值范围为 0 ~ 23；
 minute：表示分，取值范围为 0 ~ 59；
 second：表示秒，取值范围为 0 ~ 59；
 millisecond：表示毫秒，取值范围为 0 ~ 999。
 */


var time1 = new Date();
var time2 = new Date(1417456800400);
var time3 = new Date("2019/11/4 11:14:10");
var time4 = new Date(2021, 4, 19, 17, 14, 14);
document.write(time1 + "<br>");
document.write(time2 + "<br>");
document.write(time3 + "<br>");
document.write(time4 + "<br>");


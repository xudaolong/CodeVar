/**
 * 该文件名- variableStyle
 * 编码作者- 许道龙
 * 创建日期- 2016/12/13 13:37
 * 作者邮箱- xudaolong@vip.qq.com
 * 作者博客- http://xudaolong.github.io/
 * 修改时间-
 * 修改备注-
 * 编码内容-
 */

'use strict';

const without = require('lodash.without');

module.exports = {
    bigHump: function bigHump(s) {
        // 过滤冠词,有需要的自己添加咯
        let strArr = without(s.split(' '), 'the', 'The');
        // 首单词首小写
        strArr[0] = strArr[0].toLowerCase();
        strArr[0] = strArr[0].charAt(0).toUpperCase() + strArr[0].substring(1);
        // 单词首字母大写
        for (let i = 1; i < strArr.length; i++) {
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
        }
        return strArr.join('');
    },
    hump: function hump(str) {
        // 过滤冠词,有需要的自己添加咯
        let strArr = without(str.split(' '), 'the', 'The');
        // 首单词首小写
        strArr[0] = strArr[0].toLowerCase();
        // 单词首字母大写
        for (let i = 1; i < strArr.length; i++) {
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
        }
        return strArr.join('');
    },
    namedConst: function hump(str) {
        // 过滤冠词,有需要的自己添加咯
        let strArr = without(str.split(' '), 'the', 'The');
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].toUpperCase();
        }
        return strArr.join('_');
    },
    underline: function hump(str) {
        // 过滤冠词,有需要的自己添加咯
        let strArr = without(str.split(' '), 'the', 'The');

        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].toLowerCase();
        }
        return strArr.join('_');
    }
};
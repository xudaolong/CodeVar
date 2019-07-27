'use strict';

const alfy = require('alfy');
const filter = require('./filter');

module.exports = {
    core: function (api, params, style) {
        alfy.fetch(api, params).then(result => {
            if (result.errorCode == 0) {
                //结果
                let result_value = [];
                // 过滤中文
                let reg = /^[a-zA-Z ]/;
                // 标准翻译结果 : translation
                let result_translation = result.translation;
                for (let i = 0, len = result_translation.length; i < len; i++) {
                    if (reg.test(result_translation[i])) {
                        result_value.push({
                            title: style(result_translation[i]),
                            subtitle: `标准翻译 => ${result_translation[i]}`,
                            arg: style(result_translation[i]),
                        });
                    }
                }
                // 网络翻译 : web
                if (result.web) {
                    let result_web = result.web;
                    for (let i = 0, len = result_web.length; i < len; i++) {
                        for (let j = 0, ilen = result_web[i].value.length; j < ilen; j++) {
                            if (reg.test(result_web[i].value[j])) {
                                result_value.push({
                                    title: style(result_web[i].value[j]),
                                    subtitle: `网络翻译 => ${result_web[i].value[j]}`,
                                    arg: style(result_web[i].value[j]),
                                });
                            }
                        }
                    }
                }
                alfy.output(result_value);
            } else {
                alfy.output([{
                    title: '抱歉',
                    subtitle: `无相关记录`,
                    arg: 'error',
                }]);
            }
        });
    },
    bigHump: function (s) {
        let strArr = filter.run(s);
        strArr[0] = strArr[0].charAt(0).toUpperCase() + strArr[0].substring(1);
        // 单词首字母大写
        for (let i = 1; i < strArr.length; i++) {
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
        }
        return strArr.join('');
    },
    hump: function (s) {
        let strArr = filter.run(s);
        // 单词首字母大写
        for (let i = 1; i < strArr.length; i++) {
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
        }
        return strArr.join('');
    },
    namedConst: function (s) {
        let strArr = filter.run(s);
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].toUpperCase();
        }
        return strArr.join('_');
    },
    underline: function (s) {
        let strArr = filter.run(s);
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].toLowerCase();
        }
        return strArr.join('_');
    },
    underline: function (s) {
        let strArr = filter.run(s);
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].toLowerCase();
        }
        return strArr.join('_');
    },
    hyphen: function (s) {
        let strArr = filter.run(s);
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].toLowerCase();
        }
        return strArr.join('-');
    }
};
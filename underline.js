/**
 * 该文件名- index.js
 * 编码作者- 许道龙
 * 创建日期- 2016/12/10 20:10
 * 作者邮箱- xudaolong@vip.qq.com
 * 作者博客- http://xudaolong.github.io/
 * 修改时间-
 * 修改备注-
 * 编码内容-
 */

'use strict';

const alfy = require('alfy');
const without = require('lodash.without');
const config = require('./Configuration/variableGlobale.js');
const style = require('./Configuration/variableStyle.js');

alfy.fetch(config.youDaoApi, config.params).then(result => {
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
                    title: style.underline(result_translation[i]),
                    subtitle: `标准翻译 => ${result_translation[i]}`,
                    arg: style.underline(result_translation[i]),
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
                            title: style.underline(result_web[i].value[j]),
                            subtitle: `网络翻译 => ${result_web[i].value[j]}`,
                            arg: style.underline(result_web[i].value[j]),
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
})
;

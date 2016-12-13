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

function hump(str){
    // 过滤冠词,有需要的自己添加咯
    let strArr=without(str.split(' '),'the','The');
    for(let i=0;i<strArr.length;i++){
        strArr[i]=strArr[i].toUpperCase();
    }
    return strArr.join('_');
}

alfy.fetch('http://fanyi.youdao.com/openapi.do', {
    query: {
        // 暂时借用别人的
        keyfrom: 'whyliam',
        key: '1331254833',
        type: 'data',
        doctype: 'json',
        version: '1.1',
        q: alfy.input
    }
}).then(result => {

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
                    title: hump(result_translation[i]),
                    subtitle: `标准翻译 => ${result_translation[i]}`,
                    arg: hump(result_translation[i]),
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
                            title: hump(result_web[i].value[j]),
                            subtitle: `网络翻译 => ${result_web[i].value[j]}`,
                            arg: hump(result_web[i].value[j]),
                        });
                    }
                }
            }
        }

        alfy.output(result_value);
    }
})
;

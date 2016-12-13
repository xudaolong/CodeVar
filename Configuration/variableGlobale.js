/**
 * 该文件名- variableGlobale
 * 编码作者- 许道龙
 * 创建日期- 2016/12/13 13:22
 * 作者邮箱- xudaolong@vip.qq.com
 * 作者博客- http://xudaolong.github.io/
 * 修改时间-
 * 修改备注-
 * 编码内容-
 */

'use strict';

const alfy = require('alfy');

module.exports = {
    youDaoApi: 'http://fanyi.youdao.com/openapi.do',
    params : {
        query: {
            keyfrom: 'CoderVar',
            key: '802458398',
            type: 'data',
            doctype: 'json',
            version: '1.1',
            q: alfy.input
        }
    },
    filter:{
        prep:[
            'and','or','the','a','at','of'
        ],
        prefix:[

        ],
        suffix:[
            'ing','ed','ly'
        ],
        verb:[
            'was'
        ]
    }
};
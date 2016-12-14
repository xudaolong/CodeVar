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
const sample = require('lodash.sample');

// 此 key 全采集于 github 上面 若有冒犯就先谢罪了啊哈...
const FIXED_KEY = [
    {
        keyfrom: 'CoderVar',
        key: '802458398'
    },
    {
        keyfrom: 'whatMean',
        key: '1933652137'
    },
    {
        keyfrom: 'chinacache',
        key: '1247577973'
    },
    {
        keyfrom: 'huipblog',
        key: '439918742'
    },
    {
        keyfrom: 'chinacache',
        key: '1247577973'
    },
    {
        keyfrom: 'fanyi-node',
        key: '593554388'
    },
    {
        keyfrom: 'wbinglee',
        key: '1127870837'
    },
    {
        keyfrom: 'forum3',
        key: '1268771022'
    },
    {
        keyfrom: 'node-translator',
        key: '2058911035'
    },
    {
        keyfrom: 'kaiyao-robot',
        key: '2016811247'
    },
    {
        keyfrom: 'stone2083',
        key: '1576383390'
    },
    {
        keyfrom: 'myWebsite',
        key: '423366321'
    },
    {
        keyfrom: 'leecade',
        key: '54015339'
    },
    {
        keyfrom: 'github-wdict',
        key: '619541059'
    },
    {
        keyfrom: 'lanyuejin',
        key: '2033774719'
    },
];

module.exports = {
    youDaoApi: 'http://fanyi.youdao.com/openapi.do',
    getParams: function () {
        let selected = sample(FIXED_KEY);
        return {
            query: {
                keyfrom: selected.keyfrom,
                key: selected.key,
                type: 'data',
                doctype: 'json',
                version: '1.1',
                q: alfy.input

            }
        }
    },
    filter: {
        prep: [
            'and', 'or', 'the', 'a', 'at', 'of'
        ],
        prefix: [],
        suffix: [
            'ing', 'ed', 'ly'
        ],
        verb: [
            'was'
        ]
    }
};
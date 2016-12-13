/**
 * 该文件名- variableFilter
 * 编码作者- 许道龙
 * 创建日期- 2016/12/13 16:23
 * 作者邮箱- xudaolong@vip.qq.com
 * 作者博客- http://xudaolong.github.io/
 * 修改时间-
 * 修改备注-
 * 编码内容-
 */

'use strict';

const config = require('./variableGlobale.js');
const diff = require('lodash.difference');
const union = require('lodash.union');

module.exports = {
    run:function (s) {
        let strArr = s.toLowerCase();
        return diff(strArr.split(' '),union(config.filter.prep,config.filter.prefix,config.filter.suffix,config.filter.verb));
    }
};
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

const without = require('lodash.without');
const config = require('./Configuration/variableGlobale.js');
const style = require('./Configuration/variableStyle.js');

(function () {
    style.core(config.youDaoApi,config.getParams(),style.bigHump);
})();

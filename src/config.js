'use strict';

const alfy = require('alfy');
const SHA256 = require('crypto-js').SHA256
const Hex = require('crypto-js/enc-hex')

function truncate(q){
  var len = q.length;
  if(len<=20) return q;
  return q.substring(0, 10) + len + q.substring(len-10, len);
}

module.exports = {
    youDaoApi: 'http://openapi.youdao.com/api',
    getParams: function () {
        var appKey = '你自己的 appKey';
        var key = ' 你自己的 secretKey';//注意：暴露appSecret，有被盗用造成损失的风险
        var salt = (new Date).getTime();
        var curtime = Math.round(new Date().getTime()/1000);
        var query = alfy.input || '苹果';
        // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
        var from = 'zh-CHS';
        var to = 'en';
        var str1 = appKey + truncate(query) + salt + curtime + key;
        var sign = SHA256(str1).toString(Hex)
        return {
          query: {
            q: query,
            appKey: appKey,
            salt: salt,
            from: from,
            to: to,
            sign: sign,
            signType: "v3",
            curtime: curtime,
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
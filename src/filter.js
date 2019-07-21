'use strict';

const config = require('./config');
const diff = require('lodash.difference');
const union = require('lodash.union');

module.exports = {
    run:function (s) {
        let strArr = s.toLowerCase();
        return diff(strArr.split(' '),union(config.filter.prep,config.filter.prefix,config.filter.suffix,config.filter.verb));
    }
};
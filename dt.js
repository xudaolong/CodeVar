'use strict';

const config = require('./src/config');
const style = require('./src/style');

(function () {
    style.core(config.youDaoApi,config.getParams(),style.bigHump);
})();

'use strict';

const path = require('path');
module.exports = appInfo => {
    return {
        healthcheck: {
            file: path.join(appInfo.baseDir, 'healthcheck.html'),
            route: '/healthcheck.html'
        }
    };
};

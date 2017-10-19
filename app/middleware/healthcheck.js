'use strict';

const fs = require('mz/fs');

module.exports = (options, app) => {
    return function* healthcheckMiddleware(next) {
        const { request } = this,
            url = request.url,
            { file, route } = options;

        if (url !== route) {
            return yield next;
        }

        const isExists = yield fs.exists(file);
        if (!isExists) {
            return;
        }

        const content = yield fs.readFile(file, 'utf-8');
        this.body = content;
    };
};

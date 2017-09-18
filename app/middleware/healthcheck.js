'use strict';

const assert = require('assert');
const fs = require('mz/fs');

module.exports = (options, app) => {
    return function* healthcheckMiddleware(next) {
        const { request } = this,
            url = request.url,
            { file, route } = options;

        assert(file, 'should pass options.file');

        if (url !== route) {
            return yield next;
        }
        const isExists = yield fs.exists(file);
        if (!isExists) {
            return app.loggers.coreLogger.error('[egg-healthcheck] healthcheck file not exists. %s', file);
        }
        const content = yield fs.readFile(file, 'utf-8');
        this.body = content;
    };
};

# egg-healthcheck

nginx 心跳检测文件，根据此文件判断是否可以对外提供服务。

请求URL /healthcheck.html ，返回项目根路径下 /healthcheck.html 物理文件。

## Install

```bash
$ npm i egg-healthcheck --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.healthcheck = {
  enable: true,
  package: 'egg-healthcheck',
};
```

## Configuration（可选）

如果想自定义路径或者请求URL的话，请按以下配置。
```js
// {app_root}/config/config.default.js
exports.healthcheck = {
    // healthcheck 物理文件路径，默认根路径下 /healthcheck.html
    file: path.join(appInfo.baseDir, 'healthcheck.html'),
    // 匹配的路由，默认 /healthcheck.html
    route: '/healthcheck.html',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

请求「/healthcheck.htm」,返回项目根路径下 healthcheck.html 文件的内容。

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

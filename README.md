# egg-healthcheck

nginx 心跳检测文件，根据此文件判断是否可以对外提供服务。

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

## Configuration

```js
// {app_root}/config/config.default.js
exports.healthcheck = {
    // healthcheck 物理文件路径
    file: path.join(appInfo.baseDir, 'healthcheck.htm'),
    // 匹配的路由，默认 /healthcheck.htm
    route: '/healthcheck.htm',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

请求「/healthcheck.htm」,返回项目根路径下 healthcheck.html 文件的内容。

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

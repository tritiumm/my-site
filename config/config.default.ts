import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1579229538068_3195';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      path.join(appInfo.baseDir, 'path/to/another'),
    ].join(','),
    defaultViewEngine: 'nunjucks',
    mapping: {
      // 这里可以是.nj/.tpl/.html等文件后缀
      // '.nj': 'nunjucks',
      // '.tpl': 'nunjucks',
      '.html': 'nunjucks',
    },
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};

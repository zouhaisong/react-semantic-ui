import path from 'path'
import _ from 'lodash'
import gulp from 'gulp'

import gutil from 'gulp-util'
import less from 'gulp-less'

import LessPluginAutoPrefix from 'less-plugin-autoprefix';
import LessPluginPathRedirect from './libs/LessPluginPathRedirect';

import watcher from './libs/watcher'

const defaultConfig = {
  'entry': [
    'semantic/semantic.less'
  ],
  'src': [
    'semantic/{,**/}*{.less, .overrides, .variables}'
  ],
  'dest': 'public/assets/css',
  'options': {
    'paths': [
      path.join(process.cwd(), 'node_modules/semantic-ui-less'),
      path.join(process.cwd(), 'semantic')
    ],
    'plugins': [
      new LessPluginPathRedirect({
        '../../theme.config': 'theme.config'
      }),
      new LessPluginAutoPrefix({
        browsers: [
          "last 2 versions"
        ]
      })
    ]
  }
};

let conf;

define(); // init

export function define(opts) {
  conf = _.merge({}, defaultConfig, opts)
}

const TASK_NAME = 'less';

export default gulp.task(TASK_NAME, function () {

  function bundle() {
    return gulp.src(conf.entry)
      .pipe(less(conf.options))
      .pipe(gulp.dest(conf.dest))
      .pipe(watcher.pipeTimer(TASK_NAME))
  }

  if (watcher.isWatching()) {
    gulp.watch([].concat(conf.src), function (evt) {
      gutil.log(evt.path, evt.type);
      bundle();
    });
  }

  return bundle();
})




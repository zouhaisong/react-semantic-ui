import path from 'path'
import _ from 'lodash'
import gulp from 'gulp'
import mergeSteam from 'merge-stream'

import gutil from 'gulp-util'
import less from 'gulp-less'

import LessPluginAutoPrefix from 'less-plugin-autoprefix'
import LessPluginPathRedirect from './libs/LessPluginPathRedirect'

import watcher from './libs/watcher'

const defaultConfig = {
  'files': [
    {
      'entry': 'semantic/semantic.less',
      'src': [
        'semantic/{,**/}*{.less, .overrides, .variables}'
      ],
      'dest': 'public/assets/css',
      'options': {
        'watch': false
      }

    },
    {
      'entry': 'src/docs*/index.less',
      'src': [
        'src/{,**/}*{.less, .overrides, .variables}'
      ],
      'dest': 'public/assets/css',
      'options': {
        'watch': true
      }
    }
  ],
  'options': {
    'paths': [
      path.join(process.cwd(), 'node_modules/semantic-ui-less'),
      path.join(process.cwd(), 'node_modules'),
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

setOptions(); // init

const TASK_NAME = 'less';

const task = gulp.task(TASK_NAME, function () {

  function bundleThis(fileConf = {}) {

    fileConf.options = _.merge({}, conf.options, fileConf.options);

    function bundle() {
      return gulp.src(fileConf.entry)
        .pipe(less(fileConf.options))
        .pipe(gulp.dest(fileConf.dest))
        .pipe(watcher.pipeTimer(TASK_NAME))
    }

    if (fileConf.options.watch && watcher.isWatching()) {
      gulp.watch([].concat(fileConf.src), function (evt) {
        gutil.log(evt.path, evt.type);
        bundle();
      });
    }

    return bundle();
  }

  return mergeSteam.apply(gulp, _.map(conf.files, bundleThis));

});

task.setOptions = setOptions;

export default task;

function setOptions(opts) {
  conf = _.merge({}, defaultConfig, opts)
}

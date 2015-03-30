import gulp from 'gulp';
import gutil from 'gulp-util';
import watcher from './tasks/libs/watcher';

import browserify from './tasks/browserify'
import less from './tasks/less'

if (gutil.env.prod) {
  process.env.NODE_ENV = 'production';
}

if (gutil.env.watch) {
  watcher.setWatcher();
}

import gulp from 'gulp';
import _ from 'lodash';
import path from 'path';
import del from 'del'

const taskName = 'clean';

const defaultConfig = {
  files: [
    'public'
  ]
};

let conf;

setOptions(); // init

const task =  gulp.task(taskName, (cb)=> {
  del(conf.files, cb);
});

task.setOptions = setOptions;

export default task;

function setOptions(opts) {
  conf = _.merge({}, defaultConfig, opts)
}

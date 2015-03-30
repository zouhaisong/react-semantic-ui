import gulp from 'gulp';
import _ from 'lodash';
import path from 'path';
import runSequence from 'run-sequence';

const taskName = 'build';

const defaultConfig = {
  taskQueue: []
};

let conf;

setOptions(); // init

const task = gulp.task(taskName, (cb)=> {
  runSequence.apply(gulp, [].concat(conf.taskQueue).concat(cb));
});

task.setOptions = setOptions;

export default task;

function setOptions(opts) {
  conf = _.merge({}, defaultConfig, opts)
}

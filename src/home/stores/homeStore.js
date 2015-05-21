import reflux from 'reflux';

import homeActions from '../actions';

const homeStore = reflux.createStore({
  init(){
    this.info = {};
    this.listenTo(homeActions.fetchInfoByName.completed, 'onFetchInfoByNameCompleted')
  },

  //onFetchInfoByName(){
  //
  //},

  onFetchInfoByNameCompleted(result){
    console.log('onFetchInfoByNameCompleted');
    this.info = result;
    this.trigger();
  }
  //
  //onFetchInfoByNameFailed(err){
  //
  //}

});

export default homeStore;
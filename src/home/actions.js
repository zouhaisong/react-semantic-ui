import reflux from 'reflux';
import budgetApi from '../api/budget';

const fetchInfoByName = reflux.createAction({
  asyncResult: true
});

fetchInfoByName.listen(function(name){
  budgetApi
    .fetchInfoByName(name)
    .then(this.completed)
    .catch(this.failed)
});

export default {
  fetchInfoByName: fetchInfoByName
}

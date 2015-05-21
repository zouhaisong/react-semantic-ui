import React from 'react';
import Reflux from 'reflux';
import classNames from 'classnames';

import ReactSelect from 'react-select';

import MoneyBanner from './MoneyBanner';
import MoneyBanner2 from './MoneyBanner2';

import homeActions from './actions';
import homeStore from './stores/homeStore'

const PropTypes = React.PropTypes;

const HomePage = React.createClass({

  mixins: [
    Reflux.listenTo(homeStore, 'onHomeStoreUpdate')
  ],

  onHomeStoreUpdate(){
    this.setState({
      info: homeStore.info
    });
  },

  getInitialState(){
    return {
      info: {}
    }
  },

  componentWillMount(){
    homeActions.fetchInfoByName('Lin,Fan');
  },

  getOptions(input, callback) {
    homeActions.getNameListBy
      .triggerPromise(input)
      .then((result)=> {
        callback(null, {
          options: result.map((value)=> {
            return {
              label: value,
              value: value
            }
          }),
          complete: true
        })
      });
  },

  onSelectChange(value){
    homeActions.fetchInfoByName(value);
  },

  render(){

    console.log('render', this.state.info);

    var info = this.state.info;

    return (
      <div className='home-page'>
        <header className='home-page__header'>
          <span className='home-page__logo'>
            This is Logo
          </span>
          <span className='home-page__select'>
            <ReactSelect
              onChange={this.onSelectChange}
              asyncOptions={this.getOptions}
              />
          </span>
        </header>
        <main className='home-page__main'>
          <MoneyBanner
            spent={info.spent}
            balance={info.balance}
            overrun={info.overrun}
            />
          <MoneyBanner2/>
        </main>
      </div>
    );
  }
});

export default HomePage;
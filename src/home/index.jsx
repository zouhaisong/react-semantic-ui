import React from 'react';
import Reflux from 'reflux';
import classNames from 'classnames';

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

  render(){

    console.log('render', this.state.info);

    var info = this.state.info;

    return (
      <div className='home-page'>
        <header className='home-page__header'>
          This is Logo
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
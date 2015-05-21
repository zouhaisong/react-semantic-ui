import React from 'react';
import Reflux from 'reflux';
import classNames from 'classnames';
import BudgetLabel from 'components/budget/BudgetLabel'

import MoneyBanner from './MoneyBanner'

import homeStore from './stores/homeStore'

const PropTypes = React.PropTypes;

const MoneyBanner2 = React.createClass({

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

  render(){
    var info = this.state.info;
    return (
      <div className='money-banner'>
        <MoneyBanner
          spent={info.spent}
          balance={info.balance}
          overrun={info.overrun}
          />
      </div>
    );
  }
});

export default MoneyBanner2;
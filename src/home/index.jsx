import React from 'react';
import classNames from 'classnames';

import budgetApi from '../api/budget';

import MoneyBanner from './MoneyBanner';

const PropTypes = React.PropTypes;

const HomePage = React.createClass({

  getInitialState(){
    return {
      info: {}
    }
  },

  componentWillMount(){

    console.log('componentWillMount')

    budgetApi.fetchInfoByName('Lin,Fan')
      .then((result)=> {
        this.setState({
          info: result
        });
      })
      .catch((err)=> {
        console.log(err)
      });

  },

  render(){

    console.log('render', this.state.info)

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
        </main>
      </div>
    );
  }
});

export default HomePage;
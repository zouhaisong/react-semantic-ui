import React from 'react';
import classNames from 'classnames';
import BudgetLabel from 'components/budget/BudgetLabel'

const PropTypes = React.PropTypes;

const MoneyBanner = React.createClass({

  propTypes:{
    spent: PropTypes.number,
    balance: PropTypes.number,
    overrun: PropTypes.number
  },

  render(){

    const props = this.props;

    return (
      <div className='money-banner'>
        <BudgetLabel label='Expenditure' value={props.spent||0}/>
        <BudgetLabel label='Balance' value={props.balance||0} highlight/>
        <BudgetLabel label='Overrun' value={props.overrun||0}/>
      </div>
    );
  }
});

export default MoneyBanner;
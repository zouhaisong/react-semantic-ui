import React from 'react';
import numeral from 'numeral';
import classNames from 'classnames';

const PropTypes = React.PropTypes;

/**
 * @example
 *
 import React from 'react'
 import BudgetLabel from './BudgetLabel'

 const instance = (
 <div>
 <BudgetLabel label="Expenditure" value={110} highlight/>
 <BudgetLabel label="Balance" value={1890}/>
 </div> );

 React.render(instance, mountNode);

 */
const BudgetLabel = React.createClass({

  propTypes: {
    label: PropTypes.string,
    value: PropTypes.number,
    highlight: PropTypes.bool
  },

  render(){
    const props = this.props;


    return (
      <span className={classNames('budget-label',{
        'budget-label--highlight':props.highlight
      })}>
        <span className='budget-label__label'>
        {props.label}
        </span>
        <span className='budget-label__value'>
        {numeral(props.value).format('$ 0.00')}
        </span>
      </span>
    );
  }
});

export default BudgetLabel;
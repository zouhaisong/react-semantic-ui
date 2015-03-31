var React = require('react');
var classnames = require('classnames');

var Icon = require('./Icon.jsx');

var PropTypes = React.PropTypes;

/**
 * Button.
 */
var Button = React.createClass({

  propTypes: {
    /**
     * color of Button
     * @exampleFile ./examples/ButtonWithColor.jsx
     */
    color: PropTypes.string,
    /**
     * icon in Button
     */
    icon: PropTypes.string,
    /**
     * labeled icon
     * @exampleFile ./examples/ButtonWithIcon.jsx
     */
    iconLabeled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ])
  },

  render() {

    const props = this.props;
    const classes = {
      'ui': true,
      'right': props.iconLabeled == 'right',
      'labeled': !!props.iconLabeled,
      'icon': !!props.icon
    };

    props.color && (classes[props.color] = true);

    classes['button'] = true;

    return (
      <button className={classnames(classes)}>
        { props.icon ? <Icon type={props.icon}/> : '' }
        { props.children }
      </button>
    )
  }
});

module.exports = Button;


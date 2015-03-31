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
     * type name of Icon, will same as the filename.
     * @exampleFile ./examples/ButtonWithIcon.jsx
     */
    icon: PropTypes.string
  },

  render() {

    const props = this.props;
    const classes = {};

    classes['ui'] = true;

    props.icon && (classes['icon'] = true);

    classes['button'] = true;

    return (
      <button className={classnames(classes)}>
        { props.icon ? <Icon type={props.icon}/> :'' }
        { props.children }
      </button>
    )
  }
});

module.exports = Button;


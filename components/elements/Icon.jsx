var React = require('react');
var classnames = require('classnames');

var PropTypes = React.PropTypes;

/**
 * Icon.
 */
var Icon = React.createClass({
  propTypes: {
    /**
     * type name of Icon, will same as the filename.
     * @exampleFile ./examples/Icon.jsx
     */
    type: PropTypes.string
  },

  render() {

    const props = this.props;
    const classes = {};

    props.type && (classes[props.type] = true);

    classes['icon'] = true;

    return (
      <i className={classnames(classes)}/>
    )
  }
});

module.exports = Icon;


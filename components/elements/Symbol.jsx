var React = require('react');

var PropTypes = React.PropTypes;

const SVG_STORE_FILE_PATH = '../assets/images/svgs.svg';

/**
 * Symbol. need to update the SVG_STORE_FILE_PATH
 *
 * see more https://github.com/jonathantneal/svg4everybody
 */
var Symbol = React.createClass({
  propTypes: {
    /**
     * type name of Symbol, will same as the filename.
     * @exampleFile ./examples/Symbol.auto.jsx
     */
    type: PropTypes.string
  },

  render() {

    const props = this.props;

    return (
      <svg
        className='symbol'
        dangerouslySetInnerHTML={{
          __html:`<use xlink:href="${SVG_STORE_FILE_PATH}#${props.type}"/>`
        }}/>
    )
  }
});

module.exports = Symbol;




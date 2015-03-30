var React = require('react');
var R = require('ramda');

var marked = require('marked');

var MarkdownPanel = React.createClass({

  mixins: [
    require('react-bem-render')
  ],

  propTypes: {
    codeText: React.PropTypes.string
  },

  $render() {

    if (R.is(String)(this.props.codeText)) {
      return <div {...this.props}
        block={this.$$block}
        dangerouslySetInnerHTML={{__html: marked(this.props.codeText)}}
      />
    }
    return null;
  }

});

module.exports = MarkdownPanel;

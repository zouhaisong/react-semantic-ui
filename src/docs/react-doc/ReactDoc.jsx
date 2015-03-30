var React = require('react');
var _ = require('lodash');

var DocSection = require('./DocSection.jsx');

var ReactDoc = React.createClass({
  mixins: [
    require('react-bem-render')
  ],

  propTypes: {
    requires: React.PropTypes.object,
    info: React.PropTypes.object
  },

  $render() {
    return (
      <div {...this.props} block={this.$$block}>
        {this.renderDocMain()}
        {this.renderDocMenu()}
      </div>
    );
  },

  renderDocMenu() {

    var menuList = _(this.props.info)
      .values()
      .map((item, idx)=> {
        return (
          <li elem='doc-menu-item' key={idx}>
            <a href={'#' + item.module + '.' + item.name}> {item.name}</a>
          </li>)
      })
      .value()

    return (
      <ul elem='doc-menu'>
        {menuList}
      </ul>
    )
  },

  renderDocMain() {

    var docSectionList = _(this.props.info)
      .values()
      .map((item, idx)=> {
        return (
          <DocSection
            key={idx}
            id={item.module + '.' + item.name}
            requires={this.props.requires}
            info={item}
            />
        )
      })
      .value();

    return (
      <main elem='doc-main'>
        {docSectionList}
      </main>
    )
  }

});

module.exports = ReactDoc;

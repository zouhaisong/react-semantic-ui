var React = require('react');
var _ = require('lodash');

var ReactBemRender = require('react-bem-render');


var { Link } = require('react-router');

var ReactDocMenu = React.createClass({

  mixins: [
    ReactBemRender
  ],

  propTypes: {
    info: React.PropTypes.object
  },

  $render() {

    var groups = [
      'elements',
      'collections',
      'views',
      'modules'
    ];

    return (
      <div {...this.props} block={this.$$block}>
        <div elem='group'>
          <h2 elem='heading'>
            <Link to='/'> All </Link>
          </h2>
        </div>
        {
          _.map(groups, (groupName, key)=> {
            return (
              <div elem='group' key={key}>
                <h2 elem='heading'>
                  <Link to={'/'+groupName}>{groupName}</Link>
                </h2>
                {this.renderMenuGroupByName(groupName)}
              </div>
            );
          })
        }
      </div>
    )
  },

  renderMenuGroupByName(groupName) {
    var menuList = _(this.props.info)
      .values()
      .filter((item)=> {
        return String(item.module).indexOf(groupName) > -1;
      })
      .map((item, idx)=> {
        return (
          <li elem='item' key={idx}>
            <Link to={'/'+groupName + '/' + item.name}> {item.name}</Link>
          </li>
        )
      })
      .value();

    return (
      <ul block='rd-doc-menu' elem>
        {menuList}
      </ul>
    )
  }

});

module.exports = ReactDocMenu;

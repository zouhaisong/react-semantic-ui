var React = require('react');
var ReactBemRender = require('react-bem-render');
var _ = require('lodash');

var ReactDocMenu = require('./react-doc/ReactDocMenu.jsx');
var ReactDocMain = require('./react-doc/ReactDocMain.jsx');

var info = require('./data/react-doc.json');
var globalRequire = require('./data/react-doc.jsx');

var { run, Route, DefaultRoute, RouteHandler } = require('react-router');

const ReactDoc = React.createClass({

  mixins: [
    ReactBemRender
  ],

  $render() {
    return (
      <div {...this.props} block={this.$$block}>
        <ReactDocMenu elem info={info}/>
        <RouteHandler info={info} globalRequire={globalRequire}/>
      </div>
    );
  }
});


const rootRoutes = (
  <Route name='react-doc' path='/' handler={ ReactDoc }>
    <DefaultRoute handler={ ReactDocMain }/>
    <Route name='react-doc-main-group' path='/:groupName' handler={ ReactDocMain }/>
    <Route name='react-doc-main' path='/:groupName/:componentName' handler={ ReactDocMain }/>
  </Route>
);

run(rootRoutes, function (Handler, state) {
  React.render(<Handler />, document.body);
});
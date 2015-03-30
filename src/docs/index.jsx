var React = require('react');
var {ReactDoc} = require('./react-doc');

React.render(<ReactDoc
  requires={require('./data/docs.auto.jsx')}
  info={require('./data/docs.auto.json')} />, document.body);

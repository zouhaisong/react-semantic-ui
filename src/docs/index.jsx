var React = require('react');
var {ReactDoc} = require('./react-doc');

React.render(<ReactDoc
  globalRequire={require('./data/react-doc.jsx')}
  info={require('./data/react-doc.json')} />, document.body);

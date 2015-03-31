var React = require('react');
var Button = require('../Button.jsx');

var instance = (
  <div>
    <Button color="black"> black </Button>
    <Button color="yellow"> yellow </Button>
    <Button color="green"> green </Button>
    <Button color="blue"> blue </Button>
    <Button color="orange"> orange </Button>
    <Button color="purple"> purple </Button>
    <Button color="red"> red </Button>
    <Button color="pink"> pink </Button>
    <Button color="teal"> teal </Button>
  </div> );

React.render(instance, mountNode);

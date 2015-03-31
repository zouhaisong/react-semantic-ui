var React = require('react');
var _ = require('lodash');

var CodeMirrorEditor = require('./CodeMirrorEditor.jsx');
var JSXTransformer = require('react/dist/JSXTransformer');

var selfCleaningTimeout = {
  componentDidUpdate() {
    clearTimeout(this.timeoutID);
  },
  setTimeout() {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout.apply(null, arguments);
  }
};

var ReactPlayground = React.createClass({
  mixins: [
    selfCleaningTimeout,
    require('react-bem-render')
  ],

  MODES: {JSX: 'JSX', JS: 'JS', NONE: null},

  propTypes: {
    codeText: React.PropTypes.string.isRequired,
    transformer: React.PropTypes.func,
    renderCode: React.PropTypes.bool,
    scope: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      transformer(code) {
        return JSXTransformer.transform(code).code;
      }
    };
  },

  getInitialState() {
    return {
      mode: this.MODES.NONE,
      code: this.props.codeText
    };
  },

  handleCodeChange(value) {
    this.setState({code: value});
    this.executeCode();
  },

  handleCodeModeSwitch(mode) {
    this.setState({mode: mode});
  },

  handleCodeModeToggle(e) {
    var mode;

    e.preventDefault();

    switch (this.state.mode) {
      case this.MODES.NONE:
        mode = this.MODES.JSX;
        break;
      case this.MODES.JSX:
      default:
        mode = this.MODES.NONE;
    }

    this.setState({mode: mode});
  },

  compileCode() {
    return this.props.transformer(this.state.code);
  },

  $render() {

    var modifies = {};

    var editor;

    if (this.state.mode !== this.MODES.NONE) {
      editor = (
        <CodeMirrorEditor
          elem
          key="jsx"
          onChange={this.handleCodeChange}
          codeText={this.state.code}/>
      );
      modifies.open = true;
    }

    return (
      <div {...this.props} block={this.$$block} >
        <div elem='example'>
          <div elem='example-inner' ref="mount" />
        </div>
        {editor}
        <a elem='code-toggle' mods={modifies} onClick={this.handleCodeModeToggle} href="#">{this.state.mode === this.MODES.NONE ? 'show code' : 'hide code'}</a>
      </div>
    );
  },

  componentDidMount() {
    this.executeCode();
  },

  componentWillUpdate(nextProps, nextState) {
    // execute code only when the state's not being updated by switching tab
    // this avoids re-displaying the error, which comes after a certain delay
    if (this.state.code !== nextState.code) {
      this.executeCode();
    }
  },

  componentWillUnmount() {
    var mountNode = this.refs.mount.getDOMNode();
    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
    }
  },

  executeCode: function () {
    var mountNode = this.refs.mount.getDOMNode();

    try {
      React.unmountComponentAtNode(mountNode);
    } catch (e) {
    }

    try {
      var compiledCode = this.compileCode();
      if (this.props.renderCode) {
        React.render(
          <CodeMirrorEditor elem codeText={compiledCode} readOnly={true} />,
          mountNode
        );
      } else {

        // todo find better way

        var Inst;

        eval(
          'Inst = function(require){\n' + compiledCode + '\n};'
        );

        Inst.call(null, this.props.globalRequire);

      }
    } catch (err) {
      this.setTimeout(()=> {
        console.error(err)
      }, 500);
    }
  }
});

module.exports = ReactPlayground;

var React = require('react');
var _ = require('lodash');

var ReactPlayground = require('./ReactPlayground.jsx');
var MarkdownPanel = require('./MarkdownPanel.jsx');

var DocSection = React.createClass({
  mixins: [
    require('react-bem-render')
  ],

  $render() {
    var info = this.props.info;

    return (
      <div {...this.props} block={this.$$block}>
        <h2 elem='title'>{info.name}
          <small elem='sub-title'>{info.module}</small>
        </h2>
        <MarkdownPanel elem='desc' codeText={info.description}/>
        {this.renderExamples(info)}
        {info.props ? this.renderProps(info.props) : ''}
      </div>
    );
  },

  renderExamples(propItem) {
    return _.map(propItem.examples || [], (exampleItem, idx)=> {
      return (<ReactPlayground
        key={idx}
        elem
        globalRequire={this.props.globalRequire}
        codeText={exampleItem.contents}/>)
    });
  },

  renderProps(props) {

    return _(props)
      .keys()
      .map((key, idx)=> {
        const propItem = props[key];
        return (
          <div block='doc-section-prop' key={idx}>
            <h3 elem='title'> Prop: {key}
              <small elem='sub-title'> Type: {this.processType(propItem.type)}</small>
            </h3>
            <MarkdownPanel elem='desc' codeText={propItem.description}/>
            {this.renderExamples(propItem)}
          </div>
        )
      })
      .value();

  },

  processType(typeObject) {

    if ('elements' in typeObject) {
      return _(typeObject.elements)
        .map((obj)=> {
          this.processType(obj);
        })
        .join('|')
    }

    return typeObject.name
  }

});

module.exports = DocSection;

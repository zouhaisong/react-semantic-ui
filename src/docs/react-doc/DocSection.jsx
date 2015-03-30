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
        {info.property ? this.renderProperty(info.property) : ''}
      </div>
    );
  },

  renderExamples(propItem) {

    var requireList = this.props.requires;

    var exampleRequires = [];

    if (propItem.exampleRequires) {
      exampleRequires = _.map(propItem.exampleRequires, function (item) {
        return item.name
      });
    }

    return _.map(propItem.examples || [], (example, idx)=> {
      return (<ReactPlayground
        key={idx}
        elem
        requires={_.pick(requireList, _.concat([this.props.info.name], exampleRequires))}
        codeText={example}/>)
    });
  },

  renderProperty(property) {

    return _(property)
      .values()
      .map((propItem, idx)=> {
        return (
          <div block='doc-section-prop' key={idx}>
            <h3 elem='title'> Property: {propItem.name}
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

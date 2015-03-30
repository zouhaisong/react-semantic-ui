var React = require('react');
var R = require('ramda');

var ReactPlayground = require('./ReactPlayground.jsx');
var MarkdownPanel = require('./MarkdownPanel.jsx');

var DocSection = React.createClass({
  mixins: [
    require('react-bem-render')
  ],

  $render() {
    var info = this.props.info;

    return (
      <div {...this.props} block={this.$$block} >
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
      exampleRequires = R.map(
        R.prop('name')
      )(propItem.exampleRequires)
    }

    return R.mapIndexed((example, idx)=> {
      return (<ReactPlayground
        key={idx}
        elem
        requires={R.pick(R.concat([this.props.info.name], exampleRequires))(requireList)}
        codeText={example}/>)
    })(propItem.examples || []);

  },

  renderProperty(property) {

    return R.pipe(
      R.values,
      R.mapIndexed((propItem, idx)=> {
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
    )(property)
  },

  processType(typeObject) {

    if ('elements' in typeObject) {
      return R.pipe(
        R.map(R.curry(this.processType)),
        R.join('|')
      )(typeObject.elements)
    }

    return typeObject.name
  }

});

module.exports = DocSection;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorStyle: {
        minHeight: '0',
        overflow: 'hidden',
        resize: 'none'
      }
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    console.log(e.currentTarget.scrollHeight)
    var height = e.currentTarget.scrollHeight
    this.setState((prevState) => ({
      editorStyle: {
        minHeight: height
      }
    }));
  }

  render() {
    return (
      <textarea onKeyDown={this.handleKeyDown} style={this.state.editorStyle}>
      </textarea>
    )
  }
}

ReactDOM.hydrate(
  <Editor />,
  document.getElementById('root')
);

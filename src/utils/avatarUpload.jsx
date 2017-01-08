/**
 * Created by 50528 on 1/7/2017.
 */
import React from 'react';
import ReactDom from 'react-dom';
import autobind from 'autobind-decorator';

class FileUpload extends React.Component {
  static propTypes = {
    handleFileChange: React.PropTypes.func.isRequired
  };

  // constructor(props) {
  //   super(props);
  //   this.node = null;
  // }
  @autobind
  handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    reader.onload = function(img) {
      ReactDom.findDOMNode(this.refs.in).value = '';
      this.props.handleFileChange(img.target.result);
      //console.log(this.node);
    }.bind(this);
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
    );
  }
}

export default FileUpload;

import AvatarCropper from 'react-avatar-cropper';
import React from 'react';
import ReactDom from "react-dom";
import { FormattedMessage } from 'react-intl';
import {connect} from 'react-redux';

import Button from 'components/shared/button.jsx';
import { stateOptions } from 'utils/constants.js';

const connectState = (state) => (state);

@connect(connectState, {
  cropperOpen: false,
  img: "http://ww3.sinaimg.cn/mw690/6f6fe5a7jw1e5oococe8lj20c80lrab6.jpg",
  croppedImage: "http://ww3.sinaimg.cn/mw690/6f6fe5a7jw1e5oococe8lj20c80lrab6.jpg"
})
class AvatarForm extends React.Component {
  getInitialState() {
    return {
      cropperOpen: false,
      img: null,
      croppedImg: "http://www.fillmurray.com/400/400"
    };
  }

  handleFileChange(dataURI) {
    this.setState({
      img: dataURI,
      croppedImg: this.state.croppedImg,
      cropperOpen: true
    });
  }

  handleCrop(dataURI) {
    this.setState({
      cropperOpen: false,
      img: null,
      croppedImg: dataURI
    });
  }

  handleRequestHide() {
    this.setState({
      cropperOpen: false
    });
  }

  render() {
    return (
      <div>
        <div className="avatar-photo">
          <FileUpload handleFileChange={this.handleFileChange} />
          <div className="avatar-edit">
            <span>Click to pick avatar</span>
            <i className="fa fa-camera"></i>
          </div>
          <img src={this.state.croppedImg} />
        </div>
        {this.state.cropperOpen &&
          <AvatarCropper
            onRequestHide={this.handleRequestHide}
            cropperOpen={this.state.cropperOpen}
            onCrop={this.handleCrop}
            image={this.state.img}
            width={400}
            height={400}
          />
        }
      </div>
    );
  }
};

var FileUpload = React.createClass({

  handleFile: function(e) {
    var reader = new FileReader();
    var file = e.target.files[0];

    if(!file) {
      return;
    }

    reader.onload = function(img) {
      ReactDom.findDOMNode(this.refs.in).value = '';
      this.props.handleFileChange(img.target.result);
    }.bind(this);
    reader.readAsDataURL(file);
  },

  render: function() {
    return (
      <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
    );
  }
});


export default AvatarForm;

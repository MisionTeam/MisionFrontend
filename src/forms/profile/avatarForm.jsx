import AvatarCropper from 'react-avatar-cropper';
import React from 'react';
import ReactDom from 'react-dom';
import { FormattedMessage } from 'react-intl';
import {connect} from 'react-redux';

import Button from 'components/shared/button.jsx';

class AvatarForm extends React.Component {

  static propTypes = {
    parentSubmit: React.PropTypes.func.isRequired,
    initialValues: React.PropTypes.object.isRequired
  };

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
    const { initialValues } = this.props;
    return (
      <div>
        <div className="avatar-photo">
          <div className="avatar-edit">
            <span>Click to pick avatar</span>
          </div>
          <img src={initialValues.croppedImage} />
        </div>
        {initialValues.cropperOpen &&
          <AvatarCropper
            onRequestHide={this.handleRequestHide}
            cropperOpen={initialValues.cropperOpen}
            onCrop={this.handleCrop}
            image={initialValues.img}
            width={400}
            height={400}
          />
        }
      </div>
    );
  }
};

// var FileUpload = React.createClass({
//
//   handleFile: function(e) {
//     var reader = new FileReader();
//     var file = e.target.files[0];
//
//     if(!file) {
//       return;
//     }
//
//     reader.onload = function(img) {
//       ReactDom.findDOMNode(this.refs.in).value = '';
//       this.props.handleFileChange(img.target.result);
//     }.bind(this);
//     reader.readAsDataURL(file);
//   },
//
//   render: function() {
//     return (
//       <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
//     );
//   }
// });

export default AvatarForm;

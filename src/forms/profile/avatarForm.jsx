import AvatarCropper from 'react-avatar-cropper';
import React from 'react';
import FileUpload from 'utils/avatarUpload.jsx';
import autobind from 'autobind-decorator';

class AvatarForm extends React.Component {

  static propTypes = {
    handleFileChange: React.PropTypes.func.isRequired,
    handleCrop: React.PropTypes.func.isRequired,
    handleRequestHide: React.PropTypes.func.isRequired,
    initialValues: React.PropTypes.object.isRequired
  };

  @autobind
  handleFileChange(dataURI) {
    this.props.handleFileChange(dataURI);
  }

  @autobind
  handleCrop(dataURI) {
    this.props.handleCrop(dataURI);
  }

  @autobind
  handleRequestHide() {
    this.props.handleRequestHide();
  }

  render() {
    const { initialValues } = this.props;
    return (
      <div>
        <div className="avatar-photo">
          <FileUpload handleFileChange={this.handleFileChange} />
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

export default AvatarForm;

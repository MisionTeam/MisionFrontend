import React from 'react';
import Paper from 'material-ui/Paper';
import PostMissionForm from 'forms/postMission/postMissionForm.jsx';

class PostMissionContainer extends React.Component {
  static propTypes = {
  }

  handleSubmit() {
    console.log('submit');
  }

  render() {
    return (
      <div className="post-mission-container">
        <div className="post-mission-container__container">
          <Paper zDepth={1}>
            <div className="paper-container">
              <PostMissionForm parentSubmit={this.handleSubmit} discardForm={this.discardForm} />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default PostMissionContainer;

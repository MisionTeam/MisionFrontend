import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';
import autobind from 'autobind-decorator';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const listButtonLabel = (
  <FormattedMessage id="mission.navbar.listLinkText" />
);

const mapButtonLabel = (
  <FormattedMessage id="mission.navbar.mapLinkText" />
);

const urlMap = {
  list: 0,
  map: 1
};

const connectDispatch = (dispatch) => ({
  push: (location) => dispatch(push(location))
});

@connect(null, connectDispatch)
class MissionNavBar extends React.Component {

  static propTypes = {
    push: React.PropTypes.func.isRequired
  }

  state = {
    selectedIndex: 0
  }

  @autobind
  handleTabChange(url) {
    this.props.push(`/mission/${url}`);
    this.setState({
      selectedIndex: urlMap[url]
    });
  }

  render() {
    return (
      <div className="mission-navbar">
        <div className="mission-navbar__container">
          <Paper zDepth={1}>
            <BottomNavigation className="mission-navbar__wrapper" selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label={listButtonLabel}
                icon={<div />}
                onTouchTap={() => this.handleTabChange('list')}
              />
              <BottomNavigationItem
                label={mapButtonLabel}
                icon={<div />}
                onTouchTap={() => this.handleTabChange('map')}
              />
            </BottomNavigation>
          </Paper>
        </div>
      </div>
    );
  }
}

export default MissionNavBar;

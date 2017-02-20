import React from 'react';
import { FormattedNumber } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import autobind from 'autobind-decorator';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

import { processGetMissionList } from 'store/mission/missionList/missionListActions.js';

const listItemAvatarStyles = {
  marginRight: '30px'
};

const selectedItemStyle = {
  backgroundColor: '#e6e6e6'
};

const missionStatusMap = {
  1: 'open',
  2: 'accepted',
  3: 'closed'
};

const connectDispatch = (dispatch) => ({
  push: (location) => dispatch(push(location)),
  getMissionList: () => processGetMissionList(dispatch)
});

const connectState = (state) => ({
  missionList: state.app.mission.missionList
});

@connect(connectState, connectDispatch)
class MissionList extends React.Component {
  static propTypes = {
    // filteredMissionList: React.PropTypes.array.isRequired
    missionList: React.PropTypes.object.isRequired,
    push: React.PropTypes.func.isRequired,
    getMissionList: React.PropTypes.func.isRequired
  }

  state = {
    selectedIndex: null
  }

  componentWillMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps() {
    if (!this.props.missionList.loadedDate) {
      this.props.getMissionList();
    }
  }

  renderListContent(item) {
    return (
      <div className="mission-item">
        <Avatar style={listItemAvatarStyles} className="mission-item__avatar" src="/images/common/kobe.png" />
        <div className="mission-item__left-block">
          <div className="mission-item__title">{item.title}</div>
          <div className="mission-item__address">{`${item.address.street} ${item.address.city}`}</div>
        </div>
        <div className="mission-item__right-block">
          <div className="mission-item__price">
            <FormattedNumber value={item.price} style="currency" currency="CAD" />
          </div>
          <div className={`mission-item__status mission-item__status--${missionStatusMap[item.status]}`}>
            <span>{missionStatusMap[item.status].toUpperCase()}</span>
          </div>
        </div>
      </div>
    );
  }

  @autobind
  handleSelectMission(item, index) {
    this.props.push(`/mission/details?missionId=${item.id}`);
    this.setState({
      selectedIndex: index
    });
  }

  @autobind
  renderMissionList(listArray) {
    return (
      <List>
        {
          listArray.map((item, index) => {
            return (
              <ListItem
                key={index}
                primaryText={this.renderListContent(item)}
                onClick={() => this.handleSelectMission(item, index)}
                style={this.state.selectedIndex === index ? selectedItemStyle : {}}
              />
            );
          })
        }
      </List>
    );
  }

  render() {
    const { missionList } = this.props;
    return (
      <div className="mission-list">
        {this.renderMissionList(missionList.missions)}
      </div>
    );
  }
}

export default MissionList;

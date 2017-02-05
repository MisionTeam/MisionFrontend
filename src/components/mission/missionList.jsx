import React from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import autobind from 'autobind-decorator';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

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

class MissionList extends React.Component {
  static propTypes = {
    filteredMissionList: React.PropTypes.array.isRequired,
    selectMission: React.PropTypes.func.isRequired
  }

  state = {
    selectedIndex: null
  }

  renderListContent(item) {
    return (
      <div className="mission-item">
        <Avatar style={listItemAvatarStyles} className="mission-item__avatar" src="../images/common/kobe.png" />
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
    this.props.selectMission(item);
    this.setState({
      selectedIndex: index
    });
  }

  @autobind
  renderMissionList(listArray) {
    console.log(listArray);
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
    const { filteredMissionList } = this.props;
    return (
      <div className="mission-list">
        {this.renderMissionList(filteredMissionList)}
      </div>
    );
  }
}

export default MissionList;

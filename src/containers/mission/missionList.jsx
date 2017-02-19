import React from 'react';
import { FormattedNumber } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import autobind from 'autobind-decorator';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

const MISSION_LIST = [
  {
    "id":3004,
    "category":"transportation",
    "title":"Get me a dinner!",
    "status":1,
    "price":"20",
    "author":{
       "id":1053,
       "firstName":"Tom",
       "lastName":"Hardy",
       "avatar":null
    },
    "address":{
       "lat":79.123455,
       "lng":120.7473743,
       "country":"Canada",
       "state":"ON",
       "city":"Toronto",
       "street":"1 Yonge St",
       "postalCode":"L3C 0B3"
    }
  },
  {
    "id":3509,
    "category":"housekeeping",
    "title":"Window cleaning",
    "status":2,
    "price":"40",
    "author":{
       "id":1092,
       "firstName":"James",
       "lastName":"Mason",
       "avatar":null
    },
    "address":{
       "lat":79.123455,
       "lng":120.7473743,
       "country":"Canada",
       "state":"ON",
       "city":"Toronto",
       "street":"1 Yonge St",
       "postalCode":"L3C 0B3"
    }
  },
  {
    "id":2104,
    "category":"transportation",
    "title":"Send follower!",
    "status":3,
    "price":"50",
    "author":{
       "id":1153,
       "firstName":"Mary",
       "lastName":"Mann",
       "avatar":null
    },
    "address":{
       "lat":79.123455,
       "lng":120.7473743,
       "country":"Canada",
       "state":"ON",
       "city":"Toronto",
       "street":"1 Yonge St",
       "postalCode":"L3C 0B3"
    }
  }
];

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
  push: (location) => dispatch(push(location))
});

@connect(null, connectDispatch)
class MissionList extends React.Component {
  static propTypes = {
    // filteredMissionList: React.PropTypes.array.isRequired
    push: React.PropTypes.func.isRequired
  }

  state = {
    selectedIndex: null
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
    this.props.push(`/mission/list/details-view?missionId=${item.id}`);
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
    // const { filteredMissionList } = this.props;
    return (
      <div className="mission-list">
        {this.renderMissionList(MISSION_LIST)}
      </div>
    );
  }
}

export default MissionList;

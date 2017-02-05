import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { FormattedMessage } from 'react-intl';
import autobind from 'autobind-decorator';

const allMissionLabel = (
  <FormattedMessage id="mission.filter.allMissionLabel" />
);

const categoryALabel = (
  <FormattedMessage id="mission.filter.categoryALabel" />
);

const categoryBLabel = (
  <FormattedMessage id="mission.filter.categoryBLabel" />
);

class MissionFilter extends React.Component {
  static propTypes = {
    handleFilterChange: React.PropTypes.func.isRequired,
    selectedIndex: React.PropTypes.number.isRequired
  }

  @autobind
  applyFilter(filter) {
    this.props.handleFilterChange(filter);
  }

  render() {
    const { selectedIndex, handleFilterChange } = this.props;
    return (
      <div className="mission-filter">
        <BottomNavigation className="mission-filter__wrapper" selectedIndex={selectedIndex}>
          <BottomNavigationItem
            label={allMissionLabel}
            icon={<div />}
            onTouchTap={() => handleFilterChange('ALL')}
          />
          <BottomNavigationItem
            label={categoryALabel}
            icon={<div />}
            onTouchTap={() => handleFilterChange('A')}
          />
          <BottomNavigationItem
            label={categoryBLabel}
            icon={<div />}
            onTouchTap={() => handleFilterChange('B')}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default MissionFilter;

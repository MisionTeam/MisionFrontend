import React from 'react';
import Place from 'material-ui/svg-icons/maps/place';
import Description from 'material-ui/svg-icons/action/description';
import Money from 'material-ui/svg-icons/editor/attach-money';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const iconsList = {
  place: Place,
  description: Description,
  money: Money
};

const colorsList = {
  red: red500,
  yellow: yellow500,
  blue: blue500
};

const Icons = ({name, styles, color}) => {
  const Icon = iconsList[name];
  const selectedColor = color && colorsList['color'] ? colorsList['color'] : colorsList['blue'];
  return (
    <div className="icon-wrapper" >
      <Icon style={styles} color={selectedColor} />
    </div>
  );
};
Icons.propTypes = {
  name: React.PropTypes.string.isRequired,
  styles: React.PropTypes.object,
  color: React.PropTypes.string
};

export default Icons;

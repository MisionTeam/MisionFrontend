import React from 'react';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router';

/**
 * Button
 * Render a standardized button with styles, type, and disabled props.
 *
 * type [string] - Set the html `type` property. Defaults to `button`, other common option is `submit`
 * display [string] - Defaults to `inline`, other valid values are `block` and `small`.
 * theme [string] - The css theme for the button. Options are dark (default), transparent, white, transparent-white, red.
 * className [string, array] - Append extra classes to the button
 * isLoading [bool] - Add a loading spinner if `isLoading === true`
 * isValid [bool] - Should be set by redux-forms to disable the button if it doent pass validation
 * disabled [bool] - Explicitly set the html `disabled` value
 */
const Link = (props) => {
  const {
    className,
    onClick,
    color = 'blue',
    display = 'inline',
    theme = 'solid',
    activeClassName,
    to
  } = props;

  const classes = classNames(
    'link',
    `link--${display}`,
    `link--theme-${theme}`,
    `link--${color}`,
    className
  );

  let template = (
    <RouterLink to={to} className={classes} onClick={onClick} activeClassName={activeClassName} >
      {props.children}
    </RouterLink>
  );

  return template;
};

Link.propTypes = {
  className: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array
  ]),
  to: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.object.isRequired
  ]),
  display: React.PropTypes.oneOf(['inline', 'block', 'small']),
  theme: React.PropTypes.oneOf(['solid', 'transparent']),
  children: React.PropTypes.any.isRequired,
  onClick: React.PropTypes.func,
  color: React.PropTypes.string,
  activeClassName: React.PropTypes.string
};

export default Link;

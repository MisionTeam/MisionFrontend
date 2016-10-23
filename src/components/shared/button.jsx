import React from 'react';
import classNames from 'classnames';

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
const Button = (props) => {
  const {
    className,
    onClick,
    color = 'blue',
    type = 'button',
    display = 'inline',
    theme = 'dark',
    isValid = true,
    disabled = false
  } = props;

  const classes = classNames(
    'button',
    `button--${display}`,
    `button--theme-${theme}`,
    `button--${color}`,
    className
  );

  let template = (
    <button type={type} disabled={!isValid || disabled} className={classes} onClick={onClick}>
      {props.children}
    </button>
  );

  return template;
};

Button.propTypes = {
  className: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array
  ]),
  type: React.PropTypes.string,
  display: React.PropTypes.oneOf(['inline', 'block', 'small']),
  theme: React.PropTypes.oneOf(['solid', 'transparent']),
  isValid: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.any.isRequired,
  onClick: React.PropTypes.func,
  color: React.PropTypes.string
};

export default Button;

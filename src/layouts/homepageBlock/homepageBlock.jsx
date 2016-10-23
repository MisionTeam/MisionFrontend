import React from 'react';

class HomepageBlock extends React.Component {
  static propTypes = {
    className: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.element
    ])
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    const blockClassname = `homepage-block homepage-block-${this.props.className}`;
    const conatinerClassname = 'container homepage-block__container';

    return (
      <div className={blockClassname}>
        <div className={conatinerClassname}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default HomepageBlock;

import React from 'react';
import DuckImage from 'containers/home/assets/Duck.jpg';
import 'containers/home/homeView.scss';

class HomeContainer extends React.Component {
  render () {
    return (
      <div>
        <h4>Welcome!</h4>
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage} />
      </div>
    );
  }
}

export default HomeContainer;

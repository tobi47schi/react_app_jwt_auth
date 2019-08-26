import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { yeah : 'header'};
  }

  
  render() {
    return (
        <p>{this.state.yeah}</p>
    ) ;
  }

}

export default Header;

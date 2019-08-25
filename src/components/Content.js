import React from 'react';
import LoginForm from './LoginForm';


class Content extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div>
            <LoginForm></LoginForm>
        </div>
    );
  }

}

export default Content;

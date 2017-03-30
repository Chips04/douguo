import React from 'react';
import {Link} from 'react-router';

export default class LoginHeader extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <header className="listHeader">
        <Link to="/more">
          <div>
            <span><img src="./src/images/back.png"/></span>
          </div>
        </Link>
        <h2>登录</h2>
      </header>
    )
  }
}

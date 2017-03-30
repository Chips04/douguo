import React from 'react';
import {Link} from 'react-router';

export default class MoreLogin extends React.Component{
  render(){
    return(
      <Link to="/login">
        <div className="moreLogin">
          <p>登录</p><div><img src="src/images/go.png"/></div>
        </div>
      </Link>
    )
  };
}

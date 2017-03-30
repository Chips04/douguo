import React from 'react';
import RegisterHeader from './registerHeader';
import {Link} from 'react-router';

export default class Register extends React.Component{
  render(){
    return(
      <div className="login">
        <RegisterHeader></RegisterHeader>
        <form action="" name="login">
          <input type="text" placeholder="邮箱"></input>
          <input type="password" placeholder="密码"></input>
          <input type="text" placeholder="昵称"></input>
          <input type="submit" value="注册"></input>
        </form>
        <div className="reg"><Link to="/login">已有账号？马上登录</Link></div>
      </div>
    )
  };
}

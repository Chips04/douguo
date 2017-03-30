import React from 'react';
import LoginHeader from './loginHeader';
import {Link} from 'react-router';

export default class Login extends React.Component{
  render(){
    return(
      <div className="login">
        <LoginHeader></LoginHeader>
        <form action="" name="login">
          <input type="text" placeholder="邮箱"></input>
          <input type="password" placeholder="密码"></input>
          <input type="submit" value="登录"></input>
        </form>
        <span className="forget">忘记密码？</span>
        <div className="others">
          <div>
            <i><img src="src/images/loginWeibo.png"/></i>
            <div>新浪微博账号登录</div>
          </div>
          <div>
            <i><img src="src/images/loginQQ.png" /></i>
            <div>QQ账号登录</div>
          </div>
          <div>
            <i><img src="src/images/loginRenren.png" /></i>
            <div>人人网账号登录</div>
          </div>
          <div><Link to="/register">还没有账号？马上注册</Link></div>
        </div>

      </div>
    )
  };
}

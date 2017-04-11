import React from 'react';
import LoginHeader from './loginHeader';
import {Link} from 'react-router';
import Toast from './toast';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps,store } from '../../redux/store';

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      toast : null,
      content: "",
      hasLogined: false
    }
  }

  login(e){
    if (e && e.preventDefault){
      e.preventDefault();
    }
    else{
      window.event.returnValue = false;
      return false;
    }
    if(this.refs.email.value == ""){
      this.setState({content:"请输入邮箱"},function(){
        this.setState({
          toast : <Toast content={this.state.content}></Toast>
        })
        setTimeout(function(){
          this.setState({
            toast : null
          })
        }.bind(this),1000)
      });
    }else if(this.refs.password.value == ""){
      this.setState({content:"请输入密码"},function(){
        this.setState({
          toast : <Toast content={this.state.content}></Toast>
        })
        setTimeout(function(){
          this.setState({
            toast : null
          })
        }.bind(this),1000)
      });
    }else if(!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(this.refs.email.value)){
        this.setState({content:"邮箱格式错误"},function(){
          this.setState({
            toast : <Toast content={this.state.content}></Toast>
          })
          setTimeout(function(){
            this.setState({
              toast : null
            })
          }.bind(this),1000)
        });
      }else if(this.refs.password.value.length<6){
        this.setState({content:"密码长度至少6位"},function(){
          this.setState({
            toast : <Toast content={this.state.content}></Toast>
          })
          setTimeout(function(){
            this.setState({
              toast : null
            })
          }.bind(this),1000)
        });
      }else{
      // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=login"+ "&username="+this.refs.email.value+"&password="+this.refs.password.value
  		// , {method: 'GET'})
  		// .then(response => response.json())
  		// .then(json => {
      //   console.log(json)
  		// 	// this.setState({userNickName: json.NickUserName, userid: json.UserId});
  		// 	// localStorage.userid= json.UserId;
  		// 	// localStorage.userNickName = json.NickUserName;
  		// });


      fetch('http://datainfo.duapp.com/shopdata/userinfo.php', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "status=login&userID="+this.refs.email.value+"&password="+this.refs.password.value
      })
      .then(response => response.json())
      .then(json=>{
        console.log(json);
        if(json == 0){
          this.setState({content:"用户名不存在"},function(){
            this.setState({
              toast : <Toast content={this.state.content}></Toast>
            })
            setTimeout(function(){
              this.setState({
                toast : null
              })
            }.bind(this),1000)
          });
        }else if(json == 2){
          this.setState({content:"用户名密码不符"},function(){
            this.setState({
              toast : <Toast content={this.state.content}></Toast>
            })
            setTimeout(function(){
              this.setState({
                toast : null
              })
            }.bind(this),1000)
          });
        }else{
          this.setState({content:"登录成功"},function(){

            this.props.onChange({
              type: 'SETUSERNAME',
              username: json.userID
            })

            this.setState({
              toast : <Toast content={this.state.content}></Toast>
            })
            setTimeout(function(){
              this.setState({
                toast : null
              },()=>{window.location.href="./#/more";})
            }.bind(this),1000)
          });
        }
        // this.setState({userNickName: json.NickUserName, userid: json.UserId});
  			// localStorage.userid= json.UserId;
  			// localStorage.userNickName = json.NickUserName;
        // this.setState({hasLogined:true});
      })
    }

  }

  render(){
    return(
      <div className="login">
        <LoginHeader></LoginHeader>
        <form action="" name="login">
          <input type="text" placeholder="邮箱" ref="email"></input>
          <input type="password" placeholder="密码" ref="password"></input>
          <input type="submit" value="登录" onClick={this.login.bind(this)}></input>
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
          <Link to="/register"><div>还没有账号？马上注册</div></Link>
        </div>
        {this.state.toast}
      </div>
    )
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)

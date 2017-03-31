import React from 'react';
import RegisterHeader from './registerHeader';
import {Link} from 'react-router';
import Toast from './toast';

export default class Register extends React.Component{
  constructor(){
    super();
    this.state = {
      toast : null,
      content: ""
    }
  }

  register(e){

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
        body: "status=register&userID="+this.refs.email.value+"&password="+this.refs.password.value
      })
      .then(response => response.json())
      .then(json=>{
        console.log(json);
        this.setState({content:"注册成功"},function(){
          this.setState({
            toast : <Toast content={this.state.content}></Toast>
          })
          setTimeout(function(){
            this.setState({
              toast : null
            },()=>{window.location.href="/#/login";})
          }.bind(this),1000)
        });

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
        <RegisterHeader></RegisterHeader>
        <form action="" name="login">
          <input type="text" placeholder="邮箱" ref="email"></input>
          <input type="password" placeholder="密码" ref="password"></input>
          {/*<input type="text" placeholder="昵称"  ref="nickName"></input>*/}
          <input type="submit" value="注册" onClick={this.register.bind(this)}></input>
        </form>
        <Link to="/login" className="rr"><div>已有账号？马上登录</div></Link>
        {this.state.toast}
      </div>
    )
  };
}

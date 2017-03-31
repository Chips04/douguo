import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps,store } from '../../redux/store';

class MoreLogin extends React.Component{
  logout(){
    var result = confirm('确定要退出登录吗？');
    if(result){
      this.props.onChange({
        type: 'SETUSERNAME',
        username: ""
      })
    }
  }
  render(){
    let userContent = this.props.usernamevalue ?

      <div className="moreLogin islogin" onClick={this.logout.bind(this)}>
        <p>{this.props.usernamevalue}</p><div>退出</div>
      </div> :
    <Link to="/login">
      <div className="moreLogin">
        <p>登录</p><div><img src="src/images/go.png"/></div>
      </div>
    </Link>
    return(
      <div>
        {userContent}
      </div>
    )
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(MoreLogin)

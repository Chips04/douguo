import React from 'react';
import {Link} from 'react-router';
import Toast from './more/toast';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps,store } from '../redux/store';

class ListFooter extends React.Component{
  constructor(){
    super();
    this.state={
      toast : null,
      star : '#fff',
      paper : 'iconfont icon-file'
    }
  }
  componentDidMount(){
    console.log("id",this.props.dishID)
    let dishIndex = this.props.collectvalue.indexOf(this.props.dishID);
    if(dishIndex == -1){
      this.setState({star:'#fff'})
    }else{
      this.setState({star:'#f00'})
    }
    let dishBuyIndex = this.props.buyvalue.indexOf(this.props.dishID);
    if(dishBuyIndex == -1){
      this.setState({paper : 'iconfont icon-file'})
    }else{
      this.setState({paper:'iconfont icon-file_correct'})
    }
  }
  addBuy(){
    let dishIndex = this.props.buyvalue.indexOf(this.props.dishID);
    if(dishIndex == -1){
      let newbuy = this.props.buyvalue;
      newbuy.push(this.props.dishID);
      this.props.onChange({
        type: 'SETBUY',
        buy: newbuy
      })
      //换购物单图标
      this.setState({paper:'iconfont icon-file_correct'},() => {
        this.setState({content:"成功加入购物单"},function(){
          this.setState({
            toast : <Toast content={this.state.content}></Toast>
          })
          setTimeout(function(){
            this.setState({
              toast : null
            })
          }.bind(this),1000)
        });
      })
    }else{
      this.props.buyvalue.splice(dishIndex,1);
      this.setState({paper:'iconfont icon-file'},() => {
        this.setState({content:"已移除出购物单"},function(){
          this.setState({
            toast : <Toast content={this.state.content}></Toast>
          })
          setTimeout(function(){
            this.setState({
              toast : null
            })
          }.bind(this),1000)
        });
      })
    }
    console.log("buy  ",store.getState().buy)
  }
  addCollect(){
    if(!this.props.usernamevalue){
      window.location.href = ".\/#\/login";
    }else{
      let dishIndex = this.props.collectvalue.indexOf(this.props.dishID);
      if(dishIndex == -1){
        let newcollect = this.props.collectvalue;
        newcollect.push(this.props.dishID);
        this.props.onChange({
          type: 'SETCOLLECT',
          collect: newcollect
        })
        //换五角星图
        this.setState({star:'#f00'},() => {
          this.setState({content:"收藏成功"},function(){
            this.setState({
              toast : <Toast content={this.state.content}></Toast>
            })
            setTimeout(function(){
              this.setState({
                toast : null
              })
            }.bind(this),1000)
          });
        })
      }else{
        this.props.collectvalue.splice(dishIndex,1);
        this.setState({star:'#fff'},() => {
          this.setState({content:"取消收藏成功"},function(){
            this.setState({
              toast : <Toast content={this.state.content}></Toast>
            })
            setTimeout(function(){
              this.setState({
                toast : null
              })
            }.bind(this),1000)
          });
        })
      }
      console.log("collect  ",store.getState().collect)
    }
  }
  render(){
    return(
      <footer className="listFooter">
        <ul>
          <li onClick={this.addCollect.bind(this)}>
            <i class="iconfont" style={{color:this.state.star}}>&#xe60b;</i>
            <span>收藏</span>
          </li>
          <li onClick={this.addBuy.bind(this)}>
            <i className={this.state.paper}></i>
            <span>购物单</span>
          </li>
          <li>
            <i className="iconfont">&#xe634;</i>
            <span>分享</span>
          </li>
        </ul>
        {this.state.toast}
      </footer>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListFooter)

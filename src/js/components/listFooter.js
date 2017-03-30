import React from 'react';
import {Link} from 'react-router';

export default class ListFooter extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <footer className="listFooter">
        <ul>
          <li>
            <i class="iconfont">&#xe60b;</i>
            <span>收藏</span>
          </li>
          <li>
            <i class="iconfont">&#xe769;</i>
            <span>购物单</span>
          </li>
          <li>
            <i class="iconfont">&#xe634;</i>
            <span>分享</span>
          </li>
        </ul>
      </footer>
    )

  }
}

import React from 'react';
import { Router, IndexRoute , Link ,Route, hashHistory } from 'react-router';
import MenuContent from './menuContent.js';
import CollectContent from './collectContent.js';
import BuyContent from './buyContent.js';
import MoreContent from './moreContent.js';
import MenuHotList from './menuHotList';
import MenuNewList from './menuNewList';

export default class Footer extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  };

  render(){
    return(
      <footer>
        <ul>
          <Link to="/">
            <li>
              <i class="iconfont">&#xe635;</i>
              <span>菜谱</span>
            </li>
          </Link>
          <Link to="/collect">
            <li>
              <i class="iconfont">&#xe60b;</i>
              <span>收藏</span>
            </li>
          </Link>
          <Link to="/buy">
            <li>
              <i class="iconfont">&#xe769;</i>
              <span>购物单</span>
            </li>
          </Link>
          <Link to="/more">
            <li>
              <i class="iconfont">&#xe677;</i>
              <span>更多</span>
            </li>
          </Link>
        </ul>
      </footer>
    )
  };
}

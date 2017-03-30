import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Router,IndexRoute,Link ,Route,hashHistory,Redirect} from 'react-router';
import '../css/1.scss';
import MenuContent from './components/menuContent.js';
import CollectContent from './components/collectContent.js';
import BuyContent from './components/buyContent.js';
import MoreContent from './components/moreContent.js';
import MenuHotList from './components/menuHotList';
import MenuNewList from './components/menuNewList';
import List from './components/list';
import Login from './components/more/login.js';
import Register from './components/more/register.js';

export default class Root extends React.Component{
  render(){
    return(
      <div className="menu">

        {this.props.children}

        <footer>
          <ul>
            <Link to="/menu" activeClassName="active">
              <li>
                <i class="iconfont">&#xe635;</i>
                <span>菜谱</span>
              </li>
            </Link>
            <Link to="/collect" activeClassName="active">
              <li>
                <i class="iconfont">&#xe60b;</i>
                <span>收藏</span>
              </li>
            </Link>
            <Link to="/buy" activeClassName="active">
              <li>
                <i class="iconfont">&#xe769;</i>
                <span>购物单</span>
              </li>
            </Link>
            <Link to="/more" activeClassName="active">
              <li>
                <i class="iconfont">&#xe677;</i>
                <span>更多</span>
              </li>
            </Link>
          </ul>
        </footer>
      </div>
    )
  }
}
const r = (
    <Provider store={store}>
        <Router history={hashHistory}>
          <Redirect from="/" to="/menu/hot" />
          <Route path="/" component={Root}>
            <Redirect from="/menu" to="/menu/hot" />
            <Route path="/menu" component={MenuContent}>
              <IndexRoute component={MenuHotList}/>
              <Route path="/menu/hot" component={MenuHotList}/>
              <Route path="/menu/new" component={MenuNewList}/>
            </Route>
            <Route path="/collect" component={CollectContent}/>
            <Route path="/buy" component={BuyContent}/>
            <Route path="/more" component={MoreContent}/>
          </Route>
          <Route path="/list/:id" component={List} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
      </Router>
    </Provider>

)
ReactDOM.render(r,document.getElementById('mainContainer'));

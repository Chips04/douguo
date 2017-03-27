import React from 'react';
import { Router, IndexRoute , Route, hashHistory } from 'react-router';
import MenuContent from './menuContent.js';
import CollectContent from './collectContent.js';
import BuyContent from './buyContent.js';
import MoreContent from './moreContent.js';
import MenuHotList from './menuHotList';
import MenuNewList from './menuNewList';

export default class Content extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  };

  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={MenuContent}>
          <IndexRoute component={MenuHotList}/>
          <Route path="/hot" component={MenuHotList}/>
          <Route path="/new" component={MenuNewList}/>
        </Route>
        <Route path="/collect" component={CollectContent}/>
        <Route path="/buy" component={BuyContent}/>
        <Route path="/more" component={MoreContent}/>
      </Router>

    )
  };
}

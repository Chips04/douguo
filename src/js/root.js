import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import '../css/1.scss';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

export default class Root extends React.Component{
  render(){
    return(
      <div className="menu">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    )
  }
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));

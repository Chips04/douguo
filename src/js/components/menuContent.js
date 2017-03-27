import React from 'react';
import MenuNav from './menuNav';
import MenuHotList from './menuHotList';
import MenuNewList from './menuNewList';
export default class MenuContent extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  };

  render(){
    return(
        <section className="menuContent">
          <MenuNav></MenuNav>
          <div>{this.props.children}</div>
        </section>
    )

  };
}

import React from 'react';

import { Link } from 'react-router';

export default class MenuNav extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  };

  render(){
    return(
        <section className="menuNav">
          <ul>
            <li><Link to="/menu/hot" activeClassName="activeNav">最热</Link></li>
            <li><Link to="/menu/new" activeClassName="activeNav">最新</Link></li>
          </ul>
        </section>
    )

  };
}

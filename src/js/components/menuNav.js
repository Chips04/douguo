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
        <section className="">
          <ul>
            <li><Link to="/hot">最热</Link></li>
            <li><Link to="/new">最新</Link></li>
          </ul>
        </section>
    )

  };
}

import React from 'react';
import {Link} from 'react-router';

export default class ListHeader extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <header className="listHeader">
        <Link to="/menu/hot">
          <div>
            <span><img src="./src/images/back.png"/></span>
          </div>
        </Link>
        <h2>{this.props.dishTitle}</h2>

      </header>
    )

  }
}

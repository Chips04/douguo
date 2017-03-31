import React from 'react';

export default class Toast extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div className="toast">
        {this.props.content}
      </div>
    )
  }
}

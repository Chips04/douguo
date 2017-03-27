import React from 'react';

export default class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      inputClass : "normal"
    }
  };

  changeInputLength(){
    this.setState({
      inputClass : "short"
    })
  };

  changeInputLength2(){
    this.setState({
      inputClass : "long"
    })
  }

  render(){
    return(
      <header className={"headerHeader" + " " + this.state.inputClass}>
        <div className="searchWrap"  onFocus={this.changeInputLength.bind(this)} onBlur={this.changeInputLength2.bind(this)} >
          <input type="text" placeholder="搜索食材、菜谱" className="search" />
        </div>
        <div className="searchCancelWrap">
          <input type="button" value="取消" className="searchCancel"/>
        </div>
      </header>
    )
  };
}

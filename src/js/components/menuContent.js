import React from 'react';
import {connect} from 'react-redux';
import MenuNav from './menuNav';
import MenuHotList from './menuHotList';
import MenuNewList from './menuNewList';
import {mapStateToProps , mapDispatchToProps} from '../redux/store'

class MenuContent extends React.Component{
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
        <section className="menuContent">
          <header className={"headerHeader" + " " + this.state.inputClass}>
            <div className="searchWrap"  onFocus={this.changeInputLength.bind(this)} onBlur={this.changeInputLength2.bind(this)} >
              <input type="text" placeholder="搜索食材、菜谱" className="search" />
            </div>
            <div className="searchCancelWrap">
              <input type="button" value="取消" className="searchCancel"/>
            </div>
          </header>
          <MenuNav></MenuNav>
          <div>{this.props.children}</div>
        </section>
    )

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuContent)

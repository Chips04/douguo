import React from 'react';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps,store } from '../redux/store';

class CollectContent extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  };
  componentWillMount(){
    if(!this.props.usernamevalue){
      window.location.href = "/#/login";
    }
  }
  render(){
    let collectionCon = this.props.usernamevalue?
    <div>
      <header className="collectHeader">收藏</header>
      <p>collectContent</p>
    </div>
    : null;
    return(
        <section className="collectContent">
          {collectionCon}
        </section>
    )
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CollectContent)

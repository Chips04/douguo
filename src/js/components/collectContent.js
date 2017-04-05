import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps,store } from '../redux/store';

class CollectContent extends React.Component{
  constructor(){
    super();
    this.state = {
      collectList : []
    }
  };
  componentWillMount(){
    if(!this.props.usernamevalue){
      window.location.href = "/#/login";
    }
  }
  componentDidMount(){
    var collectarr = this.props.collectvalue;
    var collectlist = [];
    let that = this;
    let arr = [];
    var arr2 = [];
    fetch('./src/js/components/all.json')
    .then(function(response){
      return response.json()
    }).then(function(json){
      //console.log('parsed json', json.result.recipes);
      collectarr.map(function (item, i) {
        for(var i = 0;i<json.result.recipes.length;i++){
          if(item == json.result.recipes[i].cook_id){
            collectlist.push(json.result.recipes[i]);
            break;
          }
        }
      })

      console.log(collectlist);


      collectlist.map(function (item, i) {
        //console.log(item);
        arr2 = [];
        if(item.major){
          for(var j=0;j<item.major.length;j++){
            arr2.push(<span key={i+"aa"+j+"sdf"}>{item.major[j].title} </span>);
          }
        }
        if(item.minor){
          for(var k=0;k<item.minor.length;k++){
            arr2.push(<span key={i+"aa"+k+"bbb"}>{item.minor[k].title} </span>);
          }
        }
        arr.push(
          <Link to={'/list/'+item.cook_id} key={item.cook_id}>
            <li key={i+"wwfd"}>
              <div><img src={item.thumb_path} /></div>
              <div>
                <h5>{item.title}</h5>
                <div>{arr2}</div>
              </div>
            </li>
          </Link>
        )
      })
      console.log(arr)
      that.setState({collectList:arr});
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render(){
    let collectionCon = null;
    let collection = this.props.collectvalue;
    console.log(collection)
    if(this.props.usernamevalue){
      if(collection.length === 0){
        collectionCon =
          <section>
            <p>将喜欢的菜谱统统收藏起来吧</p>
          </section>
      }else{
        collectionCon =
          <ul className="hotList">
            {this.state.collectList}
          </ul>

      }

    }else{
      collectionCon = null;
    }

    return(
        <section className="menuHotList collectList">
          <header className="collectHeader">我的收藏</header>
          {collectionCon}
        </section>
    )
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CollectContent)

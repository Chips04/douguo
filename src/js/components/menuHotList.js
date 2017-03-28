import React from 'react';
import 'whatwg-fetch';

export default class MenuHotList extends React.Component{
  constructor(){
    super();
    this.state = {
      hotList : []
    }
  };

  render(){
    return(
        <section className="menuHotList">
          <ul className="hotList">
            {this.state.hotList}
          </ul>
        </section>
    )

  };
  componentDidMount(){
    let that = this;
    let arr = [];

    fetch('./src/js/components/a.json')
    .then(function(response){
      return response.json()
    }).then(function(json){
      console.log('parsed json', json.result.recipes);
      json.result.recipes.map(function (item, i) {
        var arr2 = [];
        if(item.major){
          for(var j=0;j<item.major.length;j++){
            arr2.push(<span key={-j-1}>{item.major[j].title} </span>);
          }
        }
        if(item.minor){
          for(var j=0;j<item.minor.length;j++){
            arr2.push(<span key={j}>{item.minor[j].title} </span>);
          }
        }
        arr.push(
          <li key={i}>
            <div><img src={item.thumb_path} /></div>
            <div>
              <h5>{item.title}</h5>
              <div>{arr2}</div>
            </div>
          </li>
        )
      });
      that.setState({hotList:arr});
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }
}

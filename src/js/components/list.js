import React from 'react';
import ListHeader from './listHeader';
import ListFooter from './listFooter';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps,store } from '../redux/store';

class List extends React.Component{
  constructor(){
    super();
    this.state = {
      dish : [],
      dishTitle : ""
    }
  }
  render(){
    //console.log('render')
    //console.log(this.state.dish)
    return(
      <div className="distList">
        <ListHeader dishTitle={this.state.dishTitle}></ListHeader>
        {this.state.dish}
        <ListFooter dishID={this.props.params.id}></ListFooter>
      </div>
    )
  }
  componentDidMount(){
    console.log("sdfsdfdsfdsfdsf",this.props.params.id);
    let that = this;
    let obj = null;
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    let dishTitle = "";
    let verified = null;
    let major = null;
    let majorTable = null;
    let minor = null;
    let minorTable = null;
    let stepList = [];
    let tips = null;
    console.log('componentWillMount')
    fetch('./src/js/components/all.json')
    .then((response) => {
      return response.json()
    }).then((json) => {
      console.log('parsed json', json.result.recipes);
      let len = json.result.recipes.length;
      for(let i = 0;i<len;i++){
        if(that.props.params.id == json.result.recipes[i].cook_id){
          console.log(json.result.recipes[i].title);
          obj = json.result.recipes[i];
          dishTitle = obj.title;
          console.log(obj);
          if(obj.user.verified == 1){
            verified = <i><img src="src/images/verified.png"/></i>
          }else if(obj.user.verified == 2){
            verified = <i><img src="src/images/verified2.png"/></i>
          }

          if(obj.major.length){
            for(let i = 0;i<obj.major.length;i++){
              if(i%2==0){
                if(obj.major[i+1]){
                  arr2.push(
                    <tr key={i+"aaa"}>
                      <td>{obj.major[i].title}</td><td className="note">{obj.major[i].note}</td>
                      <td>{obj.major[i+1].title}</td><td className="note">{obj.major[i+1].note}</td>
                    </tr>
                  )
                }else{
                  arr2.push(
                    <tr key={i+"bbb"}>
                      <td>{obj.major[i].title}</td><td className="note">{obj.major[i].note}</td>
                      <td></td><td></td>
                    </tr>
                  )
                }
              }
            }
            console.log(arr2)
            majorTable =
            <table>
              <tbody>
                {arr2}
              </tbody>
            </table>
          }
          if(obj.minor.length){
            for(let i = 0;i<obj.minor.length;i++){
              if(i%2==0){
                if(obj.minor[i+1]){
                  arr3.push(
                    <tr key={i+"abc"}>
                      <td>{obj.minor[i].title}</td><td className="note">{obj.minor[i].note}</td>
                      <td>{obj.minor[i+1].title}</td><td className="note">{obj.minor[i+1].note}</td>
                    </tr>
                  )
                }else{
                  arr3.push(
                    <tr key={i+"def"}>
                      <td>{obj.minor[i].title}</td><td className="note">{obj.minor[i].note}</td>
                      <td></td><td></td>
                    </tr>
                  )
                }
              }
            }
            console.log(arr3)
            minorTable =
            <table>
              <tbody>
                {arr3}
              </tbody>
            </table>
          }
          if(obj.major.length){
            major = <div className="major">
              <h5>主料</h5>
              {majorTable}
            </div>
          }
          if(obj.minor.length){
            minor = <div className="minor">
              <h5>辅料</h5>
              {minorTable}
            </div>
          }
          if(obj.cookstep.length){
            obj.cookstep.map((item,i) => {
              if(item.thumb_path||item.thumb){
                stepList.push(
                  <div key={i+"ccc"} className="stepDetail">
                    <p>{item.position}.{item.content}</p>
                    <div><img src={item.thumb_path||item.thumb}/></div>
                  </div>

                )
              }else{
                stepList.push(
                  <div key={i+"ccc"} className="stepDetail">
                    <p>{item.position}.{item.content}</p>
                  </div>
                )
              }
            })
          }
          if(obj.tips !== ""){
            tips = <div className="tips">
              <h5>小贴士</h5>
              <pre>{obj.tips}</pre>
            </div>
          }

          arr.push(
            <section key="chips" className="listMain">
              <div className="dishImg">
                <span>
                  <img src={obj.thumb_path}/>
                </span>
                <div className="sTitle">{obj.title}</div>
              </div>
              <div className="dishUser">
                <div className="dishUserPhoto">
                  <img src={obj.author_photo||'src/images/defaultPhoto.png'}/>
                  {verified}
                </div>
                <div className="dishUserContent">
                  <div className="dishUserContentLeft">
                    <p>{obj.author}</p>
                    <span>{obj.create_time.split(" ")[0]}发布</span>
                  </div>
                  <div className="dishUserContentRight">{obj.favo_counts} 收藏</div>
                </div>
              </div>
              <div className="cookStory">
                <pre>{obj.cookstory}</pre>
              </div>
              {major}
              {minor}
              <div className="step">
                <div className="stepTitle">
                  <h5>制作步骤</h5>
                  <div>
                    <i><img src="src/images/click.png"/></i>
                    <span>点击步骤进入厨房...</span>
                  </div>
                </div>
                <div className="stepList">
                  {stepList}
                </div>
              </div>
              {tips}
            </section>
          );
          that.setState({dishTitle:dishTitle});
          that.setState({dish:arr});
          break;
        }
      }
      console.log(that.state.dish);

    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)

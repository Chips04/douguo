import React from 'react';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps,store } from '../redux/store';

class BuyContent extends React.Component{
  constructor(){
    super();
    this.state = {
      buys : [],
      mainList: [],
      buy : [],
      otherList : []
    }
  };
  delBuy(cook_id,that){
    let del = confirm('你不想做这道菜了吗？');
    if(del){
      //console.log(cook_id)
      //console.log(that.state.mainList)
      let oldbuy = that.props.buyvalue;
      //console.log(typeof cook_id)
      let index = oldbuy.indexOf(cook_id)
      oldbuy.splice(index,1);
      //console.log(oldbuy)
      that.props.onChange({
        type : 'SETBUY',
        buy : oldbuy
      })
      console.log("buy  ",store.getState().buy)
      let buy = that.props.buyvalue;
      //console.log(buy)
      let arr = [];
      fetch('./src/js/components/all.json')
      .then(function(response){
        return response.json()
      }).then(function(json){
        buy.map(function (item, i) {
          for(var i = 0;i<json.result.recipes.length;i++){
            if(item == json.result.recipes[i].cook_id){
              arr.push(json.result.recipes[i]);
              break;
            }
          }
        })
        console.log(arr);
        let aaa = [];
        let arrz = [];
        let arrf = [];
        arr.map(function(item,i){
          arrz = [];
          arrf = [];
          if(item.major.length>0){
            if(item.minor.length>0){
              //主辅
              for(let i = 0;i<item.major.length;i++){
                arrz.push(<div key={i+item.major[i].title}><span>{item.major[i].title}</span><span>{item.major[i].note}</span></div>)
              }
              for(let i = 0;i<item.minor.length;i++){
                arrf.push(<div key={i+item.minor[i].title}><span>{item.minor[i].title}</span><span>{item.minor[i].note}</span></div>)
              }
              aaa.push(
                <div class="buyitem clearfix" key={i+"aawgag"}>
                  <div class="buytitle">
                    <div>
                      <h4>{item.title}</h4>
                      <i><img src="./src/images/gogogo.png"/></i>
                    </div>
                  </div>
                  <div className="itemTitle">主料</div>
                  {arrz}
                  <div className="itemTitle">辅料</div>
                  {arrf}
                  <span onClick={that.delBuy.bind(this,item.cook_id,that)}><i><img src="./src/images/delone.png"/ ></i></span>
                </div>
              )
            }else{
              //zhu
              for(let i = 0;i<item.major.length;i++){
                console.log(item.major.length)
                arrz.push(<div key={i+item.major[i].title}><span>{item.major[i].title}</span><span>{item.major[i].note}</span></div>)
              }
              aaa.push(
                <div class="buyitem clearfix" key={i+"aawgag"}>
                  <div class="buytitle">
                    <div>
                      <h4>{item.title}</h4>
                      <i><img src="./src/images/gogogo.png"/></i>
                    </div>
                  </div>
                  <div className="itemTitle">主料</div>
                  {arrz}
                  <span onClick={that.delBuy.bind(this,item.cook_id,that)}><i><img src="./src/images/delone.png"/ ></i></span>
                </div>
              )
            }

          }else{
            //辅
            if(item.minor.length>0){
              for(let i = 0;i<item.minor.length;i++){
                arrf.push(<div key={i+item.minor[i].title}><span>{item.minor[i].title}</span><span>{item.minor[i].note}</span></div>)
              }
              aaa.push(
                <div class="buyitem clearfix" key={i+"aawgag"}>
                  <div class="buytitle">
                    <div>
                      <h4>{item.title}</h4>
                      <i><img src="./src/images/gogogo.png"/></i>
                    </div>
                  </div>
                  <div className="itemTitle">辅料</div>
                  {arrf}
                  <span onClick={that.delBuy.bind(this,item.cook_id,that)}><i><img src="./src/images/delone.png"/ ></i></span>
                </div>
              )
            }else{
              //主辅都没有
              aaa.push(
                <div class="buyitem clearfix" key={i+"aawgag"}>
                  <div class="buytitle">
                    <div>
                      <h4>{item.title}</h4>
                      <i><img src="./src/images/gogogo.png"/></i>
                    </div>
                  </div>
                  <span onClick={that.delBuy.bind(this,item.cook_id,that)}><i><img src="./src/images/delone.png"/ ></i></span>
                </div>
              )
            }

          }

        })

        that.setState({mainList : aaa})
        console.log(aaa.length)

      })
    }
  }


  componentDidMount(){
    console.log(this)
    let buy = this.props.buyvalue;
    let arr = [];
    if(buy.length !== 0){
      let that = this;
      fetch('./src/js/components/all.json')
      .then(function(response){
        return response.json()
      }).then(function(json){
        console.log(json.result.recipes);
        buy.map(function (item, i) {
          for(var i = 0;i<json.result.recipes.length;i++){
            if(item == json.result.recipes[i].cook_id){
              arr.push(json.result.recipes[i]);
              break;
            }
          }
        })
        console.log(arr);
        let aaa = [];
        let arrz = [];
        let arrf = [];
        arr.map(function(item,i){
          arrz = [];
          arrf = [];
          if(item.major.length>0){
            if(item.minor.length>0){
              //主辅
              for(let i = 0;i<item.major.length;i++){
                //console.log(item.major.length)
                arrz.push(<div key={i+item.major[i].title}><span>{item.major[i].title}</span><span>{item.major[i].note}</span></div>)
              }
              for(let i = 0;i<item.minor.length;i++){
                arrf.push(<div key={i+item.minor[i].title}><span>{item.minor[i].title}</span><span>{item.minor[i].note}</span></div>)
              }
              aaa.push(
                <div class="buyitem clearfix" key={i+"aawgag"}>
                  <div class="buytitle">
                    <div>
                      <h4>{item.title}</h4>
                      <i><img src="./src/images/gogogo.png"/></i>
                    </div>
                  </div>
                  <div className="itemTitle">主料</div>
                  {arrz}
                  <div className="itemTitle">辅料</div>
                  {arrf}
                  <span onClick={that.delBuy.bind(this,item.cook_id,that)}><i><img src="./src/images/delone.png"/ ></i></span>
                </div>
              )
            }else{
              //zhu
              for(let i = 0;i<item.major.length;i++){
                console.log(item.major.length)
                arrz.push(<div key={i+item.major[i].title}><span>{item.major[i].title}</span><span>{item.major[i].note}</span></div>)
              }
              aaa.push(
                <div class="buyitem clearfix" key={i+"aawgag"}>
                  <div class="buytitle">
                    <div>
                      <h4>{item.title}</h4>
                      <i><img src="./src/images/gogogo.png"/></i>
                    </div>
                  </div>
                  <div className="itemTitle">主料</div>
                  {arrz}
                  <span onClick={that.delBuy.bind(this,item.cook_id,that)}><i><img src="./src/images/delone.png"/ ></i></span>
                </div>
              )
            }

          }else{
            //辅
            if(item.minor.length>0){
              for(let i = 0;i<item.minor.length;i++){
                arrf.push(<div key={i+item.minor[i].title}><span>{item.minor[i].title}</span><span>{item.minor[i].note}</span></div>)
              }
              aaa.push(
                <div class="buyitem clearfix" key={i+"aawgag"}>
                  <div class="buytitle">
                    <div>
                      <h4>{item.title}</h4>
                      <i><img src="./src/images/gogogo.png"/></i>
                    </div>
                  </div>
                  <div className="itemTitle">辅料</div>
                  {arrf}
                  <span onClick={that.delBuy.bind(this,item.cook_id),that}><i><img src="./src/images/delone.png"/ ></i></span>
                </div>
              )
            }else{
              //主辅都没有
              aaa.push(
                <div class="buyitem clearfix" key={i+"aawgag"}>
                  <div class="buytitle">
                    <div>
                      <h4>{item.title}</h4>
                      <i><img src="./src/images/gogogo.png"/></i>
                    </div>
                  </div>
                  <span onClick={that.delBuy.bind(this,item.cook_id),that}><i><img src="./src/images/delone.png"/ ></i></span>
                </div>
              )
            }

          }

        })
        that.setState({mainList : aaa})

      })
    }





  }
  delAll(){
    let del = confirm('确定要清空购物单吗？');
    if(del){
      this.props.onChange({
        type : 'SETBUY',
        buy : []
      })
      this.setState({
        mainList : <p>带着购物单逛超市更方便哦</p>
      })
    }
  }
  render(){
    let buyCon = null;
    let buy = this.props.buyvalue;
    console.log(buy);
    if(this.props.buytype == 0){
      if(this.state.mainList.length>0){
        buyCon =
        <div>
          <header className="buyHeader">
            <div onClick={this.delAll.bind(this)}>
              <b><img src="./src/images/del.png"/></b>
            </div>
            <h2>购物单</h2>
            <div>
              <i><img src="./src/images/buyone.png"/></i>
            </div>
          </header>
          <section>
            {this.state.mainList}
          </section>
        </div>
      }else{
        buyCon =
        <div>
          <header className="buyHeader">
            <div>
              <b><img src="./src/images/del.png"/></b>
            </div>
            <h2>购物单</h2>
            <div>
              <i><img src="./src/images/buyone.png"/></i>
            </div>
          </header>
          <section>
            <p>带着购物单逛超市更方便哦</p>
          </section>
        </div>
      }
    }else{
      if(this.state.mainList.length>0){
        buyCon =
        <div>
          <header className="buyHeader">
            <div onClick={this.delAll.bind(this)}>
              <b><img src="./src/images/del.png"/></b>
            </div>
            <h2>购物单</h2>
            <div>
              <i><img src="./src/images/buyall.png"/></i>
            </div>
          </header>
          <section>
            {this.state.otherList}
          </section>
        </div>
      }else{
        buyCon =
        <div>
          <header className="buyHeader">
            <div>
              <b><img src="./src/images/del.png"/></b>
            </div>
            <h2>购物单</h2>
            <div>
              <i><img src="./src/images/buyall.png"/></i>
            </div>
          </header>
          <section>
            <p>带着购物单逛超市更方便哦</p>
          </section>
        </div>
      }
    }
    return(
        <section className="buyContent">
          {buyCon}
        </section>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BuyContent)

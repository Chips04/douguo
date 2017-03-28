import React from 'react';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps,store } from '../../redux/store';


class MoreShare extends React.Component{
  constructor(){
    super();
  }
  weiboBtn(){
    console.log('weibovalue',this.props.weibovalue);
    let weibo = !this.props.weibovalue;
    this.props.onChange({
      type: 'SETWEIBO',
      weibo: weibo
    })
    //console.log('weibovalue:'+this.props.weibovalue+',qblogvalue:'+this.props.qblogvalue+',elephantvalue:'+this.props.elephantvalue+',qzonevalue:'+this.props.qzonevalue);
    console.log("00000000000000000000000000000000000000000000",store.getState());
  }
  qblogBtn(){
    console.log('qblogvalue',this.props.qblogvalue);
    let qblog = !this.props.qblogvalue;
    this.props.onChange({
      type: 'SETQBLOG',
      qblog: qblog
    })
    console.log("00000000000000000000000000000000000000000000",store.getState());
  }
  elephantBtn(){
    console.log('elephantvalue',this.props.elephantvalue);
    let elephant = !this.props.elephantvalue;
    this.props.onChange({
      type: 'SETELEPHANT',
      elephant: elephant
    })
    console.log("00000000000000000000000000000000000000000000",store.getState());
  }
  qzoneBtn(){
    console.log('qzonevalue',this.props.qzonevalue);
    let qzone = !this.props.qzonevalue;
    this.props.onChange({
      type: 'SETQZONE',
      qzone: qzone
    })
      console.log("00000000000000000000000000000000000000000000",store.getState());
  }
  render(){
    return(
      <div className="moreShare">
        <p>分享设置</p>
        <ul>
          <li>
            <i><img src="src/images/weibo.png"/><span>新浪微博</span><b><img onClick={this.weiboBtn.bind(this)} src={"src/images/"+ (this.props.weibovalue?'btn_on':'btn_off') +".png"} /></b></i>
          </li>
          <li>
            <i><img src="src/images/qblog.png"/><span>腾讯微博</span><b><img onClick={this.qblogBtn.bind(this)} src={"src/images/"+ (this.props.qblogvalue?'btn_on':'btn_off') +".png"}/></b></i>
          </li>
          <li>
            <i><img src="src/images/elephant.png"/><span>印象笔记</span><b><img onClick={this.elephantBtn.bind(this)} src={"src/images/"+ (this.props.elephantvalue?'btn_on':'btn_off') +".png"}/></b></i>
          </li>
          <li>
            <i><img src="src/images/qzone.png"/><span>QQ空间</span><b><img onClick={this.qzoneBtn.bind(this)} src={"src/images/"+ (this.props.qzonevalue?'btn_on':'btn_off') +".png"}/></b></i>
          </li>
        </ul>

      </div>
    )
  };

  componentDidUpdate() {

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MoreShare)

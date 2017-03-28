import {createStore,combineReducers} from 'redux';

/*function changer(state={weibo:false,qblog:false,elephant:false,qzone:true},action){
  switch (action.type) {
    case 'SETWEIBO':
      return {weibo:action.weibo}
      break;
    case 'SETQBLOG':
      return Object.assign(state,{qblog:action.qblog});
      break;
    case 'SETELEPHANT':
      return Object.assign(state,{elephant:action.elephant});
      break;
    case 'SETQZONE':
      return Object.assign(state,{qzone:action.qzone});
      break;
    default:
      return state;
  }
}*/

function changer1(state=false,action){
  switch (action.type) {
    case 'SETWEIBO':
      return action.weibo
      break;
    default:
      return state;
  }
}
function changer2(state=false,action){
  switch (action.type) {
    case 'SETQBLOG':
      return action.qblog
      break;
    default:
      return state;
  }
}
function changer3(state=false,action){
  switch (action.type) {
    case 'SETELEPHANT':
      return action.elephant
      break;
    default:
      return state;
  }
}
function changer4(state=true,action){
  switch (action.type) {
    case 'SETQZONE':
      return action.qzone
      break;
    default:
      return state;
  }
}

var reducer = combineReducers({
    weibo: changer1,
    qblog: changer2,
    elephant: changer3,
    qzone: changer4
})

function mapStateToProps(state){
  return {
    weibovalue:state.weibo,
    qblogvalue:state.qblog,
    elephantvalue:state.elephant,
    qzonevalue:state.qzone

  }
}

function mapDispatchToProps(dispatch){
  return {
    onChange: (action) => dispatch(action)
  }
}

let store = createStore(reducer);

export {mapStateToProps,mapDispatchToProps,store}

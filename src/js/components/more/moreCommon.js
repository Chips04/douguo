import React from 'react';

export default class MoreCommon extends React.Component{
  render(){
    return(
      <div className="moreCommon">
        <p>通用</p>
        <ul>
          <li>
            <p>清理缓存</p><div><img src="src/images/go.png"/></div>
          </li>
          <li>
            <p>意见反馈</p><div><img src="src/images/go.png"/></div>
          </li>
          <li>
            <p>推荐应用</p><div><img src="src/images/go.png"/></div>
          </li>
        </ul>

      </div>
    )
  };
}

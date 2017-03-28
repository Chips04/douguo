import React from 'react';
import MoreLogin from './more/moreLogin';
import MoreShare from './more/moreShare';
import MoreCommon from './more/moreCommon';
import MoreLogo from './more/moreLogo';

export default class MoreContent extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  };

  render(){
    return(
        <section className="moreContent">
          <header className="moreHeader">更多</header>
          <section className="moreMain">
            <MoreLogin></MoreLogin>
            <MoreShare></MoreShare>
            <MoreCommon></MoreCommon>
            <MoreLogo></MoreLogo>
          </section>
        </section>
    )

  };
}

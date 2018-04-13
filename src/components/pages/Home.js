import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import HeadlineBanner from '../HeadlineBanner';


class Home extends Component {


  componentDidMount (){
    //JUHA.BLOG REQUEST

        let juhaBlogRequest = new XMLHttpRequest();

        juhaBlogRequest.open('GET', 'http://juha.blog/wp-json/wp/v2/posts');



          if (juhaBlogRequest.status >= 200 && juhaBlogRequest.status < 400) {
            let JBData = JSON.parse(juhaBlogRequest.responseText);
            console.log(JBData);

            createHTML(JBData);

          } else {
            console.log("We connected to the server, but it returned an error.");
          }


        juhaBlogRequest.onerror = function errorlog() {
          console.log("Connection error");
        };

        juhaBlogRequest.send();



    function createHTML(postsJBData) {

      let juhaBlogHTMLString = '';
      let i = 0;
      for (i = 0; i < postsJBData.length; i++) {
        juhaBlogHTMLString += postsJBData[i].title.rendered ;
        console.log('jee')
      }
    }

  }


  render() {




    return (

      <ReactCSSTransitionGroup className='xiong-container' component='article' transitionName='card' transitionEnterTimeout={1000} transitionLeaveTimeout={1000} transitionAppear={true} transitionAppearTimeout={1000}>
      <HeadlineBanner headline="Home" />
        <div className='xiongSingleArticle'>




        </div>
      </ReactCSSTransitionGroup>

    );
  }
}

export default Home;

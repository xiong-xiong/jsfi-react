import React, { Component } from 'react';


class Home extends Component {


  componentDidMount (){
    //JUHA.BLOG REQUEST
      juhaBlogRequestFunc();
      function juhaBlogRequestFunc() {
        var juhaBlogRequest = new XMLHttpRequest();

        juhaBlogRequest.open('GET', 'http://juha.blog/wp-json/wp/v2/posts?per_page=3');

        juhaBlogRequest.onload = function() {
          console.log('this is where it stops for some reason')
          if (juhaBlogRequest.status >= 200 && juhaBlogRequest.status < 400) {
            let JBData = JSON.parse(juhaBlogRequest.responseText);
            console.log(JBData);
              console.log('gre')
            createHTML(JBData);

          } else {
            console.log("We connected to the server, but it returned an error.");
          }


        juhaBlogRequest.onerror = function() {
          console.log("Connection error");
        };

        juhaBlogRequest.send();
      };
    }

    function createHTML(postsJBData) {
      let juhaBlogHTMLString = '';
      let i = 0;
      for (i = 0; i < postsJBData.length; i++) {
        juhaBlogHTMLString += '<a target="_blank" href="' + postsJBData[i].link + '"><div class="nostoblock linkkiblock">' +'<h3>' + postsJBData[i].title.rendered + '</h3><p class="blog-label"><i class="fa fa-wordpress"></i> Juha.Blog</p></div></a>';

      }
    }

  }


  render() {






    return (

      <div className='xiong-container'>

        <div className='xiongSingleArticle'>

          <h2>Home page</h2>
          

        </div>
      </div>

    );
  }
}

export default Home;

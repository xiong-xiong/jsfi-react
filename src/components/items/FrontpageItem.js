import React from 'react'


class FrontpageItem extends React.Component {
  render () {
    let posts = this.props.posts
    let category = this.props.category
    let site = this.props.site

    let postLoop = posts.map((post, index)=> {
      return (
        <article key={index} className="xiong-block">
          <a href={post.link}>
            <div className="xiong-block-post frontpage-block">
                  <span className="xiong-type-tag">{site}</span>
                  <h3>{post.title.rendered}</h3>
                  
                  <p><strong>{category}</strong></p>
            </div>
          </a>
        </article>
      )
    })

    return (
      <div>
        {postLoop}
         
      </div>
    )
  }

}

export default FrontpageItem;
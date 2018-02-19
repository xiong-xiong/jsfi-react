import React from 'react'
import {Link} from 'react-router-dom'


class ArticleListItem extends React.Component {
  render () {
    let {article} = this.props
    return (
      <article className='col-md-4 xiong-block'>

          <Link to={`portfolio/${article.fields.slug}`}>

              <div className='xiong-block-post'>
                <span className='xiong-type-tag'>Portfolio</span>
                <h2>{article.fields.title}</h2>
                <p>{article.fields.endDate}</p>

              </div>

          </Link>


      </article>
    )
  }

}

export default ArticleListItem

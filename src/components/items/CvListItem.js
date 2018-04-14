import React from 'react'
import ReactMarkdown from 'react-markdown';


class CvListItem extends React.Component {
  render () {
    let {article} = this.props
    return (
      <article className='col-md-6 xiong-block'>

          

              <div className='xiong-block-post cv-block'>
                
                <h3>{article.fields.title}</h3>
                <ReactMarkdown className="content" softBreak="br" containerTagName="p" source={article.fields.content} />

              </div>

          


      </article>
    )
  }

}

export default CvListItem;

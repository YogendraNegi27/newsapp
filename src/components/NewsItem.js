import React from 'react'

const NewsItem = (props) => {
    let {title,description,imgUrl,newsUrl} = props

    return (
      <div className='my-3'>
        <div className="card" >
             <img src= {!imgUrl?"https://bsmedia.business-standard.com/_media/bs/img/article/2016-06/02/full/1464869897-2329.jpg"
                        : imgUrl} className="card-img-top" alt="sports image"/>
            <div className="card-body">
            <h5 className="card-title"> {title}</h5>
           <p className="card-text">{description}</p>
           <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
      </div>
      </div>
    )
  
}

export default NewsItem
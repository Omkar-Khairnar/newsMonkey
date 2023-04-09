import React from 'react'

const NewsItem = (props) => {
  let {
    title, 
    description,
    imageUrl,
    newsUrl,
    author,
    mydate,
    sourcename,
  } = props
  return (
    <div>
      <div className="card" style={{ width: '80%' }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          style={{ height: '190px' }}
        />
        <div className="card-body">
          <span className="position-absolute top-0 start-0    badge rounded-pill bg-danger">
            {sourcename}
          </span>
          <h5 className="card-title">{title}..</h5>
          <p className="card-text">{description}...</p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Explore News
          </a>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(mydate).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsItem

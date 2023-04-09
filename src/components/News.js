import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const [articles, setArticles] = useState([])
// eslint-disable-next-line
  const [loading, setLoading] = useState({
    loading: 'false',
  })
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    props.setmyProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
    setLoading(true)
    let data = await fetch(url)
    props.setmyProgress(30)

    let parsedData = await data.json()
    props.setmyProgress(70)

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setmyProgress(100)
  }

  useEffect(() => {
    updateNews()

    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pagesize}`
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <div>
      <div className="container my-3">
        <h2 style={{ marginTop: '70px' }}>NewsMonkey-Top Headlines</h2>
        {!articles && <Spinner />}
        {articles && (
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row my-4">
                {articles.map((ele, index) => {
                  return (
                    <div className="col-md-4 my-2" key={index}>
                      <NewsItem
                        title={ele.title ? ele.title.slice(0, 50) : ''}
                        description={
                          ele.description ? ele.description.slice(0, 100) : ''
                        }
                        imageUrl={
                          ele.urlToImage
                            ? ele.urlToImage
                            : 'https://cdn-icons-png.flaticon.com/512/21/21601.png'
                        }
                        newsUrl={ele.url ? ele.url : '#'}
                        author={ele.author ? ele.author : 'Unknown'}
                        mydate={ele.publishedAt ? ele.publishedAt : ''}
                        sourcename={ele.source.name}
                      ></NewsItem>
                    </div>
                  )
                })}
              </div>
            </div>
          </InfiniteScroll>
        )} 
      </div>
    </div>
  )
}

News.defaultProps = {
  country: 'in',
  category: 'general',
  pagesize: 9,
  key: 'General',
  totalResults: 0,
}
export default News

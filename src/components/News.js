import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  //  document.title=`${props.category} - NewsMonkey


  const updateNews = async () => {
    const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}
        &apiKey=249935d7ad2d48719888d5e33b346104&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let result = await fetch(url);
    let data = await result.json();
    console.log(data)

    setArticles(data.articles)
    setTotalResults(data.totalResults)
    setLoading(false)
  }

  useEffect(() => {
    updateNews()
  }, [])


 const prevClickHandler = () => {
  setPage(page - 1 )
   updateNews()
 };

  const nextClickHandler = async () => {
   setPage(page + 1 )
    updateNews()
  };


 return (
  <div>
    <div className="container my-3">
      <h2 className="text-center " style={{ margin: '35px,0', marginTop: '70px' }}>NewsMonkey -Top {props.category} Headlines</h2>
      {loading && <Spinner />}
      <div className="row">
        {!this.state.loading && this.state.articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
    <div className="container d-flex justify-content-between">
      <button
        disabled={this.state.page <= 1}
        className="btn btn-dark"
        onClick={prevClickHandler}
      >
        &larr; Previous
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={nextClickHandler}
        disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
      >
        Next &rarr;
      </button>
    </div>
  </div>
);
  
}

export default News;

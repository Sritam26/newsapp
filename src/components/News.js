import React, { useState, useEffect, useCallback, useRef } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ country = 'in', category = 'sports' }) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef(1); // Using ref to track page state without causing re-renders

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/everything?q=india&from=2025-01-13&sortBy=publishedAt&apiKey=1f4c493dc5f24066842b6571351f7b2d&page=${pageRef.current}&pageSize=10`;
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);

      if (parsedData.articles) {
        setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
        setTotalResults(parsedData.totalResults);
        pageRef.current += 1; // Increment pageRef instead of using state
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
    setLoading(false);
  }, [country, category]);

  useEffect(() => {
    setArticles([]); // Clear previous articles on category/country change
    pageRef.current = 1; // Reset page number
    fetchNews();
  }, [fetchNews]);

  return (
    <div>
      <h2 className="text-center my-4">Top Headlines</h2>

      {loading && articles.length === 0 && <h4 className="text-center">Loading...</h4>}

      <div className="container my-5">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchNews}
          hasMore={articles.length < totalResults}
          loader={<h4 className="text-center">Loading more news...</h4>}
        >
          <div className="row">
            {articles.length > 0 ? (
              articles.map((element, index) => (
                <div className="col-md-4" key={element.url || index}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 46) : 'No Title'}
                    description={element.description ? element.description.slice(0, 88) : 'No Description'}
                    image={element.urlToImage || 'https://via.placeholder.com/150'}
                    author={element.author || 'Unknown'}
                    publish={new Date(element.publishedAt).toDateString()}
                    newsurl={element.url}
                    source={element.source?.name || 'Unknown Source'}
                  />
                </div>
              ))
            ) : (
              !loading && <h4 className="text-center">No News Available</h4>
            )}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;

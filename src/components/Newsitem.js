import React from 'react';
import './style.css';

const Newsitem = ({ title, description, image, newsurl, Author, publish, source }) => {
  return (
    <div>
      <div className="card mx-4 my-3" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">
            {title}{' '}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Author: {!Author ? 'Unknown' : Author} | Published: {new Date(publish).toGMTString()}
            </small>
          </p>
          <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View News
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;

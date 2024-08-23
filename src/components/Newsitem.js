import React, { Component } from 'react'
import './style.css'

export default class Newsitem extends Component {
  render() {
    let{title,description,image,newsurl,Author,publish,source}=this.props;
    return (
      <div>
        <div className="card mx-4 my-3" style={{width: '18rem'}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {source}
    
  </span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">Author:-{!Author?"unknown":Author} publish:-{new Date(publish).toGMTString()}</small></p>
    <a href={newsurl} target='blank' className="btn btn-primary">view News</a>
  </div>
</div>
      </div>
    )
  }
}

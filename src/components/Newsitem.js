import React, { Component } from 'react'
import './style.css'

export default class Newsitem extends Component {
  render() {
    let{title,desc,image,newsurl}=this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href={newsurl} target='blank' className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps={
    country:'india',
    catagory:'sports'

  };
 static propTypes= {
    country: PropTypes.string,
    catagory: PropTypes.string,
}
  constructor(){
    super()
    this.state={
      
    "articles": [],
      loading:false,
      page:1

    }
  }
 async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=c4a96d93ddba478182dd28222fb207a2&page=1&pagesize=10`
    let data=await fetch(url)
    let parsedata=await data.json()
    console.log(parsedata)
    this.setState({articles:parsedata.articles,totalResult:parsedata.totalResults})
  }
 nextclick=async()=>{
  if (this.state.page+1 > Math.ceil(this.state.totalResult/20)) {
  
  }
  else{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=c4a96d93ddba478182dd28222fb207a2&page=${this.state.page+1}&pagesize=10`
    let data=await fetch(url)
    let parsedata=await data.json()
    console.log(parsedata)
  this.setState({
    page:this.state.page+1,
    articles:parsedata.articles
  })
}
 }
 previousclick=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=c4a96d93ddba478182dd28222fb207a2&page=${this.state.page-1}&pagesize=10`
    let data=await fetch(url)
    let parsedata=await data.json()
    console.log(parsedata)
  this.setState({
    page:this.state.page-1,
    articles:parsedata.articles
  })
 }
  render() {
    return (
      <div>
        this is the news
        <div className="container my-5" >
          <div className="row">
           {this.state.articles.map((element)=>{

           return <div className="col-md-4"key={element.urlToImage}>

        <Newsitem title={element.title?element.title.slice(0,46):""} desc={element.description?element.description.slice(0,98):""} image={element.urlToImage} newsurl={element.url}/>
            </div>
  })}
            
          

          </div>

        </div>
        <div className="container d-flex justify-content-evenly">
        <button type="button" class="btn btn-dark" disabled={this.state.page<=1} onClick={this.previousclick}>-Previous</button>
        <button type="button" class="btn btn-dark"  onClick={this.nextclick}>Next-</button>
        </div>

      </div>
    )
  }
}
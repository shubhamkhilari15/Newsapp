import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
 
  constructor() {
    super();
    console.log("hello from news components");
    this.state = {
     articles: [],
     loading:false
    };
  
  }
 async componentDidMount(){
    let data =await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=30a1926b7373433faa37a25b326991d4");
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsDose- TOP HeadLines</h1>
        <div className="row">
         {this.state.articles.map((element)=>{ return <div className="col-md-4 my-3" key={element.url}>
            <NewsItem  urlToImage={element.urlToImage!==null?element.urlToImage:"https://th.bing.com/th/id/OIP.1DLYAqE5UY19idJJOkFQegHaHa?pid=ImgDet&rs=1"} title={element.title?element.title:" "} description={element.description?element.description:" "} url={element.url} />
          </div>
          })}
          </div>
      </div>
    );
  }
}
export default News;

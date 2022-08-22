import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
 
  constructor() {
    super();
    console.log("hello from news components");
    this.state = {
     articles: [],
     loading:false,
     page:1,
     totalResults:0,
     //pageSize:this.props.pageSize
    };
  
  }
 async componentDidMount(){
  this.setState({loading:true});
    let data =await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=30a1926b7373433faa37a25b326991d4&page=${this.state.page}&pageSize=${this.props.pageSize}`);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    });
  console.log(parsedData);
  }
  onPrevClick = async ()=>{
    this.setState({loading:true});
    let data =await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=30a1926b7373433faa37a25b326991d4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,
    page:this.state.page-1,
    loading:false
});
    console.log(this.state.page);
  }
  onNextClick = async ()=>{
    this.setState({loading:true});
    let data =await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=30a1926b7373433faa37a25b326991d4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,
    page:this.state.page+1,
    loading: false});
    console.log(this.state.page);
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'20px'}}>NewsDose- TOP HeadLines</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">
         {!this.state.loading &&this.state.articles.map((element)=>{ return <div className="col-md-4 my-3" key={element.url}>
          {/* map() fun expect arrow func as parameter which reutun element with key ....
          and here we are returning one div everytime...
          so we need key to indetify the each div */}
            <NewsItem  urlToImage={element.urlToImage!==null?element.urlToImage:"https://th.bing.com/th/id/OIP.1DLYAqE5UY19idJJOkFQegHaHa?pid=ImgDet&rs=1"} title={element.title?element.title:" "} description={element.description?element.description:" "} url={element.url} />
          </div>
          })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.onPrevClick}>&larr;Previous</button>
          <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.onNextClick}>Next &rarr;</button>
         {/* Math.ceil(13/2)  result ===>7 */}
          </div>
      </div>
    );
  }
}
export default News;

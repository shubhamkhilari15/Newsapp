import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6, //this value will be in used when no values is passed from app.js
    category: "general",
  };
   // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      //pageSize:this.props.pageSize
    };
    document.title=`NewsDose-${this.capitalizeFirstLetter(this.props.category)}`
  }
  capitalizeFirstLetter=(string)=>{
 return string[0].toUpperCase() + string.substring(1);}
  async UpdatePge() {
    this.setState({loading:true});
    this.props.progress(10);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30a1926b7373433faa37a25b326991d4&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    this.props.progress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.progress(70);
    console.log(this.props.pageSize);
    console.log(this.props.country)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.progress(100);
  }
  async componentDidMount() {
    this.UpdatePge();
  }
  
  onPrevClick = async () => {
    this.setState({page: this.state.page -1});
    this.UpdatePge();
  };
  onNextClick = async () => {
    this.setState({page: this.state.page + 1});
    this.UpdatePge();
  };
  fetchMoreData=async ()=>{
    this.setState({loading:true});
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30a1926b7373433faa37a25b326991d4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    );
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({page: this.state.page + 1});
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,

    });
  }
  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "20px" }}>
          NewsDose- TOP {this.capitalizeFirstLetter(this.props.category)} HeadLines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {
            this.state.articles.map((element, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  {/* map() fun expect arrow func as parameter which reutun element with key ....
          and here we are returning one div everytime...
          so we need key to indetify the each div */}
                  <NewsItem
                    urlToImage={
                      element.urlToImage !== null
                        ? element.urlToImage
                        : "logo512.png"
                    }
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : " "
                    }
                    url={element.url}
                    author={element.author ? element.author : "Unkown"}
                    date={new Date(element.publishedAt).toGMTString()}
                    source={
                      element.source.name ? element.source.name : "Unkown"
                    }
                  />
                </div>

              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* < className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.onPrevClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.onNextClick}
          >
            Next &rarr;
          </button>
          {/* Math.ceil(13/2)  result ===>7 
           </div> */}
      </>
    );
  }
}
export default News;

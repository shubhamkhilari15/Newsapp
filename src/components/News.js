import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News=(props)=> {

  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0);
 
  
 const  capitalizeFirstLetter=(string)=>{
 return string[0].toUpperCase() + string.substring(1);}
  const UpdatePge=async()=>{
    setLoading(true);
    props.progress(10);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    );
    props.progress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    props.progress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.progress(100);
  }
  useEffect(()=>{
    document.title=`NewsDose-${capitalizeFirstLetter(props.category)}`
    UpdatePge();
  },[])

  const fetchMoreData=async ()=>{
   setLoading(true);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    );
    let parsedData = await data.json();
    console.log(parsedData);
    setPage(page+1);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
    return (
      <>
        <h1 className="text-center" style={{ margin: "20px",marginTop:"50px" }}>
          NewsDose- TOP {capitalizeFirstLetter(props.category)} HeadLines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {
            articles.map((element, index) => {
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
      </>
    );
  
}
export default News;
News.defaultProps = {
  country: "in",
  pageSize: 6, //this value will be in used when no values is passed from app.js
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
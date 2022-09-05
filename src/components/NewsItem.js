import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { urlToImage, title, description, url , author, date, source} = this.props;
    return (
      <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'100%',zIndex:'1'}} >{source.slice(0,6)}</span>
        <img src={urlToImage} className="card-img-top" alt="..."  style={{height:'300px'}}/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,45)}..</h5>
          <p className="card-text">{description.slice(0,60)}..</p>
          <p className="card-text"><small className="text-muted">By-{author}on-{date}</small></p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
            Read More..
          </a>
        </div>
      </div>
    )
  }
}

export default NewsItem

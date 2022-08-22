import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { urlToImage, title, description, url } = this.props;
    return (
      <div className="card">
        <img src={urlToImage} className="card-img-top" alt="..."  style={{height:'300px'}}/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,45)}..</h5>
          <p className="card-text">{description.slice(0,60)}..</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
            Read More..
          </a>
        </div>
      </div>
    )
  }
}

export default NewsItem

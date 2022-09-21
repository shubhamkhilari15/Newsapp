import React from "react";
const NewsItem = (props) => {
  let { urlToImage, title, description, url, author, date, source } = props;
  return (
    <div className="card">
      <div>
        <span
          className="badge rounded-pill bg-danger m-1"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          {source}
        </span>
      </div>
      <img
        src={urlToImage}
        className="card-img-top"
        alt="..."
        style={{ height: "300px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 45)}..</h5>
        <p className="card-text">{description.slice(0, 60)}..</p>
        <p className="card-text">
          <small className="text-muted">
            By-{author}on-{date}
          </small>
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-dark"
        >
          Read More..
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

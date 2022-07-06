import React, { Component } from "react"; 
import Spinner from "./Spinner";

export class NewsItem extends Component {
  render() { 
    let {url, image, title, description} = this.props; 
    return (
      <> 
        <div className="card" style={{"width": "18rem"}}>
          <img src={`${image}`} className="card-img-top" alt="Image Loading Here"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={`${url}`} className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"; 

export class NewsComponent extends Component {
  newsArticles = [];

  constructor() {
    super();
    this.state = {
      newsArticles: this.newsArticles,
      loading: false,
      page: 1,
    };
  }

  //Runs after render
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=58f9aefd017649859c54eb53cca9458d&pageSize=9&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ newsArticles: parsedData.articles, loading: false });
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=58f9aefd017649859c54eb53cca9458d&pageSize=9&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ newsArticles: parsedData.articles, loading: false });
  };

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner />}
        <div className="my-3">
          {" "}
          <h1 className="text-center"> {this.props.heading} </h1>{" "}
        </div>
        <div
          className="row"
          style={{
            border: "2px solid black",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "8px",
          }}
        >
          {!this.loading &&
            this.state.newsArticles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    image={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark my-8 mx-3"
            onClick={this.handlePrev}
          >
            Prev
          </button>
          <button
            disabled={this.state.page >= 10}
            type="button"
            className="btn btn-dark my-8"
            onClick={this.handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default NewsComponent;

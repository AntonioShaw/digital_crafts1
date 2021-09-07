import { Component } from 'react';
import './Sub.css';

class Sub extends Component {
  render() {
    const articleList = this.props.allArticles.map((article, index) => {
      return (
        <article key={index} className="articles">
          <h1 className="subTitles">{article.title}</h1>
          <p>{article.body}</p>
          <div className="subBtns">
          </div>
        </article>
      );
    });
    return <section id="articleSection">{articleList}</section>;
  }
}

export default Sub;
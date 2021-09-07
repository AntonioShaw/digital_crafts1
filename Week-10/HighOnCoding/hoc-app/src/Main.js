import { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <section id="mainSection">
        <article id="mainArticle">
          <h2>{this.props.main.title}</h2>
          <p>{this.props.main.body}</p>
        </article>
      </section>
    );
  }
}

export default Main;
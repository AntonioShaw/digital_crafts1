import { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Sub from './Sub';

class App extends Component {
  render() {

    const main = {
      title: 'The Curse of the Current Reviews',
      body: 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.'
    };


    const sub = [
      {
        title: 'Hello WatchKit',
        body: 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.',
        comments: 12,
        likes: 124
      },
      {
        title: 'Introduction to Swift',
        body: 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.',
        comments: 15,
        likes: 45
      }
    ];


    return (
      <div className="App">
        <Header />
        <main className="App-Main">
          <Main main={main} />
          <Sub allSubs={sub} />
        </main>
      </div>
    );
  }
}

export default App;
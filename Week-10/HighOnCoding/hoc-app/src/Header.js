import { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header id="Header">
        <nav id="Navbar">
          <h1>HighOnCoding</h1>
          <div id="Links">
            <button>Home</button>
            <button>Categories</button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
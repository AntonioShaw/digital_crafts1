import React, { omponent } from 'react'
import Footer from './Footer'
import Greet from './Greet'
import Header from './Header'


// App component inherits from the Component class 
class App extends Component {
  // render function is a required function that must be implemented in your component 
  render() {
    // JSX JavaScript and XML 
    return (
      <div>
        <Header />
        <Greet fullName = 'Mary' age = '34' />
        <Greet fullName = 'John' age = '56' />
        <Footer />
      </div>

    )
  }
}

export default App;

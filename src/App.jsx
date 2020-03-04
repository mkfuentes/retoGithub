import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home'

class App extends Component {
  
  render () {

    return (
      <div className='app'>
        <Navbar />
        <div className='container'>
          <Home />
        </div>
      </div>
    )
  }
}

export default App

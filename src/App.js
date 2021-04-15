
import React from 'react'

import { Route } from 'react-router'
import './App.css'
import { Header } from './components/Header'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'




const  App = () => {
  return (
    <div className="App">
      <div className="wrapper">
    <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/basket" component={Cart} />
          </div>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import HelpPage from '../../components/HelpPage'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/help" component={HelpPage} />

    </main>
  </div>
)

export default App

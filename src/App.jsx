import React from 'react'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'
import Menu from './Components/Menu'
import Estructura from './Components/Estructura'
import Props from './Components/Props'

const App = () => (
  <Router>
    <Route path="/" component={Menu} exact />
    <Route path="/estructura" component={Estructura} />
    <Route path="/props" component={Props} />
  </Router>
)

export default App

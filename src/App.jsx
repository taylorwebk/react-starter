import React from 'react'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'
import Menu from './Components/Menu'
import Estructura from './Components/Estructura'

const App = () => (
  <Router>
    <Route path="/" component={Menu} exact />
    <Route path="/estructura" component={Estructura} />
  </Router>
)

export default App

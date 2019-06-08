import React from 'react'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'
import Menu from './Components/Menu'
import Estructura from './Components/Estructura'
import Props from './Components/Props'
import Clases from './Components/Clases'

const App = () => (
  <Router>
    <Route path="/" component={Menu} exact />
    <Route path="/estructura" component={Estructura} />
    <Route path="/props" component={Props} />
    <Route path="/clases" component={Clases} />
  </Router>
)

export default App

import React from 'react'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'
import Menu from './Components/Menu'
import Estructura from './Components/Estructura'
import Props from './Components/Props'
import Clases from './Components/Clases'
import Clases2 from './Components/Clases2'
import Hooks from './Components/Hooks'
import Estilos from './Components/Estilos'

const App = () => (
  <Router>
    <Route path="/" component={Menu} exact />
    <Route path="/estructura" component={Estructura} />
    <Route path="/props" component={Props} />
    <Route path="/clases" component={Clases} />
    <Route path="/cclases" component={Clases2} />
    <Route path="/hooks" component={Hooks} />
    <Route path="/estilos" component={Estilos} />
  </Router>
)

export default App

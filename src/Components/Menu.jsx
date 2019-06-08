import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => (
  <ul>
    <li>
      <Link to="/estructura">
        Ir a Estructura
      </Link>
    </li>
    <li>
      <Link to="/props">
        Ir a Props
      </Link>
    </li>
    <li>
      <Link to="/clases">
        Ir a Clases
      </Link>
    </li>
  </ul>
)

export default Menu

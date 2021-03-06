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
    <li>
      <Link to="/cclases">
        Ir a Clases 2da Parte
      </Link>
    </li>
    <li>
      <Link to="/hooks">
        Hooks
      </Link>
    </li>
    <li>
      <Link to="/estilos">
        Estilos
      </Link>
    </li>
    <li>
      <Link to="/products">
        Productos
      </Link>
    </li>
    <li>
      <Link to="/pokemon">
        Pokemon
      </Link>
    </li>
  </ul>
)

export default Menu

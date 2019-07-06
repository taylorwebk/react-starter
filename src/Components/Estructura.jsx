import React from 'react'
// COMPONENTE FUNCIONAL
// const NombreComponente = (props) => {
//   return (
//    CODIGO HTML
//   )
// }
const Estructura = () => (
  <div>
    <Saludo nombre="Damian" edad={8} />
    <Saludo nombre="Roberto" edad={28} />
    <Saludo nombre="Leandra" edad={16} />
    <Saludo2 nombre="Adrian" edad={8} />
    <Saludo2 nombre="Fernanda" edad={22} />
  </div>
)

const Saludo = ({ nombre, edad }) => (
  <div>
    HOLA MI NOMBRE ES:
    <b>
      {nombre}
    </b>
    MI EDAD ES:
    <b>
      {edad}
    </b>
    {edad >= 18 ? ' y soy mayor ' : ' y soy menor'}
  </div>
)

// CLASS BASED COMPONENT
/**
 * class ComponentName extends Component {
 *  render() {
 *    return (
 *      CODIGO JSX
 *    )
 *  }
 * }
 */

const Saludo2 = ({ nombre, edad }) => (
  <div>
    HOLA MI NOMBRE ES:
    <b>
      {nombre}
    </b>
    MI EDAD ES:
    <b>
      {edad}
    </b>
    {edad >= 18 ? ' y soy mayor ' : ' y soy menor'}
  </div>
)

export default Estructura

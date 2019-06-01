import React, { Component } from 'react'
// COMPONENTE FUNCIONAL
// const NombreComponente = (props) => {
//   return (
//    CODIGO HTML
//   ) 
// }
const Estructura = () => {
  return (
   <div>
     <Saludo nombre="Damian" edad={8} />
     <Saludo nombre="Roberto" edad={28} />
     <Saludo nombre="Leandra" edad={16} />
     <Saludo2 nombre="Adrian" edad={8} />
     <Saludo2 nombre="Fernanda" edad={22} />
   </div>
 )
}

const Saludo = (props) => {
  // LOGICA DE PROGRAMACION
  return (
    <div>
      HOLA MI NOMBRE ES: 
      <b>
        {props.nombre}
      </b>
      MI EDAD ES:
      <b>
        {props.edad}
      </b>
      {props.edad >= 18 ? ' y soy mayor ' : ' y soy menor'}
    </div>
  )
}

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
class Saludo2 extends Component {
  constructor() {
    super()
  }
  render() {
    const { nombre, edad } = this.props
    // LOGICA DE PROGRAMACION
    return(
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
  }
}


export default Estructura

import React from 'react'

// CSS
import './Estilos.css'

// CSS in JsObject
const styles = {
  subtitulo: {
    fontSize: 25,
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'green',
    color: 'white'
  },
  button: {
    border: '1px solid red',
    padding: 15
  }
}

const Estilos = () => {
  return (
    <div>
      <h4 className="titulo">ESTILOS</h4>
      <h3 style={styles.subtitulo}>SUBTITULO</h3>
      <h5 style={styles.subtitulo}>SUBTITULO2</h5>
      <button style={styles.button}>
        BOTON
      </button>
    </div>
  )
}

export default Estilos

import React from 'react'

const Props = () => {
  const titulo = (
    <h2>SOY EL TITULO</h2>
  )
  return (
    <div>
      {titulo}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum est sit nemo quas incidunt accusantium labore mollitia asperiores ipsum voluptas optio ratione sunt reprehenderit vel tempora quasi, doloremque minima in.
      </p>
      <Lista
        titulo="Frutas"
        subtitulo="Frutas de la ciudad"
        elementos={['Pera', 'Manzana']}
      />
      <Lista
        titulo="Personas"
        subtitulo=""
        elementos={['Freddy', 'Laura', 'Liz']}
      />
      <Lista
        titulo="Celulares Huawei con Google"
        subtitulo="dfghjkl"
        elementos={[]}
      />
      <Pagina nroPag={1}>
        <h5>HOLA MUNDO</h5>
        <b> texto </b>
      </Pagina>
      <Pagina nroPag={2}>
        <p>dfghjkl fghjk ghj</p>
      </Pagina>
      <Pagina nroPag={2}>
        <i>fghjk ghjk hjk</i>
      </Pagina>
    </div>
  )
}

const Lista = ({ titulo = 'Sin elementos', subtitulo = '', elementos = [] }) => {

  const lisItems = elementos.map((elemento, index) => (
    <li key={index}>
      {elemento}
    </li>
  ))

  const lista = (
    <ol>
      {lisItems}
    </ol>
  )

  return (
    <div>
      <h5>
        {titulo}
      </h5>
      {
        !!subtitulo.length && (
          <h6><b>sub: </b>{subtitulo}</h6>
        )
      }
      {
        elementos.length === 0
        ? <i>no hay elementos</i>
        : lista
      }
    </div>
  )
}

const Pagina = ({ nroPag, children }) => {
  return (
    <fieldset>
      <legend>{nroPag}</legend>
      {children}
    </fieldset>
  )
}

export default Props

import React, { useState, useEffect } from 'react'

const Hooks = () => {
  const [inputVal, setInputVal] = useState('')
  const [frutas, setFrutas] = useState([])

  const handleInput = (e) => {
    const { value } = e.currentTarget
    setInputVal(value)
  }
  const addFruta = () => {
    setFrutas([...frutas, inputVal])
    setInputVal('')
  }
  useEffect(() => {
    console.log('COMPONENTE MONTADO')
  }, [frutas])
  return (
    <div>
      <h5>FRUTAS</h5>
      <input type="text" value={inputVal} onChange={handleInput} />
      <button onClick={addFruta} type="button">
        Agregar
      </button>
      <ol>
        {
          frutas.map((fruta, ind) => (
            <li key={ind}> {/* eslint-disable-line */}
              {fruta}
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default Hooks

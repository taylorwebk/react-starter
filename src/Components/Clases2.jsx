import React from 'react'

class Clase2 extends React.Component {
  constructor() {
    super()
    this.state = {
      inputVal: '',
      frutas: []
    }
  }

  handleInput = (e) => {
    const { value } = e.currentTarget
    this.setState({
      inputVal: value
    })
  }
  addFruta = () => {
    const { inputVal } = this.state
    this.setState(prevState => ({
      frutas: [...prevState.frutas, inputVal],
      inputVal: ''
    }))
  }

  render() {
    const { frutas, inputVal } = this.state
    return(
      <div>
        <h5>FRUTAS</h5>
        <input type="text" value={inputVal} onChange={this.handleInput} />
        <button onClick={this.addFruta}>
          Agregar
        </button>
        <ol>
          {
            frutas.map((fruta, ind) => (
              <li key={ind}>
                {fruta}
              </li>
            ))
          }
        </ol>
      </div>
    )
  }
}

export default Clase2

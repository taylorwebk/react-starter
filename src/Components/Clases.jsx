import React, { Component, Fragment } from 'react'

class Clases extends Component {
  render() {
    return(
      <Fragment>
        <h3>HOLA DESDE CLASES</h3>
        <Contador />
      </Fragment>
    )
  }
}

class Contador extends Component {
  constructor() {
    super()
    this.state = {
      cont: 0
    }
  }
  incrementar = () => {
    /*this.setState({
      cont: 10
    })*/
    this.setState(prevState => ({
      cont: prevState.cont + 1
    }))
  }
  render() {
    const { cont } = this.state
    return(
      <div>
        <button onClick={this.incrementar}>INC</button>
        <span>
          Valor del cont: {cont}
        </span>
        <button>DEC</button>
      </div>
    )
  }
}

export default Clases

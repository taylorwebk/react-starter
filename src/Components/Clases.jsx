import React, { Component, Fragment } from 'react'

class Clases extends Component {
  render() {
    return(
      <Fragment>
        <h3>HOLA DESDE CLASES</h3>
        <Contador max={10} min={0} />
        <Contador max={5} min={-5} />
        <Reloj />
        <Form />
        <Form />
      </Fragment>
    )
  }
}

// COMPONENTE QUE RECIBE MAX Y MIN, Y PUEDE VARIAR 
// SU VALOR ENTRE MAX Y MIN
class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cont: this.props.min
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
  decrementar = () => {
    this.setState(prevState => ({
      cont: prevState.cont - 1
    }))
  }
  handleCount = (valor) => () => {
    const { max, min } = this.props
    if (valor <= max && valor >= min) {
      this.setState({
        cont: valor
      })
    }
  }
  // git reset --hard
  // git pull
  render() {
    const { cont } = this.state
    return(
      <div>
        <button onClick={this.handleCount(cont + 1)}>INC</button>
        <span>
          Valor del cont: {cont}
        </span>
        <button onClick={this.handleCount(cont - 1)}>DEC</button>
      </div>
    )
  }
}
/**
 * componentWillMount()
 * componentDidMount()
 * componentWillUpdate()
 * componentDidUpdate()
 * componentShouldUpdate()
 * componentWillUnmount()
 * static getDerivedStateFromProps()
 */
class Reloj extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }
  updateDate = () => {
    this.setState({
      date: new Date()
    })
  }
  componentDidMount() {
    this.countInterval = setInterval(() => {
      this.updateDate()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.countInterval)
  }
  render() {
    const { date } = this.state
    const hora = date.getHours()
    const minutos = date.getMinutes()
    const segundos = date.getSeconds()
    return(
      <div>
        <p>LA HORA ACTUAL ES: </p>
        {`${hora}:${minutos}:${segundos}`}
      </div>
    )
  }
}

class Form extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  /*changeEmail = (e) => {
    const { value } = e.currentTarget
    this.setState({
      email: value
    })
  }*/
  handleChange = (name) => (e) => {
    const { value } = e.currentTarget
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    const { email, password } = this.state
    e.preventDefault()
    console.log({
      email, password
    })
  }
  render() {
    const { email, password } = this.state
    return (
      <div>
        <form>
          <input
            type="email"
            value={email}
            onChange={this.handleChange('email')}
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={this.handleChange('password')}
          /><br />
          <button onClick={this.handleSubmit} type="submit">
            ENVIAR
          </button>
        </form>
      </div>
    )
  }
}

export default Clases

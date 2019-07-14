import React, { useState, Fragment } from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import createStyles from './Pokemon.style'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

// NOMBRE, ALTURA, HABILIDADES[], IMAGENES, TIPO[], PESO
const Pokemon = () => {
  const classes = createStyles()
  const [val, setVal] = useState('')
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  const handleInput = (ev) => {
    const { value } = ev.target
    setVal(value)
  }

  const getPokemonData = async () => {
    setLoading(true)
    setPokemon(null)
    try {
      const resp = await axios.get(`${baseUrl}${val}`)
      setLoading(false)
      setError('')
      setPokemon(resp.data)
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  let content = null
  if (loading) {
    content = <Typography variant="h5">Cargando...</Typography>
  }
  if (error && !loading) {
    content = <Typography variant="h5" color="error">{error}</Typography>
  }
  if (!loading && !error) {
    console.log(pokemon)
    content = (
      pokemon
        ? (
          <Fragment>
            <Typography variant="h4">{pokemon.name}</Typography>
            <div className={classes.imgCont}>
              <img src={pokemon.sprites.front_default} />
              <img src={pokemon.sprites.back_default} />
              <img src={pokemon.sprites.front_shiny} />
            </div>
          </Fragment>
        )
        : <Typography variant="h5">Ingresa el nombre de un pokemon</Typography>
    )
  }

  return (
    <div className={classes.cont}>
      <Container maxWidth="lg">
        <Paper elevation={8} className={classes.cardCont}>
          <Typography variant="h3" className={classes.title}>
            POKEMON
          </Typography>
          <div className={classes.div}>
            <TextField
              value={val}
              onChange={handleInput}
              placeholder="Ingrese nombre de pokemon"
              className={classes.input}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={getPokemonData}
              disabled={loading}
            >
              Buscar
            </Button>
          </div>
          { content }
        </Paper>
      </Container>
    </div>
  )
}

export default Pokemon

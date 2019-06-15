import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import createStyles from './NewProductForm.styles'

const NewProductForm = ({ addProduct }) => {
  const classes = createStyles()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const handleInput = setter => (e) => {
    const { value } = e.target
    setter(value)
  }
  const handleCreate = () => {
    const newProduct = {
      name, description, price, cant: 0
    }
    addProduct(newProduct)
    setName('')
    setDescription('')
    setPrice(0)
  }
  return (
    <Card className={classes.cardCont} >
      <div className={classes.contentCont}>
        <Typography color="primary" variant="h6">
          NUEVO PRODUCTO:
        </Typography>
        <TextField placeholder="Nombre" value={name} onChange={handleInput(setName)} />
        <TextField placeholder="Desc" value={description} onChange={handleInput(setDescription)} />
        <TextField placeholder="Precio" value={price} onChange={handleInput(setPrice)} />
        <Button onClick={handleCreate}>GUARDAR</Button>
      </div>
    </Card>
  )
}
export default NewProductForm

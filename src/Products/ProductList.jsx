import React from 'react'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import createStyles from './ProductList.styles'
  
const ProductList = ({ products, deleteProduct, buyProduct }) => {
  const classes = createStyles()
  return (
    <div className={classes.contentCont}>
      <h4>Lista Productos</h4>
      { 
        products.length === 0
        ? <Typography>NO EXISTEN PRODUCTOS</Typography>
        : (
          products.map((product, index) => (
            <Card key={index} className={classes.cardCont}>
              <div className={classes.productCont}>
                <div className={classes.datos}>
                  <Typography variant="h6">
                    { product.name }
                  </Typography>
                  <Typography variant="body1">
                    { product.description }
                  </Typography>
                </div>
                <div className={classes.priceCont}>
                  <Typography variant="body2">
                    Precio:
                  </Typography>
                  <p className={classes.price}>{ product.price }</p>
                </div>
                <div className={classes.botones}>
                  <Button
                    onClick={buyProduct(index)}
                    variant="contained"
                    color="primary"
                  >
                    Comprar
                  </Button>
                  <Button
                    onClick={deleteProduct(index)}
                    variant="contained"
                    color="secondary"
                  >
                    ELIMINAR
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )
      }
    </div>
  )
}
export default ProductList

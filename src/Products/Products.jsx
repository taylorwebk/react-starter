import React, { useState } from 'react'

import NewProductForm from './NewProductForm'
import ProductList from './ProductList'
import PurchasedProductList from './PurchasedProductList'
import TotalPrice from './TotalPrice'

import makeStyles from './Products.styles'

const Products = () => {
  const classes = makeStyles()
  const [products, setProducts] = useState([])
  const addProduct = (product) => {
    setProducts([...products, product])
  }
  return (
    <div className={classes.mainCont}>
      <div className={classes.column}>
        <NewProductForm addProduct={addProduct} />
        <ProductList />
      </div>
      <div className={classes.column}>
        <PurchasedProductList />
        <TotalPrice />
      </div>
      <p>TOTAL PRODUCTOS: {products.length}</p>
    </div>
  )
}
export default Products

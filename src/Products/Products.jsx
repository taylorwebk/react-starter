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

  const deleteProduct = index => () => {
    setProducts(products.filter((p, i) => i !== index))
  }

  const buyProduct = i => () => {
    setProducts(products.map((product, index) => {
      if (index === i) {
        product.cant += 1 // eslint-disable-line
      }
      return product
    }))
  }

  const getPurchasedProducts = () => products.filter(product => product.cant > 0)


  return (
    <div className={classes.mainCont}>
      <div className={classes.column}>
        <NewProductForm addProduct={addProduct} />
        <ProductList products={products} deleteProduct={deleteProduct} buyProduct={buyProduct} />
      </div>
      <div className={classes.column}>
        <PurchasedProductList products={getPurchasedProducts()} />
        <TotalPrice />
      </div>
    </div>
  )
}
export default Products

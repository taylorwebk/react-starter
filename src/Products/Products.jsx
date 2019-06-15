import React, { useState } from 'react'
import NewProductForm from './NewProductForm'
import ProductList from './ProductList'
import PurchasedProductList from './PurchasedProductList'
import TotalPrice from './TotalPrice'

const Products = () => {
  const [products, setProducts] = useState([])
  return (
    <div>
      <div>
        <NewProductForm />
        <ProductList />
      </div>
      <div>
        <PurchasedProductList />
        <TotalPrice />
      </div>
    </div>
  )
}
export default Products

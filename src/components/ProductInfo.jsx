import React from 'react'

const ProductInfo = () => {
  const product = {
    name : "Laptop",
    price : 1200,
    availability : "in stock",
  }
    return (
    <div>
        {product["name"]} ${product["price"]} {product["availability"]}
    </div>
  )
}

export default ProductInfo
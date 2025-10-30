import React from 'react'

const ProductsList = () => {
    const products = [
        {id : 1, name : "Phone", price : "$699"},
        {id : 2, name : "Laptop", price : "$1200"},
        {id : 3, name : "Headphones", price : "$199"},
    ]
  return (
    <div>
        <h2>Products</h2>
        {products.map(({id, name, price}) => (
            <div key={id}>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductsList
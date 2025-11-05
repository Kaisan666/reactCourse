import React, { useState } from 'react'

const ShoppingList = () => {
    const [shoppingItems, setShoppingItems] = useState([
    ])

    const [shoppingItem, setShoppingItem] = useState({
        name : "",
        price : ""
    })

    const addItemToList = (e) => {
        e.preventDefault()
        setShoppingItems([...shoppingItems, shoppingItem])

        setShoppingItem({...setShoppingItem, name : "", price : ""})
    }
  return (
    <div>
        <h1>cart :</h1>
        {shoppingItems.length > 0 ? (shoppingItems.map(item => (
            <div key={Math.random()}>
            <p>name : {item.name}</p>
            <p> price : {item.price}</p>
            </div>
        ))) : (<p>ur cart is empty </p>)}



        <form>
            <h2>Add item to cart</h2>

        <input type="text" value={shoppingItem.name}  onChange={(e) => setShoppingItem({...shoppingItem, name : e.target.value})} name=""/>
        <input type="text" value={shoppingItem.price} onChange={(e) => setShoppingItem({...shoppingItem, price : e.target.value})}  name=""/>

        <button onClick={addItemToList}>add Item</button>
        </form>
    </div>
  )
}

export default ShoppingList
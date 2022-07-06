import React from 'react'
import ItemCount from '../../ItemCount'

const ItemListContainer = ({greeting, children}) => {

  const handleAdd = () => {
    console.log("Se añadió al carrito")
  };

  return (
    <div>
        {children}
        <p>{greeting}</p>
        <ItemCount handleAdd={handleAdd}/>  
    </div>
  )
}

export default ItemListContainer
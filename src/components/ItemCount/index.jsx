import React, {useState} from 'react'; 

const ItemCount = ({handleAdd, initialStock}) => {

    const [count, setCount] = useState(0)

    const onAdd = () => {
        setCount(count + 1);
    };

    const onDec = () => {
        setCount(count - 1);
    };

  return (
    <div>
        <p>{count}</p>
        <button onClick = {onAdd}>+</button>
        <button onClick = {onDec}>-</button>
        <button onClick = {handleAdd}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount
import React, {useEffect, useState} from 'react'

const ItemCount = () => {
    console.log('Aqui hay un render del componente contador');
    const [count, setCount] = useState(0)

    const addHandler = () => { 
        console.log('Se está sumando');
        setCount(count + 1) }

    const restHandler = () => { 
        console.log('Se está restando');
        setCount(count - 1) }


    return (
      <>
        <div>Contador</div>
        <button onClick={restHandler}> - </button>
        <strong> {count} </strong>
        <button onClick={addHandler}> + </button>
    </>
  )
}

export default ItemCount
import { useState } from "react"

const ItemCount = ({valorInicial, stock}) => {
    const [contador, setContador] = useState(valorInicial)

    const sumar = () => (contador < stock) && setContador (contador + 1)
    const restar = () => (contador > valorInicial) && setContador(contador - 1) 

  return (
    <>
        <button className="btn btn-primary" style={{margin: '10px'}} onClick={() => sumar()}>+</button>
            {contador}
        <button className="btn btn-primary" style={{margin: '10px'}} onClick={() => restar()}>-</button>

    </>
  )
}

export default ItemCount
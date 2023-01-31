import { SlBasket } from "react-icons/sl";

const CartWidget = ({cantCarrito}) => {
  return (
    <>
        <SlBasket style={{fontSize: '40px', color: 'black', marginInlineEnd: '20px'}}/>
        <p style={{color: 'black', fontSize: '20px', marginInlineEnd:'15px'}}>{cantCarrito}</p>
    </>
  )
}

export default CartWidget
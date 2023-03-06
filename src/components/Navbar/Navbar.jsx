import { Link } from "react-router-dom"

import CartWidget from "../CartWidget/CartWidget"
import Secciones from "./Secciones/Secciones"
import Categorias from "./Categorias/Categorias"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to={"/"}>Branca Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <Secciones/>
          <Categorias/>
        </ul>
      </div>
         
          <CartWidget cantCarrito={7}/>
    
    </div>
  </nav>
  )
}

export default Navbar
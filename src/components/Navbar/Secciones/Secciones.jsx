import { Link } from "react-router-dom"

const Secciones = () => {
  return (
    <>
        <li className="nav-item">
          <Link className="nav-link dropdown" to={"/"} ><button className="btn btn">Inicio</button></Link>   
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contacto"}><button className="btn btn">Contacto</button></Link>
        </li>
        
    </>
  )
}

export default Secciones
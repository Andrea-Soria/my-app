import { Link } from "react-router-dom"

const Categorias = () => {
  return (

         <li className="nav-item drowpdown">
            <a className="nav-link dropdown-toggle" href="some" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <button className="btn btn">Categorias</button>  
            </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/category/1"}>Comederos</Link></li>
                <li><Link className="dropdown-item" to={"/category/2"}>Correas </Link></li>
                <li><Link className="dropdown-item" to={"/category/3"}>Cuchas</Link></li>
              </ul>
          </li>
  )
}

export default Categorias
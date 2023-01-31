

const Categorias = () => {
  return (

         <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="some" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Servicios
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="some">Peluqueria</a></li>
              <li><a className="dropdown-item" href="some">Veterinaria</a></li>
              <li><a className="dropdown-item" href="some">Guarderia</a></li>
            </ul>
          </li>
  )
}

export default Categorias
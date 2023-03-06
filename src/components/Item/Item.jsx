import { Link } from "react-router-dom"

export const Item = ({item}) => {
  return (
    <div className="card mb-3 cardProducto border-light">
    <img src={`../img/${item.img}`} className="card-img-top" alt={"producto"} />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.description}</p>
      <p className="card text-primary mb-3"> $ {new Intl.NumberFormat ('de-DE').format (item.price)}</p>
      <button className="btn btn-primary"><Link className="nav-link" to={`/item/${item.id}`}>VER PRODUCT0</Link></button>
    </div>
  </div>

  )
}

